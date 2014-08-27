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

/**
 * This enum lists the supported identity providers 
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public enum IdentityProvider {
    
    SWITCH_AAI("SwitchAAI"),
    GOOGLE("Google");
    
    private final String key;
    
    private IdentityProvider(String key){
        this.key = key;
    }

    public String getKey() {
        return this.key;
    }

}
