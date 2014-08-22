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
 *
 * The crypto object providing the cryptographic functions for:
 *
 *    - Secret key and verification key generation
 *    - Secret key enc- and decryption
 *    - Signature verification of election data
 *    - Vote encoding and ballot creation (encryption, proofing, signing)
 *
 * Most functions are implemented in two versions: Synchronous and asynchronous.
 * The asynchronous implementation is needed for older, slower browsers; they
 * might be removed ones in the future.
 *
 */



(function(window) {

    // Check for leemon and seedrandom library. If the libraries aren't loaded,
    // an error message is displayed at the top of the page.
    if (!leemon || !Math.seedrandom) {
        window.onload = function() {
            var body = document.getElementsByTagName('body')[0];
            var errorDiv = document.createElement('div');
            errorDiv.setAttribute('style', 'background-color:red; z-index:1000; position:absolute; top:0; left: 0; width: 100%; height:50px; text-align:center; font-weight:bold; padding-top: 20px;');
            errorDiv.innerHTML = "<p>ERROR: Missing JS library! UniCert won't be running as either leemon or seedrandom is missing.</p>";
            body.appendChild(errorDiv);
        }
        return;
    }


    /**
     * Constructor.
     */
    function Crypto() {

        ////////////////////////////////////////////////////////////////////////
        // Configuration

        window.ucConfig = window.ucConfig || {};

        // Signs used for concat.
        var CONCAT_SEPARATOR = ucConfig.CONCAT_SEPARATOR || "|";
        var CONCAT_DELIMINATOR_L = ucConfig.CONCAT_DELIMINATOR_L || "(";
        var CONCAT_DELIMINATOR_R = ucConfig.CONCAT_DELIMINATOR_R || ")";

        // Pre- and postfix used for secret key padding. Important: As the padded
        // secret key is converted into a bigInt only leemon's base64 charset can
        // be used (0-9, A-Z, a-z, _ and =)
        var PRIVATE_KEY_PREFIX = ucConfig.PRIVATE_KEY_PREFIX || "=====BEGIN_UNICERT_PRIVATE_KEY=====";
        var PRIVATE_KEY_POSTFIX = ucConfig.PRIVATE_KEY_POSTFIX || "=====END_UNICERT_PRIVATE_KEY=====";

        // Pre- and postfix used for padding the encrypted secret key.
        var ENC_PRIVATE_KEY_PREFIX = ucConfig.ENC_PRIVATE_KEY_PREFIX || "-----BEGIN ENCRYPTED UNICERT KEY-----";
        var ENC_PRIVATE_KEY_POSTFIX = ucConfig.ENC_PRIVATE_KEY_POSTFIX || "-----END ENCRYPTED UNICERT KEY-----";

        // IMPORTANT: (size of q) + (size of pre- and postfix) = 256 + 411 < 1024
        var PRIVATE_KEY_ONE_TIME_PAD_SIZE = ucConfig.PRIVATE_KEY_ONE_TIME_PAD_SIZE || 1024;

        // Base refers only to the bigInt representation of Schnorr, Elgamal and RSA parameters.
        var base = ucConfig.BASE || 10;


        ////////////////////////////////////////////////////////////////////////
        // Non-interactive zero-knowledge proof

        /**
         * Computes a non-interactive zero-knowledge proof.
         *
         * @param system - The system (either Schnorr or Elgamal).
         * @param secretInput - The secret input as bigInt.
         * @param publicInput - The public input as bigInt.
         * @param otherInput - Some other input as bigInt or string.
         * @return Proof as object containing t (commitment), c (challange) and s (response) as bigInt.
         */
        this.NIZKP = function(p, q, g, secretInput, publicInput, otherInput) {

            //1. Choose omega at random from Zq
            var omega = leemon.randBigIntInZq(q);

            //2. Compute t = g^omega mod p
            var t = leemon.powMod(g, omega, p);

            //3. Compute c = H(publicInput||t||otherInput)
            var m = [];
            m.push(leemon.bigInt2str(publicInput, 10), CONCAT_SEPARATOR);
            m.push(leemon.bigInt2str(t, 10));
            if (otherInput) {
                m.push(CONCAT_SEPARATOR);
                m.push(otherInput instanceof Array ? leemon.bigInt2str(otherInput, 10) : otherInput);
            }
            var cStr = SHA256(m.join(''));
            var c = leemon.str2bigInt(cStr, 16, 1);

            //4. Compute s = omega+c*secretInput mod q
            var s = leemon.mod(leemon.add(omega, leemon.multMod(c, secretInput, q)), q);

            // 5. Return proof
            return {t: t, c: c, s: s};
        }

        /**
         * Asynchronous version of NIZKP.
         **/
        this.NIZKPAsync = function(p, q, g, secretInput, publicInput, otherInput, doneCb, updateCb) {

            // step 2
            var step2 = function(_t) {
                var t = _t;
                //3. Compute c = H(publicInput||t||otherInput)
                var m = [];

                console.log("public input hex " + leemon.bigInt2str(publicInput, 16));
                var pubInHex = leemon.bigInt2str(publicInput, 16);
                var hashPI = sha256HexStr(pubInHex, pubInHex.length/2);
                console.log("public input hashed: " + hashPI);
                var commitmentHex = leemon.bigInt2str(t, 16);
                var hashCommitment = sha256HexStr(commitmentHex, commitmentHex.length/2);
                console.log("commitment hashed: " + hashCommitment);
                
                var hashOtherInput = sha256String(otherInput);
                console.log("other input hashed: " + hashOtherInput);
                m.push(hashPI);
                m.push(hashCommitment);
                m.push(hashOtherInput);
                var joined = m.join(''); //byte[] in hex concatenated
                var cStr = sha256HexStr(joined, joined.length/2);
                console.log("Complete hash: " + cStr);
                var c = leemon.str2bigInt(cStr, 16, 1);

                //4. Compute s = omega+c*secretInput mod q
                var s = leemon.mod(leemon.add(omega, leemon.multMod(c, secretInput, q)), q);

                // 5. Call callback with proof
                doneCb({t: t, c: c, s: s});
            }


            // Start with step 1
            //1. Choose omega at random from Zq
            var omega = leemon.randBigIntInZq(q);

            //2. Compute t = g^omega mod p
            leemon.powModAsync(g, omega, p, updateCb, step2);
        }



        ////////////////////////////////////////////////////////////////////////
        // Secret key and verification key generation

        /**
         * Generates a discrete log secret key. A secret key is a random number in Zq in
         * the Schnorr system.
         *
         * @return Secret key as bigInt.
         */
        this.generateDLOGSecretKey = function(q) {

            var sk = leemon.randBigIntInZq(q);
            return sk;
        }

        /**
         * Generates a RSA key pair.
         *
         * @return Secret key as bigInt.
         */
        this.generateRSASecretKey = function(size, doneCb, progressCb) {
            var p, q, n;
            var e = leemon.str2bigInt("65537", 10, 0);
            var keys = [];


            var qCb = function(prime) {
                q = prime;

                //the prime must not be congruent to 1 modulo e
                if (leemon.equalsInt(leemon.mod(p, e), 1) || leemon.equalsInt(leemon.mod(q, e), 1)) {
                    ucCrypto.generateRSASecretKey(size, doneCb, progressCb);
                    return;
                }

                n = leemon.mult(p, q);
                var phi = leemon.mult(leemon.addInt(p, -1), leemon.addInt(q, -1));

                var d = leemon.inverseMod(e, phi);

                keys[0] = d;
                keys[1] = e;
                keys[2] = n;

                doneCb(keys);
                return keys;
            };

            var pCb = function(prime) {
                p = prime;
                leemon.randProbPrimeAsync(size / 2 + 2, qCb, progressCb);
            };

            leemon.randProbPrimeAsync(size / 2 + 2, pCb, progressCb);
            return;
        }

        /**
         * Computes the verification key for a secret key.
         * => vk = g^sk mod p  (Schnorr)
         *
         * @param sk - Secret key as bigInt.
         * @return Verification key as bigInt.
         */
        this.computeVerificationKey = function(sk) {

            var vk = leemon.powMod(schnorr.g, sk, schnorr.p);
            return vk;
        }

        /**
         * Asynchronous version of comupteVerificationKey.
         */
        this.computeVerificationKeyAsync = function(p, g, sk, doneCb, progressCb) {

            leemon.powModAsync(g, sk, p, progressCb, doneCb);
        }

        /*
         * Computes verification key proof.
         *
         * @param sk - The secret key as bigInt.
         * @param vk - The verification key as bigInt.
         * @param voterId - Voter's id as string.
         * @return Proof as object containing t (commitment), c (challange) and
         * s (response) as string representing a bigInt to the base 10.
         */
        this.computeVerificationKeyProof = function(p, q, g, sk, vk, voterId) {
            var proof = this.NIZKP(p, q, g, sk, vk, voterId);
            proof.t = leemon.bigInt2str(proof.t, 10);
            proof.c = leemon.bigInt2str(proof.c, 10);
            proof.s = leemon.bigInt2str(proof.s, 10);
            return proof;
        }

        /**
         * Asynchronous version of comupteVerificationKeyProof.
         */
        this.computeVerificationKeyProofAsync = function(p, q, g, sk, vk, voterId, doneCb, updateCb) {

            // done
            var nizkpDoneCb = function(proof) {
                //console.log("left " + leemon.bigInt2str(leemon.powMod(g, proof.s, p), 10))
                var yc = leemon.powMod(vk, proof.c, p)
                //console.log("right " + leemon.bigInt2str(leemon.multMod(proof.t, yc, p), 10))
                proof.t = leemon.bigInt2str(proof.t, 10);
                proof.c = leemon.bigInt2str(proof.c, 10);
                proof.s = leemon.bigInt2str(proof.s, 10);
                //console.log(proof.t)
                console.log("challenge " + proof.c)
                //console.log(proof.s)

                doneCb(proof);
            };

            this.NIZKPAsync(p, q, g, sk, vk, voterId, nizkpDoneCb, updateCb);
        }


        this.computeSignatureAsync = function(sk, vk, modulo, message, doneCb, updateCb) {

            //hash the message
            var hashedMessage = SHA256(message); //base 16 encoded string
            //Create a BigInteger with the hashedMessage
            var messageBigInt = leemon.str2bigInt(hashedMessage, 16);
            //Computes the new BigInt modulo n since RSA message space in between 0 and n-1
            var messageBigIntMod = leemon.mod(messageBigInt, modulo);

            leemon.powModAsync(messageBigIntMod, sk, modulo, updateCb, doneCb);

        }

        ////////////////////////////////////////////////////////////////////////
        // Secret key enc- and decryption
        /**
         * Encrypts a secret key. The key is padded with PRIVATE_KEY_PREFIX/-POSTFIX
         * before it is encrypted using a one-time-pad (of the size PRIVATE_KEY_ONE_TIME_PAD_SIZE).
         * The one-time-pad is a random number using the password as seed.
         * Finally, the encrypted key (represented as string in leemon's base 64) is
         * padded with ENC_PRIVATE_KEY_PREFIX/-POSTFIX.
         *
         * IMPORTANT: Step 3 and 4 MUST be synchronized (mutex lock). As univote-random
         * is collecting data all the time in the background and may seed rng. Currently,
         * as long as JS is single threaded, the synchronization is implicitly given.
         *
         * @param sk - The secret key as string.
         * @param password - The password used for encryption.
         * @return Encrytped and padded secret key as string.
         */
        this.encryptSecretKey = function(sk, password) {

            // 1. Add pre- and postfix to key
            var key = PRIVATE_KEY_PREFIX + sk + PRIVATE_KEY_POSTFIX;
            // 2. Convert key into bigInt
            key = leemon.str2bigInt(key, 64, 0);
            // 3. Seed rng with password (save current RNG temporary to not
            // lose accumulated data for future randomness)
            var cRNG = Math.random;
            Math.seedrandom(password);
            // 4. Get one-time-pad and reassign old rng
            var r = leemon.randBigInt(PRIVATE_KEY_ONE_TIME_PAD_SIZE);
            Math.random = cRNG;
            // 5. Encrypt key using one-time-pad
            var keyC = leemon.xor(key, r);
            // 6. Convert key to string with base 64
            keyC = leemon.bigInt2str(keyC, 64);
            // 7. Pad encrypted key with pre- and postfix
            keyC = ENC_PRIVATE_KEY_PREFIX + '\n' + keyC + '\n' + ENC_PRIVATE_KEY_POSTFIX;
            // 8. Return encrypted and padded key
            return keyC;
        }

        /**
         * Decrypts an encrypted secret key (counterpart to encryptSecretKey).
         * If the key is not properly padded or the password is wrong then
         * the error callback is called with a string denoting the error.
         *
         * IMPORTANT: The complete step 2 MUST be synchronized (mutex lock). As univote-random
         * is collecting data all the time in the background and may seed rng. Currently,
         * as long as JS is single threaded, the synchronization is implicitly given.
         *
         * @param key - Encrypted and padded secret key as string.
         * @param password - The password used for encryption.
         * @param errorCb - Callback to notify errors (type of error is passed as string).
         * @return Secret key as bigInt.
         */
        this.decryptSecretKey = function(key, password, errorCb) {

            // Cleans a string (removes all special charaters but =, -, _)
            function cleanStr(str) {
                return str.replace(/[^\w=_\-]/gi, '');
            }


            // 1. Check and erase pre- and postfix
            // -> even \n and \r should be included in \s, only \s does not work!!!
            var pattern = new RegExp(cleanStr(ENC_PRIVATE_KEY_PREFIX) + "([0-9A-Za-z=_]*)" + cleanStr(ENC_PRIVATE_KEY_POSTFIX));
            var match = pattern.exec(cleanStr(key));
            if (match == null || match.length != 2) {
                errorCb('invalidUploadedKey');
                return false;
            }

            var keyC = match[1];

            // 2. Decrypt key with password
            keyC = leemon.str2bigInt(keyC, 64, 0);
            // Save current RNG temporary to not lose accumulated data for future randomness
            var cRNG = Math.random;
            Math.seedrandom(password);
            var r = leemon.randBigInt(PRIVATE_KEY_ONE_TIME_PAD_SIZE);
            // Reassign old rng
            Math.random = cRNG;
            var keyP = leemon.xor(keyC, r);
            keyP = leemon.bigInt2str(keyP, 64);


            // 3. Check and erase pre- and postfix
            pattern = new RegExp(PRIVATE_KEY_PREFIX + "([0-9A-Za-z=_]*)" + PRIVATE_KEY_POSTFIX);
            match = pattern.exec(keyP);
            if (match == null || match.length != 2) {
                errorCb('wrongPassword');
                return false;
            }

            // 4. Finally return sk
            return leemon.str2bigInt(match[1], 64, 1);
        }

        /**
         * Removes leading and trailing spaces and line breaks from a string.
         *
         * @param str - The string to trim.
         * @return The trimmed string.
         */
        function trim(str) {
            return str.replace(/^[\s\n\r]+|[\s\n\r]+$/g, '');
        }
        
        
        

//        function Utf8Encode(string) {
//            string = string.replace(/\r\n/g, "\n");
//            var utftext = "";
//
//            for (var n = 0; n < string.length; n++) {
//
//                var c = string.charCodeAt(n);
//
//                if (c < 128) {
//                    utftext += String.fromCharCode(c);
//                }
//                else if ((c > 127) && (c < 2048)) {
//                    utftext += String.fromCharCode((c >> 6) | 192);
//                    utftext += String.fromCharCode((c & 63) | 128);
//                }
//                else {
//                    utftext += String.fromCharCode((c >> 12) | 224);
//                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
//                    utftext += String.fromCharCode((c & 63) | 128);
//                }
//
//            }
//
//            var bin = Array();
//            var chrsz = 8;
//            var mask = (1 << chrsz) - 1;
//            for (var i = 0; i < utftext.length * chrsz; i += chrsz) {
//                bin[i >> 5] |= (utftext.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
//            }
//            return bin;
//        }
//
////        function binb2hex(binarray, hexcase) {
////            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
////            var str = "";
////            for (var i = 0; i < binarray.length * 4; i++) {
////                str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
////                        hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
////            }
////            while(str.charAt(str.length-1)=='0' && str.charAt(str.length-2)=='0'){
////            	str = str.substr(0, str.length-2)
////            }
////            return str;
////        }
//
//        function hex2binb(a) {
//            var b = [],
//                    length = a.length,
//                    i, num;
//            for (i = 0; i < length; i += 2) {
//                num = parseInt(a.substr(i, 2), 16);
//                if (!isNaN(num)) {
//                    b[i >> 3] |= num << (24 - (4 * (i % 8)))
//                } else {
//                    return "INVALID HEX STRING"
//                }
//            }
//            return b;
//        }
//
//        function parseHexString(str) {
//            var result = [];
//            while (str.length >= 8) {
//                result.push(parseInt(str.substring(0, 8), 16));
//
//                str = str.substring(8, str.length);
//            }
//
//            return result;
//        }
//
//
//
////        //from http://ats.oka.nu/titaniumcore/js/tools/binary.js
////        function hex2binb(hexstring) {
////            var ca = [];
////            for (var i = 0, j = 0; i < hexstring.length; i++) {
////                var c = hexstring.charAt(i);
////                if (c == "\s") {
////                    continue;
////                } else {
////                    ca[j++] = c;
////                }
////            }
////            if (ca.length % 2 != 0) {
////                throw "data must be a multiple of two.";
////            }
////
////            var result = new Array(ca.length >> 1);
////            for (var i = 0; i < ca.length; i += 2) {
////                var v = 0xff & ((get_amap(ca[i]) << 4) | (get_amap(ca[i + 1])));
////                result[i >> 1] = v;
////                // trace(  get_amap( ca[i+1] ) )
////                // result[i>>1] =  get_amap( ca[i+1] );
////            }
////            return result;
////        }
//
//        var amap = {};
//        amap['0'] = 0;
//        amap['1'] = 1;
//        amap['2'] = 2;
//        amap['3'] = 3;
//        amap['4'] = 4;
//        amap['5'] = 5;
//        amap['6'] = 6;
//        amap['7'] = 7;
//        amap['8'] = 8;
//        amap['9'] = 9;
//        amap['A'] = 10;
//        amap['B'] = 11;
//        amap['C'] = 12;
//        amap['D'] = 13;
//        amap['E'] = 14;
//        amap['F'] = 15;
//        amap['a'] = 10;
//        amap['b'] = 11;
//        amap['c'] = 12;
//        amap['d'] = 13;
//        amap['e'] = 14;
//        amap['f'] = 15;
//
//        function get_amap(c) {
//            var cc = amap[c];
//            //trace(c + "=>" + cc );
//            if (cc == null)
//                throw "found an invalid character.";
//            return cc;
//        }
//
//        //Useful Functions
//        function checkBin(n) {
//            return/^[01]{1,64}$/.test(n)
//        }
//        function checkDec(n) {
//            return/^[0-9]{1,64}$/.test(n)
//        }
//        function checkHex(n) {
//            return/^[0-9A-Fa-f]{1,64}$/.test(n)
//        }
//        function pad(s, z) {
//            s = "" + s;
//            return s.length < z ? pad("0" + s, z) : s
//        }
//        function unpad(s) {
//            s = "" + s;
//            return s.replace(/^0+/, '')
//        }
//
////Decimal operations
//        function Dec2Bin(n) {
//            if (!checkDec(n) || n < 0)
//                return 0;
//            return n.toString(2)
//        }
//        function Dec2Hex(n) {
//            if (!checkDec(n) || n < 0)
//                return 0;
//            return n.toString(16)
//        }
//
////Binary Operations
//        function Bin2Dec(n) {
//            if (!checkBin(n))
//                return 0;
//            return parseInt(n, 2).toString(10)
//        }
//        function Bin2Hex(n) {
//            if (!checkBin(n))
//                return 0;
//            return parseInt(n, 2).toString(16)
//        }
//
////Hexadecimal Operations
//        function Hex2Bin(n) {
//            if (!checkHex(n))
//                return 0;
//            return parseInt(n, 16).toString(2)
//        }
//        function Hex2Dec(n) {
//            if (!checkHex(n))
//                return 0;
//            return parseInt(n, 16).toString(10)
//        }
//
//        function hex2bin(hex)
//        {
//            var bytes = [];
//
//            for (var i = 0; i < hex.length - 1; i += 2)
//                bytes.push(parseInt(hex.substr(i, 2), 16));
//
//            return bytes;
//        }
//
////        console.log(Bin2Hex(Hex2Bin("FD67F10ABC41")))
////        console.log(Hex2Bin("FD67F10ABC41"))
////        console.log(binb2hex(hex2binb("FD67F10ABC41"), 1))
////        console.log(hex2binb("FD67F10ABC41"))
//
//        function str2binb(str) {
//            var bin = Array();
//            var mask = (1 << 8) - 1;
//            for (var i = 0; i < str.length * 8; i += 8) {
//                bin[i >> 5] |= (str.charCodeAt(i / 8) & mask) << (24 - i % 32);
//            }
//            return bin;
//        }
//    }
//
//
//
//    /**
//     *
//     *  Secure Hash Algorithm (SHA256)
//     *  http://www.webtoolkit.info/
//     *
//     *  Original code by Angel Marin, Paul Johnston.
//     *
//     */
//    function SHA256(s) {
//
//        var chrsz = 8;
//        var hexcase = 1;
//
//        function safe_add(x, y) {
//            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
//            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
//            return (msw << 16) | (lsw & 0xFFFF);
//        }
//
//        function S(X, n) {
//            return (X >>> n) | (X << (32 - n));
//        }
//        function R(X, n) {
//            return (X >>> n);
//        }
//        function Ch(x, y, z) {
//            return ((x & y) ^ ((~x) & z));
//        }
//        function Maj(x, y, z) {
//            return ((x & y) ^ (x & z) ^ (y & z));
//        }
//        function Sigma0256(x) {
//            return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
//        }
//        function Sigma1256(x) {
//            return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
//        }
//        function Gamma0256(x) {
//            return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
//        }
//        function Gamma1256(x) {
//            return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
//        }
//
//        function core_sha256(m, l) {
//            var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
//            var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
//            var W = new Array(64);
//            var a, b, c, d, e, f, g, h, i, j;
//            var T1, T2;
//
//            m[l >> 5] |= 0x80 << (24 - l % 32);
//            m[((l + 64 >> 9) << 4) + 15] = l;
//
//            for (var i = 0; i < m.length; i += 16) {
//                a = HASH[0];
//                b = HASH[1];
//                c = HASH[2];
//                d = HASH[3];
//                e = HASH[4];
//                f = HASH[5];
//                g = HASH[6];
//                h = HASH[7];
//
//                for (var j = 0; j < 64; j++) {
//                    if (j < 16)
//                        W[j] = m[j + i];
//                    else
//                        W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
//
//                    T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
//                    T2 = safe_add(Sigma0256(a), Maj(a, b, c));
//
//                    h = g;
//                    g = f;
//                    f = e;
//                    e = safe_add(d, T1);
//                    d = c;
//                    c = b;
//                    b = a;
//                    a = safe_add(T1, T2);
//                }
//
//                HASH[0] = safe_add(a, HASH[0]);
//                HASH[1] = safe_add(b, HASH[1]);
//                HASH[2] = safe_add(c, HASH[2]);
//                HASH[3] = safe_add(d, HASH[3]);
//                HASH[4] = safe_add(e, HASH[4]);
//                HASH[5] = safe_add(f, HASH[5]);
//                HASH[6] = safe_add(g, HASH[6]);
//                HASH[7] = safe_add(h, HASH[7]);
//            }
//            return HASH;
//        }
//
//        function parseHexString(str) {
//            var result = [];
//            while (str.length >= 8) {
//                result.push(parseInt(str.substring(0, 8), 16));
//
//                str = str.substring(8, str.length);
//            }
//
//            return result;
//        }
//
//        function createHexString(arr) {
//            var result = "";
//            var z;
//
//            for (var i = 0; i < arr.length; i++) {
//                var str = arr[i].toString(16);
//
//                z = 8 - str.length + 1;
//                str = Array(z).join("0") + str;
//
//                result += str;
//            }
//
//            return result;
//        }
//
////        function str2binb(str) {
////            var bin = Array();
////            var mask = (1 << chrsz) - 1;
////            for (var i = 0; i < str.length * chrsz; i += chrsz) {
////                bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
////            }
////            return bin;
////        }
////
////
////        function Utf8Encode(string) {
////            string = string.replace(/\r\n/g, "\n");
////            var utftext = "";
////
////            for (var n = 0; n < string.length; n++) {
////
////                var c = string.charCodeAt(n);
////
////                if (c < 128) {
////                    utftext += String.fromCharCode(c);
////                }
////                else if ((c > 127) && (c < 2048)) {
////                    utftext += String.fromCharCode((c >> 6) | 192);
////                    utftext += String.fromCharCode((c & 63) | 128);
////                }
////                else {
////                    utftext += String.fromCharCode((c >> 12) | 224);
////                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
////                    utftext += String.fromCharCode((c & 63) | 128);
////                }
////
////            }
////
////            return utftext;
////        }
//
//        function binb2hex(binarray) {
//            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
//            var str = "";
//            for (var i = 0; i < binarray.length * 4; i++) {
//                str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
//                        hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
//            }
////            while(str.charAt(str.length-1)=='0' && str.charAt(str.length-2)=='0'){
////            	str = str.substr(0, str.length-2)
////            }
//            return str;
//        }
//
//        //var x = parseHexString(s);
//
//        //s = Utf8Encode(s);
//        //return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
//        return binb2hex(core_sha256(s, s.length * chrsz));
//
//    } // End SHA256

    }
    window.ucCrypto = new Crypto();

})(window);

