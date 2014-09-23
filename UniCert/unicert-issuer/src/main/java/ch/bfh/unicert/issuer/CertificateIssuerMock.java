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

import ch.bfh.unicert.issuer.exceptions.CertificateCreationException;

/**
 * Mock class for the certificate issuer bean used for unit testing
 * 
 * This class overrides the method posting the certificate on the board, since this
 * feature is not available in local test
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class CertificateIssuerMock extends CertificateIssuerBean {

    @Override
    protected void postOnUniBoard(Certificate cert, String endpointURL) throws CertificateCreationException {
        //Does nothing
    }

    
}
