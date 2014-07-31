package ch.bfh.unicert.subsystem;

import ch.bfh.unicert.subsystem.util.CertificateHelper;
import java.io.IOException;
import java.math.BigInteger;
import java.security.cert.X509Certificate;
import java.util.Calendar;
import java.util.Date;
import java.util.Hashtable;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Class representing a certificate. Beside PEM structure, additional, redundant
 * information is added to ease processing.
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 */
public class Certificate {

    private String commonName;
    private String uniqueIdentifier;
    private String organisation;
    private String organisationUnit;
    private String countryName;
    private String state;
    private String locality;
    private String surname;
    private String givenName;

    private String issuer;
    private BigInteger serialNumber;
    private Date validFrom;
    private Date validUntil;
    private Map<String, String> extension;
    private String pem;

    public Certificate(X509Certificate cert, String commonName, String uniqueId, String organisation, String organisationUnit,
            String countryName, String state, String locality, String surname, String givenName, Map extension) {

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
        this.extension = extension;
        try {
            this.pem = CertificateHelper.x509ToBase64PEMString(cert);;
        } catch (IOException ex) {
            Logger.getLogger(Certificate.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public String getOrganisation() {
        return organisation;
    }

    public void setOrganisation(String organisation) {
        this.organisation = organisation;
    }

    public String getOrganisationUnit() {
        return organisationUnit;
    }

    public void setOrganisationUnit(String organisationUnit) {
        this.organisationUnit = organisationUnit;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getLocality() {
        return locality;
    }

    public void setLocality(String locality) {
        this.locality = locality;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getGivenName() {
        return givenName;
    }

    public void setGivenName(String givenName) {
        this.givenName = givenName;
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
     * Sets the issuer name.
     *
     * @param issuer a name
     */
    public void setIssuer(String issuer) {
        this.issuer = issuer;
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
     * Sets the serial number.
     *
     * @param serialNumber a number
     */
    public void setSerialNumber(BigInteger serialNumber) {
        this.serialNumber = serialNumber;
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
     * Sets the valid-from date.
     *
     * @param validFrom a date
     */
    public void setValidFrom(Date validFrom) {
        this.validFrom = validFrom;
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
     * Sets the valid-until date.
     *
     * @param validUntil a date
     */
    public void setValidUntil(Date validUntil) {
        this.validUntil = validUntil;
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
     * Sets the extension including application identifier, role and identity
     * provider
     *
     * @param extension the extension
     */
    public void setExtension(Map extension) {
        this.extension = extension;
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
     * Sets the PEM encoded certificate.
     *
     * @param pem a PEM string
     */
    public void setPem(String pem) {
        this.pem = pem;
    }

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
            json += "surname: \"" + this.surname + "\", ";
        }
        if (this.givenName != null) {
            json += "\"commonName\": \"" + this.givenName + "\", ";
        }
        if (this.issuer != null) {
            json += "\"issuer\": \"" + this.issuer + "\", ";
        }
        if (this.serialNumber != null) {
            json += "\"serialNumber\": \"" + this.serialNumber + "\", ";
        }
        if (this.validFrom != null) {
            json += "\"validFrom\": \"" + formatDate(this.validFrom) + "\", ";
        }
        if (this.validUntil != null) {
            json += "\"validUntil\": \"" + formatDate(this.validUntil) + "\", ";
        }
        if (this.validUntil != null) {
            for (Entry<String, String> e : this.extension.entrySet()) {
                json += "\"" + e.getKey() + "\": \"" + e.getValue() + "\", ";
            }
        }
        json += "\"pem\": \"" + this.pem.replace("\n", "") + "\"}";
        return json;
    }

    private String formatDate(Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        int year = cal.get(Calendar.YEAR);
        int month = cal.get(Calendar.MONTH);
        int day = cal.get(Calendar.DAY_OF_MONTH);
        int hour = cal.get(Calendar.HOUR_OF_DAY);
        int min = cal.get(Calendar.MINUTE);
        int sec = cal.get(Calendar.SECOND);
        int gmtOffset = cal.get(Calendar.ZONE_OFFSET);
        int gmtOffsetHour = (int)TimeUnit.HOURS.convert(gmtOffset, TimeUnit.MILLISECONDS);
        return  "" + year + "-"+String.format("%02d",month)+"-"+String.format("%02d",day)+"T"+String.format("%02d",hour)+":"+String.format("%02d",min)+":"+String.format("%02d",sec)+"+"+String.format("%02d",gmtOffsetHour)+":00";
    }
}
