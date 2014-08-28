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
package ch.bfh.unicert.webclient.util;


/**
 * Interface to the configuration helper.
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public interface ConfigurationHelper {

    /**
     * Get the type of key that must be generated
     * 
     * @return 'RSA' for RSA keys or 'DiscreteLog' for DSA/Schnorr keys
     */
    public String getKeyType();
    
    /**
     * Only for RSA keys: the size of the modulo
     * @return the size of the modulo
     */
    public String getKeySize();
    
    /**
     * Only for DiscreteLog: value of prime p
     * @return value of prime p
     */
    public String getPrimeP();
    
    /**
     * Only for DiscreteLog: value of prime q
     * @return value of prime q
     */
    public String getPrimeQ();
    
    /**
     * Only for DiscreteLog: value of the generator
     * @return value of the generator
     */
    public String getGenerator();
    
    /**
     * Get the supported identity provider
     * 
     * If multiple idp are supported, the must be separated by a comma, without space
     * 
     * @return the name of the identity providers supported, comma separated
     */
    public String getIdentityProvider();
    
    /**
     * Get the identifer of the application the certificate will be issued for
     * @return identifer of the application
     */
    public String getApplicationIdentifier();
    
    /**
     * The role the certificate will be issued for
     * 
     * In UniVote:
     * 1: Voter
     * 2: Tallier
     * 3: Mixer
     * 
     * @return the role
     */
    public int getRole();
    
    /**
     * Get the index of the identity function that must be applied to the identity token
     * 
     * 1: standard function for SwitchAAI tokens
     * 2: anonymizing function for SwitchAAI tokens
     * 3: special function for University of Zurich, SwitchAAI tokens
     * 
     * @return the index of the function
     */
    public int getIdentityFunctionIndex();
    
}
