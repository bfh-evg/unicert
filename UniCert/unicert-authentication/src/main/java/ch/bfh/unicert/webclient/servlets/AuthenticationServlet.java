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

import ch.bfh.unicert.issuer.util.ConfigurationHelperImpl;
import ch.bfh.unicert.webclient.util.Google2Api;
import ch.bfh.unicert.webclient.userdata.IdentityProvider;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.scribe.builder.ServiceBuilder;
import org.scribe.oauth.OAuthService;

/**
 * Servlet responsible to manage the authentication process
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@WebServlet("/authenticate/*")
public class AuthenticationServlet extends HttpServlet {

    /**
     * The logger this servlet uses.
     */
    private static final Logger logger = Logger.getLogger(AuthenticationServlet.class.getName());

    private static final String DEV_MODE = "dev-mode";

    private static final String PROPERTY_SET_IDENTIFIER = "params";
    private static final String RETURN_URL = "returnlocation";
    private static final String IDENTITY_PROVIDER = "idp";

    private static final String SWITCH_AAI_PAGE = "switchaai";


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

	//Retrieves properties set
	String propertiesSetIdentifier = request.getParameter(PROPERTY_SET_IDENTIFIER);
	request.getSession().setAttribute(PROPERTY_SET_IDENTIFIER, propertiesSetIdentifier);
	String returnURL = request.getParameter(RETURN_URL);
	request.getSession().setAttribute(RETURN_URL, returnURL);
	
	String idp = request.getParameter(IDENTITY_PROVIDER);

	//if idp is not set, throw error
	if (idp == null) {
	    logger.log(Level.SEVERE, "Identity provider not set");
	    internalServerErrorHandler(response, "Identity provider not set");
	} else {
	    redirectToIdp(idp, request, response);
	}

    }

    /**
     * Helper method managing the redirection to the correct identity provider
     *
     * @param identityProvider the identity provider name
     * @param response servlet respons
     * @throws IOException if an I/O Exception occurs
     */
    private void redirectToIdp(String identityProvider, HttpServletRequest request, HttpServletResponse response) throws
	    IOException {

	//Redirection to IDP
	logger.log(Level.INFO, "Redirect to IDP");
	if (identityProvider.toLowerCase().equals(IdentityProvider.SWITCH_AAI.getKey().toLowerCase())) {
	    //SWITCH AAI
	    response.sendRedirect(SWITCH_AAI_PAGE);
	} else if (identityProvider.toLowerCase().equals(IdentityProvider.GOOGLE.getKey().toLowerCase())) {
	    //GOOGLE OAUTH
	    //Load general configuration (this is the Config of the subsystem, not from the client!)
	    String clientID;
	    String clientSecret;
	    String redirectUri;
	    if (Boolean.parseBoolean(getServletContext().getInitParameter(DEV_MODE))) {
		clientID = "176426429385-8m2uv9d3o62nmnsf338000g0m1bakave.apps.googleusercontent.com";
		clientSecret = "hdK91UZQXwjreMZo3_xnQaWu ";
		redirectUri = "http://urd.bfh.ch/unicert-authentication/oauth2callback";
	    } else {
		clientID = ConfigurationHelperImpl.getInstance().getGoogleClientID();
		clientSecret = ConfigurationHelperImpl.getInstance().getGoogleClientSecret();
		redirectUri = ConfigurationHelperImpl.getInstance().getGoogleRedirectURI();
	    }
	    //Configure
	    ServiceBuilder builder = new ServiceBuilder();
	    OAuthService service = builder.provider(Google2Api.class)
		    .apiKey(clientID)
		    .apiSecret(clientSecret)
		    .callback(redirectUri)
		    .scope("email profile")
		    .debug()
		    .build(); //Now build the call

	    HttpSession sess = request.getSession();
	    sess.setAttribute("oauth2Service", service);

	    response.sendRedirect(service.getAuthorizationUrl(null));
	} else {
	    logger.log(Level.SEVERE, "Unknown Identity provider");
	    internalServerErrorHandler(response, "Unknown Identity provider selected");
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
	return "Servlet managing authentication.";
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
