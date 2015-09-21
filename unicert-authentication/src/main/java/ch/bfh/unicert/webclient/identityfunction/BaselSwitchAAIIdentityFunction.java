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
package ch.bfh.unicert.webclient.identityfunction;

import ch.bfh.unicert.issuer.IdentityData;
import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import ch.bfh.unicert.webclient.userdata.UserData;
import ch.bfh.unicrypt.helper.array.classes.ByteArray;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.StringToByteArray;
import ch.bfh.unicrypt.helper.converter.classes.string.ByteArrayToString;
import ch.bfh.unicrypt.helper.converter.interfaces.Converter;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import java.nio.charset.Charset;

/**
 * This function is a specialization of the standard Switch-AAI function used
 * for Basel. The hashed matriculation number is used as common name.
 * <p>
 * @author Philipp
 */
public class BaselSwitchAAIIdentityFunction
	   implements IdentityFunction {

	protected static final HashAlgorithm HASH_ALGORITHM = HashAlgorithm.SHA256;
	protected static final Converter<String, ByteArray> STRING_TO_BYTEARRAY = StringToByteArray.getInstance(Charset.forName("UTF-8"));
	protected static final Converter<ByteArray, String> BYREARRAY_TO_STRING = ByteArrayToString.getInstance(ByteArrayToString.Radix.HEX);

	@Override
	public IdentityData apply(UserData userData) throws IdentityFunctionNotApplicableException {

		if (!(userData instanceof SwitchAAIUserData)) {
			throw new IdentityFunctionNotApplicableException("123 The selected function is not applicable on the given user data");
		}
		SwitchAAIUserData ud = (SwitchAAIUserData) userData;

		String commonName = ud.getMatriculationNumber();
		if (commonName == null) {
			throw new IdentityFunctionNotApplicableException("121 Required matriculation number missing");
		}

		try {
			commonName = BYREARRAY_TO_STRING.convert(HASH_ALGORITHM.getHashValue(STRING_TO_BYTEARRAY.convert(commonName)));
		} catch (Exception e) {
			throw new IdentityFunctionNotApplicableException("122 Problem while anonimizing: " + e);
		}

		return new IdentityData(commonName, null, ud.getHomeOrganization(), null, null, null, null, null, null, ud.getIdentityProvider(), null);
	}

}
