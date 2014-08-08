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

import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import ch.bfh.unicrypt.crypto.schemes.hashing.classes.StandardHashingScheme;
import ch.bfh.unicrypt.helper.Alphabet;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.helper.hash.HashMethod;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringMonoid;
import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * This function is a specialization of the Standard SwitchAAI function which 
 * uses hash value of the mail adress as common name
 * 
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class AnonymizedSwitchAAIIdentityFunction extends StandardSwitchAAIIdentityFunction {

    private static final Logger logger = Logger.getLogger(AnonymizedSwitchAAIIdentityFunction.class.getName());

    @Override
    protected String selectCommonName(SwitchAAIUserData ud) throws IdentityFunctionNotApplicableException{
        
        StandardHashingScheme shs = StandardHashingScheme.getInstance(HashMethod.getInstance(HashAlgorithm.SHA1));

        String commonName = "";
        
        
        //Common name
        if (ud.getMail() != null) {
            commonName = ud.getMail();
            logger.log(Level.INFO, "Retrieved for common name: value={0}",
                    new Object[]{commonName});
        } else {
            commonName = ud.getMatriculationNumber();
            if (commonName != null) {
                logger.log(Level.INFO, "Retrieved for common name: value={0}",
                        new Object[]{commonName});
            } else {
                commonName = ud.getSwissEducationUID();
                if (commonName != null) {
                    logger.log(Level.INFO, "Retrieved for common name: value={0}",
                            new Object[]{commonName});
                } else {
                    commonName = ud.getPersonUID();
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
        }
        
                //TODO MAKE THIS WORK

        try{
            StringMonoid sm = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII);
            commonName = Base64.encode(shs.hash(sm.getElement(commonName)).getByteArray().getAll());
        }catch (Exception e){
            throw new IdentityFunctionNotApplicableException("122 Problem while anonimizing");
        }
        
        return commonName;
    }
        
}
