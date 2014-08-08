/*
 * Copyright (c) 2014 Berner Fachhochschule, Switzerland.
 * Bern University of Applied Sciences, Engineering and Information Technology,
 * Research Institute for Security in the Information Society, E-Voting Group,
 * Biel, Switzerland.
 *
 * Project UniCert.
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
import ch.bfh.unicrypt.helper.Alphabet;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringElement;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringMonoid;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.Z;
import ch.bfh.unicrypt.math.algebra.general.classes.Triple;
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
import javax.ejb.Remote;
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
 * unicert client. Upon request constructs a certificate for the requestor and
 * returns it
 * 
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 * @author Reto Koenig &lt;reto.koenig@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@Stateless
@Startup
public class RegistrationBean implements Registration {

    private static final int MIN_RSA_SIZE = 1020;
    private static final int MIN_DLOG_SIZE = 1020;

    private static final Logger logger = Logger.getLogger(RegistrationBean.class.getName());

    @Override
    public Certificate createCertificate(CryptographicSetup cs, IdentityData idData, String applicationIdentifier, int role)
            throws CertificateCreationException {

        PublicKey pk = null;

        //Check if role is realistic
        if (role < 0) {
            throw new CertificateCreationException("200 Unknow role");
        }

        //Check validity of crypto setup
        if (cs instanceof RsaSetup) {
            RsaSetup setup = (RsaSetup) cs;
            if (setup.getN().bitLength() < (setup.getSize()-(setup.getSize()*5/1000))
                    || setup.getN().bitLength() < MIN_RSA_SIZE) {
                logger.log(Level.SEVERE, "Illegal cryptographic setup: minimal size not respected");
                throw new CertificateCreationException("221 Illegal cryptographic setup: minimal size not respected. N was "
                        +setup.getN().bitLength()+" long, but " +(setup.getSize()-(setup.getSize()*5/1000))
                        +" or "+ MIN_RSA_SIZE+"is required.");
            }

            //verify signature
            //TODO not implemented in UniCrypt
//            RSASignatureScheme rsa = RSASignatureScheme.getInstance(setup.);
//            ZMod rsaGroup = ZMod.getInstance(setup.getN());
//            StringElement message = StringMonoid.getInstance(Alphabet.UNARY).getElement(originalMessage);
//            if (!rsa.verify(rsaGroup.getElement(publicKey), message, rsaGroup.getElement(signature)).getValue()) {
//                logger.log(Level.SEVERE, "Signature invalid");
//                throw new CertificateCreationException("222 Signature invalid");
//            }

            pk = createRSAPublicKey(setup.getPublicKey(), setup.getN());

        } else if (cs instanceof DiscreteLogSetup) {
            DiscreteLogSetup setup = (DiscreteLogSetup) cs;
            if (setup.getP().getValue().bitLength() < (setup.getSize()-(setup.getSize()*5/1000))
                    || setup.getP().getValue().bitLength() < MIN_DLOG_SIZE
                    || !setup.getGenerator().isGenerator()) {
                logger.log(Level.SEVERE, "Illegal cryptographic setup: minimal size not respected");
                throw new CertificateCreationException("221 Illegal cryptographic setup: minimal size not respected");
            }

            
            StringElement message = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII).getElement(setup.getProofOtherInput());
            Function func = GeneratorFunction.getInstance(setup.getGenerator());
            PreimageProofSystem pips = PreimageProofSystem.getInstance(func, message);
            
            //verify proof
            //TODO make compatible proof
            Triple proof = Triple.getInstance(setup.getG_q().getElement(setup.getProofCommitment()), Z.getInstance().getElementFrom(setup.getProofChallenge()), setup.getZ_q().getElementFrom(setup.getProofResponse()));
//            if (!pips.verify(proof, setup.getPublicKey())) {
//                logger.log(Level.SEVERE, "Proof incorrect");
//                throw new CertificateCreationException("223 Proof incorrect");
//            }

            pk = createDSAPublicKey(setup.getPublicKey().getBigInteger(), setup.getP().getValue(), setup.getZ_q().getOrder(), setup.getGenerator().getBigInteger());

        }
        
        Calendar expiry = getExpiryDate(getConfigurationHelper().getValidityYears());
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
            throw new CertificateCreationException("224 Could not instantiate DSA public key");
        }
        return dpk;
    }

    /**
     * Creates an RSA public key of the requestor
     * @param publicKey the value of the public key
     * @param n the modulus
     * @return the object representing an RSA public key
     * @throws CertificateCreationException  if there is an error
     */
    private RSAPublicKey createRSAPublicKey(BigInteger publicKey, BigInteger n) throws CertificateCreationException {
        RSAPublicKey rpk;
        try {
            rpk = new RSAPublicKeyImpl(n, publicKey);
        } catch (InvalidKeyException ex) {
            logger.log(Level.SEVERE, "Could not instantiate RSA public key: {0}",
                    new Object[]{ex.getMessage()});
            throw new CertificateCreationException("224 Could not instantiate RSA public key");
        }
        return rpk;
    }

    /**
     * Returns the calendar representing the expiration date.
     * By default, 2 years after now is set
     * @return a calendar
     */
    private Calendar getExpiryDate(Integer validityInYears) {
        //Default is 2
        if(validityInYears==null) validityInYears=2;
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
            throw new CertificateCreationException("200 Could not get issuer cipher parameters");
        }
        return cipherParams;
    }

    /**
     * Actually creates the requestor certificate.
     * @param id requestor identity data
     * @param caCert certificate of the certification authority
     * @param cipherParams issuer private key parameters used for signing
     * @param pk public key of the requestor to certify
     * @param expiry the expiry date
     * @param applicationIdentifier the application identifier for which te certificate is issued 
     * @param role role for which the certificate is issued
     * @return the certificate object containing the X509 certificate
     * @throws CertificateCreationException if an error occurs
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

        extension.put(new DERObjectIdentifier(ExtensionOID.APPLICATION_IDENTIFIER.getOID()), new X509Extension(DERBoolean.FALSE, CertificateHelper.stringToDER(applicationIdentifier)));
        extension.put(new DERObjectIdentifier(ExtensionOID.ROLE.getOID()), new X509Extension(DERBoolean.FALSE, CertificateHelper.stringToDER(""+role)));
        extension.put(new DERObjectIdentifier(ExtensionOID.IDENTITY_PROVIDER.getOID()), new X509Extension(DERBoolean.FALSE, CertificateHelper.stringToDER(id.getIdentityProvider())));

        Map<String, String> extensionMap = new HashMap();
        if (id.getOtherValues() != null) {
            for (Entry<ExtensionOID, String> entry : id.getOtherValues().entrySet()) {
                extension.put(new DERObjectIdentifier(entry.getKey().getOID()), new X509Extension(DERBoolean.FALSE, CertificateHelper.stringToDER(entry.getValue())));
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
            throw new CertificateCreationException("230 Could not create client certificate");
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