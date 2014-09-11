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

import ch.bfh.unicert.issuer.IdentityData;
import ch.bfh.unicert.webclient.userdata.UserData;

/**
 * This interface represents a function that is applied on a user's data
 * before including them in the certificate. It allows to process and thus
 * control which data will be published in the certificate.
 * 
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public interface IdentityFunction {
    
    public IdentityData apply(UserData userData) throws IdentityFunctionNotApplicableException;    
    
}
