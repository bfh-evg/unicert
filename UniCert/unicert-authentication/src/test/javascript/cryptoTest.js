
describe('DLOGvotingKeyEncryption', function () {
    it('encrypt/decrypt voting key', function () {

		var error = '';
                var q = leemon.str2bigInt("65133683824381501983523684796057614145070427752690897588060462960319251776021", 10);
		var sk = leemon.bigInt2str(ucCrypto.generateDLOGSecretKey(q), 64);
		var pw = leemon.bigInt2str(leemon.randBigInt(Math.random()*200), 64);
		var key = ucCrypto.encryptSecretKey(sk, pw);
		var sk2 = ucCrypto.decryptSecretKey(key, pw, function(message){error=message});
		sk2 = leemon.bigInt2str(sk2, 64);

		expect(error).toEqual('');
		expect(sk2).toEqual(sk);

    });
});

//describe('RSAvotingKeyEncryption', function () {
//    it('encrypt/decrypt voting key', function () {
//
//		var error = '';
//                
//                
//		ucCrypto.generateRSASecretKey(512, function(key){
//                    var sk = leemon.bigInt2str(key);
//                    var pw = leemon.bigInt2str(leemon.randBigInt(Math.random()*200), 64);
//                    var key = ucCrypto.encryptSecretKey(sk, pw);
//                    var sk2 = ucCrypto.decryptSecretKey(key, pw, function(message){error=message});
//                    sk2 = leemon.bigInt2str(sk2, 64);
//
//                    expect(error).toEqual('');
//                    expect(sk2).toEqual(sk);
//                }, 64);
//		
//
//    });
//});


