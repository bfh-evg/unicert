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
 * This file contains the certificate request page specific JS.
 *
 */

// Configuration.
//-------------------------------------
window.ucConfig = window.ucConfig || {};

/**
 * Home site.
 */
var HOME_SITE = ucConfig.HOME_SITE || 'index.xhtml';
var SEPARATOR = ucConfig.CONCAT_SEPARATOR || '|';

//-------------------------------------


/**
 * Holds voter data like id, email and whether it is a renewal.
 */
var requester = {};

var publickey;
var secretKey;
var modulo;
var p, q, g;

var type = "";
var size;

/**
 * Holds the used DOM elements.
 */
var elements = {};

var msgName;

/**
 * Initialisation on document ready.
 */
$(document).ready(function() {

    // Get voter data
    requester.id = document.getElementById('requester-id').value;
    requester.email = document.getElementById('requester-email').value;
    requester.idp = document.getElementById('requester-idp').value;

    // Get DOM elements
    elements.step2 = document.getElementById('step_2');
    elements.step3 = document.getElementById('step_3');

    elements.step2content = document.getElementById('step_2_content');
    elements.substep211 = document.getElementById('substep_2_1_1');
    elements.substep22 = document.getElementById('substep_2_2');
    elements.substep23 = document.getElementById('substep_2_3');
    elements.substep24 = document.getElementById('substep_2_4');
    elements.step3content = document.getElementById('step_3_content');

    elements.secretKey = document.getElementById('secretkey_ta');

    elements.password = document.getElementById('password');
    elements.password2 = document.getElementById('password2');
    elements.passwordCheckIcon = document.getElementById('password-check-icon');
    elements.application = document.getElementById('application');
    elements.role = document.getElementById('role');
    elements.cryptoSetupType = document.getElementById('crypto_setup_type');
    elements.cryptoSetupSize = document.getElementById('crypto_setup_size');
    elements.identity_function = document.getElementById('identity_function');

    elements.rsaOptions = document.getElementById('rsa_options');
    elements.dlogOptions = document.getElementById('dlog_options');

    elements.p = document.getElementById('p');
    elements.q = document.getElementById('q');
    elements.g = document.getElementById('g');

    elements.retreiveSecretKeyButton = document.getElementById('retreive_secretkey_bu');
    elements.generateKeyButton = document.getElementById('generate_key_bu');

    // Register events (button's onclick are registered inline)
    $(elements.secretKey).click(function() {
        this.select();
    })
    $([elements.password, elements.password2]).keyup(function() {
        checkPasswords()
    });


    // 1. Check if voter.id is available, otherwise user is not authorised
    if (requester.id == '') {
        $.blockUI({message: '<p>' + msg.userNotAuthorised + '</p>'});
        setTimeout(function() {
            location.href = HOME_SITE
        }, 5000);
        return;
    }

    init();

});

function init() {
    elements.retreiveSecretKeyButton.disabled = true;
    elements.password.disabled = true;
    elements.password2.disabled = true;
    elements.application.disabled = false;
    elements.role.disabled = true;
    elements.identity_function.disabled = true;
    elements.generateKeyButton.disabled = true;
    secretKey = null;
    publicKey = null;
    modulo = null;
    elements.secretKey.value = "";
    //if cryptoSetupType has a default value (is not shown)
    if (hasClass(elements.cryptoSetupType.parentNode.parentNode, "notdisplayed")) {
        //enable generateKey button
        elements.generateKeyButton.disabled = false;
        //if p,q or g does not have a default value, trigger the same event as when cryptoSetupType is chosen
        if (hasClass(elements.p.parentNode.parentNode, "notdisplayed") || hasClass(elements.q.parentNode.parentNode, "notdisplayed") || hasClass(elements.g.parentNode.parentNode, "notdisplayed")) {
            updateKeysOptions();
        }
    }
    
    if(requester.idp == "SwitchAAI"){
        elements.identity_function.remove(4);
        elements.identity_function.remove(3);
    } else if (requester.idp == "Google"){
        elements.identity_function.remove(2);
        elements.identity_function.remove(1);
        elements.identity_function.remove(0);
    }
}

