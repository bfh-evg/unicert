/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.bfh.unicert.certimport;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.security.interfaces.DSAPublicKey;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InvalidNameException;
import javax.naming.ldap.LdapName;
import javax.naming.ldap.Rdn;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

/**
 * Main class of helper tool allowing to import voter certificates of UniVote 1 into UniCert.
 * A CSV dump of of table "CertificateEntity" of the registration database must be available.
 * 
 * @author Philémon von Bergen
 */
public class Main {

    private static final String csvPath = "/home/phil/CERTIFICATEENTITY.csv";
    private static final String keystorePath = "/home/phil/UniCert.jks";
    private static final String keystorePass = "123456";
    private static final String issuerId = "unicertbfh";
    private static final String privKeyPass = "123456";
    private static final String boardId = "uniboardcert";
    private static final String uniBoardUrl = "http://urd.bfh.ch:9080/UniBoardService/UniBoardServiceImpl";
    private static final String uniBoardWSDLurl = "http://urd.bfh.ch:9080/UniBoardService/UniBoardServiceImpl?wsdl";
    private static final String section = "unicert";

    private static CertificateIssuer issuer = new CertificateIssuer(keystorePath, keystorePass, issuerId, privKeyPass,
	    boardId);

    private static final Logger logger = Logger.getLogger(Main.class.getSimpleName());

    private static int counter = 0;

    public static void main(String[] args) throws IOException, InvalidNameException {

	logger.info("File read");

	File f = new File(csvPath);
	CSVParser parser = CSVParser.parse(f, Charset.forName("UTF-8"), CSVFormat.DEFAULT);

	for (CSVRecord record : parser) {
	    createCertificate(record);
	}

    }

    /**
     * Create a certificate fot the given CSV record
     * @param record the record to parse
     * @throws InvalidNameException 
     */
    private static void createCertificate(CSVRecord record) throws InvalidNameException {

	int recordid = Integer.parseInt(record.get(0));
	String pemCert = record.get(1);
	String institution = record.get(2);
	int revoked = Integer.parseInt(record.get(3));
	if (revoked == 1) {
	    System.out.println("Certficate "+recordid+" is revoked. Looking for next certificate...");
	    return;
	}

	String studyBranch = record.get(5);
	String uniqueId = record.get(6);
	String mail = record.get(8);

	CertificateFactory cf;
	X509Certificate cert;
	try {
	    cf = CertificateFactory.getInstance("X.509");
	    cert = (X509Certificate) cf.generateCertificate(new ByteArrayInputStream(pemCert.getBytes()));
	} catch (CertificateException ex) {
	    logger.log(Level.SEVERE, "Not able to read certificate for record {0}, exception: {1}", new Object[]{
		recordid,
		ex});
	    return;
	}

	DSAPublicKey pubKey = (DSAPublicKey) cert.getPublicKey();

	String commonName = cert.getSubjectDN().getName();

	LdapName ln = new LdapName(cert.getSubjectX500Principal().toString());

	for (Rdn rdn : ln.getRdns()) {
	    if (rdn.getType().equalsIgnoreCase("CN")) {
		commonName =  (String)rdn.getValue();
		break;
	    } else if (rdn.getType().equalsIgnoreCase("UID")) {
		uniqueId =  (String)rdn.getValue();
		break;
	    } else if (rdn.getType().equalsIgnoreCase("OU")) {
		studyBranch =  (String)rdn.getValue();
		break;
	    }
	}

	IdentityData idData = new IdentityData(commonName, uniqueId, institution, studyBranch, null, null, null, null,
		null, "SwitchAAI", null);
	
		try {
	    Certificate certificate = issuer.createClientCertificate(idData, keystorePath, pubKey, 10, "UniVote", new String[]{"Voter"}, uniBoardWSDLurl, 
		    uniBoardUrl, section);
	    counter++;
	    System.out.println("Certificate published for "+recordid+". Count "+counter +" of 6424");
	} catch (CertificateCreationException ex) {
	    logger.log(Level.SEVERE, "Not able to create certificate for record {0}, exception: {1}", new Object[]{recordid,
		ex});
	}
    }
}
