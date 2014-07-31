/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ch.bfh.unicert.subsystem.cryptography;

import java.math.BigInteger;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class RsaSetup implements CryptographicSetup{
    
    private int size;
    
    private BigInteger n;

    public RsaSetup(int csSize, BigInteger n) {
        this.size = csSize;
        this.n = n;
    }

    public int getSize() {
        return size;
    }

    public BigInteger getN() {
        return n;
    }
    
    
}
