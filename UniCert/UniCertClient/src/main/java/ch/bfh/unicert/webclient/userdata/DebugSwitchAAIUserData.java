package ch.bfh.unicert.webclient.userdata;

import java.util.Map;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

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
public class DebugSwitchAAIUserData extends SwitchAAIUserData {



    // SWITCHaai has two different sets of parameter names for
    // test environments and production envionments. This is the
    // set of test environment
    /**
     * Swiss education UID.
     */
    public static final String E_UID = "Shib-SwissEP-UniqueID";

    /**
     * Shibboleth Person UID.
     */
    public static final String P_UID = "Shib-Person-uid";
    /**
     * Persistent ID.
     */
    public static final String P_ID = "persistent-id";

    /**
     * Card number.
     */
    public static final String P_CARD_NO = "Shib-SwissEP-CardUID";

    /**
     * Swiss education matriculation number.
     */
    public static final String P_MAT_NUMBER = "Shib-SwissEP-MatriculationNumber";

    /**
     * Internet organization name.
     */
    public static final String P_EMP_NUMBER = "Shib-InetOrgPerson-employeeNumber";

    /**
     * Given name.
     */
    public static final String P_GIVENNAME = "Shib-InetOrgPerson-givenName";

    /**
     * Surname.
     */
    public static final String P_SURNAME = "Shib-Person-surname";

    /**
     * E-mail.
     */
    public static final String P_MAIL = "Shib-InetOrgPerson-mail";

    /**
     * Study branch.
     */
    public static final String S_BRANCH = "Shib-SwissEP-StudyBranch1";

    /**
     * Study level.
     */
    public static final String S_LEVEL = "Shib-SwissEP-StudyLevel";

    /**
     * Staff category.
     */
    public static final String S_CATECORY = "Shib-SwissEP-StaffCategory";

    /**
     * Organization name.
     */
    public static final String O_NAME = "Shib-SwissEP-HomeOrganization";

    /**
     * Affiliation name.
     */
    public static final String O_AFFILIATION = "Shib-EP-Affiliation";

    /**
     * Organization type.
     */
    public static final String O_TYPE = "Shib-SwissEP-HomeOrganizationType";

    /**
     * Organization DN.
     */
    public static final String O_DN = "Shib-EP-OrgDN";

    public DebugSwitchAAIUserData(Map<String, Object> attributesMap) {
        super(attributesMap);
    }

    public DebugSwitchAAIUserData(String swissEducationUID, String personUID, String persistentId, String cardUID, String matriculationNumber, String employeeNumber, String givenName, String surname, String mail, String studyBranch, String studyLevel, String staffCategory, String homeOrganization, String affiliation, String homeOrganizationType, String orgDN) {
        super(swissEducationUID, personUID, persistentId, cardUID, matriculationNumber, employeeNumber, givenName, surname, mail, studyBranch, studyLevel, staffCategory, homeOrganization, affiliation, homeOrganizationType, orgDN);
    }
    
    

}
