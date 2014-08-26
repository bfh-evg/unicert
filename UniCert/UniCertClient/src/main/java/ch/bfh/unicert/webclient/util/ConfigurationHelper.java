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
 * @author Severin Hauser &lt;severin.hauser@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public interface ConfigurationHelper {

    public String getKeyType();
    
    public String getKeySize();
    
    public String getPrimeP();
    
    public String getPrimeQ();
    
    public String getGenerator();
    
    public String getIdentityProvider();
    
    public String getApplicationIdentifier();
    
    public int getRole();
    
    public int getIdentityFunctionIndex();
    
}
