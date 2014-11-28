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
package ch.bfh.unicert.webclient.userdata;

import javax.faces.bean.SessionScoped;

/**
 * Holds the user data relevant for UniCert retrieved from SWITCHaai during a
 * session. Depending on the context, some of the values can be null. 
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
@SessionScoped
public class SwitchAAIUserData implements UserData {

    private final IdentityProvider IDENTITY_PROVIDER = IdentityProvider.SWITCH_AAI;

    private static final long serialVersionUID = 1L;

    public String swissEducationUID;
    public String personUID;
    public String persistentId;
    public String cardUID;
    public String matriculationNumber;
    public String employeeNumber;
    public String givenName;
    public String surname;
    public String mail;
    public String studyBranch;
    public String studyLevel;
    public String staffCategory;
    public String homeOrganization;
    public String affiliation;
    public String homeOrganizationType;
    public String orgDN;

    /**
     * Constructs a UserData instance, given some initial parameters. Notice
     * that, depending on the context, some of the parameters can be null.
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
        return this.IDENTITY_PROVIDER.getKey();
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

    @Override
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
}
