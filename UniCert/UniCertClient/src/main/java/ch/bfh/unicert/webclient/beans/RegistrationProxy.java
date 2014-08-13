/*
 * Copyright (c) 2014 Berner Fachhochschule, Switzerland.
 * Bern University of Applied Sciences, Engineering and Information Technology,
 * Research Institute for Security in the Information Society, E-Voting Group,
 * Biel, Switzerland.
 *
 * Project UniCert.
 *
 * Distributable under GPL license.
 * See terms of license at gnu.org.
 */
package ch.bfh.unicert.webclient.beans;

import ch.bfh.unicert.subsystem.Certificate;
import ch.bfh.unicert.subsystem.IdentityData;
import ch.bfh.unicert.subsystem.Registration;
import ch.bfh.unicert.subsystem.cryptography.CryptographicSetup;
import ch.bfh.unicert.subsystem.cryptography.DiscreteLogSetup;
import ch.bfh.unicert.subsystem.cryptography.RsaSetup;
import ch.bfh.unicert.subsystem.exceptions.CertificateCreationException;
import ch.bfh.unicert.webclient.identityfunction.AnonymizedSwitchAAIIdentityFunction;
import ch.bfh.unicert.webclient.identityfunction.IdentityFunctionNotApplicableException;
import ch.bfh.unicert.webclient.identityfunction.StandardSwitchAAIIdentityFunction;
import ch.bfh.unicert.webclient.identityfunction.ZurichSwitchAAIIdentityFunction;
import ch.bfh.unicert.webclient.userdata.IdentityProvider;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.util.ResourceBundle;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Response;

/**
 * Proxy for the registration process between the UniCert subsystem and the web
 * pages
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@WebServlet("/registration/*")
public class RegistrationProxy extends HttpServlet {

    /**
     * The injected proxy for accessing the effective registration subsystem.
     */
    @EJB
    private Registration regRef;

    /**
     * Property name for the development mode.
     */
    public static final String DEV_MODE = "dev-mode";
    /**
     * Property name for the development mode where a mock for the registration
     * is used.
     */
    public static final String DEV_MODE_REGISTRATION_MOCK = "dev-mode-registration-mock";

    private static final String IDENTITY_FUNCTION = "identity_function";
    private static final String CRYPTO_SETUP_TYPE = "crypto_setup_type";
    private static final String CRYPTO_SETUP_SIZE = "crypto_setup_size";
    private static final String PUBLIC_KEY = "public_key";
    private static final String SIGNATURE = "signature";
    private static final String APP_IDENTIFIER = "application_identifier";
    private static final String ROLE = "role";
    private static final String RSA_MODULO = "rsa_modulo";
    private static final String DLOG_PRIME_P = "dlog_p";
    private static final String DLOG_PRIME_Q = "dlog_q";
    private static final String DLOG_PROOF_COMMITMENT = "dlog_proof_commitment";
    private static final String DLOG_PROOF_CHALLENGE = "dlog_proof_challenge";
    private static final String DLOG_PROOF_RESPONSE = "dlog_proof_response";
    private static final String DLOG_GENERATOR = "dlog_generator";

    /**
     * The logger this servlet uses.
     */
    private static final Logger logger = Logger.getLogger(RegistrationProxy.class.getName());

    private static final String SEPARATOR = "||";

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        /*
        *************** IDENTIFICATION MANAGEMENT ***************
        */
        
        //Redirection to IDP
        if (request.getParameter("idp") != null) {
            logger.log(Level.INFO, "Redirect to IDP");
            
            if (request.getParameter("idp").equals(IdentityProvider.SWITCH_AAI.getKey())) {
                response.sendRedirect("switchaai.xhtml");
            } else if (request.getParameter("idp").equals(IdentityProvider.GOOGLE.getKey())){
                response.sendRedirect("https://accounts.google.com/o/oauth2/auth?\n"
                            + " client_id=424911365001.apps.googleusercontent.com&\n"
                            + " response_type=code&\n"
                            + " scope=openid%20email&\n"
                            + " redirect_uri=https://oa2cb.example.com/&\n"
                            + " state=security_token%3D138r5719ru3e1%26url%3Dhttps://oa2cb.example.com/myHome&\n"
                            + " login_hint=jsmith@example.com&\n"
                            + " openid.realm=example.com&\n"
                            + " hd=example.com");
            } else if(request.getParameter("idp").equals(IdentityProvider.FACEBOOK.getKey())){
                response.sendRedirect("registration.xhtml");
            } else {
                logger.log(Level.SEVERE, "Unknown Identity provider selected");
                internalServerErrorHandler(response, "102 Unknown Identity provider selected");
            }
            return;
        }
        
        //Redirect after SwitchAAI login success
