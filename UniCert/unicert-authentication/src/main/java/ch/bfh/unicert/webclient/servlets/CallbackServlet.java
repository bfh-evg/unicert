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
 * Servlet responsible to redirect to indicated client
 * 
 * @author Philémon von Bergen
 */
@WebServlet(urlPatterns = {"/callback"}, asyncSupported = true)
public class CallbackServlet extends HttpServlet {

    private static final Logger logger = Logger.getLogger(CallbackServlet.class.getName());
    private static final String RETURN_URL = "returnlocation";
    private static final String PROPERTY_SET_IDENTIFIER = "params";

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
	HttpSession session = req.getSession();
	
	String returnurl = (String) req.getSession().getAttribute(RETURN_URL);
	String sessionId = session.getId();
	String propertiesSetIdentifier = (String) req.getSession().getAttribute(PROPERTY_SET_IDENTIFIER);
	
	//Add the needed identity data to the set of parameters stored in the session
	UserData ud = (UserData) session.getAttribute("userData");

	try {
	    resp.sendRedirect(returnurl+"?JSESSIONID="+sessionId+"&params="+propertiesSetIdentifier+"&mail="+ud.getMail()
		+"&id="+ud.getUniqueIdentifier() + "&idp="+ud.getIdentityProvider());
	} catch (IOException ex) {
	    logger.log(Level.SEVERE, "Unable to redirect after successful Google login: {0}", ex);
	    try {
		internalServerErrorHandler(resp, "Unable to redirect after successful Google login");
	    } catch (IOException ex1) {
		logger.log(Level.SEVERE, null, ex1);
	    }
	}
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
	return "Callback servlet for Google authentication.";
    }

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
}
