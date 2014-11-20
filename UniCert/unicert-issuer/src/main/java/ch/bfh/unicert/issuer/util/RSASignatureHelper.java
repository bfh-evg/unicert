/*
 * Copyright (c) 2014 Berner Fachhochschule, Switzerland.
 * Bern University of Applied Sciences, Engineering and Information Technology,
 * Research Institute for Security in the Information Society, E-Voting Group,
 * Biel, Switzerland.
 *
 * Project UniBoard.
 *
 * Distributable under GPL license.
 * See terms of license at gnu.org.
 */
package ch.bfh.unicert.issuer.util;

import ch.bfh.unicrypt.crypto.schemes.signature.classes.RSASignatureScheme;
import ch.bfh.unicrypt.helper.converter.classes.ConvertMethod;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.BigIntegerToByteArray;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.ByteArrayToByteArray;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.StringToByteArray;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.helper.hash.HashMethod;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZMod;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Element;
import java.math.BigInteger;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.security.interfaces.RSAPrivateCrtKey;
import java.security.interfaces.RSAPublicKey;

public class RSASignatureHelper implements SignatureHelper {

    protected static final HashMethod HASH_METHOD = HashMethod.getInstance(
	    HashAlgorithm.SHA256,
	    ConvertMethod.getInstance(
		    BigIntegerToByteArray.getInstance(ByteOrder.BIG_ENDIAN),
		    ByteArrayToByteArray.getInstance(false),
		    StringToByteArray.getInstance(Charset.forName("UTF-8"))),
	    HashMethod.Mode.RECURSIVE);
    
	private BigInteger privateKey = null;
	private BigInteger publicKey = null;
	private final BigInteger modulus;

	public RSASignatureHelper(RSAPrivateCrtKey rsaPrivKey) {
		privateKey = rsaPrivKey.getPrivateExponent();
		modulus = rsaPrivKey.getModulus();
	}
	
	public RSASignatureHelper(RSAPublicKey rsaPublicKey) {
		publicKey = rsaPublicKey.getPublicExponent();
		modulus = rsaPublicKey.getModulus();
	}

	@Override
	public Element sign(Element message) {
		RSASignatureScheme rsaScheme
				= RSASignatureScheme.getInstance(message.getSet(), ZMod.getInstance(modulus), HASH_METHOD);
		Element privateKeyElement = rsaScheme.getSignatureKeySpace().getElement(privateKey);
		return rsaScheme.sign(privateKeyElement, message);
	}

    @Override
    public boolean verify(Element message, BigInteger signatureBI) {
	RSASignatureScheme rsaScheme
				= RSASignatureScheme.getInstance(message.getSet(), ZMod.getInstance(modulus), HASH_METHOD);
	
	Element signature = rsaScheme.getSignatureSpace().getElement(signatureBI);
	Element publicKeyElement = rsaScheme.getVerificationKeySpace().getElement(publicKey);
	
	return rsaScheme.verify(publicKeyElement, message, signature).getValue();
	
    }

}
