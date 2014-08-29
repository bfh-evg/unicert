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
public class GoogleUserData implements UserData {
    
    private final IdentityProvider IDENTITY_PROVIDER = IdentityProvider.GOOGLE;
    
    private final String uniqueId;
    private final String mail;
    private final boolean mailVerified;
    private final String completeName;
    private final String firstName;
    private final String lastName;
    private final String lang;
    private final String domain;

    public GoogleUserData(String uniqueId, String mail, boolean mailVerified, String completeName, String firstName, String lastName, String lang, String domain) {
        this.uniqueId = uniqueId;
        this.mail = mail;
        this.mailVerified = mailVerified;
        this.completeName = completeName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.lang = lang;
        this.domain = domain;
    }

    @Override
    public String getUniqueIdentifier() {
        return this.uniqueId;
    }

    @Override
    public String getIdentityProvider() {
        return IDENTITY_PROVIDER.getKey();
    }

    @Override
    public String getMail() {
        return this.mail;
    }

    public boolean isMailVerified() {
        return mailVerified;
    }

    public String getCompleteName() {
        return completeName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getLang() {
        return lang;
    }

    public String getDomain() {
        return domain;
    }
    
    
}
