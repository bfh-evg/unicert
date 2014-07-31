/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ch.bfh.unicert.subsystem.Certificate;
import ch.bfh.unicert.subsystem.IdentityData;
import ch.bfh.unicert.subsystem.Registration;
import ch.bfh.unicert.subsystem.RegistrationBean;
import ch.bfh.unicert.subsystem.cryptography.CryptographicSetup;
import ch.bfh.unicert.subsystem.cryptography.DiscreteLogSetup;
import ch.bfh.unicert.subsystem.exceptions.CertificateCreationException;
import ch.bfh.unicert.subsystem.util.CertificateHelper;
import ch.bfh.unicert.subsystem.util.ConfigurationHelper;
import ch.bfh.unicert.subsystem.util.ExtensionOID;
import ch.bfh.unicrypt.crypto.proofsystem.classes.PreimageProofSystem;
import ch.bfh.unicrypt.crypto.schemes.commitment.classes.StandardCommitmentScheme;
import ch.bfh.unicrypt.helper.Alphabet;
import ch.bfh.unicrypt.helper.factorization.SafePrime;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringElement;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringMonoid;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZMod;
import ch.bfh.unicrypt.math.algebra.general.classes.ProductGroup;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Element;
import ch.bfh.unicrypt.math.algebra.multiplicative.classes.GStarModSafePrime;
import ch.bfh.unicrypt.math.function.classes.GeneratorFunction;
import ch.bfh.unicrypt.math.function.classes.SelfApplyFunction;
import ch.bfh.unicrypt.math.function.interfaces.Function;
import java.math.BigInteger;
import java.security.PublicKey;
import java.security.cert.X509Certificate;
import java.security.interfaces.DSAPublicKey;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import javax.ejb.EJB;
import org.bouncycastle.asn1.ASN1InputStream;
import org.bouncycastle.asn1.ASN1OctetString;
import org.bouncycastle.asn1.DEROctetString;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.After;
import org.junit.AfterClass;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import sun.security.provider.DSAPublicKeyImpl;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@RunWith(Arquillian.class)
public class RegistrationBeanTest {
    
    private static BigInteger p = new BigInteger("24421817481307177449647246484681681783337829412862177682538435312071281569646025606745584903210775224457523457768723824442724616998787110952108654428565400454402598245210227144929556256697593550903247924055714937916514526166092438066936693296218391429342957961400667273342778842895486447440287639065428393782477303395870298962805975752198304889507138990179204870133839847367098792875574662446712567387387134946911523722735147628746206081844500879809860996360597720571611720620174658556850893276934140542331691801045622505813030592119908356317756153773900818965668280464355085745552657819811997912683349698802670648319"); 

    
    public RegistrationBeanTest() {
    }
    
    /**
     * Creates the deployable archive.
     *
     * @return an archive
     */
    @Deployment
    public static JavaArchive createDeployment() {
        JavaArchive ja = ShrinkWrap.create(JavaArchive.class)
                .addPackage(Registration.class.getPackage())
                .addPackage(CryptographicSetup.class.getPackage())
                .addPackage(CertificateCreationException.class.getPackage())
                .addPackage(ConfigurationHelper.class.getPackage())
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml")
                .addAsResource("test-ca.jks");
        return ja;
    }
    
    /**
     * The injected reference to a subclass of the registration bean.
     */
    @EJB
    private Registration registration;
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Demonstrates that we get a non-null reference to the registration.
     *
     * @throws Exception if there is an error
     */
    @Test
    public void testAssertReferenceToRegistrationBean() throws Exception {
        assertNotNull(registration);
    }
    
    /**
     * Demonstrates that a certificate chain with a fresh new certificate for a
     * subject can be obtained.
     *
     * @throws Exception if there is an error
     */
    @Test
    public void testCreateCertificate1() throws Exception {
        String organisation = "University of Bern";
        String uid = "234-5678-90";
        String studyBranch = "CS";
        String mail = "test@bfh.ch";
        
        Map<ExtensionOID, String> otherValues = new HashMap();
        otherValues.put(ExtensionOID.TEST, "test");
        
        IdentityData idData = new IdentityData(mail, uid, organisation, studyBranch, null, null, null, null,null, "switch_aai", otherValues);
        
        SafePrime sp = SafePrime.getInstance(p);
        GStarModSafePrime G_q = GStarModSafePrime.getInstance(sp);
	ZMod Z_q = G_q.getZModOrder();
        BigInteger q = Z_q.getOrder();
        Element g = G_q.getRandomGenerator();
        
        Element x = Z_q.getRandomElement();
        Element y = g.selfApply(x);
        
        DiscreteLogSetup dls = new DiscreteLogSetup(2048, g.getBigInteger(), p);
        
        String applicationId = "testUniCert";
        int role = 1;
        
        String originalMessage = "";
        
        StringElement message = StringMonoid.getInstance(Alphabet.BASE64).getElement(originalMessage);
        Function func = GeneratorFunction.getInstance(g);
        PreimageProofSystem pips = PreimageProofSystem.getInstance(func, message);
        
        Element proof = pips.generate(x, y);
           
        Certificate cert = registration.createCertificate(dls, y.getBigInteger(), idData, applicationId, role, proof.getBigInteger(), originalMessage);
        
        
        assertEquals(idData.getCommonName(), cert.getCommonName());
        assertEquals(idData.getUniqueIdentifier(), cert.getUniqueIdentifier());
        
        assertEquals(idData.getOrganisation(), cert.getOrganisation());

        X509Certificate createdX509Cert = CertificateHelper.fromPEMStringToX509Certificate(cert.getPem());
                
        assertEquals("OU="+idData.getOrganisationUnit()+", O="+idData.getOrganisation()
                +", UID="+idData.getUniqueIdentifier()+", CN="+idData.getCommonName(), createdX509Cert.getSubjectDN().getName());
        
        
        DEROctetString extension1 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.APPLICATION_IDENTIFIER.getOID()));
        assertEquals(applicationId,CertificateHelper.DERToString(extension1));
        DEROctetString extension2 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.ROLE.getOID()));
        assertEquals(""+role,CertificateHelper.DERToString(extension2));
        DEROctetString extension3 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.IDENTITY_PROVIDER.getOID()));
        assertEquals(idData.getIdentityProvider(),CertificateHelper.DERToString(extension3));
        DEROctetString extension4 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.TEST.getOID()));
        assertEquals("test",CertificateHelper.DERToString(extension4));
        
        assertEquals("CN=Certificate Authority", createdX509Cert.getIssuerDN().getName());
        assertEquals(new DSAPublicKeyImpl(y.getBigInteger(), p, q, g.getBigInteger()), createdX509Cert.getPublicKey());
        
        assertTrue(cert.toJSON().contains("{ \"commonName\": \"test@bfh.ch\", \"uniqueIdentifier\": \"234-5678-90\", \"organisation\": \"University of Bern\", \"organisationUnit\": \"CS\", \"issuer\": \"CN=Certificate Authority\", \"serialNumber\": "));
        assertTrue(cert.toJSON().contains("\"validFrom\": "));
        assertTrue(cert.toJSON().contains("\"validUntil\":"));
        assertTrue(cert.toJSON().contains("\"test\": \"test\", \"pem\":"));
        
    }
    
    
}
