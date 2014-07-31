/*
 * Copyright (c) 2013 Berner Fachhochschule, Switzerland.
 * Bern University of Applied Sciences, Engineering and Information Technology,
 * Research Institute for Security in the Information Society, E-Voting Group,
 * Biel, Switzerland.
 *
 * Project UniVote.
 *
 * Distributable under GPL license.
 * See terms of license at gnu.org.
 */
package ch.bfh.unicert.subsystem;

import ch.bfh.unicert.subsystem.cryptography.CryptographicSetup;
import ch.bfh.unicert.subsystem.cryptography.DiscreteLogSetup;
import ch.bfh.unicert.subsystem.cryptography.RsaSetup;
import ch.bfh.unicert.subsystem.exceptions.CertificateCreationException;
import ch.bfh.unicert.subsystem.util.CertificateHelper;
import ch.bfh.unicert.subsystem.util.ConfigurationHelper;
import ch.bfh.unicert.subsystem.util.ConfigurationHelperImpl;
import ch.bfh.unicert.subsystem.util.ExtensionOID;
import ch.bfh.unicrypt.crypto.proofsystem.classes.PreimageProofSystem;
import ch.bfh.unicrypt.crypto.schemes.signature.classes.RSASignatureScheme;
import ch.bfh.unicrypt.helper.Alphabet;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringElement;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringMonoid;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.Z;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZMod;
import ch.bfh.unicrypt.math.algebra.general.classes.ProductGroup;
import ch.bfh.unicrypt.math.function.classes.GeneratorFunction;
import ch.bfh.unicrypt.math.function.interfaces.Function;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PublicKey;
import java.security.SignatureException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.security.interfaces.DSAPublicKey;
import java.security.interfaces.RSAPrivateCrtKey;
import java.security.interfaces.RSAPublicKey;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;
import java.util.Map.Entry;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Startup;
import javax.ejb.Stateless;
import org.bouncycastle.asn1.ASN1Encodable;
import org.bouncycastle.asn1.ASN1EncodableVector;
import org.bouncycastle.asn1.ASN1InputStream;
import org.bouncycastle.asn1.ASN1Sequence;
import org.bouncycastle.asn1.DERBitString;
import org.bouncycastle.asn1.DERBoolean;
import org.bouncycastle.asn1.DERInteger;
import org.bouncycastle.asn1.DERNull;
import org.bouncycastle.asn1.DERObjectIdentifier;
import org.bouncycastle.asn1.DEROctetString;
import org.bouncycastle.asn1.DEROutputStream;
import org.bouncycastle.asn1.DERSequence;
import org.bouncycastle.asn1.x509.AlgorithmIdentifier;
import org.bouncycastle.asn1.x509.DigestInfo;
import org.bouncycastle.asn1.x509.SubjectPublicKeyInfo;
import org.bouncycastle.asn1.x509.TBSCertificateStructure;
import org.bouncycastle.asn1.x509.Time;
import org.bouncycastle.asn1.x509.V3TBSCertificateGenerator;
import org.bouncycastle.asn1.x509.X509CertificateStructure;
import org.bouncycastle.asn1.x509.X509Extension;
import org.bouncycastle.asn1.x509.X509Extensions;
import org.bouncycastle.asn1.x509.X509Name;
import org.bouncycastle.asn1.x509.X509ObjectIdentifiers;
import org.bouncycastle.crypto.AsymmetricBlockCipher;
import org.bouncycastle.crypto.CipherParameters;
import org.bouncycastle.crypto.InvalidCipherTextException;
import org.bouncycastle.crypto.digests.SHA1Digest;
import org.bouncycastle.crypto.encodings.PKCS1Encoding;
import org.bouncycastle.crypto.engines.RSAEngine;
import org.bouncycastle.crypto.params.RSAPrivateCrtKeyParameters;
import org.bouncycastle.jce.PrincipalUtil;
import org.bouncycastle.jce.provider.X509CertificateObject;
import sun.security.provider.DSAPublicKeyImpl;
import sun.security.rsa.RSAPublicKeyImpl;

/**
 * Implements the registration service used by the registration proxy of the
 * voting client. Upon request constructs a certificate for the requestor and
 * returns it, together with the certificate of the registration service.
 * <p>
 * Further operations allow renew and to revoke a certificate. There is also an
 * operation to list all (currently: all non-revoked) certificates.
 * <p>
 * The current implementation of this class allows at most one, non-revoked
 * certificate per requestor.
 * <p>
 * Operations returning data use JAXP instances. This allows the receiving
 * client to easily convert received data into XML documents.
 * <p>
 * Privacy protection demands that the certificate of the requestor does not
 * contain the name of the requestor. Currently, the certificate contains:
 * <ul>
 * <li>CN=&lt;student number&gt;</li>
 * <li>OU=&lt;organization name&gt;</li>
 * <li>OU=&lt;study branch&gt;</li>
 * <li>UID=&lt;unique SWITCHaai user id&gt;</li>
 * <li>the public key of the requestor (a.k.a. the verification key)
 * </ul>
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 * @author Reto Koenig &lt;reto.koenig@bfh.ch&gt;
 */
