<%-- 
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
 *
 *
 * Creats dynamically a JS object holding all the localized messages.
 *
 */
--%>
<%@page import="java.util.*"%>
<%@page contentType="text/javascript" pageEncoding="UTF-8"%>
<%
	// Get users's locale and the corresponding message resource bundle
	ResourceBundle msg = ResourceBundle.getBundle("messages", new Locale("en"));
	
	// Loop through the messages and create a string representing the js object
	// -> Of course this could be done automatically using a JSON library, but do
	//    it manually is more flexible and leaves the possibility of replacing 
	//    special chars and signs.
	StringBuilder json = new StringBuilder("var msg = {\n");
	Enumeration<String> keys = msg.getKeys();
	boolean first = true;
	while (keys.hasMoreElements()) {
		String key = (String) keys.nextElement();
		if ( first ) {
			first = false;
		} else {
			json.append(",\n");
		}
		json.append(key + ": '" + msg.getString(key).replace("'", "\\'").replaceAll("[\n\r]", "<br />") + "'");
	}
	
	json.append("};");
	
	// Finally output the string
	out.println(json.toString());
	
%>
