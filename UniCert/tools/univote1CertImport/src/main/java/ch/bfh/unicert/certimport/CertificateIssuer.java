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

import ch.bfh.uniboard.UniBoardService;
import ch.bfh.uniboard.UniBoardService_Service;
import ch.bfh.uniboard.data.AttributesDTO;
import ch.bfh.uniboard.data.TransformException;
import ch.bfh.uniboard.data.Transformer;
import ch.bfh.uniboard.service.Attributes;
import ch.bfh.uniboard.service.ByteArrayValue;
import ch.bfh.uniboard.service.DateValue;
import ch.bfh.uniboard.service.IntegerValue;
import ch.bfh.uniboard.service.StringValue;
import ch.bfh.uniboard.service.Value;

import ch.bfh.unicrypt.crypto.schemes.signature.classes.RSASignatureScheme;
import ch.bfh.unicrypt.helper.Alphabet;
import ch.bfh.unicrypt.helper.MathUtil;
import ch.bfh.unicrypt.helper.array.classes.DenseArray;
import ch.bfh.unicrypt.helper.converter.classes.ConvertMethod;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.BigIntegerToByteArray;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.ByteArrayToByteArray;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.StringToByteArray;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.helper.hash.HashMethod;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.ByteArrayMonoid;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringMonoid;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.Z;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZMod;
import ch.bfh.unicrypt.math.algebra.general.classes.Pair;
import ch.bfh.unicrypt.math.algebra.general.classes.Tuple;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Element;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.net.URL;
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
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TimeZone;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.namespace.QName;
import javax.xml.ws.BindingProvider;
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
import sun.security.provider.DSAPublicKeyImpl;
import sun.security.rsa.RSAPublicKeyImpl;

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
	} catch (IOException | CertificateException | NoSuchAlgorithmException |
		InvalidKeyException | NoSuchProviderException | InvalidCipherTextException | SignatureException e) {
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

    /**
     * Helper method managing the publication of certificate on a UniBoard instance
     *
     * @param cert the certificate to publish
     * @param endpointUrl the url to access UniBoard
     * @param section the section on UniBoard where the post must be published
     * @param publicKey the public key that must be sent with the post
     * @param privateKey the private key used to create post signature
     * @throws CertificateCreationException if an error occured during publication
     */
    protected void postOnUniBoard(Certificate cert, String wsdlUrl, String endpointUrl, String section,
	    RSAPublicKey publicKey,
	    RSAPrivateCrtKey privateKey) throws
	    CertificateCreationException {

	UniBoardService board;
	try {
	    URL wsdlLocation = new URL(wsdlUrl);
	    QName qname = new QName("http://uniboard.bfh.ch/", "UniBoardService");
	    UniBoardService_Service mixingService = new UniBoardService_Service(wsdlLocation, qname);
	    board = mixingService.getUniBoardServicePort();
	    BindingProvider bp = (BindingProvider) board;
	    bp.getRequestContext().put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY, endpointUrl);
	} catch (Exception ex) {
	    logger.log(Level.SEVERE, "Unable to connect to UniBoard  service: {0}, exception: {1}", new Object[]{
		endpointUrl, ex});
	    throw new CertificateCreationException("230 Unable to connect to UniBoard to publish certificate");
	}

	byte[] message = cert.toJSON().getBytes();
	Attributes alpha = new Attributes();
	alpha.add(SECTIONED, new StringValue(section));
	alpha.add(GROUPED, new StringValue("certificate"));

	Element element = createMessageElement(message, alpha);
	ZMod n = ZMod.getInstance(publicKey.getModulus());
	RSASignatureScheme rsa = RSASignatureScheme.getInstance(element.getSet(), n, HASH_METHOD);
	Element rsaPrivateKeyElement = rsa.getSignatureKeySpace().getElement(privateKey.getPrivateExponent());
	Element signature = rsa.sign(rsaPrivateKeyElement, element);

	alpha.add(ATTRIBUTE_NAME_SIG, new StringValue(signature.getBigInteger().toString(10)));
	BigInteger pair = MathUtil.pair(publicKey.getPublicExponent(), publicKey.getModulus());
	alpha.add(ATTRIBUTE_NAME_PUBLICKEY, new StringValue(pair.toString(10)));

	AttributesDTO alphaDTO;
	Attributes beta;
	try {
	    alphaDTO = Transformer.convertAttributesToDTO(alpha);
	    beta = Transformer.convertAttributesDTOtoAttributes(board.post(message, alphaDTO));
	} catch (TransformException ex) {
	    logger.log(Level.SEVERE, "DTO conversion error: {1}", new Object[]{ex});
	    throw new CertificateCreationException("230 UniBoard rejected post");
	}

	if (beta.getKeys().contains("rejected") || beta.getKeys().contains("error")) {
	    String errorKey = beta.getEntries().iterator().next().getKey();
	    String error = (String) beta.getValue(errorKey).getValue();
	    logger.log(Level.SEVERE, "Error on posting: UniBoard response was {0}, description: {1}", new Object[]{
		errorKey, error});
	    throw new CertificateCreationException("230 UniBoard rejected post: " + error);
	} else {
	    try {
		String boardSig = ((StringValue) beta.getValue("boardSignature")).getValue();
		Element postElement = createMessageElement(message, alpha, beta);

		//Verify signature
		if (!getSignatureHelper(this.boardId).verify(postElement, new BigInteger(boardSig, 10))) {
		    throw new CertificateCreationException("230 UniBoard rejected post: Board signature is corrupt.");
		}
	    } catch (KeyStoreException ex) {
		throw new CertificateCreationException("230 UniBoard rejected post: " + ex.getMessage());
	    }
	}

    }

    protected Element createMessageElement(byte[] message, Attributes alpha) {
	StringMonoid stringSpace = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII);
	Z z = Z.getInstance();
	ByteArrayMonoid byteSpace = ByteArrayMonoid.getInstance();
	Element messageElement = byteSpace.getElement(message);
	List<Element> alphaElements = new ArrayList<>();
	//iterate over alpha until one reaches the property = signature
	for (Map.Entry<String, Value> e : alpha.getEntries()) {
	    if (e.getKey().equals(ATTRIBUTE_NAME_SIG)) {
		break;
	    }
	    Element tmp;
	    if (e.getValue() instanceof ByteArrayValue) {
		tmp = byteSpace.getElement(((ByteArrayValue) e.getValue()).getValue());
		alphaElements.add(tmp);
	    } else if (e.getValue() instanceof DateValue) {
		TimeZone timeZone = TimeZone.getTimeZone("UTC");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
		dateFormat.setTimeZone(timeZone);
		String stringDate = dateFormat.format(((DateValue) e.getValue()).getValue());
		tmp = stringSpace.getElement(stringDate);
		alphaElements.add(tmp);
	    } else if (e.getValue() instanceof IntegerValue) {
		tmp = z.getElement(((IntegerValue) e.getValue()).getValue());
		alphaElements.add(tmp);
	    } else if (e.getValue() instanceof StringValue) {
		tmp = stringSpace.getElement(((StringValue) e.getValue()).getValue());
		alphaElements.add(tmp);
	    } else {
		logger.log(Level.SEVERE, "Unsupported Value type.");
	    }
	}
	DenseArray immuElements = DenseArray.getInstance(alphaElements);
	Element alphaElement = Tuple.getInstance(immuElements);
	return Pair.getInstance(messageElement, alphaElement);
    }

    protected Element createMessageElement(byte[] message, Attributes alpha, Attributes beta) {
	ByteArrayMonoid byteSpace = ByteArrayMonoid.getInstance();
	Element messageElement = byteSpace.getElement(message);
	List<Element> alphaElements = new ArrayList<>();
	for (Map.Entry<String, Value> e : alpha.getEntries()) {
	    Element element = this.createValueElement(e.getValue());
	    if (element != null) {
		alphaElements.add(element);
	    }
	}
	DenseArray alphaDenseElements = DenseArray.getInstance(alphaElements);
	Element alphaElement = Tuple.getInstance(alphaDenseElements);
	List<Element> betaElements = new ArrayList<>();
	for (Map.Entry<String, Value> e : beta.getEntries()) {
	    if (e.getKey().equals(ATTRIBUTE_NAME_BOARD_SIG)) {
		break;
	    }
	    Element element = this.createValueElement(e.getValue());
	    if (element != null) {
		betaElements.add(element);
	    }
	}
	DenseArray beteDenseElements = DenseArray.getInstance(betaElements);
	Element betaElement = Tuple.getInstance(beteDenseElements);
	return Tuple.getInstance(messageElement, alphaElement, betaElement);
    }

    protected Element createValueElement(Value value) {
	StringMonoid stringSpace = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII);
	Z z = Z.getInstance();
	ByteArrayMonoid byteSpace = ByteArrayMonoid.getInstance();
	if (value instanceof ByteArrayValue) {
	    return byteSpace.getElement(((ByteArrayValue) value).getValue());
	} else if (value instanceof DateValue) {
	    TimeZone timeZone = TimeZone.getTimeZone("UTC");
	    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
	    dateFormat.setTimeZone(timeZone);
	    String stringDate = dateFormat.format(((DateValue) value).getValue());
	    return stringSpace.getElement(stringDate);
	} else if (value instanceof IntegerValue) {
	    return z.getElement(((IntegerValue) value).getValue());
	} else if (value instanceof StringValue) {
	    return stringSpace.getElement(((StringValue) value).getValue());
	} else {
	    logger.log(Level.SEVERE, "Unsupported Value type.");
	    return null;
	}
    }

    /**
     * Creates the DSA public key of the requestor.
     *
     * @param publicKey the value for the public key
     * @return the DSA object representing the DSA public key
     * @throws CertificateCreationException if there is an error
     */
    private DSAPublicKey createDSAPublicKey(BigInteger publicKey, BigInteger p, BigInteger q, BigInteger g) throws
	    CertificateCreationException {
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
     *
     * @param publicKey the value of the public key
     * @param n the modulus
     * @return the object representing an RSA public key
     * @throws CertificateCreationException if there is an error
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

    private SchnorrSignatureHelper getSignatureHelper(String boardId) throws KeyStoreException {
	// retrieve certificate of the board
	X509Certificate boardCertificate = (X509Certificate) caKs.getCertificate(boardId);
	DSAPublicKey pk = (DSAPublicKey) boardCertificate.getPublicKey();

	return new SchnorrSignatureHelper(pk);

    }

}
