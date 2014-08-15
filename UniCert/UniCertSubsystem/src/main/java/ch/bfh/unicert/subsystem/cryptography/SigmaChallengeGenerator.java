/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ch.bfh.unicert.subsystem.cryptography;

import ch.bfh.unicrypt.crypto.proofsystem.challengegenerator.abstracts.AbstractSigmaChallengeGenerator;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.Z;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZElement;
import ch.bfh.unicrypt.math.algebra.general.classes.Pair;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Element;
import ch.bfh.unicrypt.math.algebra.general.interfaces.SemiGroup;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Set;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class SigmaChallengeGenerator extends AbstractSigmaChallengeGenerator {

    private Element proverId;
          
    protected SigmaChallengeGenerator(Set publicInputSpace, SemiGroup commitmentSpace, Z challengeSpace, Element proverId) {
	super(publicInputSpace, commitmentSpace, challengeSpace);
        this.proverId = proverId;
    }

    @Override
    protected ZElement abstractGenerate(Pair input) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
