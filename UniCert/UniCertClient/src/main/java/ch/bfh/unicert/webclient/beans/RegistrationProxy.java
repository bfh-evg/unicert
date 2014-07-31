/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.bfh.unicert.webclient.beans;

import ch.bfh.unicert.subsystem.IdentityData;
import ch.bfh.unicert.subsystem.Registration;
import ch.bfh.unicert.subsystem.RegistrationMock;
import ch.bfh.unicert.subsystem.cryptography.CryptographicSetup;
import ch.bfh.unicert.subsystem.cryptography.DiscreteLogSetup;
import ch.bfh.unicert.subsystem.cryptography.RsaSetup;
import ch.bfh.unicert.subsystem.exceptions.CertificateCreationException;
import ch.bfh.unicert.webclient.identityfunction.AnonymizedSwitchAAIIdentityFunction;
import ch.bfh.unicert.webclient.identityfunction.IdentityFunctionNotApplicableException;
import ch.bfh.unicert.webclient.identityfunction.StandardSwitchAAIIdentityFunction;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.io.IOException;
import java.math.BigInteger;
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

/**
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
    private static final String DLOG_PRIME = "dlog_prime";
    private static final String DLOG_GENERATOR = "dlog_generator";
    private static final String VALIDITY = "validity";

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
        
        Registration registration;
        try {
            registration = getRegistration();
        } catch (Exception ex) {
            logger.log(Level.SEVERE, "Error while trying to get proxy for registration subsystem", ex.getMessage());
            internalServerErrorHandler(response, "Could not get registration subsystem");
            return;
        }

        // Do we have an authenticated session?
        UserData ud = getUserData(request);
        if (ud == null) {
            handleNoSecurityContext(response);
            logger.log(Level.INFO, "Got request without SWITCHaai security context");
            return;
        }

        // Set character encoding of the response.
        response.setCharacterEncoding("UTF-8");
        
        String messageForSignature = "";

        //Get the cryptographic setup
        String csType = request.getParameter(CRYPTO_SETUP_TYPE);
        int csSize = Integer.parseInt(request.getParameter(CRYPTO_SETUP_SIZE));
        messageForSignature += csType + SEPARATOR +  csSize + SEPARATOR;
        
        CryptographicSetup cs = null;
        switch(csType){
            case "RSA":
                String modulo = request.getParameter(RSA_MODULO);
                BigInteger n = new BigInteger(modulo, 10);
                cs = new RsaSetup(csSize, n);
                messageForSignature += modulo + SEPARATOR;
                break;
            case "DiscreteLog":
                String prime = request.getParameter(DLOG_PRIME);
                BigInteger p = new BigInteger(prime, 10);
                String generator = request.getParameter(DLOG_GENERATOR);
                BigInteger g = new BigInteger(generator, 10);
                cs = new DiscreteLogSetup(csSize, g, p);
                messageForSignature += prime + SEPARATOR + generator + SEPARATOR;
                break;
            default:
                internalServerErrorHandler(response, "Unknown cryptographic setup");
                logger.log(Level.SEVERE, "Unknown cryptographic setup");
                return;
        }
        
        //Get the selected Identity Function
        int functionId = Integer.parseInt(request.getParameter(IDENTITY_FUNCTION));
        messageForSignature += functionId + SEPARATOR;

        IdentityData idData = null;
        try{
        switch(functionId){
            case 1:
                idData = new StandardSwitchAAIIdentityFunction().apply(ud);
                break;
            case 2:
                idData = new AnonymizedSwitchAAIIdentityFunction().apply(ud);
                break;
            default:
                internalServerErrorHandler(response, "Unknown identity function");
                logger.log(Level.SEVERE, "Unknown identity function");
                return;
        }
        } catch(IdentityFunctionNotApplicableException ex){
                internalServerErrorHandler(response, "Incompatible identity function");
                logger.log(Level.SEVERE, "Incompatible identity function");
                return;
        }

        //Get the public key to certify
        String publicKey = request.getParameter(PUBLIC_KEY);
        BigInteger pk = new BigInteger(publicKey, 10);
        messageForSignature += publicKey + SEPARATOR;
        
        //Get the signature/proof
        String signature = request.getParameter(SIGNATURE);
        BigInteger sig = new BigInteger(signature, 10);
                
        //Get the application identifier
        String applicationIdentifier = request.getParameter(APP_IDENTIFIER);
        messageForSignature += applicationIdentifier + SEPARATOR;
        
        //Get the role
        int role = Integer.parseInt(request.getParameter(ROLE));
        messageForSignature += role + SEPARATOR;
        
        //Get the role
        int validity = Integer.parseInt(request.getParameter(VALIDITY));
        messageForSignature += validity;
        
        try {
            //Create the certificate
            registration.createCertificate(cs, pk, idData, applicationIdentifier, role, sig, messageForSignature);
            
            //TODO return certificate ?
        } catch (CertificateCreationException ex) {
            logger.log(Level.SEVERE, "Error while creating the certificate.", ex.getMessage());
            internalServerErrorHandler(response, "Error while creating the certificate: "+ ex.getMessage());
            
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
    //TODO is that really needed?
    private Registration getRegistration() throws Exception {
        ServletContext sc = getServletContext();
        Registration registration;
        if (Boolean.parseBoolean(sc.getInitParameter(DEV_MODE))
                && Boolean.parseBoolean(sc.getInitParameter(DEV_MODE_REGISTRATION_MOCK))) {
            registration = new RegistrationMock();
            logger.log(Level.WARNING, "Using mock proxy for registration subsystem");
        } else {
            if (regRef != null) {
                registration = regRef;
                logger.log(Level.INFO, "Using real proxy for registration subsystem");
            } else {
                logger.log(Level.SEVERE, "Reference to registration subystem not injected");
                throw new IllegalStateException("Reference to registration subystem not injected");
            }
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
        //TODO where are data collected and how
        HttpSession session = request.getSession();
        UserData ud = (UserData) session.getAttribute("userData");
        if (ud != null && ud.getUniqueIdentifier() == null) {
            ud = null;
        }
        return ud;
    }

    //TODO i18n
    /**
     * Error code returned for the case of an error while processing a request.
     *
     * @param response a HTTP response object
     * @param kind a detailed indication
     * @throws IOException if the response cannot be written
     */
    private void internalServerErrorHandler(HttpServletResponse response, String kind) throws IOException {
        response.setContentType("text/html;charset=UTF-8");
        response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Internal server error: " + kind);
    }

    /**
     * Error code returned for the case of missing SWITCHaai authentication
     * information.
     *
     * @param response a HTTP response object
     * @throws IOException if the response cannot be written
     */
    private void handleNoSecurityContext(HttpServletResponse response) throws IOException {
        response.setContentType("text/html;charset=UTF-8");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Missing SWITCHaai authentication");
    }
}
