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

import java.io.Serializable;


/**
 * This interface represents the identity data read from the identity providers
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public interface UserData extends Serializable {
    
    /**
     * Provides the unique identifier of the user of the current session read
     * from the identity provider
     * @return the unique identifier
     */
    public String getUniqueIdentifier();
    
    /**
     * Provides the identity provider that was used to authenticate the user
     * @return the name of the identity provider
     */
    public String getIdentityProvider();
    
    /**
     * Provides the email address of the user of the current session read
     * from the identity provider
     * @return 
     */
    public String getMail();
        
}
