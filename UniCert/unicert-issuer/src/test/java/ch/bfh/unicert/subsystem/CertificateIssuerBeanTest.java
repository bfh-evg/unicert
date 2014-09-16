package ch.bfh.unicert.subsystem;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import ch.bfh.unicert.issuer.Certificate;
import ch.bfh.unicert.issuer.CertificateIssuerMock;
import ch.bfh.unicert.issuer.IdentityData;
import ch.bfh.unicert.issuer.CertificateIssuer;
import ch.bfh.unicert.issuer.cryptography.CryptographicSetup;
import ch.bfh.unicert.issuer.cryptography.DiscreteLogSetup;
import ch.bfh.unicert.issuer.cryptography.RsaSetup;
import ch.bfh.unicert.issuer.cryptography.FiatShamirChallengeGenerator;
import ch.bfh.unicert.issuer.exceptions.CertificateCreationException;
import ch.bfh.unicert.issuer.util.CertificateHelper;
import ch.bfh.unicert.issuer.util.ConfigurationHelper;
import ch.bfh.unicert.issuer.util.ExtensionOID;
import ch.bfh.unicrypt.crypto.proofsystem.classes.PreimageProofSystem;
import ch.bfh.unicrypt.crypto.schemes.signature.classes.RSASignatureScheme;
import ch.bfh.unicrypt.helper.Alphabet;
import ch.bfh.unicrypt.helper.array.ByteArray;
import ch.bfh.unicrypt.helper.factorization.Prime;
import ch.bfh.unicrypt.helper.factorization.SafePrime;
import ch.bfh.unicrypt.helper.hash.HashAlgorithm;
import ch.bfh.unicrypt.helper.hash.HashMethod;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringElement;
import ch.bfh.unicrypt.math.algebra.concatenative.classes.StringMonoid;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.Z;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZMod;
import ch.bfh.unicrypt.math.algebra.dualistic.classes.ZModPrimePair;
import ch.bfh.unicrypt.math.algebra.general.classes.Pair;
import ch.bfh.unicrypt.math.algebra.general.classes.Triple;
import ch.bfh.unicrypt.math.algebra.general.interfaces.Element;
import ch.bfh.unicrypt.math.algebra.multiplicative.classes.GStarModSafePrime;
import ch.bfh.unicrypt.math.function.classes.GeneratorFunction;
import ch.bfh.unicrypt.math.function.interfaces.Function;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.codec.binary.Base64;
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
import org.junit.Test;
import org.junit.runner.RunWith;
import sun.security.provider.DSAPublicKeyImpl;
import sun.security.rsa.RSAPublicKeyImpl;

/**
 *
 * @author Philémon von Bergen &lt;philemon.vonbergen@bfh.ch&gt;
 */
@RunWith(Arquillian.class)
public class CertificateIssuerBeanTest {

    private static BigInteger p = new BigInteger("24421817481307177449647246484681681783337829412862177682538435312071281569646025606745584903210775224457523457768723824442724616998787110952108654428565400454402598245210227144929556256697593550903247924055714937916514526166092438066936693296218391429342957961400667273342778842895486447440287639065428393782477303395870298962805975752198304889507138990179204870133839847367098792875574662446712567387387134946911523722735147628746206081844500879809860996360597720571611720620174658556850893276934140542331691801045622505813030592119908356317756153773900818965668280464355085745552657819811997912683349698802670648319");

    public CertificateIssuerBeanTest() {
    }

    /**
     * Creates the deployable archive.
     *
     * @return an archive
     */
    @Deployment
    public static JavaArchive createDeployment() {
        JavaArchive ja = ShrinkWrap.create(JavaArchive.class)
                .addPackage(CertificateIssuer.class.getPackage())
                .addPackage(CryptographicSetup.class.getPackage())
                .addPackage(CertificateCreationException.class.getPackage())
                .addPackage(ConfigurationHelper.class.getPackage())
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml")
                .addAsResource("test-ca.jks");
        return ja;
    }

    /**
     * The injected reference to a subclass of the certificate issuer bean.
     */
    private static CertificateIssuer issuer;

