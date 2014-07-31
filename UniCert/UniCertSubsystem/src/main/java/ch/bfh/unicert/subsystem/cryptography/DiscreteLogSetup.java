/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ch.bfh.unicert.subsystem.cryptography;

import ch.bfh.unicrypt.helper.factorization.SafePrime;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZMod;
import ch.bfh.unicrypt.math.algebra.multiplicative.classes.GStarModElement;
import ch.bfh.unicrypt.math.algebra.multiplicative.classes.GStarModSafePrime;
import java.math.BigInteger;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class DiscreteLogSetup implements CryptographicSetup{

    private int size;
    
    private final GStarModSafePrime G_q;
    private final ZMod Z_q;
    private final GStarModElement generator;
    private final SafePrime p;

    public DiscreteLogSetup(int csSize, BigInteger g, BigInteger prime) {
        this.size =csSize;
        
        p = SafePrime.getInstance(prime);
	G_q = GStarModSafePrime.getInstance(p);
	Z_q = G_q.getZModOrder();
        
        generator = G_q.getElement(g);
        
    }

    public int getSize() {
        return size;
    }

    public GStarModSafePrime getG_q() {
        return G_q;
    }

    public ZMod getZ_q() {
        return Z_q;
    }

    public GStarModElement getGenerator() {
        return generator;
    }

    public SafePrime getP() {
        return p;
    }
    
    
   
    
    
}
