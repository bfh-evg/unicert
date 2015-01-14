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
package ch.bfh.unicert.webclient.servlets;

import ch.bfh.unicert.webclient.userdata.SwitchAAIUserData;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet responsible to extract identity data after successful Switch AAI login
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@WebServlet("/switchaai")
public class SwitchAAICallbackServlet extends HttpServlet {

    /**
     * The logger this servlet uses.
     */
    private static final Logger logger = Logger.getLogger(SwitchAAICallbackServlet.class.getName());
    private static final String CALLBACK_SERVLET = "callback";

    /**
     * Swiss education UID.
     */
    public static final String E_UID = "uniqueID";
    /**
     * Shibboleth Person UID.
     */
    public static final String P_UID = "uid";
    /**
     * Persistent ID.
     */
    public static final String P_ID = "persistent-id";
    /**
     * Card number.
     */
    public static final String P_CARD_NO = "cardUID";
    /**
     * Swiss education matriculation number.
     */
    public static final String P_MAT_NUMBER = "matriculationNumber";
    /**
     * Internet organization name.
     */
    public static final String P_EMP_NUMBER = "employeeNumber";
    /**
     * Given name.
     */
    public static final String P_GIVENNAME = "givenName";
    /**
     * Surname.
     */
    public static final String P_SURNAME = "surname";
    /**
     * E-mail.
     */
    public static final String P_MAIL = "mail";
    /**
     * Study branch.
     */
    public static final String S_BRANCH = "studyBranch1";
    /**
     * Study level.
     */
    public static final String S_LEVEL = "studyLevel";
    /**
     * Staff category.
     */
    public static final String S_CATECORY = "staffCategory";
    /**
     * Organization name.
     */
    public static final String O_NAME = "homeOrganization";
    /**
     * Affiliation name.
     */
    public static final String O_AFFILIATION = "affiliation";
    /**
     * Organization type.
     */
    public static final String O_TYPE = "homeOrganizationType";
    /**
     * Organization DN.
     */
    public static final String O_DN = "org-dn";
    
    /**
     * Processes requests for HTTP <code>GET</code> and <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
	    throws ServletException, IOException {

	// Set character encoding of the response.
	response.setCharacterEncoding("UTF-8");

	logger.log(Level.INFO, "Initialization of user data");

	UserData ud = new SwitchAAIUserData(
		readAttribute(request, E_UID, "education uid"), 
		readAttribute(request, P_UID, "person uid"),
		readAttribute(request, P_ID, "persistent id"),
		readAttribute(request, P_CARD_NO, "card nr"),
		readAttribute(request, P_MAT_NUMBER, "matricule nr"),
		readAttribute(request, P_EMP_NUMBER, "employee nr"),
		readAttribute(request, P_GIVENNAME, "given name"),
		readAttribute(request, P_SURNAME, "surname"),
		readAttribute(request, P_MAIL, "e-mail address"),
		readAttribute(request, S_BRANCH, "study branch"),
		readAttribute(request, S_LEVEL, "study level"),
		readAttribute(request, S_CATECORY, "staff category"),
		readAttribute(request, O_NAME, "home organisation"),
		readAttribute(request, O_AFFILIATION, "affiliation"),
		readAttribute(request, O_TYPE, "organisation type"),
		readAttribute(request, O_DN, "organisation distinguished name"));

	HttpSession session = request.getSession();
	session.setAttribute("userData", ud);

	response.sendRedirect(CALLBACK_SERVLET);
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
	return "Callback servlet for SwitchAAI authentication.";
    }
    
    /**
     * Helper method trying to read user attributes out of the session
     * @param request
     * @param attribute
     * @param comment
     * @return 
     */
    private String readAttribute(HttpServletRequest request, String attribute, String comment){
        
        String value = (String) request.getAttribute(attribute);
        if (value != null) {
            logger.log(Level.INFO, "Retrieved for {2}: name={0}, value={1}",
                    new Object[]{attribute, value, comment});
        } else {
            // Cannot initialize -- giving up.
            logger.log(Level.SEVERE, "Cannot initialize {0} -- giving up.", comment);
        }
        return value;
    }

}