@Stateless
@Startup
public class RegistrationBean implements Registration {

    private static final int MIN_RSA_SIZE = 1024;
    private static final int MIN_DLOG_SIZE = 1024;

    private static final Logger logger = Logger.getLogger(RegistrationBean.class.getName());

    @Override
    public Certificate createCertificate(CryptographicSetup cs, BigInteger publicKey, IdentityData idData, String applicationIdentifier, int role, BigInteger signature, String originalMessage)
            throws CertificateCreationException {

        PublicKey pk = null;
        Calendar expiry = getExpiryDate(getConfigurationHelper().getValidityYears());

        //Check if role is realistic
        if (role < 0) {
            throw new CertificateCreationException("Unknow role");
        }

        //Check validity of crypto setup
        if (cs instanceof RsaSetup) {
            RsaSetup setup = (RsaSetup) cs;
            if (setup.getN().bitLength() != setup.getSize()
                    || setup.getN().bitLength() < MIN_RSA_SIZE) {
                logger.log(Level.SEVERE, "Illegal cryptographic setup: minimal size not respected");
                throw new CertificateCreationException("Illegal cryptographic setup: minimal size not respected");
            }
            if (publicKey.bitLength() < MIN_RSA_SIZE) {
                logger.log(Level.SEVERE, "Illegal cryptographic setup: public key too short");
                throw new CertificateCreationException("Illegal cryptographic setup: public key too short");
            }

            //verify signature
            RSASignatureScheme rsa = new RSASignatureScheme();
            ZMod rsaGroup = ZMod.getInstance(setup.getN());
            StringElement message = StringMonoid.getInstance(Alphabet.UNARY).getElement(originalMessage);
            if (!rsa.verify(rsaGroup.getElement(publicKey), message, rsaGroup.getElement(signature)).getValue()) {
                logger.log(Level.SEVERE, "Signature invalid");
                throw new CertificateCreationException("Signature invalid");
            }

            pk = createRSAPublicKey(publicKey, setup.getN());

        } else if (cs instanceof DiscreteLogSetup) {
            DiscreteLogSetup setup = (DiscreteLogSetup) cs;
            if (setup.getP().getValue().bitLength() != setup.getSize()
                    || setup.getP().getValue().bitLength() < MIN_DLOG_SIZE
                    || !setup.getGenerator().isGenerator()) {
                logger.log(Level.SEVERE, "Illegal cryptographic setup: minimal size not respected");
                throw new CertificateCreationException("Illegal cryptographic setup: minimal size not respected");
            }

            //verify size of key
            if (publicKey.bitLength() < MIN_DLOG_SIZE) {
                logger.log(Level.SEVERE, "Illegal cryptographic setup: public key too short");
                throw new CertificateCreationException("Illegal cryptographic setup: public key too short");
            }

            StringElement message = StringMonoid.getInstance(Alphabet.BASE64).getElement(originalMessage);
            Function func = GeneratorFunction.getInstance(setup.getGenerator());
            PreimageProofSystem pips = PreimageProofSystem.getInstance(func, message);

            ProductGroup pg = ProductGroup.getInstance(setup.getG_q(), Z.getInstance(), setup.getZ_q());
            
            //verify proof
            if (!pips.verify(pg.getElementFrom(signature), setup.getG_q().getElement(publicKey))) {
                logger.log(Level.SEVERE, "Proof incorrect");
                throw new CertificateCreationException("Proof incorrect");
            }

            pk = createDSAPublicKey(publicKey, setup.getP().getValue(), setup.getZ_q().getOrder(), setup.getGenerator().getBigInteger());

        }

        Certificate cert = createClientCertificate(
                idData,
                getIssuerCertificate(),
                createIssuerCipherParams(getIssuerPrivateRSAKey()),
                pk,
                expiry,
                applicationIdentifier,
                role);
        
        //TODO post on UniBoard
        String section = "";
        String group = "";
        cert.toJSON();
        
        return cert;
        
    }

