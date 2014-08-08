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
package ch.bfh.unicert.subsystem.cryptography;

import java.math.BigInteger;

/**
 * Class containing the information related to RSA required in the creation 
 * of an RSA certificate
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class RsaSetup implements CryptographicSetup{
    
    /**
     * The size of the RSA key
     */
    private final int size;
    /**
     * The RSA modulus
     */
    private final BigInteger n;
    
    private final BigInteger signature;
    
    private final BigInteger publicKey;
    private String signatureOtherInput;

    /**
     * Create an object representing an RSA setup
     * @param size the size of the keys required
     * @param n the RSA modulus
     */
    public RsaSetup(int size, BigInteger n, BigInteger publicKey, BigInteger signature ) {
        this.size = size;
        this.n = n;
        this.publicKey = publicKey;
        this.signature = signature;
    }

    /**
     * Get the size of the keys
     * @return the size of the keys
     */
    public int getSize() {
        return size;
    }

    /**
     * Get the RSA modulus
     * @return the RSA modulus
     */
    public BigInteger getN() {
        return n;
    }

    //TODO comments
    public BigInteger getSignature() {
        return signature;
    }

    public BigInteger getPublicKey() {
        return publicKey;
    }

    public String getSignatureOtherInput() {
        return signatureOtherInput;
    }

    public void setSignatureOtherInput(String signatureOtherInput) {
        this.signatureOtherInput = signatureOtherInput;
    }
    
    
}
