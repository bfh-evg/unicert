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

import static ch.bfh.unicert.issuer.CertificateIssuerBean.CONVERT_METHOD;
import static ch.bfh.unicert.issuer.CertificateIssuerBean.HASH_METHOD;
import ch.bfh.unicrypt.crypto.schemes.signature.classes.RSASignatureScheme;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZMod;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Element;
import java.math.BigInteger;
import java.security.interfaces.RSAPrivateCrtKey;
import java.security.interfaces.RSAPublicKey;

public class RSASignatureHelper implements SignatureHelper {

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
		RSASignatureScheme rsaScheme = RSASignatureScheme.getInstance(message.getSet(), ZMod.getInstance(modulus),
				CONVERT_METHOD, HASH_METHOD);
		Element privateKeyElement = rsaScheme.getSignatureKeySpace().getElement(privateKey);
		return rsaScheme.sign(privateKeyElement, message);
	}

	@Override
	public boolean verify(Element message, BigInteger signatureBI) {
		RSASignatureScheme rsaScheme = RSASignatureScheme.getInstance(message.getSet(), ZMod.getInstance(modulus),
				CONVERT_METHOD, HASH_METHOD);

		Element signature = rsaScheme.getSignatureSpace().getElement(signatureBI);
		Element publicKeyElement = rsaScheme.getVerificationKeySpace().getElement(publicKey);

		return rsaScheme.verify(publicKeyElement, message, signature).getValue();

	}

}
