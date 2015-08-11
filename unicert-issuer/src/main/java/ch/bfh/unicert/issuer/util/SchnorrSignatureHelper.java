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
import ch.bfh.unicrypt.crypto.schemes.signature.classes.SchnorrSignatureScheme;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Element;
import ch.bfh.unicrypt.math.algebra.multiplicative.classes.GStarModElement;
import ch.bfh.unicrypt.math.algebra.multiplicative.classes.GStarModPrime;
import java.math.BigInteger;
import java.security.interfaces.DSAPrivateKey;
import java.security.interfaces.DSAPublicKey;

public class SchnorrSignatureHelper implements SignatureHelper {

	private final BigInteger modulus;
	private final BigInteger orderFactor;
	private final BigInteger generator;
	private BigInteger privateKey = null;
	private BigInteger publicKey = null;

	public SchnorrSignatureHelper(DSAPrivateKey dsaPrivKey) {
		privateKey = dsaPrivKey.getX();
		modulus = dsaPrivKey.getParams().getP();
		orderFactor = dsaPrivKey.getParams().getQ();
		generator = dsaPrivKey.getParams().getG();
	}

	public SchnorrSignatureHelper(DSAPublicKey dsaPublicKey) {
		publicKey = dsaPublicKey.getY();
		modulus = dsaPublicKey.getParams().getP();
		orderFactor = dsaPublicKey.getParams().getQ();
		generator = dsaPublicKey.getParams().getG();
	}

	@Override
	public Element sign(Element message) {
		GStarModPrime g_q = GStarModPrime.getInstance(modulus, orderFactor);
		GStarModElement g = g_q.getElement(generator);
		SchnorrSignatureScheme schnorr = SchnorrSignatureScheme.getInstance(message.getSet(), g,
				CONVERT_METHOD, HASH_METHOD);
		Element privateKeyElement = schnorr.getSignatureKeySpace().getElement(privateKey);
		return schnorr.sign(privateKeyElement, message);
	}

	@Override
	public boolean verify(Element message, BigInteger signatureBI) {
		GStarModPrime g_q = GStarModPrime.getInstance(modulus, orderFactor);
		GStarModElement g = g_q.getElement(generator);
		SchnorrSignatureScheme schnorr = SchnorrSignatureScheme.getInstance(message.getSet(), g,
				CONVERT_METHOD, HASH_METHOD);
		Element signature = schnorr.getSignatureSpace().getElementFrom(signatureBI);

		Element publicKeyElement = schnorr.getVerificationKeySpace().getElement(publicKey);

		return schnorr.verify(publicKeyElement, message, signature).getValue();

	}

}