    /**
     * Creates the DSA public key of the requestor.
     *
     * @param publicKey the value for the public key
     * @return the DSA object representing the DSA public key
     * @throws RegistrationException if there is an error
     */
    private DSAPublicKey createDSAPublicKey(BigInteger publicKey, BigInteger p, BigInteger q, BigInteger g) throws CertificateCreationException {
        DSAPublicKey dpk;
        try {

            dpk = new DSAPublicKeyImpl(publicKey, p, q, g);
        } catch (InvalidKeyException ex) {
            logger.log(Level.SEVERE, "Could not instantiate DSA public key: {0}",
                    new Object[]{ex.getMessage()});
            throw new CertificateCreationException("Could not instantiate DSA public key");
        }
        return dpk;
    }

    private RSAPublicKey createRSAPublicKey(BigInteger publicKey, BigInteger n) throws CertificateCreationException {
        RSAPublicKey rpk;
        try {
            rpk = new RSAPublicKeyImpl(n, publicKey);
        } catch (InvalidKeyException ex) {
            logger.log(Level.SEVERE, "Could not instantiate RSA public key: {0}",
                    new Object[]{ex.getMessage()});
            throw new CertificateCreationException("Could not instantiate RSA public key");
        }
        return rpk;
    }

    /**
     * Returns the calendar representing the expiration date.
     *
     * @return a calendar
     */
    private Calendar getExpiryDate(int validityInYears) {
        Calendar expiry = Calendar.getInstance();
        expiry.add(Calendar.YEAR, validityInYears);
        return expiry;
    }

    /**
     * Retrieves and returns the certificate of the issuer.
     *
     * @return the issuer certificate
     * @throws RegistrationException if there is an error
     */
    private X509Certificate getIssuerCertificate() throws CertificateCreationException {
        return getConfigurationHelper().getIssuerCertificate();
    }

    /**
     * Retrieves the RSA private key from the configuration helper.
     *
     * @return RSA private key
     */
    private RSAPrivateCrtKey getIssuerPrivateRSAKey() {
        return getConfigurationHelper().getPrivateRSAKey();
    }

    /**
     * Given a private RSA key creates an object containing all relevant cipher
     * parameters.
     *
     * @param rsaPrivKey a RSA private key
     * @return the cipher parameters
     * @throws RegistrationException if there is an error
     */
    private RSAPrivateCrtKeyParameters createIssuerCipherParams(RSAPrivateCrtKey rsaPrivKey)
            throws CertificateCreationException {
        RSAPrivateCrtKeyParameters cipherParams;
        try {
            cipherParams
                    = new RSAPrivateCrtKeyParameters(rsaPrivKey.getModulus(), rsaPrivKey.getPublicExponent(),
                            rsaPrivKey.getPrivateExponent(), rsaPrivKey.getPrimeP(), rsaPrivKey.getPrimeQ(),
                            rsaPrivKey.getPrimeExponentP(), rsaPrivKey.getPrimeExponentQ(), rsaPrivKey.getCrtCoefficient());
        } catch (Exception ex) {
            logger.log(Level.SEVERE, "Could not get issuer cipher parameters: {0}",
                    new Object[]{ex.getMessage()});
            throw new CertificateCreationException("Could not get issuer cipher parameters");
        }
        return cipherParams;
    }

