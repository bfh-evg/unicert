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
package ch.bfh.unicert.subsystem.util;

import java.security.cert.X509Certificate;
import java.security.interfaces.RSAPrivateCrtKey;

/**
 * Interface to the configuration helper.
 *
 * @author Severin Hauser &lt;severin.hauser@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public interface ConfigurationHelper {

    /**
     * Returns the issuer certificate.
     *
     * @return an x509 certificate
     */
    public X509Certificate getIssuerCertificate();

    /**
     * Returns the private RSA key of the issuer for signing.
     *
     * @return a private RSA key
     */
    public RSAPrivateCrtKey getPrivateRSAKey();

    /**
     * Returns the number of years the certificate will be valid for.
     *
     * @return number of years
     */
    public Integer getValidityYears();
}
