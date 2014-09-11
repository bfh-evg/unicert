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
package ch.bfh.unicert.webclient.beans.util;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

/**
 * Class providing pseudo random values
 * @author Philipp Locher
 */
public class RandomDistribution {
	
	private static final SecureRandom random = RandomDistribution.init();
	
	private static SecureRandom init() {
		SecureRandom random;
		try {
			random = SecureRandom.getInstance("SHA1PRNG");
		} catch( final NoSuchAlgorithmException e ) {
			random = new SecureRandom();
		}
		random.nextBoolean();
		return random;
	}
	
	/*
	 * Returns the requested amount of random bytes.
	 * 
	 * @param size Number of bytes.
	 * @returm A new byte array filled up with random bytes.
	 */
	public static byte[] getRandomValue( int size ) {
		size = Math.max(1, size);
		byte[] bytes = new byte[size];
		random.nextBytes(bytes);
		return bytes;
	}
}
