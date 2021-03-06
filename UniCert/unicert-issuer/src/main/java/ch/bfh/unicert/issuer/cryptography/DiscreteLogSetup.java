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
package ch.bfh.unicert.issuer.cryptography;

import ch.bfh.unicrypt.helper.factorization.Prime;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZMod;
import ch.bfh.unicrypt.math.algebra.multiplicative.classes.GStarModElement;
import ch.bfh.unicrypt.math.algebra.multiplicative.classes.GStarModPrime;
import java.math.BigInteger;
import java.util.logging.Logger;

/**
 * Class containing the information related to DSA required in the creation 
 * of an DSA/Elgamal certificate
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class DiscreteLogSetup implements CryptographicSetup{

    private static final Logger logger = Logger.getLogger(DiscreteLogSetup.class.getName());
    /**
     * Size of the keys
     */ 
    private final int size;
    
    /**
     * Cyclic modular group
     */
    private final GStarModPrime G_q;
    
    /**
     * The modular additive group of order q
     */
    private final ZMod Z_q;
    /**
     * Generator of the cyclic group
     */
    private final GStarModElement generator;
    /**
     * Safe prime
     */
    private final Prime p;
    private final Prime q;
    
    private final GStarModElement publicKey;
    private final BigInteger proofCommitment;
    private final BigInteger proofResponse;
    private  String proofOtherInput;
    private final BigInteger proofChallenge;

    /**
     * Create an object representing an discrete log (DSA, Elgamal) setup
     * @param size size of the keys
     * @param g generator of the cyclic group
     * @param p prime value
     * @param q prime value
     * @param pk public key
     * @param proofCommitment commitment part of the proof of knowledge of the private key
     * @param proofChallenge challenge part of the proof of knowledge of the private key
     * @param proofResponse response part of the proof of knowledge of the private key
     */
    public DiscreteLogSetup(int size, BigInteger g, BigInteger p, BigInteger q, BigInteger pk, BigInteger proofCommitment, BigInteger proofChallenge, BigInteger proofResponse) {
        this.size =size;
        
        this.p = Prime.getInstance(p);
        this.q = Prime.getInstance(q);

        this.G_q = GStarModPrime.getInstance(p, q);
	this.Z_q = G_q.getZModOrder();
        this.generator = G_q.getElement(g);
        
        this.publicKey = G_q.getElement(pk);
        this.proofCommitment = proofCommitment;
        this.proofChallenge = proofChallenge;
        this.proofResponse = proofResponse;
    }
    
    /**
     * Get the size of the keys
     * @return the size of the keys
     */
    public int getSize() {
        return size;
    }

    /**
     * Get the modular cyclic group
     * @return the modular cyclic group
     */
    public GStarModPrime getG_q() {
        return G_q;
    }

    /**
     * Get the modular additive group of order q
     * @return the modular additive group of order q
     */
    public ZMod getZ_q() {
        return Z_q;
    }

    /**
     * Get the generator of the cyclic group
     * @return the generator of the cyclic group
     */
    public GStarModElement getGenerator() {
        return generator;
    }
    
    /**
     * Get the safe prime
     * @return the safe prime
     */
    public Prime getP() {
        return p;
    }

    /**
     * Get the public key
     * @return the public key
     */
    public GStarModElement getPublicKey() {
        return publicKey;
    }

    /**
     * Get the commitment part of the proof of knowledge of the secret key
     * @return the commitment part of the proof
     */
    public BigInteger getProofCommitment() {
        return proofCommitment;
    }
    
    /**
     * Get the challenge part of the proof of knowledge of the secret key
     * @return the challenge part of the proof
     */
    public BigInteger getProofChallenge() {
        return proofChallenge;
    }
    
    /**
     * Get the response part of the proof of knowledge of the secret key
     * @return the response part of the proof
     */
    public BigInteger getProofResponse() {
        return proofResponse;
    }
    
    /**
     * Get the string containing other values that were linked in the proof
     * @return the string of values included in the proof
     */
    public String getProofOtherInput() {
        return proofOtherInput;
    }

    /**
     * Set the string containing other values that were linked in the proof
     * @param proofPublicInput the string of values included in the proof
     */
    @Override
    public void setSignatureOtherInput(String proofPublicInput) {
        this.proofOtherInput = proofPublicInput;
    }
    
    
   
    
    
}
