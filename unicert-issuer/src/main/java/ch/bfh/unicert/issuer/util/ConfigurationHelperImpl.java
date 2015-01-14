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
package ch.bfh.unicert.issuer.util;

import ch.bfh.unicert.issuer.exceptions.CertificateCreationException;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.security.Key;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.security.interfaces.DSAPublicKey;
import java.security.interfaces.RSAPrivateCrtKey;
import java.security.interfaces.RSAPublicKey;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.NamingException;

/**
 * Loads configuration information from the property set 'unicertProps' defined in the user-defined global JNDI name
 * space. The properties
 * <em>must</em>
 * be defined externally, e.g., via the admin console of Glassfish.
 * <p>
 * A singleton.
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 * @author Severin Hauser &lt;severin.hauser@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class ConfigurationHelperImpl implements ConfigurationHelper {

    private static ConfigurationHelperImpl instance;

    private String issuerId;
    private X509Certificate certificate;
    private RSAPrivateCrtKey privateRSAKey;

    private Integer validityYears;

    private static final Logger logger = Logger.getLogger(ConfigurationHelperImpl.class.getName());
    private String uniboardURL;

    private String googleClientID;
    private String googleClientSecret;
    private String googleClientRedirectURI;
    private String uniboardSection;
    private X509Certificate boardCertificate;
    private String boardId;
    private SignatureHelper signatureHelper;
    private String wsdlURL;

    /**
     * Private constructor, used internally only.
     */
    private ConfigurationHelperImpl() {
    }

    /**
     * Returns the only instance of this class.
     *
     * @return the instance of this class
     */
    public static synchronized ConfigurationHelperImpl getInstance() {
	if (instance == null) {
	    instance = new ConfigurationHelperImpl();
	    try {
		instance.init();
	    } catch (CertificateCreationException ex) {
		logger.log(Level.SEVERE,
			"Could not initialize configuration helper for issuer component, exception: {0}",
			new Object[]{ex});
	    }
	}
	return instance;
    }

    /**
     * @inheritDoc
     */
    @Override
    public X509Certificate getIssuerCertificate() {
	return certificate;
    }

    /**
     * @inheritDoc
     */
    @Override
    public RSAPrivateCrtKey getPrivateRSAKey() {
	return privateRSAKey;
    }

    /**
     * @inheritDoc
     */
    @Override
    public Integer getValidityYears() {
	return validityYears;
    }

    /**
     * @inheritDoc
     */
    @Override
    public String getUniBoardServiceURL() {
	return uniboardURL;
    }

    /**
     * @inheritDoc
     */
    @Override
    public String getGoogleClientID() {
	return this.googleClientID;
    }

    /**
     * @inheritDoc
     */
    @Override
    public String getGoogleClientSecret() {
	return this.googleClientSecret;
    }

    /**
     * @inheritDoc
     */
    @Override
    public String getUniBoardSection() {
	return this.uniboardSection;
    }

    /**
     * @inheritDoc
     */
    @Override
    public String getGoogleRedirectURI() {
	return this.googleClientRedirectURI;
    }
    
    /**
     * @inheritDoc
     */
    @Override
    public String getUniBoardWsdlURL() {
	return this.wsdlURL;
    }

    @Override
    public X509Certificate getUniBoardCertificate() {
	return this.boardCertificate;
    }
    
    @Override
    public SignatureHelper getSignatureHelper() {
	return signatureHelper;
    }

    public void init() throws CertificateCreationException {
	Properties props;
	try {
	    javax.naming.InitialContext ic = new javax.naming.InitialContext();
	    props = (Properties) ic.lookup("unicertProps");

	} catch (NamingException ex) {
	    logger.log(Level.SEVERE, "JNDI lookup for 'unicertProps' failed. Exception: {0}",
		    new Object[]{ex});
	    throw new CertificateCreationException("200 Fail to load configuration");
	}
	//Load electionManager keystore properties
	Boolean isExternal = retrieveBooleanProperty(props, "keystoreExternal");
	String keyStorePath = retrieveStringProperty(props, "keystorePath");
	String keyStorePass = retrieveStringProperty(props, "keystorePass");
	String privateKeyPass = retrieveStringProperty(props, "privateKeyPass");

	//Load simple properties
	this.issuerId = retrieveStringProperty(props, "issuerId");
	this.boardId = retrieveStringProperty(props, "boardId");
	this.uniboardURL = retrieveStringProperty(props, "uniboardURL");
	this.wsdlURL = retrieveStringProperty(props, "uniboardWSDL");
	this.validityYears = retrieveIntegerProperty(props, "validityYears");

	this.googleClientID = retrieveStringProperty(props, "googleClientID");
	this.googleClientSecret = retrieveStringProperty(props, "googleClientSecret");
	this.googleClientRedirectURI = retrieveStringProperty(props, "googleRedirectURI");
	this.uniboardSection = retrieveStringProperty(props, "uniboardSection");

	//Load keystore with private key for the manager
	InputStream in;
	KeyStore caKs = null;
	try {
	    caKs = KeyStore.getInstance(System.getProperty(
		    "javax.net.ssl.keyStoreType", "jks"));
	} catch (KeyStoreException ex) {
	    logger.log(Level.SEVERE,
		    "Could not instantiate JKS key store. Exception: {0}", new Object[]{ex});
	    throw new CertificateCreationException("200 Failed to load keystore");
	}

	if (isExternal) {
	    try {
		File file = new File(keyStorePath);
		in = new FileInputStream(file);
	    } catch (FileNotFoundException ex) {
		logger.log(Level.SEVERE, "Could not find keystore file for {0}. Exception: {1}", new Object[]{
		    keyStorePath, ex});
		throw new CertificateCreationException("200 Failed to load keystore");
	    }
	} else {

	    try {
		in = ConfigurationHelperImpl.class.getResourceAsStream("/" + keyStorePath);
		logger.log(Level.INFO, "Looking for keystore at /" + keyStorePath);
	    } catch (RuntimeException ex) {
		logger.log(Level.SEVERE,
			"Could not find keystore file for {0}. Exception: {1}",
			new Object[]{keyStorePath, ex});
		throw new CertificateCreationException("200 Failed to load keystore");
	    }
	}

	if (in == null) {
	    logger.log(Level.SEVERE,
		    "Cannot load JKS key store, got null for InputStream.");
	    throw new CertificateCreationException("200 Failed to load keystore");
	}
	try {
	    caKs.load(in, keyStorePass.toCharArray());
	} catch (IOException | NoSuchAlgorithmException | CertificateException ex) {
	    logger.log(Level.SEVERE,
		    "Could not load JKS key store {0}. Exception: {1}",
		    new Object[]{keyStorePath, ex});
	    throw new CertificateCreationException("200 Failed to load keystore");
	}

	// retrieve certificate of CA / issuer component.
	try {
	    this.certificate = (X509Certificate) caKs.getCertificate(issuerId);
	} catch (KeyStoreException ex) {
	    logger.log(Level.SEVERE,
		    "Could not retrieve CA certificate from key store {0}. Exception: {1}",
		    new Object[]{keyStorePath, ex});
	    throw new CertificateCreationException("200 Failed to load keystore");
	}

	// retrieve certificate of the board
	try {
	    this.boardCertificate = (X509Certificate) caKs.getCertificate(boardId);
	    PublicKey pk = this.boardCertificate.getPublicKey();
	    String algo = pk.getAlgorithm();
	    if (algo.equals("RSA")) {
		try {
		    RSAPublicKey rsaPubKey = (RSAPublicKey) pk;
		    this.signatureHelper = new RSASignatureHelper(rsaPubKey);
		} catch (RuntimeException ex) {
		}
	    } else if (algo.equals("DSA")) {
		try {
		    DSAPublicKey dsaPubKey = (DSAPublicKey) pk;
		    this.signatureHelper = new SchnorrSignatureHelper(dsaPubKey);
		} catch (RuntimeException ex) {
		}
	    } else if (algo.equals("EC")) {
		try {
		    //TODO
		} catch (RuntimeException ex) {
		}
	    }
	} catch (KeyStoreException | NullPointerException ex) {
	    logger.log(Level.SEVERE,
		    "Could not retrieve UniBoard certificate from key store {0}. Exception: {1}",
		    new Object[]{keyStorePath, ex});
	    throw new CertificateCreationException("200 Failed to load keystore");
	}

	// load the private key entry of issuer from the keystore
	Key key = null;
	try {
	    key = caKs.getKey(this.issuerId, privateKeyPass.toCharArray());
	} catch (KeyStoreException | NoSuchAlgorithmException | UnrecoverableKeyException ex) {
	    logger.log(Level.SEVERE,
		    "Could not get key store entry for {0}. Exception: {1}",
		    new Object[]{issuerId, ex});
	    throw new CertificateCreationException("200 Failed to load keystore entry");
	}

	if (key == null) {
	    logger.log(Level.SEVERE,
		    "Loading of the private key for election manager failed.");
	    throw new CertificateCreationException("200 Failed to load keystore entry");
	}
	try {
	    this.privateRSAKey = (RSAPrivateCrtKey) key;
	} catch (RuntimeException ex) {
	    logger.log(Level.SEVERE,
		    "Could not retrieve RSA values. Exception: {0}.", new Object[]{ex});
	    throw new CertificateCreationException("200 Failed to load keystore entry");
	}

    }

    /**
     * Given the Properties object, retrieves the value for the specified property name. Logs success (INFO) or failure
     * (SEVERE).
     *
     * @param props the Properties object
     * @param propertyName the name of the property
     * @return the value of the property
     */
    private String retrieveStringProperty(Properties props, String propertyName) {
	String propertyValue = props.getProperty(propertyName);
	if (propertyValue == null) {
	    logger.log(Level.WARNING,
		    "Could not retrieve global JNDI property: {0}.", new Object[]{propertyName});
	} else {
	    logger.log(Level.INFO,
		    "Retrieved global JNDI property: {0}.", new Object[]{propertyName});
	}
	return propertyValue;
    }

    /**
     * Given the Properties object, retrieves the value for the specified property name. Logs success (INFO) or failure
     * (SEVERE).
     *
     * @param props the Properties object
     * @param propertyName the name of the property
     * @return the value of the property
     */
    private Integer retrieveIntegerProperty(Properties props, String propertyName) {
	String propertyValue = props.getProperty(propertyName);
	if (propertyValue == null) {
	    logger.log(Level.WARNING,
		    "Could not retrieve global JNDI property: {0}.", new Object[]{propertyName});
	} else {
	    logger.log(Level.INFO,
		    "Retrieved global JNDI property: {0}.", new Object[]{propertyName});
	}
	return Integer.parseInt(propertyValue);
    }

    /**
     * Given the Properties object, retrieves the value for the specified property name. Logs success (INFO) or failure
     * (SEVERE).
     *
     * @param props the Properties object
     * @param propertyName the name of the property
     * @return the value of the property
     */
    private Boolean retrieveBooleanProperty(Properties props, String propertyName) {
	String propertyValue = props.getProperty(propertyName);
	if (propertyValue == null) {
	    logger.log(Level.SEVERE,
		    "Could not retrieve global JNDI property: {0}.", new Object[]{propertyName});
	} else {
	    logger.log(Level.INFO,
		    "Retrieved global JNDI property: {0}.", new Object[]{propertyName});
	}
	return Boolean.valueOf(propertyValue);
    }

    

}