function hasClass(element, cls) {
    return ('' + element.className).indexOf('' + cls) > -1;
}

function updateKeysOptions() {
    if (elements.cryptoSetupType.value == "RSA") {
        //only shows cryptoSetupSize when not set
        if (!hasClass(elements.cryptoSetupSize.parentNode.parentNode, "notdisplayed")) {
            $(elements.rsaOptions).show("slow");
        }
        $(elements.dlogOptions).hide("slow");
        elements.generateKeyButton.disabled = false;
    } else if (elements.cryptoSetupType.value == "DiscreteLog") {
        if (!hasClass(elements.p.parentNode.parentNode, "notdisplayed") ||
                !hasClass(elements.q.parentNode.parentNode, "notdisplayed") ||
                !hasClass(elements.g.parentNode.parentNode, "notdisplayed")) {
            $(elements.dlogOptions).show("slow");
        }
        $(elements.rsaOptions).hide("slow");
        elements.generateKeyButton.disabled = false;
    } else {
        $(elements.rsaOptions).hide("slow");
        $(elements.dlogOptions).hide("slow");
        elements.generateKeyButton.disabled = true;
    }
}
/**
 * Generates key pair. The verification key is generated asynchronously.
 */
function generateKeyPair() {

    // Block UI while processing
    $.blockUI({message: '<p id="blockui-processing">' + msg.processing + '.</p>'});

    var sk = null;

    // Done callback of verification key computation
    var doneCbDlog = function(vk) {
        // Store keys
        secretKey = sk;
        publicKey = vk;

        // Display secret key to the voter and unblock UI
        elements.secretKey.value = leemon.bigInt2str(secretKey, 64);


        $.unblockUI();

        // Enable/disable next substep
        $(elements.substep211).animate({opacity: 1}, 500);
        $(elements.substep22).animate({opacity: 1}, 500);
        elements.password.disabled = false;
        elements.password2.disabled = false;
        
    };

    // Done callback of keys computation
    var doneCbRSA = function(keys) {

        secretKey = keys[0];
        publicKey = keys[1];
        modulo = keys[2];


        elements.secretKey.value = leemon.bigInt2str(secretKey, 64);

        $.unblockUI();

        // Enable/disable next substep
        $(elements.substep211).animate({opacity: 1}, 500);
        $(elements.substep22).animate({opacity: 1}, 500);
        elements.password.disabled = false;
        elements.password2.disabled = false;
        
    };

    // Update callback of verification key computation
    var updateCb = function() {
        $('#blockui-processing').append('.');
    };

    // Generate the keys
    if (elements.cryptoSetupType.value == "RSA") {
        type = "RSA";
        size = parseInt(elements.cryptoSetupSize.value);
        ucCrypto.generateRSASecretKey(size, doneCbRSA, updateCb);
    } else if (elements.cryptoSetupType.value == "DiscreteLog") {
        if (elements.p.value == "" || elements.q.value == "" || elements.g.value == "") {
            $.unblockUI();
            $.blockUI({message: '<p>' + msg.missingValuePQG + '</p>',
                timeout: 5000});
            return;
        }
        type = "DLOG";
        p = leemon.str2bigInt(elements.p.value, 10, 1);
        q = leemon.str2bigInt(elements.q.value, 10, 1);
        g = leemon.str2bigInt(elements.g.value, 10, 1);
        sk = ucCrypto.generateDLOGSecretKey(q);
        // Compute verification key based on secret key
        ucCrypto.computeVerificationKeyAsync(p, g, sk, doneCbDlog, updateCb);
    }

}

