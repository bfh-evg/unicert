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
package ch.bfh.unicert.webclient.beans;

import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.io.Serializable;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;

/**
 * This bean reads all relevant for UniCert retrieved from the identity provider
 * during a session. Depending on the context, some of the values can be null. 
 * Thus, clients cannot rely on the fact that all fields
 * are always initialized.
 * <p>
 * When used in production, relevant fields are initialized upon calling method
 * readValues().
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 *
 */
@ManagedBean(name = "userData")
@SessionScoped
public class UserDataBean implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * The logger this servlet uses.
     */
    private static final Logger logger = Logger.getLogger(UserDataBean.class.getName());
    
    private UserData ud;
    

    /**
     * Reads the user values passed by the identity provider. This function is triggered on
     * page load of genkeys.xhtml. It might be called more than once (page
     * reload) so the fields are set only if the values are available in the
     * request.
     * 
     * In case of use of additional identity provider, this method must be extended to
     * support them.
     */
    public void readValues() {

        ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
        Map<String, Object> requestMap = externalContext.getRequestMap();
        
        logRequestMap(requestMap);
        logger.log(Level.INFO, "Initialization of user data");

        if (Boolean.parseBoolean(externalContext.getInitParameter("dev-mode"))) {
                //Developper mode data
                ud = new SwitchAAIUserData("1-2-3-4", null, null, null, "11-222-333", null, "Test name",
                        "test surname", "test@bfh.ch", "Law", "Master", null,
                        "Uni Bern", null, null, null);

                logger.log(Level.WARNING, "Initialization in 'dev-mode' done");
                return;
        }
        
        // Determine the identity provider and fill the corresponding userData object
        if (requestMap.containsKey("Shib-SwissEP-UniqueID")) {
                ud = new SwitchAAIUserData(requestMap);                    
        } 
        
    }

    
    /**
     * Provides the unique identifier of the user of the current session read
     * from the identity provider
     * @return the unique identifier
     */
    public String getUniqueIdentifier() {
        if(ud!=null)
            return this.ud.getUniqueIdentifier();
        return null;
    }

    /**
     * Provides the email address of the user of the current session read
     * from the identity provider
     * @return 
     */
    public String getEmail() {
        if(ud!=null)
            return this.ud.getMail();
        return null;
    }
    
    /**
     * Provides the name of the identity provider used for authentication
     * @return 
     */
    public String getIdentityProvider() {
        if(ud!=null)
            return this.ud.getIdentityProvider();
        return null;
    }
    
    /**
     * Provides the user data of the user of the current session read
     * from the identity provider
     * @return 
     */
    public UserData getUserData(){
        return this.ud;
    }
    
    /**
     * Set the user data if they are construct through another way than the
     * readValue() method
     * @param ud user data to be set
     */
    public void setUserData(UserData ud){
        this.ud=ud;
    }
    /**
     * Helper method for debugging purposes logging.
     *
     * @param requestMap a map of name/value pairs provided by the HTTP request
     * object
     */
    private void logRequestMap(Map<String, Object> requestMap) {

        Set<Entry<String, Object>> values = requestMap.entrySet();
        for (Entry<String, Object> value : values) {
            
            logger.log(Level.INFO, "Value for {0}: {1}", new Object[]{value.getKey(), value.getValue()});
        }
    }

}
