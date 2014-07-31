/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.bfh.unicert.webclient.identityfunction;

import ch.bfh.unicert.subsystem.IdentityData;
import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class StandardSwitchAAIIdentityFunction implements IdentityFunction {

    private static final Logger logger = Logger.getLogger(StandardSwitchAAIIdentityFunction.class.getName());

    @Override
    public IdentityData apply(UserData userData) throws IdentityFunctionNotApplicableException {

        SwitchAAIUserData ud;
        if (userData instanceof SwitchAAIUserData) {
            ud = (SwitchAAIUserData) userData;
        } else {
            throw new IdentityFunctionNotApplicableException("The selected function is not applicable on the given user data");
        }

        Map otherValues = new HashMap();
               
        String commonName = this.selectCommonName(ud);

        String uniqueID = this.selectUniqueId(ud);
                                      
        return new IdentityData(commonName,  uniqueID, ud.getHomeOrganization(), ud.getStudyBranch(), null, null,
                null, null, null, ud.getIdentityProvider(), otherValues);
        
                
    }

    protected String selectCommonName(SwitchAAIUserData ud) throws IdentityFunctionNotApplicableException{
        //Common name
        String commonName = ud.getMail();
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

    protected String selectUniqueId(SwitchAAIUserData ud) throws IdentityFunctionNotApplicableException {
        // UID. Essential in the back-end.
        String uniqueID = ud.getSwissEducationUID();
        if (uniqueID != null) {
            logger.log(Level.INFO, "Retrieved for uid: value={0}",
                    new Object[]{uniqueID});
        } else {
            uniqueID = ud.getPersonUID();
            if (uniqueID != null) {
                logger.log(Level.INFO, "Retrieved for uid: value={0}",
                    new Object[]{uniqueID});
            } else {
                uniqueID = ud.getPersistentId();
                if (uniqueID != null) {
                    logger.log(Level.INFO, "Retrieved for uid: value={0}",
                        new Object[]{uniqueID});
                } else {
                    // Cannot initialize uid -- giving up.
                    logger.log(Level.SEVERE, "Cannot initialize uid -- giving up.");
                    throw new IdentityFunctionNotApplicableException("Important identity data missing to initialize unique id");
                }
            }
        }
        return uniqueID;
    }
    
}
