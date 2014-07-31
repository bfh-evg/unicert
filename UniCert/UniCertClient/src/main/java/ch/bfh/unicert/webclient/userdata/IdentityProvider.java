/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.bfh.unicert.webclient.userdata;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public enum IdentityProvider {

    SWITCH_AAI, FACEBOOK, GOOGLE;

    public String toString() {
        return super.toString().toLowerCase();
    }

}
