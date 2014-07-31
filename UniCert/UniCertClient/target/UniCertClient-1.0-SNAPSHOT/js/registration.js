/*
 * Copyright (c) 2012 Berner Fachhochschule, Switzerland.
 * Bern University of Applied Sciences, Engineering and Information Technology,
 * Research Institute for Security in the Information Society, E-Voting Group,
 * Biel, Switzerland.
 *
 * Project UniVote.
 *
 * Distributable under GPL license.
 * See terms of license at gnu.org.
 *
 * This file contains the registration page specific JS.
 *
 */

// Configuration.
//-------------------------------------
window.uvConfig = window.uvConfig || {};

/** 
 * Home site.
 */
var HOME_SITE = uvConfig.HOME_SITE || 'index.xhtml';
//-------------------------------------


/** 
 * Holds voter data like id, email and whether it is a renewal.
 */
var voter = {};

/**
 * Holds the keys:
 * 0->secretKey, 1->verificationKey, 2->certificate
 */
var keys = [];

/**
 * Holds the used DOM elements.
 */
var elements = {};


/**
 * Initialisation on document ready.
 */
$(document).ready(function(){

	// Get voter data
	voter.id = document.getElementById('voter-id').value;
	voter.email = document.getElementById('voter-email').value;
	voter.renew = false;

	// Get DOM elements
	elements.step2 = document.getElementById('step_2');
	elements.step3 = document.getElementById('step_3');

	elements.step2content = document.getElementById('step_2_content');
	elements.substep211 = document.getElementById('substep_2_1_1');
	elements.substep22 = document.getElementById('substep_2_2');
	elements.substep23 = document.getElementById('substep_2_3');
	elements.step3content = document.getElementById('step_3_content');

	elements.secretKey = document.getElementById('secretkey_ta');

	elements.password = document.getElementById('password');
	elements.password2 = document.getElementById('password2');
	elements.passwordCheckIcon = document.getElementById('password-check-icon');

	elements.retreiveSecretKeyButton = document.getElementById('retreive_secretkey_bu');

	elements.retreiveSecretKeyButton.disabled = true;
	elements.password.disabled = true;
	elements.password2.disabled = true;

	// Register events (button's onclick are registered inline)
	$(elements.secretKey).click(function(){this.select();})
	$([elements.password, elements.password2]).keyup(function(){checkPasswords()});


	// 1. Check if voter.id is available, otherwise user is not authorised
	if ( voter.id == '' ) {
		$.blockUI({message: '<p>'+msg.userNotAuthorised+'</p>'});
		setTimeout(function(){location.href = HOME_SITE}, 5000);
		return;
	}
	
	// 2. Check whether user is already registered. If so, ask voter for renewal and
	// set voter's renew flag.
	$.blockUI({message: '<p>'+msg.loading+'</p>' });
	uvCA.getCertificate(function(cert){
		$.unblockUI();
		if ( cert ) {
			$.blockUI({message:
					'<p>'+msg.alreadyRegistered+'</p><p>'+
					'<button class="button" onclick="location.href=\''+HOME_SITE+'\';">'+msg.goBack+'</button> &nbsp; '+
					'<button class="button" onclick="voter.renew = true; $.unblockUI();">'+msg.reRegister+'</button></p>'
			});
		}
	});
	
});


/**
 * Generates key pair. The verification key is generated asynchronously.
 */
function generateKeyPair(){

	// Block UI while processing
	$.blockUI({ message: '<p id="blockui-processing">'+msg.processing+'.</p>' });
	
	// Generate secret key
	var sk = uvCrypto.generateSecretKey();

	// Done callback of verification key computation
	var doneCb = function(vk){
		
		// Store keys
		keys[0] = sk;
		keys[1] = vk;
		
		// Display secret key to the voter and unblock UI
		elements.secretKey.value = leemon.bigInt2str(sk, 64);
		$.unblockUI();

		// Enable/disable next substep
		$(elements.substep211).animate({opacity: 1}, 500);
		$(elements.substep22).animate({opacity: 1}, 500);
		elements.password.disabled = false;
		elements.password2.disabled = false;
	};

	// Update callback of verification key computation
	var updateCb = function(){
		$('#blockui-processing').append('.');
	};

	// Compute verification key based on secret key
	uvCrypto.computeVerificationKeyAsync(sk, doneCb, updateCb);
}

/**
 * Helper function to check equality of password and password-check.
 * If the passwords are not empty but equal, the voter gets a feedback 
 * (green checkmark) and the next substep is enabled.
 */
function checkPasswords() {
	var pw = elements.password.value;
	var pw2 = elements.password2.value;
	if ( pw == pw2 && pw != '' ) {
		$(elements.passwordCheckIcon).addClass('ok');
		$(elements.substep23).stop(true,true).animate({opacity: 1}, 500);
		elements.retreiveSecretKeyButton.disabled = false
	} else {
		$(elements.passwordCheckIcon).removeClass('ok');
		$(elements.substep23).stop(true,true).animate({opacity: 0.2}, 500);
		elements.retreiveSecretKeyButton.disabled = true
	}
}

/**
 * Completes the registration. (1) Computes verification key proof, 
 * (2) sends verification key to the CA and in response get the certificate 
 * and finally (3) the secret key is handed out to the voter either by 
 * file download or by mail.
 * 
 *  @param byMail - If true, the secret key is passed by mail, otherwise by
 *  file download to the voter.
 */
