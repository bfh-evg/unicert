/*
 * Copyright (c) 2013 Berner Fachhochschule, Switzerland.
 * Bern University of Applied Sciences, Engineering and Information Technology,
 * Research Institute for Security in the Information Society, E-Voting Group,
 * Biel, Switzerland.
 *
 * Project UniVote.
 *
 * Distributable under GPL license.
 * See terms of license at gnu.org.
 */
package ch.bfh.unicert.subsystem.util;

import java.math.BigInteger;
import java.security.cert.X509Certificate;
import java.security.interfaces.RSAPrivateCrtKey;

/**
 * Interface to the configuration helper.
 *
 * @author Severin Hauser &lt;severin.hauser@bfh.ch&gt;
 */
public interface ConfigurationHelper {

    /**
     * Defines the radix to be used in translating BigInteger values into
     * strings and vice versa. JPA entities use a string representation for
     * BigInteger instances; entity classes are assumed to use this constant for
     * the conversion in either direction.
     * <p>
     */
//    int RADIX = 10;

    /**
     * Returns the key store alias of the certificate issuer.
     *
     * @return an alias
     */
//    public String getIssuerId();

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

//    /**
//     * Returns public Schnorr parameter p.
//     *
//     * @return parameter p
//     */
//    public BigInteger getPrime();
//
//    /**
//     * Returns public Schnorr parameter q.
//     *
//     * @return parameter q
//     */
//    public BigInteger getGroupOrder();
//
//    /**
//     * Returns public Schnorr parameter g.
//     *
//     * @return parameter g
//     */
//    public BigInteger getGenerator();

    /**
     * Returns the number of years the certificate will be valid for.
     *
     * @return number of years
     */
    public Integer getValidityYears();
}
