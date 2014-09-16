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


(function(window) {

	function Config() {
            
		/**
		 * The url of the certificate authority. The url must terminate with '/'
		 * as the concrete service (like register or list) is appended.
		 */
		this.URL_CERTIFICATE_AUTHORITY	= '/unicert-authentication/certificate-request/';

		/**
		 * The home site.
		 */
		this.HOME_SITE					= 'index.xhtml';

		/**
		 * Signs used for concat.
		 */
		this.CONCAT_SEPARATOR			= "|";

		/**
		 * Pre- and postfix used for secret key padding. Important: As the padded
		 * secret key is converted into a bigInt only leemon's base64 charset can
		 * be used (0-9, A-Z, a-z, _ and =)
		 */
		this.PRIVATE_KEY_PREFIX			= "=====BEGIN_UNICERT_PRIVATE_KEY=====";
		this.PRIVATE_KEY_POSTFIX		= "=====END_UNICERT_PRIVATE_KEY=====";

		/**
		 * Pre- and postfix used for padding the encrypted secret key.
		 */
		this.ENC_PRIVATE_KEY_PREFIX		= "-----BEGIN ENCRYPTED UNICERT KEY-----";
		this.ENC_PRIVATE_KEY_POSTFIX	= "-----END ENCRYPTED UNICERT KEY-----";

		/**
		 * Size of prefix and postfix
                 * Used for the one-time-pad to encrypt secret key.
		 *
		 * => size of pre- and postfix = 411 < 512
		 */
		this.PRIVATE_KEY_ONE_TIME_PAD_PREPOSTFIX_SIZE = 512;

		/**
		 * To prevent script timeouts the havy computations can be run asynchronously.
		 * This is mainly used for IE < 9, but is also a nice feature for all other
		 * browsers as the user get a feedback about the process of the computations.
		 */
		this.COMPUTE_ASYNCHRONOUSLY		= true;

		/**
		 * The secret key can be uploaded by file or manually through copy/paste.
		 * Whether or not the file upload is displayed depends on the html5 support
		 * of the browser. But this feature makes only sense if the secret key is
		 * retreived by file download. Otherwise use this flag to force the
		 * manually upload always.
		 */
		this.UPLOAD_SK_MANUALLY_ALWAYS	= true;


	}
	window.ucConfig = new Config();

})(window);
