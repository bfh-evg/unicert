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
package ch.bfh.unicert.issuer.util;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.math.BigInteger;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.util.Arrays;
import java.util.Date;
import org.bouncycastle.asn1.DEROctetString;
import org.bouncycastle.openssl.PEMWriter;

/**
 * Helper to convert X509 certificates to base 64 encoded strings and 
 * DER encoded X509 extensions to String and vice versa.
 *
 * @author Eric Dubuis &lt,eric.dubuis@bfh.ch&gt;
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
public class CertificateHelper {
    
    /**
     * Converts a X509Certificate instance into a Base64 encoded string (PEM format).
     * @param cert a certificate
     * @return a string (PEM format)
     * @throws IOException if the conversion fails
     */
    public static String x509ToBase64PEMString(X509Certificate cert) throws IOException {
        // Convert certificate to PEM format.
        StringWriter sw = new StringWriter();
        try (PEMWriter pw = new PEMWriter(sw)) {
            pw.writeObject(cert);
            pw.flush();
            pw.close();
        }
        return sw.toString();
    }

    /**
     * Converts a PEM formatted certificate to a X509Certificate instance.
     * @param pem the PEM string
     * @return a X509Certificate instance
     * @throws CertificateException if the conversion fails
     */
    public static X509Certificate fromPEMStringToX509Certificate(String pem) throws CertificateException {
        CertificateFactory certFactory = CertificateFactory.getInstance("X.509");
        InputStream in = new ByteArrayInputStream(pem.getBytes());
        X509Certificate cert = (X509Certificate) certFactory.generateCertificate(in);
        return cert;
    }
    
    /**
     * Converts a DER encoded octet string into a String
     * @param der DER formatted string
     * @return the converted string
     */
    public static String DERToString(DEROctetString der){
        //4 first byte are header information
        byte[] stringContent = Arrays.copyOfRange(der.getOctets(), 2, der.getOctets().length);
        return new String(stringContent);
    }
    
    /**
     * Converts a string to a DER encoded octet string
     * @param string the string to convert
     * @return a DER encoded octet string
     */
    public static DEROctetString stringToDER(String string){
        return new DEROctetString(string.getBytes());
    }

}
