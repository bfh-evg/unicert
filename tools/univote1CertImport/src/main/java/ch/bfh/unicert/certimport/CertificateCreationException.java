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
package ch.bfh.unicert.certimport;

/**
 * Exception throw when the creation of the certificate failed
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class CertificateCreationException extends Exception {

    public CertificateCreationException(String message) {
        super(message);
    }
    
}
