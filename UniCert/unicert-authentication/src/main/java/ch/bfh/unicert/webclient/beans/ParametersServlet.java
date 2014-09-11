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

import ch.bfh.unicert.issuer.util.ConfigurationHelperImpl;
import ch.bfh.unicert.webclient.beans.util.Google2Api;
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
 * Servlet responsible to load JNDI properties allowing to preconfigure the
 * registration page with the already defined values
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@WebServlet("/authenticate/*")
public class ParametersServlet extends HttpServlet {

    /**
     * The logger this servlet uses.
     */
    private static final Logger logger = Logger.getLogger(ParametersServlet.class.getName());

    private static final String PROPERTY_SET_IDENTIFIER = "params";
    private static final String IDENTITY_PROVIDER = "idp";
    
    private UserInterfaceBean uiBean;

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

        // Set character encoding of the response.
        response.setCharacterEncoding("UTF-8");

        //Retrieves properties set
        String propertiesSetIdentifier = request.getParameter(PROPERTY_SET_IDENTIFIER);
        String idp = request.getParameter(IDENTITY_PROVIDER);

        //Debug mode
        if (Boolean.parseBoolean(getServletContext().getInitParameter("dev-mode"))) {
            idp = "Google";
            uiBean = this.getUIBean(request);
        }

        //if idp is not set, this is the first time this method is called, so we get the
        //JNDI properties
        if (idp == null) {
            logger.log(Level.INFO, "Retrieve parameters: {0}", propertiesSetIdentifier);

            uiBean = uiBean = this.getUIBean(request);
            if (propertiesSetIdentifier != null) {
                uiBean.setParameterSetIdentifier("/unicert/" + propertiesSetIdentifier);
            } else {
                uiBean.setParameterSetIdentifier("/unicert/default");
            }

            if (!uiBean.isInitialized()) {
                logger.log(Level.SEVERE, "Unable to load properties set");
                internalServerErrorHandler(response, "Unable to load properties set");
                return;
            }

            //Redirection to identity provider
            if (!uiBean.hasMulitpleIdentityProviders()) {
                redirectToIdp(uiBean.getIdentityProvider(), request, response);
                return;
            } else {
                //if multiple identity providers are supported we show a selection page
                response.sendRedirect("idpselection.xhtml");
                return;
            }
        } else {
            redirectToIdp(idp, request, response);
            return;
        }

    }

    /**
     * Helper method managing the redirection to the correct identity provider
     *
     * @param identityProvider the identity provider name
     * @param response servlet respons
     * @throws IOException if an I/O Exception occurs
     */
    private void redirectToIdp(String identityProvider, HttpServletRequest request, HttpServletResponse response) throws IOException {
        if (identityProvider == null) {
            logger.log(Level.SEVERE, "Identity provider not set");
            internalServerErrorHandler(response, "Identity provider not set");
            return;
        }

        //Redirection to IDP
        logger.log(Level.INFO, "Redirect to IDP");
        if (identityProvider.equals(IdentityProvider.SWITCH_AAI.getKey())) {
            response.sendRedirect("switchaai.xhtml");
        } else if (identityProvider.equals(IdentityProvider.GOOGLE.getKey())) {
            //Load general configuration (this is the Config of the subsystem, not from the client!)
            String clientID;
            String clientSecret;
            String redirectUri;
            if (Boolean.parseBoolean(getServletContext().getInitParameter("dev-mode"))) {
                clientID = "452554920436-ek1075ugb6vtckc9acng7qo455993u9f.apps.googleusercontent.com";
                clientSecret = "LvTANZRJ_PrYl-vwWsLPB83u";
                redirectUri = "http://localhost:8080/unicert-authentication/oauth2callback";
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
        return "Servlet loading the properties needed in registration.";
    }

    /**
     * Helper method returning the UserInterfaceBean
     *
     * If none is found in the session, one is created and save in the session
     *
     * @param request servlet request
     * @return the UserInterfaceBean
     */
    private UserInterfaceBean getUIBean(HttpServletRequest request) {
        HttpSession session = request.getSession();
        UserInterfaceBean bean = ((UserInterfaceBean) session.getAttribute("ui"));
        if (bean == null) {
//            FacesContext context = FacesContext.getCurrentInstance();
//            bean = (UserInterfaceBean) context.getApplication().evaluateExpressionGet(context, "#{iu}", UserInterfaceBean.class);
            bean = new UserInterfaceBean();
            session.setAttribute("ui", bean);
        }
        return bean;
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