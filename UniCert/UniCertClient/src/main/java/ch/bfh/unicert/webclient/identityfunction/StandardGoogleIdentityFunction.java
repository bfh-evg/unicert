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

import ch.bfh.unicert.subsystem.IdentityData;
import ch.bfh.unicert.subsystem.util.ExtensionOID;
import ch.bfh.unicert.webclient.userdata.GoogleUserData;
import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Identity function allowing to process Google user data This function the
 * mail address as common name appearing in the certificate. 
 *
 * 
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class StandardGoogleIdentityFunction implements IdentityFunction {

    private static final Logger logger = Logger.getLogger(StandardGoogleIdentityFunction.class.getName());

    @Override
    public IdentityData apply(UserData userData) throws IdentityFunctionNotApplicableException {

        GoogleUserData ud;
        if (userData instanceof GoogleUserData) {
            ud = (GoogleUserData) userData;
        } else {
            throw new IdentityFunctionNotApplicableException("123 The selected function is not applicable on the given user data");
        }

        if (!ud.isMailVerified()) {
            throw new IdentityFunctionNotApplicableException("123 The selected function is not applicable on the given user data");
        }

        Map otherValues = new HashMap();
        putInOtherValues(otherValues, ud);

        String commonName = this.selectCommonName(ud);

        String uniqueID = this.selectUniqueId(ud);

        return createIdentityData(commonName, uniqueID, ud.getDomain(), null, null, null, null,
                 ud.getFirstName(), ud.getLastName(), ud.getIdentityProvider(), otherValues);

    }
    
    protected void putInOtherValues(Map otherValues, GoogleUserData ud){
        otherValues.put(ExtensionOID.LANG, ud.getLang());
    }

    protected String selectCommonName(GoogleUserData ud) throws IdentityFunctionNotApplicableException {
        //Common name
        String commonName = ud.getMail();
        if (ud.getMail() != null) {
            logger.log(Level.INFO, "Retrieved for common name: value={0}",
                    new Object[]{commonName});
        } else {
            commonName = ud.getCompleteName();
            if (commonName != null) {
                logger.log(Level.INFO, "Retrieved for common name: value={0}",
                        new Object[]{commonName});
            } else {
                commonName = ud.getUniqueIdentifier();
                if (commonName != null) {
                    logger.log(Level.INFO, "Retrieved for common name: value={0}",
                            new Object[]{commonName});
                } else {
                    // Cannot initialize voter id -- giving up.
                    logger.log(Level.SEVERE, "Cannot initialize common name -- giving up.");
                    throw new IdentityFunctionNotApplicableException("121 Important identity data missing to initialize common name");
                }
            }
        }
        return commonName;
    }

    protected String selectUniqueId(GoogleUserData ud) throws IdentityFunctionNotApplicableException {
        // UID. Essential in the back-end.
        String uniqueID = ud.getUniqueIdentifier();
        if (uniqueID != null) {
            logger.log(Level.INFO, "Retrieved for uid: value={0}",
                    new Object[]{uniqueID});
        } else {
            // Cannot initialize uid -- giving up.
            logger.log(Level.SEVERE, "Cannot initialize uid -- giving up.");
            throw new IdentityFunctionNotApplicableException("124 Important identity data missing to initialize unique id");
        }
        return uniqueID;
    }
    
    protected IdentityData createIdentityData(String commonName, String uniqueId, String organisation, String organisationUnit,
            String countryName, String state, String locality, String surname, String givenName,
            String identityProvider, Map<ExtensionOID, String> otherValues ){
        return new IdentityData(commonName, uniqueId, organisation, organisationUnit, countryName, state,
                locality, surname, givenName, identityProvider, otherValues);
    }

}
