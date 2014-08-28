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

import ch.bfh.unicert.webclient.userdata.IdentityProvider;
import java.io.IOException;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet responsible to load JNDI properties allowing to preconfigure the registration page with the already defined values
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
            idp= "SwitchAAI";
            this.getUIBean(request);
        }

        //if idp is not set, this is the first time this method is called, so we get the
        //JNDI properties
        if (idp == null) {
            logger.log(Level.INFO, "Retrieve parameters: {0}", propertiesSetIdentifier);

            UserInterfaceBean uiBean = uiBean = this.getUIBean(request);
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
                redirectToIdp(uiBean.getIdentityProvider(), response);
                return;
            } else {
                //if multiple identity providers are supported we show a selection page
                response.sendRedirect("idpselection.xhtml");
                return;
            }
        } else {
            redirectToIdp(idp, response);
            return;
        }

    }

    /**
     * Helper method managing the redirection to the correct identity provider
     * @param identityProvider the identity provider name
     * @param response servlet respons
     * @throws IOException if an I/O Exception occurs
     */
    private void redirectToIdp(String identityProvider, HttpServletResponse response) throws IOException {
        if(identityProvider==null){
            logger.log(Level.SEVERE, "Identity provider not set");
            internalServerErrorHandler(response, "Identity provider not set");
            return;
        }
        
        //Redirection to IDP
        logger.log(Level.INFO, "Redirect to IDP");
        if (identityProvider.equals(IdentityProvider.SWITCH_AAI.getKey())) {
            response.sendRedirect("switchaai.xhtml");
        } else if (identityProvider.equals(IdentityProvider.GOOGLE.getKey())) {
            response.sendRedirect("https://accounts.google.com/o/oauth2/auth?\n"
                    + " client_id=424911365001.apps.googleusercontent.com&\n"
                    + " response_type=code&\n"
                    + " scope=openid%20email&\n"
                    + " redirect_uri=https://oa2cb.example.com/&\n"
                    + " state=security_token%3D138r5719ru3e1%26url%3Dhttps://oa2cb.example.com/myHome&\n"
                    + " login_hint=jsmith@example.com&\n"
                    + " openid.realm=example.com&\n"
                    + " hd=example.com");
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
