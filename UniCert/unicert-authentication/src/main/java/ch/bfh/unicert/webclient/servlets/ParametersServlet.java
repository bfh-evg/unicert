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

import ch.bfh.unicert.webclient.beans.ParametersBean;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet responsible to load JNDI properties allowing to preconfigure the certificate request page with the already
 * defined values
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@WebServlet("/parameters/*")
public class ParametersServlet extends HttpServlet {

    /**
     * The logger this servlet uses.
     */
    private static final Logger logger = Logger.getLogger(ParametersServlet.class.getName());
    private static final String PARAMETERS = "params";

    
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

//	try {
//	    Map<String, Object> properties = new HashMap<String, Object>(2);
//	    properties.put(JAXBContextProperties.MEDIA_TYPE, "application/json");
//	    properties.put(JAXBContextProperties.JSON_INCLUDE_ROOT, true);
//	    
//	    JAXBContext jc = JAXBContext.newInstance(new Class[]{UserInterfaceBean.class},
//		    properties);
//	    Marshaller marshaller = jc.createMarshaller();
//	    marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
//	    
//	    StringWriter sw = new StringWriter();
//	    marshaller.marshal(getUIBean(request), sw);
//	    
//	    response.setContentType("application/json");
//	    response.setCharacterEncoding("UTF-8");
//	    String parameters = sw.toString();
//	    logger.log(Level.SEVERE, parameters);
//	    response.getWriter().append(parameters);
//	} catch (JAXBException ex) {
//	    Logger.getLogger(ParametersServlet.class.getName()).log(Level.SEVERE, null, ex);
//	    internalServerErrorHandler(response, ex.getMessage());
//	}
	Gson gson = new Gson();
	ParametersBean pb = (ParametersBean) request.getSession().getAttribute(PARAMETERS);
	String parameters = gson.toJson(pb);

	response.setContentType("application/json");
	response.setCharacterEncoding("UTF-8");

	response.getWriter().append(parameters);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
	return "Servlet loading the properties needed in certificate request.";
    }

}
