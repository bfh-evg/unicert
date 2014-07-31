/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class AnonymizedSwitchAAIIdentityFunction extends StandardSwitchAAIIdentityFunction {

    private static final Logger logger = Logger.getLogger(AnonymizedSwitchAAIIdentityFunction.class.getName());

    @Override
    protected String selectCommonName(SwitchAAIUserData ud) throws IdentityFunctionNotApplicableException{
        
        StandardHashingScheme shs = StandardHashingScheme.getInstance(HashMethod.getInstance(HashAlgorithm.SHA1));

        //TODO alphabet?
        StringMonoid sm = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII);
        String commonName = Base64.encode(shs.hash(sm.getElement(ud.getMail())).getByteArray().getAll());
        
        //Common name
        if (ud.getMail() != null) {
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
                        throw new IdentityFunctionNotApplicableException("Important identity data missing to initialize common name");
                    }
                }
            }
        }
        return commonName;
    }
        
}
