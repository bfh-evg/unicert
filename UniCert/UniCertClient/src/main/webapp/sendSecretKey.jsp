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
 */
--%>
<%@page import="ch.bfh.unicert.webclient.beans.UserDataBean"%>
<%@page import="java.util.*"%>
<%@page import="ch.bfh.unicert.webclient.beans.LanguageDetails"%>
<%@page import="javax.mail.*"%>
<%@page import="javax.mail.internet.*"%>
<%@page import="javax.activation.*"%>
<%@page import="javax.naming.*"%>
<%@page contentType="text/javascript" pageEncoding="UTF-8"%>
<%
	// Line break used in email
	final String MAIL_LB = "\n";

	// Get users email address
	UserDataBean ud = (UserDataBean) session.getAttribute("userData");
	if ( ud == null || ud.getEmail() == null || ud.getEmail().equals("") ) {
		response.sendError(500, "No email address in user session!");
		return;
	}
	String mailTo = ud.getEmail();

	// Get localized messges
	LanguageDetails languageDetails = (LanguageDetails) session.getAttribute("languageDetails");
	ResourceBundle msg = ResourceBundle.getBundle("messages", new Locale(languageDetails.getLocale()));

	// Read the secret key from the request
	String secretKey = request.getParameter("sk");

	// Configure smtp server -- see Configuration instructions.

	// Get the default mail session object.
	InitialContext ctx = new InitialContext();
	Session mailSession = (Session)ctx.lookup("mail/MailSession");

	try {

		// Put mail body together
		StringBuilder body = new StringBuilder();
		// 1. localized body text
		body.append(msg.getString("skMailBody"));
		// 2. spacer between body text and secret key
		body.append(MAIL_LB + MAIL_LB + "*******" + MAIL_LB+MAIL_LB);
		// 3. secret key (line by line to split the key into lines of max 60 chars)
		String[] skLines = secretKey.split("\n");
		for (int i = 0; i < skLines.length; i++ ) {
			String line = skLines[i];
			// key's pre- and postfix are added as they are
			if ( line.startsWith("-----") ) {
				body.append(line + MAIL_LB);
			} else {
				// split line into lines of 60 chars
				for (int start = 0; start < line.length(); start += 60) {
					body.append(line.substring(start, Math.min(line.length(), start + 60)) + MAIL_LB);
				}
			}
		}
		body.append(MAIL_LB + MAIL_LB);

		// Create message
		MimeMessage message = new MimeMessage(mailSession);
		//message.setFrom(new InternetAddress(MAIL_FROM_ADDRESS, MAIL_FROM_NAME));
		message.setRecipient(Message.RecipientType.TO, new InternetAddress(mailTo));
                message.setSentDate(new Date());
		message.setSubject(msg.getString("skMailSubject"), "UTF-8");
		message.setText(body.toString(),"UTF-8");

		// Send message
		Transport.send(message);

		// Send response
		out.println("{\"message\": \"" + msg.getString("skMailSuccess") + "\", \"to\": \"" + mailTo + "\"}");

	} catch (Exception ex) {
		response.sendError(500, ex.getMessage());

	}
%>