function completeRegistration( byMail ){
	
	byMail = byMail || false;
	var pw = elements.password.value;
	
	// Done callback of certificate creation
	var createCertDoneCb = function(cert){
		
		// Store cert
		keys[2] = cert;

		// (3) Hand out secret key to the voter
		var sk = leemon.bigInt2str(keys[0], 64);
		// encrypt secret key with users password
		var skC = uvCrypto.encryptSecretKey( sk, pw );

		if ( byMail ) {
			// Send secret key to the voter by mail (asynchronous)
			retreiveSecretKeyByMail(
				skC,
				function(){
					// Done -> go to step 3
					$.unblockUI();
					gotoStep3();
				},
				function(){
					// Error
					$.unblockUI();
					$.blockUI({	
						message: '<p>'+msg.sendSecretKeyFailed+'</p>',
						timeout: 5000 });
				});

		} else {
			// File download of secret key
			retreiveSecretKeyBySaveas(skC);
			// finally go to step 3
			$.unblockUI();
			gotoStep3();
		}

	}

	// Error callback fo certificate creation
	var createCertErrorCb = function() {
		$.unblockUI();
		$.blockUI({ 
			message: '<p>'+msg.createCertificateFailed+'</p>',
			timeout: 5000 });
	}
	
	// Update callback of verification key proof computation
	var computeProofUpdateCb = function() {
		$('#blockui-processing').append('.');
	}
	
	// Done callback of verification key proof computation
	var computeProofDoneCb = function( proof ) {
		// (2) Send verification key to CA and get the certificate
		uvCA.createCertificate(keys[1], proof, voter.renew, createCertDoneCb, createCertErrorCb);
	}
	
	// (1) Compute verification key proof
	$.blockUI({ message: '<p id="blockui-processing">'+msg.processing+'...</p>' });
	uvCrypto.computeVerificationKeyProofAsync(keys[0], keys[1], voter.id, computeProofDoneCb, computeProofUpdateCb );
}

/**
 * Hands out the secret key through file download (saveas).
 * 
 * @param skC - Encrypted secret key.
 */
function retreiveSecretKeyBySaveas( skC ) {
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
	}

	// Ajax call to send the secret key by mail.
	$.ajax({
		type: "POST",
		url: 'sendSecretKey.jsp',
		data: {sk: skC},
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
function inspectCert(){

	var cert = keys[2];
	var html = '<div id="certificate-viewer"><h2>'+msg.yourCertificate+'</h2><table>';
	html += '<tr><th>'+msg.certCanonicalName+'</th><td>'+cert.canonicalName+'</td></tr>';
	html += '<tr><th>'+msg.certOrganization+'</th><td>'+cert.organization+'</td></tr>';
	html += '<tr><th>'+msg.certOrganizationUnit+'</th><td>'+cert.organizationUnit+'</td></tr>';
	html += '<tr><th>'+msg.certIssuer+'</th><td>'+cert.issuer+'</td></tr>';
	html += '<tr><th>'+msg.certSerialNumber+'</th><td>'+cert.serialNumber+'</td></tr>';
	html += '<tr><th>'+msg.certValidFrom+'</th><td>'+cert.validFrom+'</td></tr>';
	html += '<tr><th>'+msg.certValidUntil+'</th><td>'+cert.validUntil+'</td></tr>';
	//html += '<tr><th>'+msg.certFpSha1+'</th><td>'+cert.fpSha1+'</td></tr>';
	html += '<tr><th>'+msg.certPem+'</th><td>'+cert.pem+'</td></tr>';
	html += '</table>';
	html += '<p><button class="button" onclick="$.unblockUI()">'+msg.close+'</button> &nbsp; ';
	html += '<button class="button" onclick="downloadCertificate()">'+msg.certDownload+'</button></p></div>';

	$.blockUI({
		message: html,
		css: {width: '60%', left:'20%', top:'50px'}
	});
}

/**
 * Function to download the certificate
 */
function downloadCertificate() {
	var cert = keys[2];
	downloadFile(cert.pem, 'UniVoteCertificate.pem');
}

/**
 * Helper function to download a file. As currently not all browser
 * support saveas, a server roundtrip might be done.
 * 
 * @param data - The data to download.
 * @param filename - The filename.
 */
function downloadFile( data, filename ) {
	if ( window.saveas ) {
		// Do it straight forward if saveas is supported
		var keyBlob = new BlobBuilder();
		keyBlob.append( data );
		window.saveAs( keyBlob.getBlob(), filename );
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
window.saveAs || ( window.saveAs = (window.navigator.msSaveBlob ? function(b,n){
	return window.navigator.msSaveBlob(b,n);
} : false) || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs || (function(){


	// URL's
	window.URL || (window.URL = window.webkitURL);

	if(!window.URL || !("download" in document.createElement('a') )) {
		return false;
	}

	return function(blob,name){
		var url = URL.createObjectURL(blob);

		// Test for download link support
		if( "download" in document.createElement('a') ){

			var a = document.createElement('a');
			a.setAttribute('href', url);
			a.setAttribute('download', name);

			// Create Click event
			var clickEvent = document.createEvent ("MouseEvent");
			clickEvent.initMouseEvent ("click", true, true, window, 0,
				event.screenX, event.screenY, event.clientX, event.clientY,
				event.ctrlKey, event.altKey, event.shiftKey, event.metaKey,
				0, null);

			// dispatch click event to simulate download
			a.dispatchEvent (clickEvent);
		}
		else{
			// fallover, open resource in new tab.
			window.open(url, '_blank', '');
		}
	};
})() );

