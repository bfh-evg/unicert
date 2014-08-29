/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.bfh.unicert.webclient.beans.util;

import ch.bfh.unicert.webclient.beans.ParametersServlet;
import ch.bfh.unicert.webclient.beans.UserDataBean;
import ch.bfh.unicert.webclient.beans.UserInterfaceBean;
import ch.bfh.unicert.webclient.userdata.GoogleUserData;
import ch.bfh.unicert.webclient.userdata.UserData;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.bean.ManagedProperty;
import javax.faces.context.FacesContext;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.servlet.AsyncContext;
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
//        AsyncContext ctx = req.startAsync();
//        ctx.start(new GetUserInfo(req, resp, ctx));
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
        System.out.println("profile "+profile);
        UserData ud = new GoogleUserData(profile.getString("id"), profile.getString("email"), profile.getBoolean("verified_email"),
            profile.getString("name"), profile.getString("given_name"), profile.getString("family_name"), profile.getString("locale"), profile.getString("hd"));
        this.getUserDataBean(req).setUserData(ud);
        
        try {
            resp.sendRedirect("registration.xhtml");
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
//            FacesContext context = FacesContext.getCurrentInstance();
//            bean = (UserDataBean) context.getApplication().evaluateExpressionGet(context, "#{userData}", UserDataBean.class);
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

//class GetUserInfo implements Runnable {
//
//        private static final Logger logger = Logger.getLogger(OAuth2CallbackServlet.class.getName());
//
//    private HttpServletRequest req;
//    private HttpServletResponse resp;
//    private AsyncContext asyncCtx;
//    
//    @ManagedProperty("#{userData}")
//    private UserDataBean udb;
//
//    public GetUserInfo(HttpServletRequest req, HttpServletResponse resp, AsyncContext asyncCtx) {
//        this.req = req;
//        this.resp = resp;
//        this.asyncCtx = asyncCtx;
//    }
//
//    @Override
//    public void run() {
//        HttpSession sess = req.getSession();
//        OAuthService service = (OAuthService) sess.getAttribute("oauth2Service");
//
//        //Get the all important authorization code
//        String code = req.getParameter("code");
//        //Construct the access token
//        Token token = service.getAccessToken(null, new Verifier(code));
//        //Save the token for the duration of the session
//        sess.setAttribute("token", token);
//
//        
//        //Now do something with it - get the user's G+ profile
//        OAuthRequest oReq = new OAuthRequest(Verb.GET,
//                "https://www.googleapis.com/oauth2/v2/userinfo");
//        service.signRequest(token, oReq);
//        Response oResp = oReq.send();
//
//        //Read the result
//        JsonReader reader = Json.createReader(new ByteArrayInputStream(
//                oResp.getBody().getBytes()));
//        JsonObject profile = reader.readObject();
//        
//        UserData ud = new GoogleUserData(profile.getString("name"), profile.getString("email"));
//        this.getUserDataBean(req).setUserData(ud);
//        
//        try {
//            resp.sendRedirect("registration.xhtml");
//        } catch (IOException ex) {
//            logger.log(Level.SEVERE, "Unable to redirect after successful Google login: {0}", ex);
//            try {
//                internalServerErrorHandler(resp, "Unable to redirect after successful Google login");
//            } catch (IOException ex1) {
//               logger.log(Level.SEVERE, null, ex1);
//            }
//        }
//
//        asyncCtx.complete();
//    }
//    
//    /**
//     * Given a HTTP request object, determines if there is a session, and if so
//     * then populate a user data object. Returns null if the user data object
//     * cannot be fully populated.
//     *
//     * @param request the HTTP request object
//     * @return a fully populated user data object, or null
//     */
//    private UserDataBean getUserDataBean(HttpServletRequest request) {
////        HttpSession session = request.getSession();
////        UserDataBean bean = ((UserDataBean) session.getAttribute("userData"));
////        if (bean == null) {
////            bean = new UserDataBean();
////            session.setAttribute("userData", bean);
////        }
//        return udb;
//    }
//    
//    /**
//     * Error code returned for the case of an error while processing a request.
//     *
//     * @param response a HTTP response object
//     * @param kind a detailed indication
//     * @throws IOException if the response cannot be written
//     */
//    private void internalServerErrorHandler(HttpServletResponse response, String kind) throws IOException {
//        response.setContentType("text/html;charset=UTF-8");
//        response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Internal server error: " + kind);
//    }
//    
//    
//}
