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
import ch.bfh.unicrypt.helper.Alphabet;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.helper.hash.HashMethod;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringMonoid;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * This function is a specialization of the Standard SwitchAAI function which
 * uses hash value of the mail adress as common name and the hash of the unique id as unique id
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class AnonymizedSwitchAAIIdentityFunction extends StandardSwitchAAIIdentityFunction {

    private static final Logger logger = Logger.getLogger(AnonymizedSwitchAAIIdentityFunction.class.getName());

    @Override
    protected void putInOtherValues(Map otherValues, SwitchAAIUserData ud){
    }
    
    @Override
    protected String selectCommonName(SwitchAAIUserData ud) throws IdentityFunctionNotApplicableException {

        String commonName = super.selectCommonName(ud);

        //Anonymization of commonName by hashing it with SHA256
        try {
            StringMonoid sm = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII);
            commonName = getHexValue(sm.getElement(commonName).getHashValue(HashMethod.getInstance(HashAlgorithm.SHA256)).getBytes());
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Problem while anonimizing: {0}", e.getMessage());
            throw new IdentityFunctionNotApplicableException("122 Problem while anonimizing");
        }

        return commonName;
    }
    
    @Override
    protected String selectUniqueId(SwitchAAIUserData ud) throws IdentityFunctionNotApplicableException {

        String uniqueID = super.selectUniqueId(ud);
        
        //Anonymization of commonName by hashing it with SHA256
        try {
            StringMonoid sm = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII);
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
