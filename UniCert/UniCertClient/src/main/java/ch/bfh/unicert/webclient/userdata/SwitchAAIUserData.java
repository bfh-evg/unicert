package ch.bfh.unicert.webclient.userdata;

import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
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
public class SwitchAAIUserData implements UserData {

    private final IdentityProvider IDENTITY_PROVIDER = IdentityProvider.SWITCH_AAI;

    private static final long serialVersionUID = 1L;

    // SWITCHaai has two different sets of parameter names for
    // test environments and production envionments.
    // This is the production set. The other ones are in subclass
    /**
     * Swiss education UID.
     */
    public static final String E_UID = "uniqueID";
    public String swissEducationUID;

    /**
     * Shibboleth Person UID.
     */
    public static final String P_UID = "uid";
    public String personUID;
    /**
     * Persistent ID.
     */
    public static final String P_ID = "persistent-id";
    public String persistentId;

    /**
     * Card number.
     */
    public static final String P_CARD_NO = "cardUID";
    public String cardUID;

    /**
     * Swiss education matriculation number.
     */
    public static final String P_MAT_NUMBER = "matriculationNumber";
    public String matriculationNumber;

    /**
     * Internet organization name.
     */
    public static final String P_EMP_NUMBER = "employeeNumber";
    public String employeeNumber;

    /**
     * Given name.
     */
    public static final String P_GIVENNAME = "givenName";
    public String givenName;

    /**
     * Surname.
     */
    public static final String P_SURNAME = "surname";
    public String surname;

    /**
     * E-mail.
     */
    public static final String P_MAIL = "mail";
    public String mail;

    /**
     * Study branch.
     */
    public static final String S_BRANCH = "studyBranch1";
    public String studyBranch;

    /**
     * Study level.
     */
    public static final String S_LEVEL = "studyLevel";
    public String studyLevel;

    /**
     * Staff category.
     */
    public static final String S_CATECORY = "staffCategory";
    public String staffCategory;

    /**
     * Organization name.
     */
    public static final String O_NAME = "homeOrganization";
    public String homeOrganization;

    /**
     * Affiliation name.
     */
    public static final String O_AFFILIATION = "affiliation";
    public String affiliation;

    /**
     * Organization type.
     */
    public static final String O_TYPE = "homeOrganizationType";
    public String homeOrganizationType;

    /**
     * Organization DN.
     */
    public static final String O_DN = "org-dn";
    public String orgDN;

    /**
     * The logger this class uses.
     */
    private static final Logger logger = Logger.getLogger(SwitchAAIUserData.class.getName());

    /**
     * Constructs a UserData instance, given some initial parameters. Notice
     * that, depending on the context, some of the parameters can be null.
     *
     */
    public SwitchAAIUserData(Map<String, Object> attributesMap) {
        initializeUserData(attributesMap);
    }

    /**
     * For dev only
     * @param swissEducationUID
     * @param personUID
     * @param persistentId
     * @param cardUID
     * @param matriculationNumber
     * @param employeeNumber
     * @param givenName
     * @param surname
     * @param mail
     * @param studyBranch
     * @param studyLevel
     * @param staffCategory
     * @param homeOrganization
     * @param affiliation
     * @param homeOrganizationType
     * @param orgDN 
     */
    public SwitchAAIUserData(String swissEducationUID, String personUID, String persistentId, String cardUID, String matriculationNumber, String employeeNumber, String givenName, String surname, String mail, String studyBranch, String studyLevel, String staffCategory, String homeOrganization, String affiliation, String homeOrganizationType, String orgDN) {
        this.swissEducationUID = swissEducationUID;
        this.personUID = personUID;
        this.persistentId = persistentId;
        this.cardUID = cardUID;
        this.matriculationNumber = matriculationNumber;
        this.employeeNumber = employeeNumber;
        this.givenName = givenName;
        this.surname = surname;
        this.mail = mail;
        this.studyBranch = studyBranch;
        this.studyLevel = studyLevel;
        this.staffCategory = staffCategory;
        this.homeOrganization = homeOrganization;
        this.affiliation = affiliation;
        this.homeOrganizationType = homeOrganizationType;
        this.orgDN = orgDN;
    }

