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
package ch.bfh.unicert.issuer;

import ch.bfh.unicert.issuer.util.CertificateHelper;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.io.IOException;
import java.math.BigInteger;
import java.security.cert.X509Certificate;
import java.util.Date;
import java.util.Map;
import java.util.Map.Entry;
import java.util.logging.Level;
import java.util.logging.Logger;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Class representing a certificate. Beside PEM structure, additional, redundant
 * information is added to ease processing.
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class Certificate {

    private final String commonName;
    private final String uniqueIdentifier;
    private final String organisation;
    private final String organisationUnit;
    private final String countryName;
    private final String state;
    private final String locality;
    private final String surname;
    private final String givenName;

    private final String issuer;
    private final BigInteger serialNumber;
    private final Date validFrom;
    private final Date validUntil;
    private final Map<String, String> extension;
    private String pem;
    
    private final X509Certificate cert;
    private final String applicationIdentifier;
    private final String[] roles;
    private final String identityProvider;

    /**
     * Create an object representing a X509 certificate with redundant information
     * @param cert the X509 certificate to store in the object
     * @param commonName the common name appearing in the given certificate
     * @param uniqueId the unique identifier appearing in the given certificate
     * @param organisation the organisation appearing in the given certificate
     * @param organisationUnit the organisation unit appearing in the given certificate
     * @param countryName the country appearing in the given certificate
     * @param state the state appearing in the given certificate
     * @param locality the locality appearing in the given certificate
     * @param surname the surname appearing in the given certificate
     * @param givenName the given name appearing in the given certificate
     * @param applicationIdentifier the identifier of the application the certificate is issued for
     * @param role the role the certificate is issued certificate
     * @param identityProvider the identity provider used to authenticate the requester of the certificate
     * @param extension the extension appearing in the given certificate
     * 
     * If some information does not appear in the certificate, null can be passed
     */
    public Certificate(X509Certificate cert, String commonName, String uniqueId, String organisation, String organisationUnit,
            String countryName, String state, String locality, String surname, String givenName, String applicationIdentifier, String[] roles, String identityProvider, Map extension) {

        this.commonName = commonName;
        this.uniqueIdentifier = uniqueId;
        this.organisation = organisation;
        this.organisationUnit = organisationUnit;
        this.countryName = countryName;
        this.state = state;
        this.locality = locality;
        this.surname = surname;
        this.givenName = givenName;

        this.issuer = cert.getIssuerDN().getName();
        this.serialNumber = cert.getSerialNumber();
        this.validFrom = cert.getNotBefore();
        this.validUntil = cert.getNotAfter();
        this.applicationIdentifier = applicationIdentifier;
        this.roles = roles;
        this.identityProvider = identityProvider;
        this.extension = extension;
        try {
            this.pem = CertificateHelper.x509ToBase64PEMString(cert);
        } catch (IOException ex) {
            
            Logger.getLogger(Certificate.class.getName()).log(Level.SEVERE, null, ex);
        }
        this.cert = cert;  
    }

    /**
     * Get the common name appearing in the given certificate
     * @return the common name as string
     */
    public String getCommonName() {
        return commonName;
    }

    /**
     * Get the unique identifier appearing in the given certificate
     * @return the unique identifier
     */
    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    /**
     * Get the organisation appearing in the given certificate
     * @return the organisation name
     */
    public String getOrganisation() {
        return organisation;
    }

    /**
     * Get the organisation unit appearing in the given certificate
     * @return the organisation unit
     */
    public String getOrganisationUnit() {
        return organisationUnit;
    }

    /**
     * Get the country appearing in the given certificate
     * @return the country name
     */
    public String getCountryName() {
        return countryName;
    }

    /**
     * Get the state appearing in the given certificate
     * @return the state name
     */
    public String getState() {
        return state;
    }

    /**
     * Get the locality appearing in the given certificate
     * @return the locality name
     */
    public String getLocality() {
        return locality;
    }

    /**
     * Get the surname appearing in the given certificate
     * @return the surname
     */
    public String getSurname() {
        return surname;
    }

    /**
     * Get the given name appearing in the given certificate
     * @return the given name
     */
    public String getGivenName() {
        return givenName;
    }

    /**
     * Returns the issuer name.
     *
     * @return a name
     */
    public String getIssuer() {
        return issuer;
    }

    /**
     * Returns the serial number.
     *
     * @return a number
     */
    public BigInteger getSerialNumber() {
        return serialNumber;
    }

    /**
     * Returns the valid-from date.
     *
     * @return a date
     */
    public Date getValidFrom() {
        return validFrom;
    }

    /**
     * Returns the valid-until date.
     *
     * @return a date
     */
    public Date getValidUntil() {
        return validUntil;
    }

    /**
     * Return the identifier of the application the certificate was issued for
     * @return the base 64 encoded SHA256 hash of the name of the application
     */
    public String getApplicationIdentifier() {
        return applicationIdentifier;
    }

    /**
     * The role the certificate can be used for
     * @return the integer representing the role
     */
    public String[] getRoles() {
        return roles;
    }

    /**
     * The identity provider used to authenticate the requeste of the certificate
     * @return the name of the identity provider
     */
    public String getIdentityProvider() {
        return identityProvider;
    }

    /**
     * Returns the extension including application identifier, role and identity
     * provider
     *
     * @return the extension
     */
    public Map getExtension() {
        return extension;
    }

    /**
     * Returns the certificate as a PEM structure.
     *
     * @return a string containing PEM encoded certificate
     */
    public String getPem() {
        return pem;
    }
    
    /**
     * Get the X.509 Certificate
     * @return the X.509 Certificate
     */
    public X509Certificate getX509Certificate(){
        return cert;
    }

    /**
     * Convert the object to a JSON structure
     * @return a JSON string representing the certificate
     */
    public String toJSON() {
        String json = "{ ";

        if (this.commonName != null) {
            json += "\"commonName\": \"" + this.commonName + "\", ";
        }
        if (this.uniqueIdentifier != null) {
            json += "\"uniqueIdentifier\": \"" + this.uniqueIdentifier + "\", ";
        }
        if (this.organisation != null) {
            json += "\"organisation\": \"" + this.organisation + "\", ";
        }
        if (this.organisationUnit != null) {
            json += "\"organisationUnit\": \"" + this.organisationUnit + "\", ";
        }
        if (this.countryName != null) {
            json += "\"countryName\": \"" + this.countryName + "\", ";
        }
        if (this.state != null) {
            json += "\"state\": \"" + this.state + "\", ";
        }
        if (this.locality != null) {
            json += "\"locality\": \"" + this.locality + "\", ";
        }
        if (this.surname != null) {
            json += "\"surname\": \"" + this.surname + "\", ";
        }
        if (this.givenName != null) {
            json += "\"givenName\": \"" + this.givenName + "\", ";
        }
        if (this.issuer != null) {
            json += "\"issuer\": \"" + this.issuer + "\", ";
        }
        if (this.serialNumber != null) {
            json += "\"serialNumber\": \"" + this.serialNumber + "\", ";
        }
        if (this.validFrom != null) {
            json += "\"validFrom\": " + formatDate(this.validFrom) + ", ";
        }
        if (this.validUntil != null) {
            json += "\"validUntil\": " + formatDate(this.validUntil) + ", ";
        }
        if (this.applicationIdentifier != null) {
            json += "\"applicationIdentifier\": \"" + this.applicationIdentifier + "\", ";
        }
        if (this.roles != null) {
	    json += "\"roles\": [";
	    for(int i=0; i<this.roles.length; i++){
		json += "\""+this.roles[i] + "\", ";
	    }
	    json = json.substring(0, json.length()-2);
	    json += "], ";
        }
        if (this.identityProvider != null) {
            json += "\"identityProvider\": \"" + this.identityProvider + "\", ";
        }
        if (this.extension != null) {
            for (Entry<String, String> e : this.extension.entrySet()) {
                json += "\"" + e.getKey() + "\": \"" + e.getValue() + "\", ";
            }
        }
        json += "\"pem\": \"" + this.pem.replace("\n", "\\n") + "\"}";
        return json;
    }

    /**
     * Helper method allowing to convert a Date in ISO format string
     * @param date the date to convert
     * @return the string representing the date in ISO format
     */
    private String formatDate(Date date) {
	try {
	    ObjectMapper mapper = new ObjectMapper();
	    mapper.configure(com.fasterxml.jackson.databind.SerializationFeature.WRITE_DATES_AS_TIMESTAMPS , false);
	    return mapper.writeValueAsString(date);
	} catch (JsonProcessingException ex) {
	    Logger.getLogger(Certificate.class.getName()).log(Level.SEVERE, "Unable to JSONize date", ex);
	    return "\"\"";
	}
    }
}
