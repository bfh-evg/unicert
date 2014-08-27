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
    private boolean showKeyTypeField;
    private String keySize;
    private boolean showKeySizeField;
    private String primeP;
    private boolean showPrimePField;
    private String primeQ;
    private boolean showPrimeQField;
    private String generator;
    private boolean showGeneratorField;
    private String applicationIdentifier;
    private boolean showApplicationIdentifierField;
    private int role;
    private boolean showRoleField;
    private int identityFunctionIndex;
    private boolean showIdentityFunctionIndexField;
    private boolean initialized;
    private boolean hasMulitpleIdentityProviders;
    private String[] identityProviders;

    
    public String getPropertySetIdentifier() {
        return propertySetIdentifier;
    }

    public void setParameterSetIdentifier(String propertySetIdentifier) {
        this.propertySetIdentifier = propertySetIdentifier;
        this.loadConfig();
    }
    
    
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
    
    public String getIdentityProvider(){
        return this.identityProvider;
    }

    public String getKeyType() {
        return keyType;
    }

    public boolean showKeyTypeField() {
        return showKeyTypeField;
    }

    public String getKeySize() {
        return keySize;
    }

    public boolean showKeySizeField() {
        return showKeySizeField;
    }

    public String getPrimeP() {
        return primeP;
    }

    public boolean showPrimePField() {
        return showPrimePField;
    }

    public String getPrimeQ() {
        return primeQ;
    }

    public boolean showPrimeQField() {
        return showPrimeQField;
    }

    public String getGenerator() {
        return generator;
    }

    public boolean showGeneratorField() {
        return showGeneratorField;
    }

    public String getApplicationIdentifier() {
        return applicationIdentifier;
    }

    public boolean showApplicationIdentifierField() {
        return showApplicationIdentifierField;
    }

    public int getRole() {
        return role;
    }

    public boolean showRoleField() {
        return showRoleField;
    }

    public int getIdentityFunctionIndex() {
        return identityFunctionIndex;
    }

    public boolean showIdentityFunctionIndexField() {
        return showIdentityFunctionIndexField;
    }

    public boolean isInitialized() {
        return initialized;
    }

    public boolean hasMulitpleIdentityProviders() {
        return hasMulitpleIdentityProviders;
    }

    public String[] getIdentityProviders() {
        return identityProviders;
    }
    
    
    
}
