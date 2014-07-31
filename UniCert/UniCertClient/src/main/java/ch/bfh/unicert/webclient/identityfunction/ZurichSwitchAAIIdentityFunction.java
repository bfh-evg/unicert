/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.bfh.unicert.webclient.identityfunction;

import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
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
                throw new IdentityFunctionNotApplicableException("Important identity data missing to initialize common name");
            }
        }
        
        return commonName;
    }
    
}
