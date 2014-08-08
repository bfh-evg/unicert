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
package ch.bfh.unicert.subsystem;

import ch.bfh.unicert.subsystem.util.ExtensionOID;
import java.util.Map;

/**
 * Class containing the identity information of the requester
 * that should or could be used in the certificate
 * 
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class IdentityData {
    
    //Field inpired from http://www.ietf.org/rfc/rfc5280.txt, http://stackoverflow.com/questions/6464129/certificate-subject-x-509
    private final String commonName;
    private final String uniqueIdentifier;
    private final String organisation;
    private final String organisationUnit;
    private final String countryName;
    private final String state;
    private final String locality;
    private final String surname;
    private final String givenName;
    
    private final String identityProvider;

    private final Map<ExtensionOID,String> otherValues;

    /**
     * Create an identity object
     * @param commonName common name of the requester
     * @param uniqueIdentifier unique identifier of the requester
     * @param organisation organisation of the requester
     * @param organisationUnit organisation unit of the requester
     * @param countryName country of the requester
     * @param state state of the requester
     * @param locality locality of the requester
     * @param surname surname of the requester
     * @param givenName given name of the requester
     * @param identityProvider identity provider used to authenticate the requester
     * @param otherValues other identity values of the requester
     */
    public IdentityData(String commonName, String uniqueIdentifier, String organisation, String organisationUnit,
            String countryName, String state, String locality, String surname, String givenName,
            String identityProvider, Map<ExtensionOID, String> otherValues) {
        this.commonName = commonName;
        this.uniqueIdentifier = uniqueIdentifier;
        this.organisation = organisation;
        this.organisationUnit = organisationUnit;
        this.countryName = countryName;
        this.state = state;
        this.locality = locality;
        this.surname = surname;
        this.givenName = givenName;
        this.identityProvider = identityProvider;
        this.otherValues = otherValues;
    }
    
    /**
     * Get the unique identifier of the requester
     * @return the unique identifier
     */
    public String getUniqueIdentifier(){
        return this.uniqueIdentifier;
    }
    
    /**
     * Get the common name of the requester
     * @return the common name
     */
    public String getCommonName(){
        return this.commonName;
    }
    
    /**
     * Get the identity provider used to authenticate the requested
     * @return the identity provider
     */
    public String getIdentityProvider(){
        return this.identityProvider;
    }

    /**
     * Get the other identity values of the requester
     * @return the other identity values of the requester
     */
    public Map<ExtensionOID, String> getOtherValues() {
        return otherValues;
    }

    /**
     * Get the organisation of the requester
     * @return the organisation of the requester
     */
    public String getOrganisation() {
        return organisation;
    }

    /**
     * Get the organisation unit of the requester
     * @return the organisation unit of the requester
     */
    public String getOrganisationUnit() {
        return organisationUnit;
    }

    /**
     * Get the country of the requester
     * @return the country of the requester
     */
    public String getCountryName() {
        return countryName;
    }

    /**
     * Get the state of the requester
     * @return the state of the requester
     */
    public String getState() {
        return state;
    }

    /**
     * Get the locality of the requester
     * @return the locality of the requester
     */
    public String getLocality() {
        return locality;
    }
    
    /**
     * Get the surname of the requester
     * @return the surname of the requester
     */
    public String getSurname() {
        return surname;
    }

    /**
     * Get the given name of the requester
     * @return the given name of the requester
     */
    public String getGivenName() {
        return givenName;
    }
    
}