/**
 * Helper function to check equality of password and password-check.
 * If the passwords are not empty but equal, the voter gets a feedback
 * (green checkmark) and the next substep is enabled.
 */
function checkPasswords() {
    var pw = elements.password.value;
    var pw2 = elements.password2.value;
    if (pw == pw2 && pw != '') {
        $(elements.passwordCheckIcon).addClass('ok');
        $(elements.substep23).stop(true, true).animate({opacity: 1}, 500);
        $(elements.substep24).stop(true, true).animate({opacity: 1}, 500);
        elements.retreiveSecretKeyButton.disabled = false;
        elements.role.disabled = false;
        elements.identity_function.disabled = false;
    } else {
        $(elements.passwordCheckIcon).removeClass('ok');
        $(elements.substep23).stop(true, true).animate({opacity: 0.2}, 500);
        $(elements.substep24).stop(true, true).animate({opacity: 0.2}, 500);
        elements.retreiveSecretKeyButton.disabled = true;
        elements.role.disabled = true;
        elements.identity_function.disabled = true;
    }
}


/**
 * Completes the certificate request. (1) Computes verification key proof,
 * (2) sends verification key to the CA and in response get the certificate
 * and finally (3) the secret key is handed out to the voter either by
 * file download or by mail.
 *
 *  @param byMail - If true, the secret key is passed by mail, otherwise by
 *  file download to the voter.
 */
function completeCertRequest(byMail) {

    byMail = byMail || false;
    var pw = elements.password.value;

    // Done callback of certificate creation
    var createCertDoneCb = function(cert) {
        // Store cert
        certificate = cert;

        var skC;
       
        if (type == "RSA") {
            // (3) Hand out secret key to the voter (size one time pad = size(n) + PRE/POST-Fix)
            var sk = leemon.bigInt2str(secretKey, 64);
            // encrypt secret key with users password
            skC = ucCrypto.encryptSecretKey(sk, pw);
        } else if (type == "DLOG") {
            
            // (3) Hand out secret key to the voter
            var sk = leemon.bigInt2str(secretKey, 64);
            // encrypt secret key with users password
            skC = ucCrypto.encryptSecretKey(sk, pw);
        }


        if (byMail) {
            // Send secret key to the voter by mail (asynchronous)
            retreiveSecretKeyByMail(
                    skC,
                    function() {
                        // Done -> go to step 3
                        $.unblockUI();
                        gotoStep3();
                    },
                    function() {
                        // Error
                        $.unblockUI();
                        $.blockUI({
                            message: '<p>' + msg.sendSecretKeyFailed + '</p>',
                            timeout: 5000});
                    });

        } else {
            // File download of secret key
            retreiveSecretKeyBySaveas(skC);
            // finally go to step 3
            $.unblockUI();
            gotoStep3();
        }

    };

    // Error callback fo certificate creation
    var createCertErrorCb = function(request, status, error) {

        var message = "";

        try {
            var json = JSON.parse(request.responseText);
            if (json.error != "") {
                msgName = "msg.error" + json.error;
                message = eval(window['msgName']);
            } else {
                message = msg.errorundefined;
            }
        } catch (err) {
            message = msg.errorundefined;
        }


        $.unblockUI();
        $.blockUI({
            message: '<p>' + msg.createCertificateFailed + " " + message + '</p>',
            timeout: 5000});
    };

    // Update callback of verification key proof computation
    var computeUpdateCb = function() {
        $('#blockui-processing').append('.');
    };

    // Done callback of verification key proof computation for DLog
    var computeProofDoneCb = function(proof) {
        // (2) Send verification key to CA and get the certificate
        ucCA.createDLogCertificate(elements.cryptoSetupSize.value, p, q, g, elements.identity_function.value, publicKey, proof,
                elements.application.value, elements.role.value, createCertDoneCb, createCertErrorCb);
    };

    // Done callback of verification key signature computation for RSA
    var computeSignatureDoneCb = function(signature) {
        console.log("sig: "+leemon.bigInt2str(signature,10));

        // (2) Send verification key to CA and get the certificate
        ucCA.createRSACertificate(elements.cryptoSetupSize.value, modulo, elements.identity_function.value, publicKey, leemon.bigInt2str(signature, 10),
                elements.application.value, elements.role.value, createCertDoneCb, createCertErrorCb);
    };

    // (1) Compute verification key proof / signature
    var valuesToSign = requester.idp + SEPARATOR + requester.email + SEPARATOR + requester.id;
    valuesToSign = valuesToSign + SEPARATOR + elements.cryptoSetupType.value + SEPARATOR + elements.cryptoSetupSize.value;
    valuesToSign = valuesToSign + SEPARATOR + leemon.bigInt2str(publicKey, 10);

    $.blockUI({message: '<p id="blockui-processing">' + msg.processing + '...</p>'});
    if (type == "RSA") {
        valuesToSign = valuesToSign + SEPARATOR + leemon.bigInt2str(modulo, 10);
        valuesToSign = valuesToSign + SEPARATOR + elements.identity_function.value + SEPARATOR + elements.application.value + SEPARATOR + elements.role.value;
        ucCrypto.computeSignatureAsync(secretKey, publicKey, modulo, valuesToSign, computeSignatureDoneCb, computeUpdateCb);
    } else if (type == "DLOG") {
        valuesToSign = valuesToSign + SEPARATOR + leemon.bigInt2str(p, 10) + SEPARATOR + leemon.bigInt2str(q, 10) + SEPARATOR + leemon.bigInt2str(g, 10);
        valuesToSign = valuesToSign + SEPARATOR + elements.identity_function.value + SEPARATOR + elements.application.value + SEPARATOR + elements.role.value;
        ucCrypto.computeVerificationKeyProofAsync(p, q, g, secretKey, publicKey, valuesToSign, computeProofDoneCb, computeUpdateCb);
    }
}


