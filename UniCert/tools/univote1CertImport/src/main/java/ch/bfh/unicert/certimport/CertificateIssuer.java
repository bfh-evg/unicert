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
package ch.bfh.unicert.certimport;

import ch.bfh.uniboard.clientlib.BoardErrorException;
import ch.bfh.uniboard.clientlib.PostException;
import ch.bfh.uniboard.clientlib.PostHelper;
import ch.bfh.unicrypt.helper.converter.classes.ConvertMethod;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.BigIntegerToByteArray;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.ByteArrayToByteArray;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.StringToByteArray;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.helper.hash.HashMethod;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.security.InvalidKeyException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PublicKey;
import java.security.SignatureException;
import java.security.UnrecoverableKeyException;
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
import org.bouncycastle.crypto.InvalidCipherTextException;
import org.bouncycastle.crypto.digests.SHA1Digest;
import org.bouncycastle.crypto.encodings.PKCS1Encoding;
import org.bouncycastle.crypto.engines.RSAEngine;
import org.bouncycastle.crypto.params.RSAPrivateCrtKeyParameters;
import org.bouncycastle.jce.PrincipalUtil;
import org.bouncycastle.jce.provider.X509CertificateObject;

/**
 * Implements the certificate issuence service used by the authentication component of the unicert webclient. Upon
 * request constructs a certificate for the requestor and returns it
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 * @author Reto Koenig &lt;reto.koenig@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class CertificateIssuer {

    private static final int MIN_RSA_SIZE = 1010;
    private static final int MIN_DLOG_SIZE = 1010;

    private static final String ATTRIBUTE_NAME_PUBLICKEY = "publickey";
    private static final String ATTRIBUTE_NAME_SIG = "signature";
    private static final String ATTRIBUTE_NAME_BOARD_SIG = "boardSignature";
    private static final String GROUPED = "group";
    private static final String SECTIONED = "section";

    protected static final HashMethod HASH_METHOD = HashMethod.getInstance(
	    HashAlgorithm.SHA256,
	    ConvertMethod.getInstance(
		    BigIntegerToByteArray.getInstance(ByteOrder.BIG_ENDIAN),
		    ByteArrayToByteArray.getInstance(false),
		    StringToByteArray.getInstance(Charset.forName("UTF-8"))),
	    HashMethod.Mode.RECURSIVE);

    private static final Logger logger = Logger.getLogger(CertificateIssuer.class.getName());
    private KeyStore caKs;
    private final String issuerId;
    private final String privKeyPass;
    private String boardId;

    public CertificateIssuer(String keyStorePath, String keyStorePass, String issuerId, String privKeyPass,
	    String boardId) {
	this.issuerId = issuerId;
	this.privKeyPass = privKeyPass;
	this.boardId = boardId;
	try {
	    this.loadKeyStore(keyStorePath, keyStorePass);
	} catch (KeyStoreException | IOException | NoSuchAlgorithmException | CertificateException ex) {
	    logger.log(Level.SEVERE, null, ex);
	}
    }

    
    public Certificate createClientCertificate(
	    IdentityData id,
	    String keyStorePath,
	    PublicKey pk,
	    int validity,
	    String applicationIdentifier,
	    String[] roles,
	    String uniBoardWsdlURL,
	    String uniBoardServiceURL,
	    String section)
	    throws CertificateCreationException {

	X509Certificate caCert;
	RSAPrivateCrtKey privKey;
	try {
	    caCert = this.readIssuerCertificate(this.issuerId);
	    privKey = this.readPrivateKey(this.issuerId, this.privKeyPass);
	} catch (KeyStoreException | NoSuchAlgorithmException | UnrecoverableKeyException ex) {
	    logger.log(Level.SEVERE, null, ex);
	    throw new CertificateCreationException("230 Could not create client certificate. Key error");
	}
	
	RSAPrivateCrtKeyParameters cipherParams = this.createIssuerCipherParams(privKey);

	X509Certificate clientCert;

	Hashtable extension = new Hashtable();

	extension.put(new DERObjectIdentifier(ExtensionOID.APPLICATION_IDENTIFIER.getOID()), new X509Extension(
		DERBoolean.FALSE, CertificateHelper.stringToDER(applicationIdentifier)));

	String completeRole = "";
	for (String role : roles) {
	    completeRole += role + ", ";
	}
	completeRole = completeRole.substring(0, completeRole.length() - 2);
	extension.put(new DERObjectIdentifier(ExtensionOID.ROLE.getOID()), new X509Extension(DERBoolean.FALSE,
		CertificateHelper.stringToDER(completeRole)));

	extension.put(new DERObjectIdentifier(ExtensionOID.IDENTITY_PROVIDER.getOID()), new X509Extension(
		DERBoolean.FALSE, CertificateHelper.stringToDER(id.getIdentityProvider())));

	Map<String, String> extensionMap = new HashMap();
	if (id.getOtherValues() != null) {
	    for (Entry<ExtensionOID, String> entry : id.getOtherValues().entrySet()) {
		extension.put(new DERObjectIdentifier(entry.getKey().getOID()), new X509Extension(DERBoolean.FALSE,
			CertificateHelper.stringToDER(entry.getValue())));
		extensionMap.put(entry.getKey().getName(), entry.getValue());
	    }
	}

	try {

	    String x509NameString = "";
	    x509NameString += "CN=" + id.getCommonName();

	    if (id.getSurname() != null && !id.getSurname().equals("")) {
		x509NameString += ", SURNAME=" + id.getSurname();
	    }
	    if (id.getGivenName() != null && !id.getGivenName().equals("")) {
		x509NameString += ", GIVENNAME=" + id.getGivenName();
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
	    certGen.setEndDate(new Time(getExpiryDate(validity).getTime()));
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
	} catch (IOException | InvalidCipherTextException | CertificateException | NoSuchAlgorithmException |
		InvalidKeyException | NoSuchProviderException | SignatureException e) {
	    logger.log(Level.SEVERE, "Could not create client certificate: {0}",
		    new Object[]{e.getMessage()});
	    throw new CertificateCreationException("230 Could not create client certificate");
	}

	Certificate cert = new Certificate(clientCert, id.getCommonName(), id.getUniqueIdentifier(), id.
		getOrganisation(), id.
		getOrganisationUnit(), id.getCountryName(),
		id.getState(), id.getLocality(), id.getSurname(), id.getGivenName(), applicationIdentifier, roles, id.
		getIdentityProvider(), extensionMap);

	//post message on UniBoard if corresponding JNDI parameter is defined
	postOnUniBoard(cert, uniBoardWsdlURL, uniBoardServiceURL, section, (RSAPublicKey) caCert.getPublicKey(),
		    privKey);
	
	return cert;

    }
    
    protected void postOnUniBoard(Certificate cert, String wsdlUrl, String endpointUrl, String section, RSAPublicKey publicKey,
	    RSAPrivateCrtKey privateKey) throws
	    CertificateCreationException {
	
	try {
	    X509Certificate boardCertificate = (X509Certificate) caKs.getCertificate(this.boardId);
	    DSAPublicKey pk = (DSAPublicKey) boardCertificate.getPublicKey();
	    PostHelper ph = new PostHelper(publicKey, privateKey, pk, wsdlUrl, endpointUrl);
	    ph.post(cert.toJSON().getBytes("UTF-8"), section, "certificate");
		
	 } catch (PostException | BoardErrorException |
		 UnsupportedEncodingException | KeyStoreException | ch.bfh.uniboard.clientlib.signaturehelper.SignatureException ex) {
	    logger.log(Level.SEVERE, "230 UniBoard rejected post: "+ ex.getMessage());
	    throw new CertificateCreationException("230 UniBoard rejected post: " + ex.getMessage());
	}
    }

    /**
     * Returns the calendar representing the expiration date. By default, 2 years after now is set
     *
     * @return a calendar
     */
    private Calendar getExpiryDate(Integer validityInYears) {
	//Default is 2
	if (validityInYears == null) {
	    validityInYears = 2;
	}
	Calendar expiry = Calendar.getInstance();
	expiry.add(Calendar.YEAR, validityInYears);
	return expiry;
    }

    /**
     * Given a private RSA key creates an object containing all relevant cipher parameters.
     *
     * @param rsaPrivKey a RSA private key
     * @return the cipher parameters
     * @throws CertificateCreationException if there is an error
     */
    private RSAPrivateCrtKeyParameters createIssuerCipherParams(RSAPrivateCrtKey rsaPrivKey)
	    throws CertificateCreationException {
	RSAPrivateCrtKeyParameters cipherParams;
	try {
	    cipherParams
		    = new RSAPrivateCrtKeyParameters(rsaPrivKey.getModulus(), rsaPrivKey.getPublicExponent(),
			    rsaPrivKey.getPrivateExponent(), rsaPrivKey.getPrimeP(), rsaPrivKey.getPrimeQ(),
			    rsaPrivKey.getPrimeExponentP(), rsaPrivKey.getPrimeExponentQ(), rsaPrivKey.
			    getCrtCoefficient());
	} catch (Exception ex) {
	    logger.log(Level.SEVERE, "Could not get issuer cipher parameters: {0}",
		    new Object[]{ex.getMessage()});
	    throw new CertificateCreationException("200 Could not get issuer cipher parameters");
	}
	return cipherParams;
    }

    private void loadKeyStore(String keyStorePath, String keyStorePass) throws KeyStoreException, FileNotFoundException,
	    IOException, NoSuchAlgorithmException, CertificateException {
	//Load keystore with private key for the manager
	caKs = KeyStore.getInstance(System.getProperty("javax.net.ssl.keyStoreType", "jks"));

	File file = new File(keyStorePath);
	InputStream in = new FileInputStream(file);

	caKs.load(in, keyStorePass.toCharArray());
    }

    private X509Certificate readIssuerCertificate(String issuerId) throws KeyStoreException {

	// retrieve certificate of CA / issuer component.
	return (X509Certificate) caKs.getCertificate(issuerId);
    }

    private RSAPrivateCrtKey readPrivateKey(String issuerId, String privateKeyPass) throws KeyStoreException,
	    NoSuchAlgorithmException, UnrecoverableKeyException {

	// load the private key entry of issuer from the keystore
	return (RSAPrivateCrtKey) caKs.getKey(issuerId, privateKeyPass.toCharArray());

    }

}
