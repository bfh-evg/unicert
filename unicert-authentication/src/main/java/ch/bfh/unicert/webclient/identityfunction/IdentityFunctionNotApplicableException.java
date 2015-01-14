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
package ch.bfh.unicert.webclient.identityfunction;

/**
 * Exception thrown when trying to apply on identity function on incompatible
 * identity data
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class IdentityFunctionNotApplicableException extends Exception {

    public IdentityFunctionNotApplicableException(String message) {
        super(message);
    }
    
}
