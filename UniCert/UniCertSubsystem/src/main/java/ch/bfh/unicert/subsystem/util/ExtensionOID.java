/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ch.bfh.unicert.subsystem.util;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public enum ExtensionOID {
    
    IDENTITY_PROVIDER("1.3.6.1.4.1.13305.1.1", "identity_provider"),
    APPLICATION_IDENTIFIER("1.3.6.1.4.1.13305.1.2", "application_identifier"),
    ROLE("1.3.6.1.4.1.13305.1.3", "role"),
    
    TEST("1.3.6.1.4.1.13305.1.99", "test");
    
    private String OID;
    private String name;
    
    private ExtensionOID(String oid, String name){
        this.OID = oid;
        this.name = name;
    }
    
    public String getOID(){
        return this.OID;
    }
    
    public String getName(){
        return this.name;
    }
}
