/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.bfh.unicert.subsystem.cryptography;

import ch.bfh.unicrypt.crypto.proofsystem.challengegenerator.abstracts.AbstractSigmaChallengeGenerator;
import ch.bfh.unicrypt.helper.array.ByteArray;
import ch.bfh.unicrypt.helper.converter.BigIntegerConverter;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.ByteArrayElement;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.ByteArrayMonoid;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.Z;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZElement;
import ch.bfh.unicrypt.math.algebra.general.classes.Pair;
import ch.bfh.unicrypt.math.algebra.general.classes.Triple;
import ch.bfh.unicrypt.math.algebra.general.classes.Tuple;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Element;
import ch.bfh.unicrypt.math.algebra.general.interfaces.SemiGroup;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Set;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.nio.ByteOrder;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class SigmaChallengeGenerator extends AbstractSigmaChallengeGenerator {

    private final String proverId;
    private final HashAlgorithm hashAlgorithm;
    private final String stringCharset;
    private final String concatenationSeparator;
    private final int elementEncodingBase;
    private final BigIntegerConverter converter;

    protected SigmaChallengeGenerator(Set publicInputSpace, SemiGroup commitmentSpace, Z challengeSpace, 
            String proverId, HashAlgorithm hashAlgorithm, String stringCharset, int elementEncodingBase, BigIntegerConverter bigIntegerConverter, String concatenationSeparator) {
        super(publicInputSpace, commitmentSpace, challengeSpace);
        this.proverId = proverId;
        this.hashAlgorithm = hashAlgorithm;
        this.stringCharset = stringCharset;
        this.concatenationSeparator = concatenationSeparator;
        this.elementEncodingBase = elementEncodingBase;
        this.converter = bigIntegerConverter;
    }

    @Override
    protected ZElement abstractGenerate(Pair input) {
        Element element0 = input.getAt(0);
        Element element1 = input.getAt(1);

        String element0Str = element0.getBigInteger().toString(elementEncodingBase);
        String element1Str = element1.getBigInteger().toString(elementEncodingBase);

        //String completeString = element0Str + this.concatenationSeparator + element1Str + this.concatenationSeparator + this.proverId;
        
                
        ByteArray messageHashed = null;
        try {
//            System.out.println("pub in dec: "+ element0.getBigInteger().toString(10));
            System.out.println("public input hex: "+ getHexValue(element0.getByteArray().getAll()));
//            System.out.println("pub in hashed bytes: "+ getHexValue(element0.getByteArray().getHashValue().getAll()));
            System.out.println("public input hashed: "+ getHexValue(element0.getHashValue().getAll()));
            System.out.println("commitment hashed: "+ getHexValue(element1.getHashValue().getAll()));
            ByteArrayElement b = ByteArrayMonoid.getInstance().getElementFrom(ByteArray.getInstance(proverId.getBytes(this.stringCharset)));
            //ByteArray b = ByteArray.getInstance(completeString.getBytes(this.stringCharset));
            System.out.println("other input: "+proverId);
            System.out.println("other input hashed: "+ getHexValue(b.getHashValue().getAll()));
            messageHashed = Triple.getInstance(element0, element1, b).getHashValue();
            System.out.println("Complete hash: "+ getHexValue(messageHashed.getAll()));
            //messageHashed = ByteArray.getInstance(completeString.getBytes(this.stringEncoding)).getHashValue(this.hashAlgorithm);
        } catch (UnsupportedEncodingException ex) {
            throw new IllegalArgumentException("String encoding not supported: "+this.stringCharset);
        }
        
        
        //Makes a positive big integer with the result of the hash function, and return the corresponding element in the
        //challenge space
        ZElement challenge = this.getChallengeSpace().getElement(new BigInteger(1,messageHashed.getAll()));
        System.out.println("Generated challenge: " + challenge);
        return challenge;
  
    }
    
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
     * The generated challenge depends on the public input, the commitment and the prover id. These values are
     * encoded as string and concatenated together using the given concatenation separator. Elements are first converted
     * to BigIntegers and then to string using the given base. The resulting string is then converted to a byte array using
     * the given encoding. This byte array is then hashed using the given hash function. The result is intepreted as 
     * BigInteger and its corresponding value in the challenge space is returned.
     * 
     * This default factory method uses SHA256 as Hash function, UTF-8 as string encoding (proved id), base 10 as BigInteger
     * encoding and "|" as concatenation separator.
     * 
     * @param publicInputSpace space containing the public input
     * @param commitmentSpace space containing the commitment
     * @param challengeSpace space containing the challenge
     * @param proverId string included in the challenge generation to link the proof to an entity
     * @return a challenge generator
     */
    public static SigmaChallengeGenerator getInstance(Set publicInputSpace, SemiGroup commitmentSpace, Z challengeSpace, String proverId){
        return new SigmaChallengeGenerator(publicInputSpace, commitmentSpace, challengeSpace, proverId,
            HashAlgorithm.SHA256, "UTF-8", 10, BigIntegerConverter.getInstance(ByteOrder.BIG_ENDIAN, 0),  "|");
    }

    /**
     * 
     * @param publicInputSpace
     * @param commitmentSpace
     * @param challengeSpace
     * @param proverId
     * @param hashAlgorithm
     * @param stringCharset
     * @param elementEncodingBase
     * @param concatenationSeparator
     * @return 
     */
    public static SigmaChallengeGenerator getInstance(Set publicInputSpace, SemiGroup commitmentSpace, 
            Z challengeSpace, String proverId, HashAlgorithm hashAlgorithm, String stringCharset, BigIntegerConverter bigIntegerConverter, int elementEncodingBase, String concatenationSeparator){
        return new SigmaChallengeGenerator(publicInputSpace, commitmentSpace, challengeSpace, proverId, hashAlgorithm, stringCharset, elementEncodingBase, bigIntegerConverter, concatenationSeparator);
    }
}
