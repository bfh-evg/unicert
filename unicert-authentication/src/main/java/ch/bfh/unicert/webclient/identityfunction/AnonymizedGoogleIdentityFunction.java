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
import ch.bfh.unicert.webclient.userdata.GoogleUserData;
import ch.bfh.unicrypt.helper.Alphabet;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.helper.hash.HashMethod;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringMonoid;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * This function is a specialization of the Standard Google function which
 * uses SHA-256 hash value of the mail adress as common name
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class AnonymizedGoogleIdentityFunction extends StandardGoogleIdentityFunction {

    private static final Logger logger = Logger.getLogger(AnonymizedGoogleIdentityFunction.class.getName());

    @Override
    protected void putInOtherValues(Map otherValues, GoogleUserData ud){
    }
    
    @Override
    protected String selectCommonName(GoogleUserData ud) throws IdentityFunctionNotApplicableException {

        String commonName = "";

        //Common name
        if (ud.getMail() != null) {
            commonName = ud.getMail();
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
        
        //Anonymization of commonName by hashing it with SHA256
        try {
            StringMonoid sm = StringMonoid.getInstance(Alphabet.UNICODE_BMP);
            commonName = getHexValue(sm.getElement(commonName).getHashValue(HashMethod.getInstance(HashAlgorithm.SHA256)).getBytes());
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Problem while anonimizing: {0}", e.getMessage());
            throw new IdentityFunctionNotApplicableException("122 Problem while anonimizing");
        }

        return commonName;
    }
    
    @Override
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
        
        //Anonymization of commonName by hashing it with SHA256
        try {
            StringMonoid sm = StringMonoid.getInstance(Alphabet.UNICODE_BMP);
            uniqueID = getHexValue(sm.getElement(uniqueID).getHashValue(HashMethod.getInstance(HashAlgorithm.SHA256)).getBytes());
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Problem while anonimizing: {0}", e.getMessage());
            throw new IdentityFunctionNotApplicableException("122 Problem while anonimizing");
        }
        
        return uniqueID;
    }
    
    @Override
    protected IdentityData createIdentityData(String commonName, String uniqueId, String organisation, String organisationUnit,
            String countryName, String state, String locality, String surname, String givenName,
            String identityProvider, Map<ExtensionOID, String> otherValues ){
        return new IdentityData(commonName, uniqueId, organisation, organisationUnit, countryName, state,
                locality, null, null, identityProvider, otherValues);
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

}
