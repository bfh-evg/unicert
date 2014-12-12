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
package ch.bfh.unicert.issuer.util;

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
    
    /**
     * Returns the URL of UniBoard Webservice instance
     * 
     * @return a string representation of the url
     */
    public String getUniBoardServiceURL();
    
    /**
     * Returns the ClientID for Google authentication
     * @return the ClientID for Google authentication
     */
    public String getGoogleClientID();

    /**
     * Returns the Client Secret for Google authentication
     * @return the Client Secret for Google authentication
     */
    public String getGoogleClientSecret();

    /**
     * Returns the URI where Google must redirect after the authentication
     * @return the URI where Google must redirect after the authentication
     */
    public String getGoogleRedirectURI();
    
    /**
     * Returns the section where the certificate must be posted on UniBoard
     * @return the section as String
     */ 
    public String getUniBoardSection();
    
    
    public X509Certificate getUniBoardCertificate();
    /**
     * Returns a helper object for the verification of the board signature
     * @return a signautre Helper object
     */
    public SignatureHelper getSignatureHelper();

    /**
     * Returns the URL of UniBoard Webservice WSDL
     * 
     * @return a string representation of the url
     */
    public String getUniBoardWsdlURL();
}