    /**
     * Actually creates the requestor certificate.
     *
     * @param voterId the identity of a (potential) voter, used to form the
     * value for CN
     * @param organisation the name of the university or university of applied
     * sciences, used to form the value O
     * @param studyBranch the identification of the study branch, used to form
     * the value for OU
     * @param uid a unique identifier for the subject
     * @param caCert issuer certificate
     * @param cipherParams issuer private key parameters used for signing
     * @param dpk the voter public key
     * @param expiry the expiry date
     * @return a certificate
     * @throws RegistrationException
     */
    private Certificate createClientCertificate(
            IdentityData id,
            X509Certificate caCert,
            CipherParameters cipherParams,
            PublicKey pk,
            Calendar expiry,
            String applicationIdentifier,
            int role)
            throws CertificateCreationException {

        X509Certificate clientCert;

        Hashtable extension = new Hashtable();

        extension.put(new DERObjectIdentifier(ExtensionOID.APPLICATION_IDENTIFIER.getOID()), new X509Extension(DERBoolean.TRUE, CertificateHelper.stringToDER(applicationIdentifier)));
        extension.put(new DERObjectIdentifier(ExtensionOID.ROLE.getOID()), new X509Extension(DERBoolean.TRUE, CertificateHelper.stringToDER(""+role)));
        extension.put(new DERObjectIdentifier(ExtensionOID.IDENTITY_PROVIDER.getOID()), new X509Extension(DERBoolean.TRUE, CertificateHelper.stringToDER(id.getIdentityProvider())));

        Map<String, String> extensionMap = new HashMap();
        if (id.getOtherValues() != null) {
            for (Entry<ExtensionOID, String> entry : id.getOtherValues().entrySet()) {
                extension.put(new DERObjectIdentifier(entry.getKey().getOID()), new X509Extension(DERBoolean.TRUE, CertificateHelper.stringToDER(entry.getValue())));
                extensionMap.put(entry.getKey().getName(), entry.getValue());
            }
        }

        try {

            String x509NameString = "";
            x509NameString += "CN=" + id.getCommonName();

            if (id.getSurname() != null && !id.getSurname().equals("")) {
                x509NameString += ", SN=" + id.getCommonName();
            }
            if (id.getGivenName() != null && !id.getGivenName().equals("")) {
                x509NameString += ", GN=" + id.getGivenName();
            }
            if (id.getUniqueIdentifier() != null && !id.getUniqueIdentifier().equals("")) {
                x509NameString += ", UID=" + id.getUniqueIdentifier();
            }
            if (id.getOrganisation() != null && !id.getOrganisation().equals("")) {
                x509NameString += ", O=" + id.getOrganisation();
            }
            if (id.getOrganisationUnit() != null && !id.getOrganisationUnit().equals("")) {
                x509NameString += ", OU=" + id.getOrganisationUnit();
            }
            if (id.getCountryName() != null && !id.getCountryName().equals("")) {
                x509NameString += ", C=" + id.getCountryName();
            }
            if (id.getState() != null && !id.getState().equals("")) {
                x509NameString += ", ST=" + id.getState();
            }
            if (id.getLocality() != null && !id.getLocality().equals("")) {
                x509NameString += ", L=" + id.getLocality();
            }

            X509Name x509Name = new X509Name(x509NameString);

            V3TBSCertificateGenerator certGen = new V3TBSCertificateGenerator();
            certGen.setSerialNumber(new DERInteger(BigInteger.valueOf(System.currentTimeMillis())));
            certGen.setIssuer(PrincipalUtil.getSubjectX509Principal(caCert));
            certGen.setSubject(x509Name);
            certGen.setExtensions(new X509Extensions(extension));
            DERObjectIdentifier sigOID = new DERObjectIdentifier("1.2.840.113549.1.1.5");
            AlgorithmIdentifier sigAlgId = new AlgorithmIdentifier(sigOID, new DERNull());
            certGen.setSignature(sigAlgId);
            certGen.setSubjectPublicKeyInfo(new SubjectPublicKeyInfo((ASN1Sequence) new ASN1InputStream(
                    new ByteArrayInputStream(pk.getEncoded())).readObject()));
            certGen.setStartDate(new Time(new Date(System.currentTimeMillis())));
            certGen.setEndDate(new Time(expiry.getTime()));
            TBSCertificateStructure tbsCert = certGen.generateTBSCertificate();

            //Sign certificate
            SHA1Digest digester = new SHA1Digest();
            AsymmetricBlockCipher rsa = new PKCS1Encoding(new RSAEngine());
            ByteArrayOutputStream bOut = new ByteArrayOutputStream();
            DEROutputStream dOut = new DEROutputStream(bOut);
            dOut.writeObject(tbsCert);
            byte[] signature;
            byte[] certBlock = bOut.toByteArray();
            // first create digest
            digester.update(certBlock, 0, certBlock.length);
            byte[] hash = new byte[digester.getDigestSize()];
            digester.doFinal(hash, 0);
            // then sign it
            rsa.init(true, cipherParams);
            DigestInfo dInfo = new DigestInfo(new AlgorithmIdentifier(X509ObjectIdentifiers.id_SHA1, null), hash);
            byte[] digest = dInfo.getEncoded(ASN1Encodable.DER);
            signature = rsa.processBlock(digest, 0, digest.length);

            ASN1EncodableVector v = new ASN1EncodableVector();
            v.add(tbsCert);
            v.add(sigAlgId);
            v.add(new DERBitString(signature));

            // Create CRT data structure
            clientCert = new X509CertificateObject(new X509CertificateStructure(new DERSequence(v)));
            clientCert.verify(caCert.getPublicKey());
        } catch (IOException | CertificateException | NoSuchAlgorithmException |
                InvalidKeyException | NoSuchProviderException | InvalidCipherTextException | SignatureException e) {
            logger.log(Level.SEVERE, "Could not create client certificate: {0}",
                    new Object[]{e.getMessage()});
            throw new CertificateCreationException("Could not create client certificate");
        }

        return new Certificate(clientCert, id.getCommonName(), id.getUniqueIdentifier(), id.getOrganisation(), id.getOrganisationUnit(), id.getCountryName(),
                id.getState(), id.getLocality(), id.getSurname(), id.getGivenName(), extensionMap);

    }

    /**
     * Returns a configuration helper. A subclass may override this method for
     * testing purposes.
     *
     * @return a configuration helper
     */
    protected ConfigurationHelper getConfigurationHelper() {
        return ConfigurationHelperImpl.getInstance();
    }

}
