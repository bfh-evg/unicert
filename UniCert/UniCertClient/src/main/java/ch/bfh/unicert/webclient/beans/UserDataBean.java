package ch.bfh.unicert.webclient.beans;

import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.E_UID;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.O_AFFILIATION;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.O_DN;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.O_NAME;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.O_TYPE;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.P_CARD_NO;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.P_EMP_NUMBER;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.P_GIVENNAME;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.P_ID;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.P_MAIL;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.P_MAT_NUMBER;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.P_SURNAME;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.P_UID;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.S_BRANCH;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.S_CATECORY;
import static ch.bfh.unicert.webclient.userdata.SwitchAAIUserData.S_LEVEL;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;

/**
 * Holds the user data relevant for UniVote retrieved from SWITCHaai during a
 * session. Depending on the context, some of the values can be null. For
 * example, when performing a lookup of the certificates of the requestor, the
 * field 'proof' is null. Thus, clients cannot rely on the fact that all fields
 * are always initialized.
 * <p>
 * When used in production, relevant fields are initialized upon calling method
 * readAaiValues().
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 *
 */
@ManagedBean(name = "userData")
@SessionScoped
public class UserDataBean {

    private static final long serialVersionUID = 1L;

    /**
     * The logger this servlet uses.
     */
    private static final Logger logger = Logger.getLogger(UserDataBean.class.getName());

    private UserData ud;

    /**
     * Reads the user values passed by SWITCHaai. This function is triggered on
     * page load of genkeys.xhtml. It might be called more than once (page
     * reload) so the fields are set only if the values are available in the
     * request.
     */
    public void readValues() {

        ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
        Map<String, Object> requestMap = externalContext.getRequestMap();

        // Determine the identity provider and fill the corresponding userData object
        if (requestMap.containsKey("switch")) {
            if (Boolean.parseBoolean(externalContext.getInitParameter("dev-mode"))) {
                ud = new SwitchAAIUserData(null, null, null, null, "11-222-333", null, "Test name",
                        "test surname", "test@bfh.ch", "Law", "Master", null,
                        "Uni Bern", null, null, null);

                logger.log(Level.WARNING, "Initialization in 'dev-mode' done");
            } else {
                ud = new SwitchAAIUserData(requestMap);                    
            }

        }
    }

    

//    public String getUniqueIdentifier() {
//        return this.ud.getUniqueIdentifier();
//    }

    public String getEmail() {
        return this.ud.getMail();
    }

    /**
     * Helper method for debugging purposes logging AAI provide values.
     *
     * @param requestMap a map of name/value pairs provided by the HTTP request
     * object
     */
    private void logAai(Map<String, Object> requestMap) {
        String[] names = {
            E_UID,
            P_ID,
            P_SURNAME,
            P_GIVENNAME,
            P_MAIL,
            O_NAME,
            O_TYPE,
            O_AFFILIATION,
            P_UID,
            P_MAT_NUMBER,
            P_EMP_NUMBER,
            P_CARD_NO,
            S_BRANCH,
            S_LEVEL,
            S_CATECORY,
            O_DN
        };
        for (int i = 0; i < names.length; i++) {
            Object value = requestMap.get(names[i]);
            logger.log(Level.INFO, "Value for {0}: {1}", new Object[]{names[i], value});
        }
    }
}
