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
package ch.bfh.unicert.webclient.util;

import ch.bfh.unicert.subsystem.exceptions.CertificateCreationException;
import java.io.IOException;
import java.io.InputStream;
import java.security.Key;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.security.interfaces.RSAPrivateCrtKey;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.NamingException;

/**
 * Loads configuration information from the property set 'electionManagerProps'
 * defined in the user-defined global JNDI name space. The properties
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


    private static final Logger logger = Logger.getLogger(ConfigurationHelperImpl.class.getName());
    private String keyType;
    private String keySize;
    private String p;
    private String q;
    private String g;
    private String identityProvider;
    private String applicationIdentifier;
    private int role;
    private int identityFunctionIndex;

    
    public ConfigurationHelperImpl(String propertiesSetName) throws ParametersNotFoundException {
                    this.init(propertiesSetName);

    }

    private void init(String propertiesSetName) throws ParametersNotFoundException {
        Properties props;
        try {
            javax.naming.InitialContext ic = new javax.naming.InitialContext();
            props = (Properties) ic.lookup(propertiesSetName);

        } catch (NamingException ex) {
            logger.log(Level.SEVERE, "JNDI lookup for 'registrationProps' failed. Exception: {0}",
                    new Object[]{ex});
            throw new ParametersNotFoundException("Fail to load configuration");
        }

        //Load UniCert application dependant properties
        this.keyType = retrieveStringProperty(props, "keyType");
        this.keySize = retrieveStringProperty(props, "keySize");

        this.p = retrieveStringProperty(props, "primeP");
        this.q = retrieveStringProperty(props, "primeQ");
        this.g = retrieveStringProperty(props, "generator");

        this.identityProvider = retrieveStringProperty(props, "identityProvider");
        this.applicationIdentifier = retrieveStringProperty(props, "applicationIdentifier");

        this.role = retrieveIntegerProperty(props, "role");
        this.identityFunctionIndex = retrieveIntegerProperty(props, "identityFunctionIndex");

    }

    /**
     * Given the Properties object, retrieves the value for the specified
     * property name. Logs success (INFO) or failure (SEVERE).
     *
     * @param props the Properties object
     * @param propertyName the name of the property
     * @return the value of the property
     */
    private String retrieveStringProperty(Properties props, String propertyName) {
        String propertyValue = props.getProperty(propertyName);
        if (propertyValue == null) {
            logger.log(Level.SEVERE,
                    "Could not retrieve global JNDI property: {0}.", new Object[]{propertyName});
        } else {
            logger.log(Level.INFO,
                    "Retrieved global JNDI property: {0}.", new Object[]{propertyName});
        }
        return propertyValue;
    }

    /**
     * Given the Properties object, retrieves the value for the specified
     * property name. Logs success (INFO) or failure (SEVERE).
     *
     * @param props the Properties object
     * @param propertyName the name of the property
     * @return the value of the property
     */
    private Integer retrieveIntegerProperty(Properties props, String propertyName) {
        String propertyValue = props.getProperty(propertyName);
        if (propertyValue == null) {
            logger.log(Level.SEVERE,
                    "Could not retrieve global JNDI property: {0}.", new Object[]{propertyName});
        } else {
            logger.log(Level.INFO,
                    "Retrieved global JNDI property: {0}.", new Object[]{propertyName});
        }
        return Integer.parseInt(propertyValue);
    }

    /**
     * Given the Properties object, retrieves the value for the specified
     * property name. Logs success (INFO) or failure (SEVERE).
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

    @Override
    public String getKeyType() {
        return this.keyType;
    }

    @Override
    public String getKeySize() {
        return this.keySize;
    }

    @Override
    public String getPrimeP() {
        return this.p;
    }

    @Override
    public String getPrimeQ() {
        return this.q;
    }

    @Override
    public String getGenerator() {
        return this.g;
    }

    @Override
    public String getIdentityProvider() {
        return this.identityProvider;
    }

    @Override
    public String getApplicationIdentifier() {
        return this.applicationIdentifier;
    }

    @Override
    public int getRole() {
        return this.role;
    }

    @Override
    public int getIdentityFunctionIndex() {
        return this.identityFunctionIndex;
    }
}
