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
 * 
 * The certificate authority (CA) object. It manages the communication with
 * the CA on the server side, mainly for registration and renewal.
 * 
 */


(function( window) {

	// Check for leemon library. If leemon is not loaded, an error message is
	// displayed at the top of the page.
	if ( !leemon ) {
		window.onload=function(){
			var body = document.getElementsByTagName('body')[0];
			var errorDiv= document.createElement('div');
			errorDiv.setAttribute('style', 'background-color:red; z-index:1000; position:absolute; top:0; left: 0; width: 100%; height:50px; text-align:center; font-weight:bold; padding-top: 20px;');
			errorDiv.innerHTML = "<p>ERROR: Missing JavaScript library! UniVote won't be running as leemon is missing.</p>";
			body.appendChild( errorDiv );
		}
		return;
	}

	
	/**
	 * Constructor.
	 */
	function Uvca() {

		// Url of the CA
		window.uvConfig = window.uvConfig || {};
		var URL_CERTIFICATE_AUTHORITY = uvConfig.URL_CERTIFICATE_AUTHORITY || "/webclient/registration/";
		
		/**
		 * Gets user's certificate asynchronously. Null is returned if user has 
		 * no valid certificate.
		 * 
		 * @param doneCb - Callback passing user's certificate or null if no such exists.
		 */
		this.getCertificate = function(doneCb) {
			
			// Sucess callback for ajax reqeust expecting a list of certificates.
			// The first valid certificate within the list is passed to the doneCb.
			var successCb = function(data) {
				
				var certs = parseCertificateList(data);
				var cert = null;
				for ( var i = 0; i < certs.length; i++ ) {
					var c = certs[i];
					if ( c.revoked == 'false' ) {
						cert = c;
						break;
					}
				}
				doneCb(cert);
			}
			
			// Error callback for ajax request. Calls doneCb with null; what in fact
			// is wrong! Todo: Implement a more sophisticated error handling.
			var errorCb = function() {
				doneCb(null);
			}
			
			// Ajax request
			$.ajax({
				type: "GET",
				url: URL_CERTIFICATE_AUTHORITY + 'list',
				dataType: 'xml',
				success: successCb,
				error: errorCb
			});
		}
		
		
		/**
		 * Creates certificate by sending (asynchronously) the verification key 
		 * (base64 encoded) to the CA.
		 * 
		 * @param vk - Verification key as bigInt.
		 * @param proof - NIZKP to proof knowledge of privte key as object containing t (commitment) and s (response).
		 * @param renew - Flag to indicate whether it is a renewal (true) or a first registration (false).
		 * @param doneCb - Callback on success passing the cerificate.
		 * @param errorCb - Callback on error.
		 */
		this.createCertificate = function(vk, proof, renew, doneCb, errorCb) {
			
			// Verification key base64 encoded
			//var vkStr = computeBase64(vk);
			var vkStr = leemon.bigInt2str(vk, 10);
			
			// Success callback for ajax request. Parses the received data
			// expecting a list of certificates with voter's certficate at the top. 
			var successCb = function(data){
				var certs = parseCertificateList(data);
				if ( certs.length > 0 ) {
					doneCb(certs[0]);
				} else {
					errorCb();
				}
			}
			
			// The action (either renew or register)
			var action = renew ? 'renew' : 'register';
			
			// Ajax request
			$.ajax({
				type: "POST",
				url: URL_CERTIFICATE_AUTHORITY + action,
				data: {verificationkey: vkStr, 'proof-commitment': proof.t, 'proof-response': proof.s},
				dataType: 'xml',
				success: successCb,
				error: errorCb
			});
		}
		
		/**
		 * Parses a xml certificat list as is is received from the CA and 
		 * returns a list of certificats.
		 * 
		 * @pram data - List of certificats as xml object.
		 * @return An array of certificates. The certificate itself is an array 
		 * as well, containing the certificat values.
		 */
		var parseCertificateList = function(data) {
			if ( !data ) {
				return [];
			}
			var cl = data.getElementsByTagName('certificate');
			var certs = [];
			for ( var i = 0; i < cl.length; i++ ) {
				var certXML = cl[i];
				var cert = [];
				for ( var j = 0; j < certXML.childNodes.length; j++ ) {
					var node = certXML.childNodes[j];
					if (node.nodeType == 1 ) {
						cert[node.nodeName] = node.textContent;
					}
				}
				certs[i] = cert;
			}
			return certs;
		}

		/**
		 * Comuptes a base64 encoded string of a bigInteger 
		 * as it is expected by the CA.
		 * 
		 * @param bigInteger - The big integer to be encoded.
		 * @return A string representing the big integer base64 encoded.
		 */
		var computeBase64 = function(bigInteger) {
			var bits = leemon.bpe;
			var biSize = leemon.bitSize(bigInteger);
			var neededBytes = Math.ceil((biSize+1)/8);
			var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
			var size = bigInteger.length-1;
			var overhead = 0;
			var lastShift,shift;
			var diff = (neededBytes*8)-(size*bits);
			var s = "";
			if (diff < 6 & diff > 0) {
				lastShift = 6-diff;
				shift = bits-lastShift;
			} else if (diff >= 6) {
				s = s+"A";
				lastShift = diff - 6;
				shift = bits-lastShift;
			} else if (diff < 0) {
				lastShift = Math.abs(diff);
				shift = bits + diff;
			}

			for (var i = size-1; i >= 0 ;i--) {
				if (lastShift != 0) {
					var sDigit = ((0x3F >> 6-lastShift) << (bits-lastShift) & bigInteger[i]) >> (bits-lastShift);
					sDigit = sDigit | (overhead << lastShift);
					s =  s + digits.charAt(sDigit) ;
					overhead = 0;
				}
				while (shift >= 6) {
					var tmp = ((0x3F << shift-6 ) & bigInteger[i]) >> shift-6;
					s =  s + digits.charAt(tmp);
					shift -= 6;
				}
				lastShift = 6-shift;
				overhead = (0x3F >> 6-shift) & bigInteger[i];
				shift = bits-lastShift;
			}
			if (lastShift != 0) {
				overhead = overhead << lastShift;
				s =  s + digits.charAt(overhead);
			}
			//Remove leading zero blocks
			var regex = /^AAAA/;
			while (regex.test(s)) {
				s = s.replace(regex,"");
			}
			if ((s.length%4 == 1) | ((s.length%4 == 2) & lastShift >= 4 ) ) {
				s =  s + "==";
			} else if (s.length%4 == 3) {
				s =  s + "=";
			}

			return s;
		}
	}
	
	// Create singleton CA object and set it globally. 
	window.uvCA = new Uvca();

})(window);