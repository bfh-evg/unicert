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

import ch.bfh.unicrypt.crypto.proofsystem.challengegenerator.abstracts.AbstractSigmaChallengeGenerator;
import ch.bfh.unicrypt.helper.array.ByteArray;
import ch.bfh.unicrypt.helper.converter.BigIntegerConverter;
import ch.bfh.unicrypt.helper.converter.StringConverter;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.helper.hash.HashMethod;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.ByteArrayElement;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.ByteArrayMonoid;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.Z;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZElement;
import ch.bfh.unicrypt.math.algebra.general.classes.Pair;
import ch.bfh.unicrypt.math.algebra.general.classes.Triple;
import ch.bfh.unicrypt.math.algebra.general.interfaces.SemiGroup;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Set;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.nio.ByteOrder;
import java.nio.charset.Charset;

/**
 * This class provides a Fiat-Shamir SigmaChallengeGenerator
 * 
 * Instead of using the RandomOracle as other implementation of the SigmaChallengeGenerator,
 * this class uses a hash function to compute the challenge.
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class FiatShamirChallengeGenerator extends AbstractSigmaChallengeGenerator {

    private final String otherInput;
    private final HashMethod hashMethod;
    private final StringConverter stringConverter;

    protected FiatShamirChallengeGenerator(Set publicInputSpace, SemiGroup commitmentSpace, Z challengeSpace, 
            String otherInput, HashMethod hashMethod, StringConverter stringConverter) {
        super(publicInputSpace, commitmentSpace, challengeSpace);
        this.otherInput = otherInput;
        this.hashMethod = hashMethod;
        this.stringConverter = stringConverter;
    }

    @Override
    protected ZElement abstractGenerate(Pair input) {
        //TODO remove and Move
//        Element element0 = input.getAt(0);
//        Element element1 = input.getAt(1);

        
                
//        ByteArray messageHashed = null;
//            System.out.println("pub in dec: "+ element0.getBigInteger().toString(10));
//            System.out.println("public input hex: "+ getHexValue(element0.getByteArray().getAll()));
//            System.out.println("pub in hashed bytes: "+ getHexValue(element0.getByteArray().getHashValue().getAll()));
//            System.out.println("public input hashed: "+ getHexValue(element0.getHashValue(hashMethod).getAll()));
//            System.out.println("commitment hashed: "+ getHexValue(element1.getHashValue(hashMethod).getAll()));
            ByteArrayElement b = ByteArrayMonoid.getInstance().getElementFrom(stringConverter.convertToByteArray(otherInput));
            
            //ByteArray b = ByteArray.getInstance(completeString.getBytes(this.stringCharset));
//            System.out.println("other input: "+proverId);
//            System.out.println("other input hashed: "+ getHexValue(b.getHashValue(hashMethod).getAll()));
         ByteArray   messageHashed = Triple.getInstance(input.getAt(0), input.getAt(1), b).getHashValue(hashMethod);
//            System.out.println("Complete hash: "+ getHexValue(messageHashed.getAll()));
            //messageHashed = ByteArray.getInstance(completeString.getBytes(this.stringEncoding)).getHashValue(this.hashAlgorithm);
        
        
        
        //Makes a positive big integer with the result of the hash function, and return the corresponding element in the
        //challenge space
        ZElement challenge = this.getChallengeSpace().getElement(new BigInteger(1,messageHashed.getAll()));
//        System.out.println("Generated challenge: " + challenge);
        return challenge;
  
    }
    
    //TODO remove
    private String getHexValue(byte[] array) {
        char[] symbols = "0123456789ABCDEF".toCharArray();
        char[] hexValue = new char[array.length * 2];

        for (int i = 0; i < array.length; i++) {
            //convert the byte to an int
            int current = array[i] & 0xff;
            //determine the Hex symbol for the last 4 bits
            hexValue[i * 2 + 1] = symbols[current & 0x0f];
            //determine the Hex symbol for the first 4 bits
            hexValue[i * 2] = symbols[current >> 4];
        }
        return String.valueOf(hexValue);
    }
    
    /**
     * Creates a SigmaChallenge generator using a hash function to generate the challenge
     * 
     * The generated challenge depends on the public input, the commitment and the other input. These values are
     * combined into a triple and hashed together using the given HashMethod. The string called otherInput is 
     * converted to a byte array element using the given encoding previous to construct the triple. The result
     * is intepreted as a positive BigInteger and its corresponding value in the challenge space is returned.
     * 
     * This default factory method uses SHA256 as Hash function, big endian as BigIntegerConverter, 
     * ByteTree as hash mode, and UTF-8 as string encoding (other input).
     * 
     * @param publicInputSpace space containing the public input
     * @param commitmentSpace space containing the commitment
     * @param challengeSpace space containing the challenge
     * @param otherInput other stuff that must be hash with the public input and the commitment to obtain the challenge
     * @return a challenge generator
     */
    public static FiatShamirChallengeGenerator getInstance(Set publicInputSpace, SemiGroup commitmentSpace, Z challengeSpace, String otherInput){
        return new FiatShamirChallengeGenerator(publicInputSpace, commitmentSpace, challengeSpace, otherInput,
            HashMethod.getInstance(HashAlgorithm.SHA256, BigIntegerConverter.getInstance(ByteOrder.BIG_ENDIAN, 0), HashMethod.Mode.RECURSIVE), StringConverter.getInstance(Charset.forName("UTF-8")));
    }

    /**
     * 
     * Creates a SigmaChallenge generator using a hash function to generate the challenge
     * 
     * The generated challenge depends on the public input, the commitment and the other input. These values are
     * combined into a triple and hashed together using the given HashMethod. The string called otherInput is 
     * converted to a byte array element using the given encoding previous to construct the triple. The result
     * is intepreted as a positive BigInteger and its corresponding value in the challenge space is returned.
     * 
     * This default factory method uses SHA256 as Hash function, big endian as BigIntegerConverter, 
     * ByteTree as hash mode, and UTF-8 as string encoding (other input).
     * 
     * @param publicInputSpace space containing the public input
     * @param commitmentSpace space containing the commitment
     * @param challengeSpace space containing the challenge
     * @param otherInput other stuff that must be hash with the public input and the commitment to obtain the challenge
     * @param hashMethod Hash method to use to generate the challenge
     * @param stringConverter the string converter to be used ton convert otherInput into a ByteArray
     * @return a challenge generator
     */
    public static FiatShamirChallengeGenerator getInstance(Set publicInputSpace, SemiGroup commitmentSpace, 
            Z challengeSpace, String otherInput, HashMethod hashMethod, StringConverter stringConverter){
        return new FiatShamirChallengeGenerator(publicInputSpace, commitmentSpace, challengeSpace, otherInput, hashMethod, stringConverter );
    }
}