/**
 * Hands out the secret key through file download (saveas).
 *
 * @param skC - Encrypted secret key.
 */
function retreiveSecretKeyBySaveas(skC) {
    downloadFile(skC, 'UniVoteKey.txt');
}

/**
 * Hands out the secret key by mail
 *
 * @param skC - Encrypted secret key.
 * @param doneCb - Done callback.
 * @param errorCb - Error callback
 */
function retreiveSecretKeyByMail(skC, doneCb, errorCb) {

    // Success callback of sending secret key.
    // data holds a message and the to-address (data.message, data.to)
    var successCb = function(data) {
        // Right now just call the done callback
        doneCb();
    };

    // Ajax call to send the secret key by mail.
    $.ajax({
        type: "POST",
        url: 'sendSecretKey.jsp',
        data: {sk: skC, to: document.getElementById("alternate_mail").value, appid: elements.application.value, role: elements.role.value, idp: requester.idp, pem: certificate.pem},
        dataType: 'json',
        success: successCb,
        error: errorCb
    });
}


/**
 * Goes to step 3
 */
function gotoStep3() {
    // Update progress bar
    $(elements.step2).removeClass("active");
    $(elements.step3).addClass("active");

    // Show the certificate content
    $(elements.step2content).addClass("hidden");
    $(elements.step3content).removeClass("hidden");

    // Scroll to top
    window.scrollTo(0, 0);
}


/**
 * Inspects the cert. Blocks the UI and displays the content of the cert.
 */
