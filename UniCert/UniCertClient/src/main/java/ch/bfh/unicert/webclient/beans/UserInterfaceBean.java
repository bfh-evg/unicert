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
    private String role;
    private boolean showRoleField;
    private String identityFunctionIndex;
    private boolean showIdentityFunctionIndexField;

    
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
            return;
        }
        
        this.identityProvider = config.getIdentityProvider();
        
        this.keyType = config.getKeyType();
        this.showKeyTypeField = this.keyType==null;
        
        this.keySize = config.getKeySize();
        this.showKeySizeField = this.keySize==null;
        
        this.primeP = config.getPrimeP();
        this.showPrimePField = this.primeP==null;
        
        this.primeQ = config.getPrimeP();
        this.showPrimeQField = this.primeQ==null;
        
        this.generator = config.getPrimeP();
        this.showGeneratorField = this.generator==null;
        
        this.applicationIdentifier = config.getPrimeP();
        this.showApplicationIdentifierField = this.applicationIdentifier==null;
        
        this.role = config.getPrimeP();
        this.showRoleField = this.role==null;
        
        this.identityFunctionIndex = config.getPrimeP();
        this.showIdentityFunctionIndexField = this.identityFunctionIndex==null;
        
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

    public String getRole() {
        return role;
    }

    public boolean showRoleField() {
        return showRoleField;
    }

    public String getIdentityFunctionIndex() {
        return identityFunctionIndex;
    }

    public boolean showIdentityFunctionIndexField() {
        return showIdentityFunctionIndexField;
    }
    
    
}
