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
package ch.bfh.unicert.subsystem.util;

/**
 * This class defines the OID for the X509 extensions used by UniCert
 * 
 * An ExtensionOID object is always identifier by a unique OID string and name.
 * The unique OID is used in the X509 Certificate and the name is used in the 
 * Certificate class for human readibilty
 * 
 * OID 1.3.6.1.4.1.13305 is the OID owned by BFH
 * 
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public enum ExtensionOID {
    
    //2.16.840.1.113730.1.13 is a free text OID from Netscape http://www.alvestrand.no/objectid/2.16.840.1.113730.1.13.html
    
    /**
     * The OID representing the extension storing the identity provider used to
     * identify the owner of the certificate
     */
    IDENTITY_PROVIDER("1.3.6.1.4.1.13305.1.1", "identity_provider"),
    /**
     * The OID representing the extension storing the application identifier used to
     * identify for which application the certificate was issued
     */
    APPLICATION_IDENTIFIER("1.3.6.1.4.1.13305.1.2", "application_identifier"),
    /**
     * The OID representing the extension storing for which role the certificate valid
     */
    ROLE("1.3.6.1.4.1.13305.1.3", "role"),
    
    /**
     * A OID available for test
     */
    TEST("1.3.6.1.4.1.13305.1.99", "test");
    
    private final String OID;
    private final String name;
    
    /**
     * Create an Object representing an OID
     * @param oid the OID string in form "1.3.6.1.4.1.13305.x.x"
     * @param name the name describing the content refered by this OID
     */
    private ExtensionOID(String oid, String name){
        this.OID = oid;
        this.name = name;
    }
    
    /**
     * Get the OID string
     * @return the OID string
     */
    public String getOID(){
        return this.OID;
    }
    
    /**
     * Get the name describing the content refered by this OID
     * @return the name describing the content refered by this OID
     */
    public String getName(){
        return this.name;
    }
}
