/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ch.bfh.unicert.webclient.beans;

import ch.bfh.unicert.webclient.util.ConfigurationHelper;
import ch.bfh.unicert.webclient.util.ConfigurationHelperImpl;
import ch.bfh.unicert.webclient.util.ParametersNotFoundException;
import java.io.Serializable;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 * This class represents a Bean storing the predefined values for the registration process
 * 
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@ManagedBean(name = "ui")
@SessionScoped
public class UserInterfaceBean implements Serializable {
    
    private static final Logger logger = Logger.getLogger(UserInterfaceBean.class.getName());

    private String propertySetIdentifier;
    private String identityProvider;
    private String keyType;
    private boolean showKeyTypeField = true;
    private String keySize;
    private boolean showKeySizeField = true;
    private String primeP;
    private boolean showPrimePField = true;
    private String primeQ;
    private boolean showPrimeQField = true;
    private String generator;
    private boolean showGeneratorField = true;
    private String applicationIdentifier;
    private boolean showApplicationIdentifierField = true;
    private int role;
    private boolean showRoleField = true;
    private int identityFunctionIndex;
    private boolean showIdentityFunctionIndexField = true;
    private boolean initialized;
    private boolean hasMulitpleIdentityProviders = false;
    private String[] identityProviders;

    
    
    /**
     * Returns the property set name
     * @return the name of the property set
     */
    public String getPropertySetIdentifier() {
        return propertySetIdentifier;
    }

    /**
     * Sets the name of the property set to read 
     * @param propertySetIdentifier the name of the property set
     */
    public void setParameterSetIdentifier(String propertySetIdentifier) {
        this.propertySetIdentifier = propertySetIdentifier;
        this.loadConfig();
    }
    
    /**
     * Helper method initializing the instance by reading the properties
     */
    private void loadConfig(){
        ConfigurationHelper config;
        try {
            config = new ConfigurationHelperImpl(propertySetIdentifier);
        } catch (ParametersNotFoundException ex) {
            logger.log(Level.SEVERE,
                    "Could not initialize configuration helper for registration subsystem, exception: {0}",
                    new Object[]{ex});
            this.initialized = false;
            return;
        }
        
        //If multiple identity providers are supported, they are separated by comma
        this.identityProvider = config.getIdentityProvider();
        if(this.identityProvider!=null && this.identityProvider.contains(",")){
            this.hasMulitpleIdentityProviders = true;
            this.identityProviders = identityProvider.split("\\,");
        } else {
            this.hasMulitpleIdentityProviders = false;
        }
        
        this.keyType = config.getKeyType();
        this.showKeyTypeField = this.keyType==null;
        
        this.keySize = config.getKeySize();
        this.showKeySizeField = this.keySize==null;
        
        this.primeP = config.getPrimeP();
        this.showPrimePField = this.primeP==null;
        
        this.primeQ = config.getPrimeQ();
        this.showPrimeQField = this.primeQ==null;
        
        this.generator = config.getGenerator();
        this.showGeneratorField = this.generator==null;
        
        this.applicationIdentifier = config.getApplicationIdentifier();
        this.showApplicationIdentifierField = this.applicationIdentifier==null;
        
        this.role = config.getRole();
        this.showRoleField = this.role<0;
        
        this.identityFunctionIndex = config.getIdentityFunctionIndex();
        this.showIdentityFunctionIndexField = this.identityFunctionIndex<0;
        
        this.initialized = true;
    }
    
    /**
     * Returns the key type
     * 
     * @return 'RSA' for RSA keys or 'DiscreteLog' for DSA/Schnorr keys
     */
    public String getKeyType() {
        return keyType;
    }

    /**
     * Indicate if the keyType field must be shown in registration page
     * @return true if it must be shown, false otherwise
     */
    public boolean showKeyTypeField() {
        return showKeyTypeField;
    }

    /**
     * Returns the desired size for the keys
     * 
     * This parameter is only used in case of RSA type of keys
     * 
     * @return the desired size for the keys
     */
    public String getKeySize() {
        return keySize;
    }

    /**
     * Indicate if the keySize field must be shown in registration page
     * @return true if it must be shown, false otherwise
     */
    public boolean showKeySizeField() {
        return showKeySizeField;
    }

    /**
     * Return the value of prime p
     * @return the value of prime p
     */
    public String getPrimeP() {
        return primeP;
    }

    /**
     * Indicate if the primeP field must be shown in registration page
     * @return true if it must be shown, false otherwise
     */
    public boolean showPrimePField() {
        return showPrimePField;
    }

    /**
     * Return the value of prime q
     * @return the value of prime q
     */
    public String getPrimeQ() {
        return primeQ;
    }

    /**
     * Indicate if the primeQ field must be shown in registration page
     * @return true if it must be shown, false otherwise
     */
    public boolean showPrimeQField() {
        return showPrimeQField;
    }

    /**
     * Return the value of the generator
     * @return the value of prime generator
     */
    public String getGenerator() {
        return generator;
    }

    /**
     * Indicate if the generator field must be shown in registration page
     * @return true if it must be shown, false otherwise
     */
    public boolean showGeneratorField() {
        return showGeneratorField;
    }

    /**
     * Returns the identifier of the application the certificate must be issued for
     * @return the identifier of the application the certificate must be issued for
     */
    public String getApplicationIdentifier() {
        return applicationIdentifier;
    }

    /**
     * Indicate if the application identifier field must be shown in registration page
     * @return true if it must be shown, false otherwise
     */
    public boolean showApplicationIdentifierField() {
        return showApplicationIdentifierField;
    }

    /**
     * Returns the role the certificate is issued for
     * 
     * In UniVote:
     * 1: Voter
     * 2: Tallier
     * 3: Mixer
     * 
     * @return the role the certificate is issued for
     */
    public int getRole() {
        return role;
    }

    /**
     * Indicate if the role field must be shown in registration page
     * @return true if it must be shown, false otherwise
     */
    public boolean showRoleField() {
        return showRoleField;
    }

    /**
     * Returns the index of the identity function that must be applied to the identity token
     * 
     * 1: standard function for SwitchAAI tokens
     * 2: anonymizing function for SwitchAAI tokens
     * 3: special function for University of Zurich, SwitchAAI tokens
     * 
     * @return the index of the function
     */
    public int getIdentityFunctionIndex() {
        return identityFunctionIndex;
    }

    /**
     * Indicate if the identityFunction field must be shown in registration page
     * @return true if it must be shown, false otherwise
     */
    public boolean showIdentityFunctionIndexField() {
        return showIdentityFunctionIndexField;
    }

    /**
     * Indicate if the instance was correctly initialized
     * @return true if correctly initialized
     */
    public boolean isInitialized() {
        return initialized;
    }
    
    /**
     * Returns the name of the identity provider to use
     * @return the name of the identity provider
     */
    public String getIdentityProvider(){
        return this.identityProvider;
    }

    /**
     * Indicates if multiple identity providers are supported
     * @return true if multiple idp are supported
     */
    public boolean hasMulitpleIdentityProviders() {
        return hasMulitpleIdentityProviders;
    }

    /**
     * Returns the list of supported identity providers
     * @return the names of the supported idps
     */
    public String[] getIdentityProviders() {
        return identityProviders;
    }
    
    
    
}
