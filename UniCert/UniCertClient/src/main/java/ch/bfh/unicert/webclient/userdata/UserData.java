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
public interface UserData {
    
    public String getUniqueIdentifier();
    
    public String getIdentityProvider();
    
    public String getMail();
        
}
