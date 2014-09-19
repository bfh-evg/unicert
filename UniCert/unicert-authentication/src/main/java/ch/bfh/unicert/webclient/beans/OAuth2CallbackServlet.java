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

import ch.bfh.unicert.webclient.userdata.GoogleUserData;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.scribe.model.OAuthRequest;
import org.scribe.model.Response;
import org.scribe.model.Token;
import org.scribe.model.Verb;
import org.scribe.model.Verifier;
import org.scribe.oauth.OAuthService;

@WebServlet(urlPatterns = {"/oauth2callback"}, asyncSupported = true)
public class OAuth2CallbackServlet extends HttpServlet {
    
    private static final Logger logger = Logger.getLogger(OAuth2CallbackServlet.class.getName());
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

        //Check if the user have rejected
        String error = req.getParameter("error");
        if ((null != error) && ("access_denied".equals(error.trim()))) {
            HttpSession sess = req.getSession();
            sess.invalidate();
            resp.sendRedirect(req.getContextPath());
            return;
        }

        //OK the user have consented so lets find out about the user
        HttpSession sess = req.getSession();
        OAuthService service = (OAuthService) sess.getAttribute("oauth2Service");

        //Get the all important authorization code
        String code = req.getParameter("code");
        //Construct the access token
        Token token = service.getAccessToken(null, new Verifier(code));
        //Save the token for the duration of the session
        sess.setAttribute("token", token);

        
        //Now do something with it - get the user's G+ profile
        OAuthRequest oReq = new OAuthRequest(Verb.GET,
                "https://www.googleapis.com/oauth2/v2/userinfo");
        service.signRequest(token, oReq);
        Response oResp = oReq.send();

        //Read the result
        JsonReader reader = Json.createReader(new ByteArrayInputStream(
                oResp.getBody().getBytes()));
        JsonObject profile = reader.readObject();
        if(profile == null){
            logger.log(Level.SEVERE, "Google login failed: profile is null");
            internalServerErrorHandler(resp, "Google login failed");
            return;
        }
                
        UserData ud = new GoogleUserData(profile.getString("id"), profile.getString("email"), profile.getBoolean("verified_email"),
            profile.getString("name"), profile.getString("given_name"), profile.getString("family_name"), profile.getString("locale"), null);
        this.getUserDataBean(req).setUserData(ud);
        
        try {
            resp.sendRedirect("certificate-request.xhtml");
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
     * Given a HTTP request object, determines if there is a session, and if so
     * then populate a user data object. Returns null if the user data object
     * cannot be fully populated.
     *
     * @param request the HTTP request object
     * @return a fully populated user data object, or null
     */
    private UserDataBean getUserDataBean(HttpServletRequest request) {
        HttpSession session = request.getSession();
        UserDataBean bean = ((UserDataBean) session.getAttribute("userData"));
        if (bean == null) {
            bean = new UserDataBean();
            session.setAttribute("userData", bean);
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

