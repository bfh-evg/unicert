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
 * The certificate authority (CA) object. It manages the communication with
 * the CA on the server side, mainly for registration.
 * 
 */


(function(window) {

    // Check for leemon library. If leemon is not loaded, an error message is
    // displayed at the top of the page.
    if (!leemon) {
        window.onload = function() {
            var body = document.getElementsByTagName('body')[0];
            var errorDiv = document.createElement('div');
            errorDiv.setAttribute('style', 'background-color:red; z-index:1000; position:absolute; top:0; left: 0; width: 100%; height:50px; text-align:center; font-weight:bold; padding-top: 20px;');
            errorDiv.innerHTML = "<p>ERROR: Missing JavaScript library! UniVote won't be running as leemon is missing.</p>";
            body.appendChild(errorDiv);
        }
        return;
    }


    /**
     * Constructor.
     */
    function Ucca() {

        // Url of the CA
        window.ucConfig = window.ucConfig || {};
        var URL_CERTIFICATE_AUTHORITY = ucConfig.URL_CERTIFICATE_AUTHORITY || "/UniCertClient/registration/";

        /**
         * Creates an RSA certificate by sending (asynchronously) the verification key 
         * (base 10 encoded) to the CA.
         * @param {type} csSize
         * @param {type} rsaModulo
         * @param {type} identityFunction
         * @param {type} publicKey
         * @param {type} signature
         * @param {type} applicationIdentifier
         * @param {type} role
         * @param {type} doneCb
         * @param {type} errorCb
         * @returns {undefined}
         */
        this.createRSACertificate = function(csSize, rsaModulo, identityFunction, publicKey, signature, applicationIdentifier,
                role, doneCb, errorCb) {
            // Verification key base 10 encoded
            //var vkStr = computeBase64(vk);
            var pkStr = leemon.bigInt2str(publicKey, 10);
            var rsaModuloStr = leemon.bigInt2str(rsaModulo, 10);

            // Success callback for ajax request. Parses the received data
            // expecting a list of certificates with voter's certficate at the top. 
            var successCb = function(data) {
                var cert = parseCertificate(data);
                if (cert) {
                    doneCb(cert);
                } else {
                    errorCb();
                }
            }

            // Ajax request
            $.ajax({
                type: "POST",
                url: URL_CERTIFICATE_AUTHORITY,
                data: {'crypto_setup_type': 'RSA', 'crypto_setup_size': csSize, 'rsa_modulo': rsaModuloStr,
                    'identity_function': identityFunction, 'public_key': pkStr, 'signature': signature,
                    'application_identifier': applicationIdentifier, 'role': role},
                dataType: 'json',
                success: successCb,
                error: errorCb
            });
        }


        /**
         * Creates a DLOG certificate by sending (asynchronously) the verification key 
         * (base 10 encoded) to the CA.
         * @param {type} csSize
         * @param {type} dlogPrime
         * @param {type} dlogGenerator
         * @param {type} identityFunction
         * @param {type} publicKey
         * @param {type} signature
         * @param {type} applicationIdentifier
         * @param {type} role
         * @param {type} doneCb
         * @param {type} errorCb
         * @returns {undefined}
         */
        this.createDLogCertificate = function(csSize, dlogPrimeP, dlogPrimeQ, dlogGenerator, identityFunction, publicKey, proof, applicationIdentifier,
                role, doneCb, errorCb) {

            // Verification key base64 encoded
            var pkStr = leemon.bigInt2str(publicKey, 10);
            var pStr = leemon.bigInt2str(dlogPrimeP, 10);
            var qStr = leemon.bigInt2str(dlogPrimeQ, 10);
            var gStr = leemon.bigInt2str(dlogGenerator, 10);

            // Success callback for ajax request. Parses the received data
            // expecting a list of certificates with voter's certficate at the top.
            var successCb = function(data) {
                var cert = parseCertificate(data);
                if (cert) {
                    doneCb(cert);
                } else {
                    errorCb();
                }
            }

            // Ajax request
            $.ajax({
                type: "POST",
                url: URL_CERTIFICATE_AUTHORITY,
                data: {'crypto_setup_type': 'DiscreteLog', 'crypto_setup_size': csSize, 'dlog_p': pStr, 'dlog_q': qStr, 'dlog_generator': gStr,
                    'identity_function': identityFunction, 'public_key': pkStr, 'dlog_proof_commitment': proof.t, 'dlog_proof_challenge': proof.c, 'dlog_proof_response': proof.s,
                    'application_identifier': applicationIdentifier, 'role': role},
                dataType: 'json',
                success: successCb,
                error: errorCb,
            });
        }

        /**
         * Parses a json certificate as is is received from the CA and 
         * returns it.
         * 
         * @pram data - List of certificats as json object.
         * @return the certificate
         */
        var parseCertificate = function(data) {
            if (!data) {
                return null;
            }
            var cert = data;

            return cert;
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
            var neededBytes = Math.ceil((biSize + 1) / 8);
            var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var size = bigInteger.length - 1;
            var overhead = 0;
            var lastShift, shift;
            var diff = (neededBytes * 8) - (size * bits);
            var s = "";
            if (diff < 6 & diff > 0) {
                lastShift = 6 - diff;
                shift = bits - lastShift;
            } else if (diff >= 6) {
                s = s + "A";
                lastShift = diff - 6;
                shift = bits - lastShift;
            } else if (diff < 0) {
                lastShift = Math.abs(diff);
                shift = bits + diff;
            }

            for (var i = size - 1; i >= 0; i--) {
                if (lastShift != 0) {
                    var sDigit = ((0x3F >> 6 - lastShift) << (bits - lastShift) & bigInteger[i]) >> (bits - lastShift);
                    sDigit = sDigit | (overhead << lastShift);
                    s = s + digits.charAt(sDigit);
                    overhead = 0;
                }
                while (shift >= 6) {
                    var tmp = ((0x3F << shift - 6) & bigInteger[i]) >> shift - 6;
                    s = s + digits.charAt(tmp);
                    shift -= 6;
                }
                lastShift = 6 - shift;
                overhead = (0x3F >> 6 - shift) & bigInteger[i];
                shift = bits - lastShift;
            }
            if (lastShift != 0) {
                overhead = overhead << lastShift;
                s = s + digits.charAt(overhead);
            }
            //Remove leading zero blocks
            var regex = /^AAAA/;
            while (regex.test(s)) {
                s = s.replace(regex, "");
            }
            if ((s.length % 4 == 1) | ((s.length % 4 == 2) & lastShift >= 4)) {
                s = s + "==";
            } else if (s.length % 4 == 3) {
                s = s + "=";
            }

            return s;
        }
    }

    // Create singleton CA object and set it globally. 
    window.ucCA = new Ucca();

})(window);