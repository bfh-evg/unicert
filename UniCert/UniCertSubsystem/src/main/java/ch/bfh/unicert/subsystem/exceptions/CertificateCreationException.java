/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ch.bfh.unicert.subsystem.exceptions;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class CertificateCreationException extends Exception {

    public CertificateCreationException(String message) {
        super(message);
    }
    
}