    @Override
    public String getIdentityProvider() {
        return this.IDENTITY_PROVIDER.toString();
    }
    
    @Override
    public String getUniqueIdentifier() {
        return this.getSwissEducationUID();
    }

    public String getSwissEducationUID() {
        return swissEducationUID;
    }

    public String getPersonUID() {
        return personUID;
    }

    public String getPersistentId() {
        return persistentId;
    }

    public String getCardUID() {
        return cardUID;
    }

    public String getMatriculationNumber() {
        return matriculationNumber;
    }

    public String getEmployeeNumber() {
        return employeeNumber;
    }

    public String getGivenName() {
        return givenName;
    }

    public String getSurname() {
        return surname;
    }

    public String getMail() {
        return mail;
    }

    public String getStudyBranch() {
        return studyBranch;
    }

    public String getStudyLevel() {
        return studyLevel;
    }

    public String getStaffCategory() {
        return staffCategory;
    }

    public String getHomeOrganization() {
        return homeOrganization;
    }

    public String getAffiliation() {
        return affiliation;
    }

    public String getHomeOrganizationType() {
        return homeOrganizationType;
    }

    public String getOrgDN() {
        return orgDN;
    }

    /**
     * Tries to initialized this instance from data obtained from SWITCHaai.
     * Sets 'initialized' to true if it can at least initialized the fields
     * 'voterId' and 'email'.
     *
     * @param requestMap the HTTP request object parameter map
     */
    protected void initializeUserData(Map<String, Object> attributesMap) {

        // Swiss education unique id
        this.swissEducationUID = readAttribute(attributesMap, E_UID, "education uid");
        
        // Person UID
        this.personUID = readAttribute(attributesMap, P_UID, "person uid");
        
        // Persistent ID
        this.persistentId = readAttribute(attributesMap, P_ID, "persistent id");
        
        // Card Nr
        this.cardUID = readAttribute(attributesMap, P_CARD_NO, "card nr");
        
        // Matricule Nr
        this.matriculationNumber = readAttribute(attributesMap, P_MAT_NUMBER, "matricule nr");
        
        //Employee Nr
        this.employeeNumber = readAttribute(attributesMap, P_EMP_NUMBER, "employee nr");
        
        //Given name
        this.givenName = readAttribute(attributesMap, P_GIVENNAME, "given name");
        
        //Employee Nr
        this.surname = readAttribute(attributesMap, P_SURNAME, "surname");
        
        // E-mail address
        this.mail = readAttribute(attributesMap, P_MAIL, "e-mail address");
        
        //Study branch
        this.studyBranch = readAttribute(attributesMap, S_BRANCH, "study branch");
        
        //Study level
        this.studyLevel = readAttribute(attributesMap, S_LEVEL, "study level");
        
        //Staff category
        this.staffCategory = readAttribute(attributesMap, S_CATECORY, "staff category");
                
        //Home organisation
        this.homeOrganization = readAttribute(attributesMap, O_NAME, "home organisation");
        
        //Affiliation
        this.affiliation = readAttribute(attributesMap, O_AFFILIATION, "affiliation");
         
        //Affiliation
        this.homeOrganizationType = readAttribute(attributesMap, O_TYPE, "organisation type");
         
        //Affiliation
        this.orgDN = readAttribute(attributesMap, O_DN, "organisation distinguished name");
        
    }
    
    private String readAttribute(Map<String, Object> attributesMap, String attribute, String comment){
        
        String value = (String) attributesMap.get(attribute);
        if (value != null) {
            logger.log(Level.INFO, "Retrieved for "+ comment +": name={0}, value={1}",
                    new Object[]{attribute, value});
        } else {
            // Cannot initialize -- giving up.
            logger.log(Level.SEVERE, "Cannot initialize "+ comment +" -- giving up.");
        }
        return value;
    }
}
