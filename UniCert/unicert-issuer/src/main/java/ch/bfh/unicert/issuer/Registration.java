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

import ch.bfh.unicert.issuer.cryptography.CryptographicSetup;
import ch.bfh.unicert.issuer.exceptions.CertificateCreationException;
import java.math.BigInteger;
import javax.ejb.Local;

/**
 * This interface defines the operation supported by the registration
 * system as seen from the registration proxy.
 * <p>
 * Operations returning data return an object that can be converted to JSON format
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@Local
public interface Registration {
    
    /**
     * Request a certificate providing the necessary information
     * @param cs Cryptographic setup corresponding to the type of certificate wanted (DSA, RSA)
     * @param publicKey the public key to certify
     * @param idData identity information over the requester
     * @param applicationIdentifier identifier of the application the certificate is issued for
     * @param role role the certificate is issued for
     * @param signature signature or proof of knowledge of the private
     * @param originalMessage message that was originally signed
     * @return a Certificate object containing the X509 certificate
     * @throws CertificateCreationException if the certificate could not be created
     */
    public Certificate createCertificate(CryptographicSetup cs, IdentityData idData,
            String applicationIdentifier, int role ) throws CertificateCreationException;

}
