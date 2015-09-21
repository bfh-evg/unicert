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
import ch.bfh.unicert.issuer.util.ExtensionOID;
import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * This function is a specialization of the Standard SwitchAAI function which does not use the mail adress as common
 * name, nor the MatriculationNumber, nor the PersonUID
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class ZurichSwitchAAIIdentityFunction extends StandardSwitchAAIIdentityFunction {

	private static final Logger logger = Logger.getLogger(ZurichSwitchAAIIdentityFunction.class.getName());

	@Override
	protected String selectCommonName(SwitchAAIUserData ud) throws IdentityFunctionNotApplicableException {
        // Let's determine the common name. Notice that
		// - matriculation number (original idea) is not provided
		// - e-mail address cannot be used for Univ. of Zurich
		// ==> special case for Univ. of Zurich
		// Home organization.
		String commonName = ud.getSwissEducationUID();
		if (commonName != null) {
			logger.log(Level.INFO, "Retrieved for common name: value={0}",
					new Object[]{commonName});
		} else {
			commonName = ud.getPersistentId();
			if (commonName != null) {
				logger.log(Level.INFO, "Retrieved for common name: value={0}",
						new Object[]{commonName});
			} else {
				// Cannot initialize voter id -- giving up.
				logger.log(Level.SEVERE, "Cannot initialize common name -- giving up.");
				throw new IdentityFunctionNotApplicableException("121 Important identity data missing to initialize common name");
			}
		}

		return commonName;
	}

	@Override
	protected IdentityData createIdentityData(String commonName, String uniqueId, String organisation, String organisationUnit,
			String countryName, String state, String locality, String surname, String givenName,
			String identityProvider, Map<ExtensionOID, String> otherValues) {
		return new IdentityData(commonName, uniqueId, organisation, organisationUnit, countryName, state,
				locality, null, null, identityProvider, otherValues);
	}
}