function inspectCert() {

    var cert = certificate;
    var html = '<div id="certificate-viewer"><h2>' + msg.yourCertificate + '</h2><table>';
    html += '<tr><th>' + msg.certCanonicalName + '</th><td>' + cert.commonName + '</td></tr>';
    html += '<tr><th>' + msg.certOrganization + '</th><td>' + cert.organisation + '</td></tr>';
    html += '<tr><th>' + msg.certOrganizationUnit + '</th><td>' + cert.organisationUnit + '</td></tr>';
    html += '<tr><th>' + msg.certIssuer + '</th><td>' + cert.issuer + '</td></tr>';
    html += '<tr><th>' + msg.certSerialNumber + '</th><td>' + cert.serialNumber + '</td></tr>';
    html += '<tr><th>' + msg.certValidFrom + '</th><td>' + cert.validFrom + '</td></tr>';
    html += '<tr><th>' + msg.certValidUntil + '</th><td>' + cert.validUntil + '</td></tr>';
    //html += '<tr><th>'+msg.certFpSha1+'</th><td>'+cert.fpSha1+'</td></tr>';
    html += '<tr><th>' + msg.certPem + '</th><td>' + cert.pem + '</td></tr>';
    html += '</table>';
    html += '<p><button class="button" onclick="$.unblockUI()">' + msg.close + '</button> &nbsp; ';
    html += '<button class="button" onclick="downloadCertificate()">' + msg.certDownload + '</button></p></div>';

    $.blockUI({
        message: html,
        css: {width: '60%', left: '20%', top: '50px'}
    });
}

/**
 * Function to download the certificate
 */
function downloadCertificate() {
    var cert = certificate;
    downloadFile(cert.pem, 'UniVoteCertificate.pem');
}

/**
 * Helper function to download a file. As currently not all browser
 * support saveas, a server roundtrip might be done.
 *
 * @param data - The data to download.
 * @param filename - The filename.
 */
function downloadFile(data, filename) {
    if (window.saveas) {
        // Do it straight forward if saveas is supported
        var keyBlob = new BlobBuilder();
        keyBlob.append(data);
        window.saveAs(keyBlob.getBlob(), filename);
    } else {
        // Do a server roundtrip if saveas is not supported
        // -> create a form and submit it
        var form = document.createElement('form');
        form.style.display = 'none';
        form.method = 'post';
        form.action = 'saveas.jsp';

        var n = document.createElement('input');
        n.type = 'hidden';
        n.name = 'name';
        n.value = filename;
        form.appendChild(n);

        var d = document.createElement('input');
        d.type = "hidden";
        d.name = 'data';
        d.value = data;
        form.appendChild(d);

        document.body.appendChild(form);
        form.submit();
    }
}


// Holds the blob builder
var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

// window.saveAs
// Shims the saveAs method, using saveBlob in IE10.
// And for when Chrome and FireFox get round to implementing saveAs we have their vendor prefixes ready.
// But otherwise this creates a object URL resource and opens it on an anchor tag which contains the "download" attribute (Chrome)
// ... or opens it in a new tab (FireFox)
// @author Andrew Dodson
// @copyright MIT, BSD. Free to clone, modify and distribute for commercial and personal use.
window.saveAs || (window.saveAs = (window.navigator.msSaveBlob ? function(b, n) {
    return window.navigator.msSaveBlob(b, n);
} : false) || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs || (function() {


    // URL's
    window.URL || (window.URL = window.webkitURL);

    if (!window.URL || !("download" in document.createElement('a'))) {
        return false;
    }

    return function(blob, name) {
        var url = URL.createObjectURL(blob);

        // Test for download link support
        if ("download" in document.createElement('a')) {

            var a = document.createElement('a');
            a.setAttribute('href', url);
            a.setAttribute('download', name);

            // Create Click event
            var clickEvent = document.createEvent("MouseEvent");
            clickEvent.initMouseEvent("click", true, true, window, 0,
                    event.screenX, event.screenY, event.clientX, event.clientY,
                    event.ctrlKey, event.altKey, event.shiftKey, event.metaKey,
                    0, null);

            // dispatch click event to simulate download
            a.dispatchEvent(clickEvent);
        }
        else {
            // fallover, open resource in new tab.
            window.open(url, '_blank', '');
        }
    };
})());