//        if(request.getRequestURI().contains("switchaai.xhtml")){
//                response.sendRedirect("registration.xhtml");
//                return;
//        }
        
        
        /*
        *************** CERTIFICATE GENERATION ***************
        */
        
        logger.log(Level.INFO, "Certificate requested");

                
        Registration registration;
        try {
            registration = getRegistration();
        } catch (Exception ex) {
            logger.log(Level.SEVERE, "Error while trying to get proxy for registration subsystem: {0}", ex.getMessage());
            internalServerErrorHandler(response, ex.getMessage());
            return;
        }

        // Do we have an authenticated session?
        UserData ud = getUserData(request);
        if (ud == null) {
            handleNoSecurityContext(response);
            logger.log(Level.INFO, "Got request without SWITCHaai security context");
            return;
        }
        
        logger.log(Level.INFO, "User data initialized");

        // Set character encoding of the response.
        response.setCharacterEncoding("UTF-8");

        try {
            String messageForSignature = "";

            //Get the cryptographic setup
            String csType = request.getParameter(CRYPTO_SETUP_TYPE);
            int csSize = Integer.parseInt(request.getParameter(CRYPTO_SETUP_SIZE));
            messageForSignature += csType + SEPARATOR + csSize + SEPARATOR;

            //Get the public key to certify
            String publicKey = request.getParameter(PUBLIC_KEY);
            BigInteger pk = new BigInteger(publicKey, 10);
            messageForSignature += publicKey + SEPARATOR;

            //Create the needed crypto setup
            CryptographicSetup cs = null;
            switch (csType) {
                case "RSA":
                    String modulo = request.getParameter(RSA_MODULO);
                    BigInteger n = new BigInteger(modulo, 10);
                    //Get the signature
                    String signature = request.getParameter(SIGNATURE);
                    BigInteger sig = new BigInteger(signature, 10);
                    cs = new RsaSetup(csSize, n, pk, sig);
                    messageForSignature += modulo + SEPARATOR;
                    break;
                case "DiscreteLog":
                    String primeP = request.getParameter(DLOG_PRIME_P);
                    BigInteger p = new BigInteger(primeP, 10);
                    String primeQ = request.getParameter(DLOG_PRIME_Q);
                    BigInteger q = new BigInteger(primeQ, 10);
                    String generator = request.getParameter(DLOG_GENERATOR);
                    BigInteger g = new BigInteger(generator, 10);
                    String proofT = request.getParameter(DLOG_PROOF_COMMITMENT);
                    BigInteger proofCommitment = new BigInteger(proofT, 10);
                    String proofC = request.getParameter(DLOG_PROOF_CHALLENGE);
                    BigInteger proofChallenge = new BigInteger(proofC, 10);
                    String proofS = request.getParameter(DLOG_PROOF_RESPONSE);
                    BigInteger proofResponse = new BigInteger(proofS, 10);
                    cs = new DiscreteLogSetup(csSize, g, p, q, pk, proofCommitment, proofChallenge, proofResponse);
                    messageForSignature += primeP + SEPARATOR + primeP + SEPARATOR + generator + SEPARATOR;
                    break;
                default:
                    internalServerErrorHandler(response, "131 Unknown cryptographic setup");
                    logger.log(Level.SEVERE, "Unknown cryptographic setup");
                    return;
            }

            logger.log(Level.INFO, "Crypto setup initialized");
                    
            //Get the selected Identity Function
            int functionId = Integer.parseInt(request.getParameter(IDENTITY_FUNCTION));
            messageForSignature += functionId + SEPARATOR;

            IdentityData idData = null;

            switch (functionId) {
                case 1:
                    idData = new StandardSwitchAAIIdentityFunction().apply(ud);
                    break;
                case 2:
                    idData = new AnonymizedSwitchAAIIdentityFunction().apply(ud);
                    break;
                case 3:
                    idData = new ZurichSwitchAAIIdentityFunction().apply(ud);
                    break;
                default:
                    internalServerErrorHandler(response, "120 Unknown identity function");
                    logger.log(Level.SEVERE, "Unknown identity function");
                    return;
            }

            logger.log(Level.INFO, "Identity function applied");
            
            //Get the application identifier
            String applicationIdentifier = request.getParameter(APP_IDENTIFIER);
            messageForSignature += applicationIdentifier + SEPARATOR;

            //Get the role
            int role = Integer.parseInt(request.getParameter(ROLE));
            messageForSignature += role + SEPARATOR;

            //Set whole signed data in order to be able to verify the signature/proof
            cs.setSignatureOtherInput(messageForSignature);

            logger.log(Level.INFO, "Asking to generate certificate");
            
            //Create the certificate
            Certificate cert = registration.createCertificate(cs, idData, applicationIdentifier, role);

            try (PrintWriter out = response.getWriter()) {
                logger.log(Level.INFO, "Returning certificate");
                response.getWriter().printf(cert.toJSON());
            }

        } catch (CertificateCreationException ex) {
            logger.log(Level.SEVERE, "Error while creating the certificate.", ex.getMessage());
            internalServerErrorHandler(response, ex.getMessage());
        } catch (NullPointerException | NumberFormatException ex) {
            internalServerErrorHandler(response, "101 Missing parameters");
            logger.log(Level.SEVERE, "Missing parameters: {0}", ex.getMessage());
        } catch (IdentityFunctionNotApplicableException ex) {
            internalServerErrorHandler(response, ex.getMessage());
            logger.log(Level.SEVERE, ex.getMessage());
        } catch (IllegalArgumentException | UnsupportedOperationException ex) {
            internalServerErrorHandler(response, "130 Cryptographic error");
            logger.log(Level.SEVERE, "Cryptographic error: {0}", ex.getMessage());
        } catch (Exception ex) {
            internalServerErrorHandler(response, "Undefined error");
            logger.log(Level.SEVERE, "Other exception: {0}", ex.getMessage());
        }
    }

    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Servlet acting as proxy for the registration subsystem.";
    }

    /**
     * Returns the reference for the registration subsystem. If faces properties
     * 'dev-mode' and 'dev-mode-registration-mock' are true then a or the
     * registration subsystem is returned.
     *
     * @return a stub (proxy)
     * @throws Exception if there is a problem
     */
    private Registration getRegistration() throws Exception {
        ServletContext sc = getServletContext();
        Registration registration;
//        if (Boolean.parseBoolean(sc.getInitParameter(DEV_MODE))
//                && Boolean.parseBoolean(sc.getInitParameter(DEV_MODE_REGISTRATION_MOCK))) {
//            registration = new RegistrationMock();
//            logger.log(Level.WARNING, "Using mock proxy for registration subsystem");
//        } else {
        if (regRef != null) {
            registration = regRef;
            logger.log(Level.INFO, "Using real proxy for registration subsystem");
        } else {
            logger.log(Level.SEVERE, "Reference to registration subystem not injected");
            throw new IllegalStateException("111 Reference to registration subystem not injected");
        }
        return registration;
    }

    /**
     * Given a HTTP request object, determines if there is a session, and if so
     * then populate a user data object. Returns null if the user data object
     * cannot be fully populated.
     *
     * @param request the HTTP request object
     * @return a fully populated user data object, or null
     */
    private UserData getUserData(HttpServletRequest request) {
        HttpSession session = request.getSession();
        UserData ud = ((UserDataBean) session.getAttribute("userData")).getUserData();
        if (ud != null && ud.getUniqueIdentifier() == null) {
            ud = null;
        }
        return ud;
    }

    /**
     * Error code returned for the case of an error while processing a request.
     *
     * @param response a HTTP response object
     * @param kind a detailed indication
     * @throws IOException if the response cannot be written
     */
    private void internalServerErrorHandler(HttpServletResponse response, String kind) throws IOException {
        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        String errorCode = kind.substring(0, 3);
        String errorMessage = "";
        //Checks if error code is valid
        try {
            Integer.parseInt(errorCode);
            errorMessage = kind.substring(4);
        } catch (Exception e) {
            errorMessage = kind;
            errorCode = "";
        }
        response.getWriter().write("{\"error\": \"" + errorCode + "\", \"message\": \"" + errorMessage + "\"}");
    }

    /**
     * Error code returned for the case of missing SWITCHaai authentication
     * information.
     *
     * @param response a HTTP response object
     * @throws IOException if the response cannot be written
     */
    private void handleNoSecurityContext(HttpServletResponse response) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().write("{\"error\": \"100\", \"message\": \"You are not yet authenticated. Go back to the UniVote start page and authenticate yourself.\"}");

    }
}
