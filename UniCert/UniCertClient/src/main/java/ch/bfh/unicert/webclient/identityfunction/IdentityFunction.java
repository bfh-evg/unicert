

package ch.bfh.unicert.webclient.identityfunction;

import ch.bfh.unicert.subsystem.IdentityData;
import ch.bfh.unicert.webclient.userdata.UserData;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public interface IdentityFunction {
    
    public IdentityData apply(UserData userData) throws IdentityFunctionNotApplicableException;    
    
}