    @BeforeClass
    public static void setUpClass() {

    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
        try {
            issuer = getCertificateIssuer();
        } catch (Exception ex) {
            Logger.getLogger(CertificateIssuerBeanTest.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @After
    public void tearDown() {
    }

    /**
     * Demonstrates that we get a non-null reference to the issuer.
     *
     * @throws Exception if there is an error
     */
    @Test
    public void testAssertReferenceToIssuerBean() throws Exception {
        assertNotNull(issuer);
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

        IdentityData idData = new IdentityData(mail, uid, organisation, studyBranch, null, null, null, null, null, "switch_aai", otherValues);

        SafePrime sp = SafePrime.getInstance(p);
        GStarModSafePrime G_q = GStarModSafePrime.getInstance(sp);
        ZMod Z_q = G_q.getZModOrder();
        BigInteger q = Z_q.getOrder();
        Element g = G_q.getRandomGenerator();

        Element x = Z_q.getRandomElement();
        Element y = g.selfApply(x);

        String originalMessage = "";

        StringElement message = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII).getElement(originalMessage);

        Function func = GeneratorFunction.getInstance(g);
        FiatShamirChallengeGenerator scg = FiatShamirChallengeGenerator.getInstance(G_q, G_q, Z.getInstance(), originalMessage);
        PreimageProofSystem pips = PreimageProofSystem.getInstance(scg, func);

        Triple proof = pips.generate(x, y);

        DiscreteLogSetup dls = new DiscreteLogSetup(2048, g.getBigInteger(), p, q, y.getBigInteger(), proof.getFirst().getBigInteger(), proof.getSecond().getBigInteger(), proof.getThird().getBigInteger());
        dls.setSignatureOtherInput(originalMessage);

        String applicationId = "testUniCert";
        int role = 1;

        Certificate cert = issuer.createCertificate(dls, idData, applicationId, role);

        assertEquals(idData.getCommonName(), cert.getCommonName());
        assertEquals(idData.getUniqueIdentifier(), cert.getUniqueIdentifier());

        assertEquals(idData.getOrganisation(), cert.getOrganisation());

        X509Certificate createdX509Cert = CertificateHelper.fromPEMStringToX509Certificate(cert.getPem());

        assertEquals("OU=" + idData.getOrganisationUnit() + ", O=" + idData.getOrganisation()
                + ", UID=" + idData.getUniqueIdentifier() + ", CN=" + idData.getCommonName(), createdX509Cert.getSubjectDN().getName());

        StringMonoid sm = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII);
        String hashedAppId = new String(Base64.encodeBase64(sm.getElement(applicationId).getHashValue(HashMethod.getInstance(HashAlgorithm.SHA256)).getAll()));

        DEROctetString extension1 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.APPLICATION_IDENTIFIER.getOID()));
        assertEquals(hashedAppId, CertificateHelper.DERToString(extension1));
        DEROctetString extension2 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.ROLE.getOID()));
        assertEquals("" + role, CertificateHelper.DERToString(extension2));
        DEROctetString extension3 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.IDENTITY_PROVIDER.getOID()));
        assertEquals(idData.getIdentityProvider(), CertificateHelper.DERToString(extension3));
        DEROctetString extension4 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.TEST.getOID()));
        assertEquals("test", CertificateHelper.DERToString(extension4));

        assertEquals("CN=Certificate Authority", createdX509Cert.getIssuerDN().getName());
        assertEquals(new DSAPublicKeyImpl(y.getBigInteger(), p, q, g.getBigInteger()), createdX509Cert.getPublicKey());

        assertTrue(cert.toJSON().contains("{ \"commonName\": \"test@bfh.ch\", \"uniqueIdentifier\": \"234-5678-90\", \"organisation\": \"University of Bern\", \"organisationUnit\": \"CS\", \"issuer\": \"CN=Certificate Authority\", \"serialNumber\": "));
        assertTrue(cert.toJSON().contains("\"validFrom\": "));
        assertTrue(cert.toJSON().contains("\"validUntil\":"));
        assertTrue(cert.toJSON().contains("\"test\": \"test\", \"pem\":"));

    }

    /**
     * Demonstrates that a certificate chain with a fresh new certificate for a
     * subject can be obtained.
     *
     * @throws Exception if there is an error
     */
    @Test
    public void testCreateCertificate2() throws Exception {
        String organisation = "University of Bern";
        String uid = "234-5678-90";
        String studyBranch = "CS";
        String mail = "test@bfh.ch";

        Map<ExtensionOID, String> otherValues = new HashMap();
        otherValues.put(ExtensionOID.TEST, "test");

        IdentityData idData = new IdentityData(mail, uid, organisation, studyBranch, null, null, null, null, null, "switch_aai", otherValues);

        int size = 512;

        /* Step 1: Select two large prime numbers. Say p and q. */
        BigInteger p = Prime.getRandomInstance(size).getValue();
        BigInteger q = Prime.getRandomInstance(size).getValue();
        /* Step 2: Calculate n = p.q */
        BigInteger n = p.multiply(q);
        /* Step 3: Calculate ø(n) = (p - 1).(q - 1) */
        BigInteger PhiN = p.subtract(BigInteger.valueOf(1));
        PhiN = PhiN.multiply(q.subtract(BigInteger.valueOf(1)));
        /* Step 4: Find e such that gcd(e, ø(n)) = 1 ; 1 < e < ø(n) */
        BigInteger e;
        do {
            e = new BigInteger(2 * size, new SecureRandom());
        } while ((e.compareTo(PhiN) != 1) || (e.gcd(PhiN).compareTo(BigInteger.valueOf(1)) != 0));
        /* Step 5: Calculate d such that e.d = 1 (mod ø(n)) */
        BigInteger d = e.modInverse(PhiN);

        RSASignatureScheme rss = RSASignatureScheme.getInstance(ZModPrimePair.getInstance(p, q));
        Pair keys = rss.getKeyPairGenerator().generateKeyPair();

        String originalMessage = "";
        ByteArray messageHashed = null;
        try {
            messageHashed = ByteArray.getInstance(originalMessage.getBytes("UTF-8")).getHashValue(HashAlgorithm.SHA256);
        } catch (UnsupportedEncodingException ex) {
            throw new CertificateCreationException("222 Message to sign encoding problem");
        }
        Element message = rss.getZMod().getElement(new BigInteger(1, messageHashed.getAll()));
        Element signature = rss.sign(keys.getAt(0), message);

        RsaSetup rs = new RsaSetup(2 * size, n, keys.getAt(1).getBigInteger(), signature.getBigInteger());
        rs.setSignatureOtherInput(originalMessage);

        String applicationId = "testUniCert";
        int role = 1;

        Certificate cert = issuer.createCertificate(rs, idData, applicationId, role);

        assertEquals(idData.getCommonName(), cert.getCommonName());
        assertEquals(idData.getUniqueIdentifier(), cert.getUniqueIdentifier());

        assertEquals(idData.getOrganisation(), cert.getOrganisation());

        X509Certificate createdX509Cert = CertificateHelper.fromPEMStringToX509Certificate(cert.getPem());

        assertEquals("OU=" + idData.getOrganisationUnit() + ", O=" + idData.getOrganisation()
                + ", UID=" + idData.getUniqueIdentifier() + ", CN=" + idData.getCommonName(), createdX509Cert.getSubjectDN().getName());

        StringMonoid sm = StringMonoid.getInstance(Alphabet.PRINTABLE_ASCII);
        String hashedAppId = new String(Base64.encodeBase64(sm.getElement(applicationId).getHashValue(HashMethod.getInstance(HashAlgorithm.SHA256)).getAll()));

        DEROctetString extension1 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.APPLICATION_IDENTIFIER.getOID()));
        assertEquals(hashedAppId, CertificateHelper.DERToString(extension1));
        DEROctetString extension2 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.ROLE.getOID()));
        assertEquals("" + role, CertificateHelper.DERToString(extension2));
        DEROctetString extension3 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.IDENTITY_PROVIDER.getOID()));
        assertEquals(idData.getIdentityProvider(), CertificateHelper.DERToString(extension3));
        DEROctetString extension4 = new DEROctetString(createdX509Cert.getExtensionValue(ExtensionOID.TEST.getOID()));
        assertEquals("test", CertificateHelper.DERToString(extension4));

        assertEquals("CN=Certificate Authority", createdX509Cert.getIssuerDN().getName());
        assertEquals(new RSAPublicKeyImpl(n, keys.getAt(1).getBigInteger()), createdX509Cert.getPublicKey());

        assertTrue(cert.toJSON().contains("{ \"commonName\": \"test@bfh.ch\", \"uniqueIdentifier\": \"234-5678-90\", \"organisation\": \"University of Bern\", \"organisationUnit\": \"CS\", \"issuer\": \"CN=Certificate Authority\", \"serialNumber\": "));
        assertTrue(cert.toJSON().contains("\"validFrom\": "));
        assertTrue(cert.toJSON().contains("\"validUntil\":"));
        assertTrue(cert.toJSON().contains("\"test\": \"test\", \"pem\":"));

    }

    /**
     * Returns the issuer stub (or a mock).
     * <p>
     *
     * @return a stub for a issuer
     * @throws Exception if there is an error
     */
    protected CertificateIssuer getCertificateIssuer() throws Exception {
        return new CertificateIssuerMock();
    }
}
