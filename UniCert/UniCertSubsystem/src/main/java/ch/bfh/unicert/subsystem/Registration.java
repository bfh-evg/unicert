package ch.bfh.unicert.subsystem;

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

import ch.bfh.unicert.subsystem.cryptography.CryptographicSetup;
import ch.bfh.unicert.subsystem.exceptions.CertificateCreationException;
import java.math.BigInteger;
import javax.ejb.Local;

/**
 * This interface defines the operation supported by the registration
 * subsystem as seen from the registration proxy.
 * <p>
 * Operations returning data use JAXP instances. This allows the receiving
 * client to easily convert received data into XML documents.
 *
 * @author Eric Dubuis &lt;eric.dubuis@bfh.ch&gt;
 */
@Local
public interface Registration {
    /**
     * Requests the first-time creation of a certificate.
     * @param voterId the identity of a (potential) voter, used to form the value for CN
     * @param organisation the name of the university or university of applied sciences, used to form the value O
     * @param studyBranch the identification of the study branch, used to form the value for OU
     * @param uid a unique identifier for the subject
     * @param verificationKey the public key of the voter, also known as verification key
     * @param proof a proof proving that the requestor knows the secret key
     * @return a certificate chain consisting of the certificate for the requestor and the certificate of the
     * registration.
     * @throws RegistrationException if the certificate could not be created or if a
     * non-revoked certificate exists under this identity
     */
    public Certificate createCertificate(CryptographicSetup cs, BigInteger publicKey, IdentityData idData,
            String applicationIdentifier, int role, BigInteger signature, String originalMessage) throws CertificateCreationException;

//    /**
//     * Requests the creation of a new certificate for a (potential) voter
//     * having already a non-revoked certificate. On success,
//     * the non-revoked existing certificate is automatically revoked.
//     * Thus, a requestor can have one certificate at most.
//     * @param voterId the identity of a (potential) voter, used to form the value for CN
//     * @param organisation the name of the university or university of applied sciences, used to form the value O
//     * @param studyBranch the identification of the study branch, used to form the value for OU
//     * @param uid a unique identifier for the subject
//     * @param verificationKey the public key of the voter, also known as verification key
//     * @param proof a proof proving that the requestor knows the secret key
//     * @return a certificate chain consisting of the certificate for the requestor and the certificate of the
//     * registration.
//     * @throws RegistrationException if a certificate could not be created or if no non-revoked
//     * certificate exists under this identity
//     */
//    public void renewCertificate(
//        String voterId,
//        String organisation,
//        String studyBranch,
//        String uid);
//
//    /**
//     * Requests a list of certificates for a given (potential) voter. Note that,
//     * according to the current definition of the registration subsystem, at most one
//     * non-revoked certificate can be part of the returned list of certificates. The
//     * list can be empty, too..
//     * @param voterId the identity of a (potential) voter, used to form the value for CN
//     * @param uid a unique identifier for the subject
//     * @return a list of certificates having zero or more elements
//     */
//    public void listCertificates(
//        String voterId,
//        String uid);
//    
//    /**
//     * Requests the revocation of a certificate.
//     * @param sn the serial number of the certificate
//     * @param voterId the identity of a (potential) voter, used to form the value for CN
//     * @param uid a unique identifier for the subject
//     * @throws RegistrationException if the certificate could not be revoked or if
//     * the indicated certificate does not exist
//     */
//    public void revokeCertificate(
//        BigInteger sn,
//        String voterId,
//        String uid);
}
