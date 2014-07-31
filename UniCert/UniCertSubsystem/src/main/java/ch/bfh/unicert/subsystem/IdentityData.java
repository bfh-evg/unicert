/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ch.bfh.unicert.subsystem;

import ch.bfh.unicert.subsystem.util.ExtensionOID;
import java.util.Map;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class IdentityData {
    
    //Field inpired from http://www.ietf.org/rfc/rfc5280.txt, http://stackoverflow.com/questions/6464129/certificate-subject-x-509
    private String commonName;
    private String uniqueIdentifier;
    private String organisation;
    private String organisationUnit;
    private String countryName;
    private String state;
    private String locality;
    private String surname;
    private String givenName;
    
    
    private String identityProvider;

    
    private Map<ExtensionOID,String> otherValues;

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
    
    public String getUniqueIdentifier(){
        return this.uniqueIdentifier;
    }
    
    public String getCommonName(){
        return this.commonName;
    }
    
    public String getIdentityProvider(){
        return this.identityProvider;
    }

    public Map<ExtensionOID, String> getOtherValues() {
        return otherValues;
    }

    public String getOrganisation() {
        return organisation;
    }

    public String getOrganisationUnit() {
        return organisationUnit;
    }

    public String getCountryName() {
        return countryName;
    }

    public String getState() {
        return state;
    }

    public String getLocality() {
        return locality;
    }

    public String getSurname() {
        return surname;
    }

    public String getGivenName() {
        return givenName;
    }
    
    
    
    
}
