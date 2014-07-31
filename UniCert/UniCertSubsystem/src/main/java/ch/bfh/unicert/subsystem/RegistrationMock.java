package ch.bfh.unicert.subsystem;

import ch.bfh.unicert.subsystem.cryptography.CryptographicSetup;
import ch.bfh.unicert.subsystem.exceptions.CertificateCreationException;
import java.math.BigInteger;

/*
 * Copyright (c) 2013 Berner Fachhochschule, Switzerland.
 * Bern University of Applied Sciences, Engineering and Information Technology,
 * Research Institute for Security in the Information Society, E-Voting Group,
 * Biel, Switzerland.
 *
 * Project UniVote.
 *
 * Distributable under GPL license.
 * See terms of license at gnu.org.
 */


/**
 * TODO Remove this class in the production system.
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 */
public class RegistrationMock implements Registration {

    @Override
    public Certificate createCertificate(CryptographicSetup cs, BigInteger publicKey, IdentityData idData, String applicationIdentifier, int role, BigInteger signature, String originalMessage) throws CertificateCreationException {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    
    


//    /**
//     * Returns two dummy certificates. Some parameters are ignored.
//     *
//     * @param voterId the voter id
//     * @param organisation the name of the university
//     * @param studyBranch the study branch
//     * @param uid the unique user id
//     * @param verificationKey ignored
//     * @param proof ignored
//     * @return a JAXB certificate list containing two dummy certificates
//     * @throws RegistrationException never thrown
//     */
//    @Override
//    public void createCertificate(String voterId, String organisation, String studyBranch,
//    String uid)
//    {
//        String voterId0 = voterId;
//        String organisation0 = organisation;
//        String studyBranch0 = studyBranch;
//        String uid0 = uid;
//        BigInteger sn0 = BigInteger.TEN;
//        String pem0 =
//            "-----BEGIN CERTIFICATE-----\n"
//            + "MIIB8jCB26ADAgECAgYBPFk//9swDQYJKoZIhvcNAQEFBQAwETEPMA0GA1UEAwwG\n"
//            + "VGVzdENBMB4XDTEzMDEyMDE4MzcxMloXDTEzMDEyMjE4MzcxMlowajETMBEGA1UE\n"
//            + "AwwKMTMtMTExLTIyMjEbMBkGA1UECgwSVW5pdmVyc2l0eSBvZiBCZXJuMRkwFwYD\n"
//            + "VQQLDBBDb21wdXRlciBTY2llbmNlMRswGQYKCZImiZPyLGQBAQwLMjM0LTU2Nzgt\n"
//            + "OTAwHjAVBgcqhkjOOAQBMAoCAgCnAgFTAgFTAwUAAgIAkzANBgkqhkiG9w0BAQUF\n"
//            + "AAOCAQEAeC5+DrMVyFPX8nCz3apKzIpy0BUE+h/kDvmMyz0/8yAWdlm2uQX1XcVw\n"
//            + "HoBqNRkAtD6slUvrwpU60HYDYtL9nNL8ZmDDhkM26//Zth4ApYh4SfUsH8s+UQh8\n"
//            + "sG6DIKmwiD8rq/jiOrAxbwVvptDaqu9WDLGm3T9Nuo/FmGqydScGspxdoftE1fRN\n"
//            + "S/YfANhOMn9L0VVWfx1gycy7bbxbfbzlHiNkFDy0LATKPulY+OIfEvirxBlG3R7m\n"
//            + "rlUC2no+ZwmkNlpEdceXfeuaxtPVu04JkUMWeBOjuSwla6G8G+pgh2lVWB4oNgtz\n"
//            + "VLECUWBi/xDu8kKC5eDoAeB+cULs3g==\n"
//            + "-----END CERTIFICATE-----\n";
//        Certificate c0 = new Certificate(
//            voterId0,
//            organisation0,
//            studyBranch0,
//            uid0,
//            "UniVote Registration",
//            sn0,
//            new Date(),
//            new Date(),
//            "SHA-1 fingerprint0",
//            pem0,
//            true);
//
//        String voterId1 = "TestCA";
//        String organisation1 = "UniVote Registration";
//        String studyBranch1 = "";
//        String uid1 = "999-0000-9999";
//        BigInteger sn1 = BigInteger.TEN;
//        String pem1 =
//            "-----BEGIN CERTIFICATE-----\n"
//            + "MIICnjCCAYagAwIBAgIET+r/ejANBgkqhkiG9w0BAQUFADARMQ8wDQYDVQQDDAZU\n"
//            + "ZXN0Q0EwHhcNMTIwNjI3MTI0MTQxWhcNMTMwNjI3MTI0MTQxWjARMQ8wDQYDVQQD\n"
//            + "DAZUZXN0Q0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCp1zOebZxj\n"
//            + "A5s8UqEkzjEupyFS1q8DHtEosgb+/Z8/gaOqSFpjXZqHK4988FWyEN5IEUeoY+mn\n"
//            + "PwZTVou9CkLwOnuAvgJ1upDqkSF6vzMO5X8FMfI/VrS7yCnGPzOLnX5i+ZK3fipW\n"
//            + "HF0q8mEHRD9NavYjWGOJceFc6JbvOXjJhcPyN8BbHOXdk/me/WXZOgXo6r7zAnK/\n"
//            + "wN56LpDmWk9B059RGxbk5d+ds+e267lGd64j4gCIeekAnsAuuf+KdRiRuPd+yOH3\n"
//            + "Wll01L9dd9RwLaQmb74SN2NtylIPyDFpkxRF+CktB/I++IczxmkFaiGMh7ucP+QL\n"
//            + "vrIJfxHlco7jAgMBAAEwDQYJKoZIhvcNAQEFBQADggEBACfYOGGLlpHf/iO9q/C3\n"
//            + "kEqBx8xDGtVeS72dGedD7fG494pupk3svGNCx/1JXflbBgznxBGeh8gThOB5P3SQ\n"
//            + "pRlbIXZVgKC8FaIZIFcy2ORbycwMPR1zOk2ouULDesYnnLbuGthnXFGzMMLGu7W9\n"
//            + "p5X8x30PX6HjoqSdlrxllSk25qS1rDPq4ZuqLyCz8s9BZdjhyOf27lxFD0ToZt9q\n"
//            + "y8T5jnVrchUHB3WOng3BwtmDLqdUM0H1Avw75Vwfik/SV0ul0XmVmCl7XK3hjbHh\n"
//            + "C5Bn1VyhG1pXbdRRbwS0ZKWMp2+kFumkqpqFfvco1gO4kQ8loe6zQCnu0FxJIcNP\n"
//            + "U9k=\n"
//            + "-----END CERTIFICATE-----\n";
//        Certificate c1 = new Certificate(
//            voterId1,
//            organisation1,
//            studyBranch1,
//            uid1,
//            "UniVote Registration",
//            sn1,
//            new Date(),
//            new Date(),
//            "SHA-1 fingerprint1",
//            pem1,
//            true);
//        Certificates cl = new Certificates();
//        cl.getCertificates().add(c0);
//        cl.getCertificates().add(c1);
//        return cl;
//    }

//    @Override
//    public void renewCertificate(String voterId, String organisation, String studyBranch,
//    String uid)
//    {
////        String voterId0 = voterId;
////        String organisation0 = organisation;
////        String studyBranch0 = studyBranch;
////        String uid0 = uid;
////        BigInteger sn0 = BigInteger.TEN;
////        String pem0 =
////            "-----BEGIN CERTIFICATE-----\n"
////            + "MIIB8jCB26ADAgECAgYBPFk//9swDQYJKoZIhvcNAQEFBQAwETEPMA0GA1UEAwwG\n"
////            + "VGVzdENBMB4XDTEzMDEyMDE4MzcxMloXDTEzMDEyMjE4MzcxMlowajETMBEGA1UE\n"
////            + "AwwKMTMtMTExLTIyMjEbMBkGA1UECgwSVW5pdmVyc2l0eSBvZiBCZXJuMRkwFwYD\n"
////            + "VQQLDBBDb21wdXRlciBTY2llbmNlMRswGQYKCZImiZPyLGQBAQwLMjM0LTU2Nzgt\n"
////            + "OTAwHjAVBgcqhkjOOAQBMAoCAgCnAgFTAgFTAwUAAgIAkzANBgkqhkiG9w0BAQUF\n"
////            + "AAOCAQEAeC5+DrMVyFPX8nCz3apKzIpy0BUE+h/kDvmMyz0/8yAWdlm2uQX1XcVw\n"
////            + "HoBqNRkAtD6slUvrwpU60HYDYtL9nNL8ZmDDhkM26//Zth4ApYh4SfUsH8s+UQh8\n"
////            + "sG6DIKmwiD8rq/jiOrAxbwVvptDaqu9WDLGm3T9Nuo/FmGqydScGspxdoftE1fRN\n"
////            + "S/YfANhOMn9L0VVWfx1gycy7bbxbfbzlHiNkFDy0LATKPulY+OIfEvirxBlG3R7m\n"
////            + "rlUC2no+ZwmkNlpEdceXfeuaxtPVu04JkUMWeBOjuSwla6G8G+pgh2lVWB4oNgtz\n"
////            + "VLECUWBi/xDu8kKC5eDoAeB+cULs3g==\n"
////            + "-----END CERTIFICATE-----\n";
////        Certificate c0 = new Certificate(
////            voterId0,
////            organisation0,
////            studyBranch0,
////            uid0,
////            "UniVote Registration",
////            sn0,
////            new Date(),
////            new Date(),
////            "SHA-1 fingerprint0",
////            pem0,
////            true);
////        String voterId1 = "TestCA";
////        String organisation1 = "UniVote Registration";
////        String studyBranch1 = "";
////        String uid1 = "999-0000-9999";
////        BigInteger sn1 = BigInteger.TEN;
////        String pem1 =
////            "-----BEGIN CERTIFICATE-----\n"
////            + "MIICnjCCAYagAwIBAgIET+r/ejANBgkqhkiG9w0BAQUFADARMQ8wDQYDVQQDDAZU\n"
////            + "ZXN0Q0EwHhcNMTIwNjI3MTI0MTQxWhcNMTMwNjI3MTI0MTQxWjARMQ8wDQYDVQQD\n"
////            + "DAZUZXN0Q0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCp1zOebZxj\n"
////            + "A5s8UqEkzjEupyFS1q8DHtEosgb+/Z8/gaOqSFpjXZqHK4988FWyEN5IEUeoY+mn\n"
////            + "PwZTVou9CkLwOnuAvgJ1upDqkSF6vzMO5X8FMfI/VrS7yCnGPzOLnX5i+ZK3fipW\n"
////            + "HF0q8mEHRD9NavYjWGOJceFc6JbvOXjJhcPyN8BbHOXdk/me/WXZOgXo6r7zAnK/\n"
////            + "wN56LpDmWk9B059RGxbk5d+ds+e267lGd64j4gCIeekAnsAuuf+KdRiRuPd+yOH3\n"
////            + "Wll01L9dd9RwLaQmb74SN2NtylIPyDFpkxRF+CktB/I++IczxmkFaiGMh7ucP+QL\n"
////            + "vrIJfxHlco7jAgMBAAEwDQYJKoZIhvcNAQEFBQADggEBACfYOGGLlpHf/iO9q/C3\n"
////            + "kEqBx8xDGtVeS72dGedD7fG494pupk3svGNCx/1JXflbBgznxBGeh8gThOB5P3SQ\n"
////            + "pRlbIXZVgKC8FaIZIFcy2ORbycwMPR1zOk2ouULDesYnnLbuGthnXFGzMMLGu7W9\n"
////            + "p5X8x30PX6HjoqSdlrxllSk25qS1rDPq4ZuqLyCz8s9BZdjhyOf27lxFD0ToZt9q\n"
////            + "y8T5jnVrchUHB3WOng3BwtmDLqdUM0H1Avw75Vwfik/SV0ul0XmVmCl7XK3hjbHh\n"
////            + "C5Bn1VyhG1pXbdRRbwS0ZKWMp2+kFumkqpqFfvco1gO4kQ8loe6zQCnu0FxJIcNP\n"
////            + "U9k=\n"
////            + "-----END CERTIFICATE-----\n";
////        Certificate c1 = new Certificate(
////            voterId1,
////            organisation1,
////            studyBranch1,
////            uid1,
////            "UniVote Registration",
////            sn1,
////            new Date(),
////            new Date(),
////            "SHA-1 fingerprint1",
////            pem1,
////            true);
////        Certificates cl = new Certificates();
////        cl.getCertificates().add(c0);
////        cl.getCertificates().add(c1);
////        return cl;
//    }
//
//    @Override
//    public void listCertificates(String voterId, String uid){
////        String voterId0 = voterId;
////        String organisation0 = "Some Organisation";
////        String studyBranch0 = "Some Study Branch";
////        String uid0 = uid;
////        BigInteger sn0 = BigInteger.TEN;
////        String pem0 =
////            "-----BEGIN CERTIFICATE-----\n"
////            + "MIIB8jCB26ADAgECAgYBPFk//9swDQYJKoZIhvcNAQEFBQAwETEPMA0GA1UEAwwG\n"
////            + "VGVzdENBMB4XDTEzMDEyMDE4MzcxMloXDTEzMDEyMjE4MzcxMlowajETMBEGA1UE\n"
////            + "AwwKMTMtMTExLTIyMjEbMBkGA1UECgwSVW5pdmVyc2l0eSBvZiBCZXJuMRkwFwYD\n"
////            + "VQQLDBBDb21wdXRlciBTY2llbmNlMRswGQYKCZImiZPyLGQBAQwLMjM0LTU2Nzgt\n"
////            + "OTAwHjAVBgcqhkjOOAQBMAoCAgCnAgFTAgFTAwUAAgIAkzANBgkqhkiG9w0BAQUF\n"
////            + "AAOCAQEAeC5+DrMVyFPX8nCz3apKzIpy0BUE+h/kDvmMyz0/8yAWdlm2uQX1XcVw\n"
////            + "HoBqNRkAtD6slUvrwpU60HYDYtL9nNL8ZmDDhkM26//Zth4ApYh4SfUsH8s+UQh8\n"
////            + "sG6DIKmwiD8rq/jiOrAxbwVvptDaqu9WDLGm3T9Nuo/FmGqydScGspxdoftE1fRN\n"
////            + "S/YfANhOMn9L0VVWfx1gycy7bbxbfbzlHiNkFDy0LATKPulY+OIfEvirxBlG3R7m\n"
////            + "rlUC2no+ZwmkNlpEdceXfeuaxtPVu04JkUMWeBOjuSwla6G8G+pgh2lVWB4oNgtz\n"
////            + "VLECUWBi/xDu8kKC5eDoAeB+cULs3g==\n"
////            + "-----END CERTIFICATE-----\n";
////        Certificate c0 = new Certificate(
////            voterId0,
////            organisation0,
////            studyBranch0,
////            uid0,
////            "UniVote Registration",
////            sn0,
////            new Date(),
////            new Date(),
////            "SHA-1 fingerprint0",
////            pem0,
////            true);
////        Certificates cl = new Certificates();
////        cl.getCertificates().add(c0);
////        return cl;
//    }
//
//    @Override
//    public void revokeCertificate(BigInteger sn, String voterId, String uid) {
//        // Intentionally left empty.
//    }
}
