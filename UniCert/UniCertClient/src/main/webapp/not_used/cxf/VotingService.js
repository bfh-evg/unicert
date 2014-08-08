//
// Definitions for schema: http://univote.bfh.ch/common
// Common.xsd
//
//
// Constructor for XML Schema item {http://univote.bfh.ch/common}mixedVerificationKey
//
function univote_bfh_ch_common_mixedVerificationKey () {
	this.typeMarker = 'univote_bfh_ch_common_mixedVerificationKey';
	this._electionId = '';
	this._key = '';
	this._proof = null;
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_mixedVerificationKey.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_mixedVerificationKey.prototype.setElectionId
//
function univote_bfh_ch_common_mixedVerificationKey_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.getElectionId = univote_bfh_ch_common_mixedVerificationKey_getElectionId;

function univote_bfh_ch_common_mixedVerificationKey_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.setElectionId = univote_bfh_ch_common_mixedVerificationKey_setElectionId;
//
// accessor is univote_bfh_ch_common_mixedVerificationKey.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for key
// setter function is is univote_bfh_ch_common_mixedVerificationKey.prototype.setKey
//
function univote_bfh_ch_common_mixedVerificationKey_getKey() {
	return this._key;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.getKey = univote_bfh_ch_common_mixedVerificationKey_getKey;

function univote_bfh_ch_common_mixedVerificationKey_setKey(value) {
	this._key = value;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.setKey = univote_bfh_ch_common_mixedVerificationKey_setKey;
//
// accessor is univote_bfh_ch_common_mixedVerificationKey.prototype.getProof
// element get for proof
// - element type is {http://univote.bfh.ch/common}proof
// - required element
//
// element set for proof
// setter function is is univote_bfh_ch_common_mixedVerificationKey.prototype.setProof
//
function univote_bfh_ch_common_mixedVerificationKey_getProof() {
	return this._proof;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.getProof = univote_bfh_ch_common_mixedVerificationKey_getProof;

function univote_bfh_ch_common_mixedVerificationKey_setProof(value) {
	this._proof = value;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.setProof = univote_bfh_ch_common_mixedVerificationKey_setProof;
//
// accessor is univote_bfh_ch_common_mixedVerificationKey.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_mixedVerificationKey.prototype.setSignature
//
function univote_bfh_ch_common_mixedVerificationKey_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.getSignature = univote_bfh_ch_common_mixedVerificationKey_getSignature;

function univote_bfh_ch_common_mixedVerificationKey_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.setSignature = univote_bfh_ch_common_mixedVerificationKey_setSignature;
//
// Serialize {http://univote.bfh.ch/common}mixedVerificationKey
//
function univote_bfh_ch_common_mixedVerificationKey_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<key>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._key);
		xml = xml + '</key>';
	}
	// block for local variables
	{
		xml = xml + this._proof.serialize(cxfjsutils, 'proof', null);
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_mixedVerificationKey.prototype.serialize = univote_bfh_ch_common_mixedVerificationKey_serialize;

function univote_bfh_ch_common_mixedVerificationKey_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_mixedVerificationKey();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing key');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setKey(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing proof');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_proof_deserialize(cxfjsutils, curElement);
	}
	newobject.setProof(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}voterCertificates
//
function univote_bfh_ch_common_voterCertificates () {
	this.typeMarker = 'univote_bfh_ch_common_voterCertificates';
	this._electionId = '';
	this._certificate = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_voterCertificates.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_voterCertificates.prototype.setElectionId
//
function univote_bfh_ch_common_voterCertificates_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_voterCertificates.prototype.getElectionId = univote_bfh_ch_common_voterCertificates_getElectionId;

function univote_bfh_ch_common_voterCertificates_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_voterCertificates.prototype.setElectionId = univote_bfh_ch_common_voterCertificates_setElectionId;
//
// accessor is univote_bfh_ch_common_voterCertificates.prototype.getCertificate
// element get for certificate
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
// - array
//
// element set for certificate
// setter function is is univote_bfh_ch_common_voterCertificates.prototype.setCertificate
//
function univote_bfh_ch_common_voterCertificates_getCertificate() {
	return this._certificate;
}

univote_bfh_ch_common_voterCertificates.prototype.getCertificate = univote_bfh_ch_common_voterCertificates_getCertificate;

function univote_bfh_ch_common_voterCertificates_setCertificate(value) {
	this._certificate = value;
}

univote_bfh_ch_common_voterCertificates.prototype.setCertificate = univote_bfh_ch_common_voterCertificates_setCertificate;
//
// accessor is univote_bfh_ch_common_voterCertificates.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_voterCertificates.prototype.setSignature
//
function univote_bfh_ch_common_voterCertificates_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_voterCertificates.prototype.getSignature = univote_bfh_ch_common_voterCertificates_getSignature;

function univote_bfh_ch_common_voterCertificates_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_voterCertificates.prototype.setSignature = univote_bfh_ch_common_voterCertificates_setSignature;
//
// Serialize {http://univote.bfh.ch/common}voterCertificates
//
function univote_bfh_ch_common_voterCertificates_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._certificate != null) {
			for (var ax = 0;ax < this._certificate.length;ax ++) {
				if (this._certificate[ax] == null) {
					xml = xml + '<certificate/>';
				} else {
					xml = xml + this._certificate[ax].serialize(cxfjsutils, 'certificate', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_voterCertificates.prototype.serialize = univote_bfh_ch_common_voterCertificates_serialize;

function univote_bfh_ch_common_voterCertificates_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_voterCertificates();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing certificate');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'certificate')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_certificate_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'certificate'));
		newobject.setCertificate(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}electionData
//
function univote_bfh_ch_common_electionData () {
	this.typeMarker = 'univote_bfh_ch_common_electionData';
	this._electionId = '';
	this._description = '';
	this._choice = [];
	this._rule = [];
	this._prime = '';
	this._groupOrder = '';
	this._generator = '';
	this._encryptionKey = '';
	this._electionGenerator = '';
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_electionData.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_electionData.prototype.setElectionId
//
function univote_bfh_ch_common_electionData_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_electionData.prototype.getElectionId = univote_bfh_ch_common_electionData_getElectionId;

function univote_bfh_ch_common_electionData_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_electionData.prototype.setElectionId = univote_bfh_ch_common_electionData_setElectionId;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is univote_bfh_ch_common_electionData.prototype.setDescription
//
function univote_bfh_ch_common_electionData_getDescription() {
	return this._description;
}

univote_bfh_ch_common_electionData.prototype.getDescription = univote_bfh_ch_common_electionData_getDescription;

function univote_bfh_ch_common_electionData_setDescription(value) {
	this._description = value;
}

univote_bfh_ch_common_electionData.prototype.setDescription = univote_bfh_ch_common_electionData_setDescription;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getChoice
// element get for choice
// - element type is {http://univote.bfh.ch/common}choice
// - required element
// - array
//
// element set for choice
// setter function is is univote_bfh_ch_common_electionData.prototype.setChoice
//
function univote_bfh_ch_common_electionData_getChoice() {
	return this._choice;
}

univote_bfh_ch_common_electionData.prototype.getChoice = univote_bfh_ch_common_electionData_getChoice;

function univote_bfh_ch_common_electionData_setChoice(value) {
	this._choice = value;
}

univote_bfh_ch_common_electionData.prototype.setChoice = univote_bfh_ch_common_electionData_setChoice;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getRule
// element get for rule
// - element type is {http://univote.bfh.ch/common}rule
// - required element
// - array
//
// element set for rule
// setter function is is univote_bfh_ch_common_electionData.prototype.setRule
//
function univote_bfh_ch_common_electionData_getRule() {
	return this._rule;
}

univote_bfh_ch_common_electionData.prototype.getRule = univote_bfh_ch_common_electionData_getRule;

function univote_bfh_ch_common_electionData_setRule(value) {
	this._rule = value;
}

univote_bfh_ch_common_electionData.prototype.setRule = univote_bfh_ch_common_electionData_setRule;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getPrime
// element get for prime
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for prime
// setter function is is univote_bfh_ch_common_electionData.prototype.setPrime
//
function univote_bfh_ch_common_electionData_getPrime() {
	return this._prime;
}

univote_bfh_ch_common_electionData.prototype.getPrime = univote_bfh_ch_common_electionData_getPrime;

function univote_bfh_ch_common_electionData_setPrime(value) {
	this._prime = value;
}

univote_bfh_ch_common_electionData.prototype.setPrime = univote_bfh_ch_common_electionData_setPrime;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getGroupOrder
// element get for groupOrder
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for groupOrder
// setter function is is univote_bfh_ch_common_electionData.prototype.setGroupOrder
//
function univote_bfh_ch_common_electionData_getGroupOrder() {
	return this._groupOrder;
}

univote_bfh_ch_common_electionData.prototype.getGroupOrder = univote_bfh_ch_common_electionData_getGroupOrder;

function univote_bfh_ch_common_electionData_setGroupOrder(value) {
	this._groupOrder = value;
}

univote_bfh_ch_common_electionData.prototype.setGroupOrder = univote_bfh_ch_common_electionData_setGroupOrder;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getGenerator
// element get for generator
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for generator
// setter function is is univote_bfh_ch_common_electionData.prototype.setGenerator
//
function univote_bfh_ch_common_electionData_getGenerator() {
	return this._generator;
}

univote_bfh_ch_common_electionData.prototype.getGenerator = univote_bfh_ch_common_electionData_getGenerator;

function univote_bfh_ch_common_electionData_setGenerator(value) {
	this._generator = value;
}

univote_bfh_ch_common_electionData.prototype.setGenerator = univote_bfh_ch_common_electionData_setGenerator;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getEncryptionKey
// element get for encryptionKey
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for encryptionKey
// setter function is is univote_bfh_ch_common_electionData.prototype.setEncryptionKey
//
function univote_bfh_ch_common_electionData_getEncryptionKey() {
	return this._encryptionKey;
}

univote_bfh_ch_common_electionData.prototype.getEncryptionKey = univote_bfh_ch_common_electionData_getEncryptionKey;

function univote_bfh_ch_common_electionData_setEncryptionKey(value) {
	this._encryptionKey = value;
}

univote_bfh_ch_common_electionData.prototype.setEncryptionKey = univote_bfh_ch_common_electionData_setEncryptionKey;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getElectionGenerator
// element get for electionGenerator
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for electionGenerator
// setter function is is univote_bfh_ch_common_electionData.prototype.setElectionGenerator
//
function univote_bfh_ch_common_electionData_getElectionGenerator() {
	return this._electionGenerator;
}

univote_bfh_ch_common_electionData.prototype.getElectionGenerator = univote_bfh_ch_common_electionData_getElectionGenerator;

function univote_bfh_ch_common_electionData_setElectionGenerator(value) {
	this._electionGenerator = value;
}

univote_bfh_ch_common_electionData.prototype.setElectionGenerator = univote_bfh_ch_common_electionData_setElectionGenerator;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electionData.prototype.setSignature
//
function univote_bfh_ch_common_electionData_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_electionData.prototype.getSignature = univote_bfh_ch_common_electionData_getSignature;

function univote_bfh_ch_common_electionData_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_electionData.prototype.setSignature = univote_bfh_ch_common_electionData_setSignature;
//
// Serialize {http://univote.bfh.ch/common}electionData
//
function univote_bfh_ch_common_electionData_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<description>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._description);
		xml = xml + '</description>';
	}
	// block for local variables
	{
		if (this._choice != null) {
			for (var ax = 0;ax < this._choice.length;ax ++) {
				if (this._choice[ax] == null) {
					xml = xml + '<choice/>';
				} else {
					xml = xml + this._choice[ax].serialize(cxfjsutils, 'choice', null);
				}
			}
		}
	}
	// block for local variables
	{
		if (this._rule != null) {
			for (var ax = 0;ax < this._rule.length;ax ++) {
				if (this._rule[ax] == null) {
					xml = xml + '<rule/>';
				} else {
					xml = xml + this._rule[ax].serialize(cxfjsutils, 'rule', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + '<prime>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._prime);
		xml = xml + '</prime>';
	}
	// block for local variables
	{
		xml = xml + '<groupOrder>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._groupOrder);
		xml = xml + '</groupOrder>';
	}
	// block for local variables
	{
		xml = xml + '<generator>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._generator);
		xml = xml + '</generator>';
	}
	// block for local variables
	{
		xml = xml + '<encryptionKey>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._encryptionKey);
		xml = xml + '</encryptionKey>';
	}
	// block for local variables
	{
		xml = xml + '<electionGenerator>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionGenerator);
		xml = xml + '</electionGenerator>';
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_electionData.prototype.serialize = univote_bfh_ch_common_electionData_serialize;

function univote_bfh_ch_common_electionData_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_electionData();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing description');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setDescription(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing choice');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choice')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_choice_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choice'));
		newobject.setChoice(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing rule');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'rule')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_rule_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'rule'));
		newobject.setRule(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing prime');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setPrime(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing groupOrder');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGroupOrder(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing generator');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGenerator(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing encryptionKey');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setEncryptionKey(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionGenerator');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionGenerator(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}encryptedVotesToMix
//
function univote_bfh_ch_common_encryptedVotesToMix () {
	this.typeMarker = 'univote_bfh_ch_common_encryptedVotesToMix';
	this._mixerId = '';
	this._electionId = '';
	this._vote = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_encryptedVotesToMix.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mixerId
// setter function is is univote_bfh_ch_common_encryptedVotesToMix.prototype.setMixerId
//
function univote_bfh_ch_common_encryptedVotesToMix_getMixerId() {
	return this._mixerId;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.getMixerId = univote_bfh_ch_common_encryptedVotesToMix_getMixerId;

function univote_bfh_ch_common_encryptedVotesToMix_setMixerId(value) {
	this._mixerId = value;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.setMixerId = univote_bfh_ch_common_encryptedVotesToMix_setMixerId;
//
// accessor is univote_bfh_ch_common_encryptedVotesToMix.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_encryptedVotesToMix.prototype.setElectionId
//
function univote_bfh_ch_common_encryptedVotesToMix_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.getElectionId = univote_bfh_ch_common_encryptedVotesToMix_getElectionId;

function univote_bfh_ch_common_encryptedVotesToMix_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.setElectionId = univote_bfh_ch_common_encryptedVotesToMix_setElectionId;
//
// accessor is univote_bfh_ch_common_encryptedVotesToMix.prototype.getVote
// element get for vote
// - element type is {http://univote.bfh.ch/common}encryptedVote
// - required element
// - array
//
// element set for vote
// setter function is is univote_bfh_ch_common_encryptedVotesToMix.prototype.setVote
//
function univote_bfh_ch_common_encryptedVotesToMix_getVote() {
	return this._vote;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.getVote = univote_bfh_ch_common_encryptedVotesToMix_getVote;

function univote_bfh_ch_common_encryptedVotesToMix_setVote(value) {
	this._vote = value;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.setVote = univote_bfh_ch_common_encryptedVotesToMix_setVote;
//
// accessor is univote_bfh_ch_common_encryptedVotesToMix.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_encryptedVotesToMix.prototype.setSignature
//
function univote_bfh_ch_common_encryptedVotesToMix_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.getSignature = univote_bfh_ch_common_encryptedVotesToMix_getSignature;

function univote_bfh_ch_common_encryptedVotesToMix_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.setSignature = univote_bfh_ch_common_encryptedVotesToMix_setSignature;
//
// Serialize {http://univote.bfh.ch/common}encryptedVotesToMix
//
function univote_bfh_ch_common_encryptedVotesToMix_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<mixerId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId);
		xml = xml + '</mixerId>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._vote != null) {
			for (var ax = 0;ax < this._vote.length;ax ++) {
				if (this._vote[ax] == null) {
					xml = xml + '<vote/>';
				} else {
					xml = xml + this._vote[ax].serialize(cxfjsutils, 'vote', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_encryptedVotesToMix.prototype.serialize = univote_bfh_ch_common_encryptedVotesToMix_serialize;

function univote_bfh_ch_common_encryptedVotesToMix_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_encryptedVotesToMix();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing mixerId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setMixerId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing vote');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_encryptedVote_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote'));
		newobject.setVote(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}electoralRoll
//
function univote_bfh_ch_common_electoralRoll () {
	this.typeMarker = 'univote_bfh_ch_common_electoralRoll';
	this._electionId = '';
	this._voterHash = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_electoralRoll.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_electoralRoll.prototype.setElectionId
//
function univote_bfh_ch_common_electoralRoll_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_electoralRoll.prototype.getElectionId = univote_bfh_ch_common_electoralRoll_getElectionId;

function univote_bfh_ch_common_electoralRoll_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_electoralRoll.prototype.setElectionId = univote_bfh_ch_common_electoralRoll_setElectionId;
//
// accessor is univote_bfh_ch_common_electoralRoll.prototype.getVoterHash
// element get for voterHash
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for voterHash
// setter function is is univote_bfh_ch_common_electoralRoll.prototype.setVoterHash
//
function univote_bfh_ch_common_electoralRoll_getVoterHash() {
	return this._voterHash;
}

univote_bfh_ch_common_electoralRoll.prototype.getVoterHash = univote_bfh_ch_common_electoralRoll_getVoterHash;

function univote_bfh_ch_common_electoralRoll_setVoterHash(value) {
	this._voterHash = value;
}

univote_bfh_ch_common_electoralRoll.prototype.setVoterHash = univote_bfh_ch_common_electoralRoll_setVoterHash;
//
// accessor is univote_bfh_ch_common_electoralRoll.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electoralRoll.prototype.setSignature
//
function univote_bfh_ch_common_electoralRoll_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_electoralRoll.prototype.getSignature = univote_bfh_ch_common_electoralRoll_getSignature;

function univote_bfh_ch_common_electoralRoll_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_electoralRoll.prototype.setSignature = univote_bfh_ch_common_electoralRoll_setSignature;
//
// Serialize {http://univote.bfh.ch/common}electoralRoll
//
function univote_bfh_ch_common_electoralRoll_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._voterHash != null) {
			for (var ax = 0;ax < this._voterHash.length;ax ++) {
				if (this._voterHash[ax] == null) {
					xml = xml + '<voterHash/>';
				} else {
					xml = xml + '<voterHash>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._voterHash[ax]);
					xml = xml + '</voterHash>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_electoralRoll.prototype.serialize = univote_bfh_ch_common_electoralRoll_serialize;

function univote_bfh_ch_common_electoralRoll_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_electoralRoll();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing voterHash');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'voterHash')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'voterHash'));
		newobject.setVoterHash(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}verificationKeyToMix
//
function univote_bfh_ch_common_verificationKeyToMix () {
	this.typeMarker = 'univote_bfh_ch_common_verificationKeyToMix';
	this._mixerId = '';
	this._electionId = '';
	this._key = '';
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_verificationKeyToMix.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mixerId
// setter function is is univote_bfh_ch_common_verificationKeyToMix.prototype.setMixerId
//
function univote_bfh_ch_common_verificationKeyToMix_getMixerId() {
	return this._mixerId;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.getMixerId = univote_bfh_ch_common_verificationKeyToMix_getMixerId;

function univote_bfh_ch_common_verificationKeyToMix_setMixerId(value) {
	this._mixerId = value;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.setMixerId = univote_bfh_ch_common_verificationKeyToMix_setMixerId;
//
// accessor is univote_bfh_ch_common_verificationKeyToMix.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_verificationKeyToMix.prototype.setElectionId
//
function univote_bfh_ch_common_verificationKeyToMix_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.getElectionId = univote_bfh_ch_common_verificationKeyToMix_getElectionId;

function univote_bfh_ch_common_verificationKeyToMix_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.setElectionId = univote_bfh_ch_common_verificationKeyToMix_setElectionId;
//
// accessor is univote_bfh_ch_common_verificationKeyToMix.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for key
// setter function is is univote_bfh_ch_common_verificationKeyToMix.prototype.setKey
//
function univote_bfh_ch_common_verificationKeyToMix_getKey() {
	return this._key;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.getKey = univote_bfh_ch_common_verificationKeyToMix_getKey;

function univote_bfh_ch_common_verificationKeyToMix_setKey(value) {
	this._key = value;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.setKey = univote_bfh_ch_common_verificationKeyToMix_setKey;
//
// accessor is univote_bfh_ch_common_verificationKeyToMix.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_verificationKeyToMix.prototype.setSignature
//
function univote_bfh_ch_common_verificationKeyToMix_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.getSignature = univote_bfh_ch_common_verificationKeyToMix_getSignature;

function univote_bfh_ch_common_verificationKeyToMix_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.setSignature = univote_bfh_ch_common_verificationKeyToMix_setSignature;
//
// Serialize {http://univote.bfh.ch/common}verificationKeyToMix
//
function univote_bfh_ch_common_verificationKeyToMix_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<mixerId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId);
		xml = xml + '</mixerId>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<key>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._key);
		xml = xml + '</key>';
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_verificationKeyToMix.prototype.serialize = univote_bfh_ch_common_verificationKeyToMix_serialize;

function univote_bfh_ch_common_verificationKeyToMix_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_verificationKeyToMix();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing mixerId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setMixerId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing key');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setKey(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}electionOptions
//
function univote_bfh_ch_common_electionOptions () {
	this.typeMarker = 'univote_bfh_ch_common_electionOptions';
	this._electionId = '';
	this._choice = [];
	this._rule = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_electionOptions.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_electionOptions.prototype.setElectionId
//
function univote_bfh_ch_common_electionOptions_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_electionOptions.prototype.getElectionId = univote_bfh_ch_common_electionOptions_getElectionId;

function univote_bfh_ch_common_electionOptions_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_electionOptions.prototype.setElectionId = univote_bfh_ch_common_electionOptions_setElectionId;
//
// accessor is univote_bfh_ch_common_electionOptions.prototype.getChoice
// element get for choice
// - element type is {http://univote.bfh.ch/common}choice
// - required element
// - array
//
// element set for choice
// setter function is is univote_bfh_ch_common_electionOptions.prototype.setChoice
//
function univote_bfh_ch_common_electionOptions_getChoice() {
	return this._choice;
}

univote_bfh_ch_common_electionOptions.prototype.getChoice = univote_bfh_ch_common_electionOptions_getChoice;

function univote_bfh_ch_common_electionOptions_setChoice(value) {
	this._choice = value;
}

univote_bfh_ch_common_electionOptions.prototype.setChoice = univote_bfh_ch_common_electionOptions_setChoice;
//
// accessor is univote_bfh_ch_common_electionOptions.prototype.getRule
// element get for rule
// - element type is {http://univote.bfh.ch/common}rule
// - required element
// - array
//
// element set for rule
// setter function is is univote_bfh_ch_common_electionOptions.prototype.setRule
//
function univote_bfh_ch_common_electionOptions_getRule() {
	return this._rule;
}

univote_bfh_ch_common_electionOptions.prototype.getRule = univote_bfh_ch_common_electionOptions_getRule;

function univote_bfh_ch_common_electionOptions_setRule(value) {
	this._rule = value;
}

univote_bfh_ch_common_electionOptions.prototype.setRule = univote_bfh_ch_common_electionOptions_setRule;
//
// accessor is univote_bfh_ch_common_electionOptions.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electionOptions.prototype.setSignature
//
function univote_bfh_ch_common_electionOptions_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_electionOptions.prototype.getSignature = univote_bfh_ch_common_electionOptions_getSignature;

function univote_bfh_ch_common_electionOptions_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_electionOptions.prototype.setSignature = univote_bfh_ch_common_electionOptions_setSignature;
//
// Serialize {http://univote.bfh.ch/common}electionOptions
//
function univote_bfh_ch_common_electionOptions_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._choice != null) {
			for (var ax = 0;ax < this._choice.length;ax ++) {
				if (this._choice[ax] == null) {
					xml = xml + '<choice/>';
				} else {
					xml = xml + this._choice[ax].serialize(cxfjsutils, 'choice', null);
				}
			}
		}
	}
	// block for local variables
	{
		if (this._rule != null) {
			for (var ax = 0;ax < this._rule.length;ax ++) {
				if (this._rule[ax] == null) {
					xml = xml + '<rule/>';
				} else {
					xml = xml + this._rule[ax].serialize(cxfjsutils, 'rule', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_electionOptions.prototype.serialize = univote_bfh_ch_common_electionOptions_serialize;

function univote_bfh_ch_common_electionOptions_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_electionOptions();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing choice');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choice')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_choice_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choice'));
		newobject.setChoice(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing rule');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'rule')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_rule_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'rule'));
		newobject.setRule(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}voterCertificate
//
function univote_bfh_ch_common_voterCertificate () {
	this.typeMarker = 'univote_bfh_ch_common_voterCertificate';
	this._electionId = '';
	this._certificate = null;
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_voterCertificate.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_voterCertificate.prototype.setElectionId
//
function univote_bfh_ch_common_voterCertificate_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_voterCertificate.prototype.getElectionId = univote_bfh_ch_common_voterCertificate_getElectionId;

function univote_bfh_ch_common_voterCertificate_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_voterCertificate.prototype.setElectionId = univote_bfh_ch_common_voterCertificate_setElectionId;
//
// accessor is univote_bfh_ch_common_voterCertificate.prototype.getCertificate
// element get for certificate
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for certificate
// setter function is is univote_bfh_ch_common_voterCertificate.prototype.setCertificate
//
function univote_bfh_ch_common_voterCertificate_getCertificate() {
	return this._certificate;
}

univote_bfh_ch_common_voterCertificate.prototype.getCertificate = univote_bfh_ch_common_voterCertificate_getCertificate;

function univote_bfh_ch_common_voterCertificate_setCertificate(value) {
	this._certificate = value;
}

univote_bfh_ch_common_voterCertificate.prototype.setCertificate = univote_bfh_ch_common_voterCertificate_setCertificate;
//
// accessor is univote_bfh_ch_common_voterCertificate.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_voterCertificate.prototype.setSignature
//
function univote_bfh_ch_common_voterCertificate_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_voterCertificate.prototype.getSignature = univote_bfh_ch_common_voterCertificate_getSignature;

function univote_bfh_ch_common_voterCertificate_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_voterCertificate.prototype.setSignature = univote_bfh_ch_common_voterCertificate_setSignature;
//
// Serialize {http://univote.bfh.ch/common}voterCertificate
//
function univote_bfh_ch_common_voterCertificate_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + this._certificate.serialize(cxfjsutils, 'certificate', null);
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_voterCertificate.prototype.serialize = univote_bfh_ch_common_voterCertificate_serialize;

function univote_bfh_ch_common_voterCertificate_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_voterCertificate();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing certificate');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_certificate_deserialize(cxfjsutils, curElement);
	}
	newobject.setCertificate(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}partyList
//
function univote_bfh_ch_common_partyList () {
	this.typeMarker = 'univote_bfh_ch_common_partyList';
	this._choiceId = 0;
	this._listNumber = '';
	this._partyName = [];
	this._partyShortName = [];
	this._parentListId = 0;
}

//
// accessor is univote_bfh_ch_common_partyList.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_partyList.prototype.setChoiceId
//
function univote_bfh_ch_common_partyList_getChoiceId() {
	return this._choiceId;
}

univote_bfh_ch_common_partyList.prototype.getChoiceId = univote_bfh_ch_common_partyList_getChoiceId;

function univote_bfh_ch_common_partyList_setChoiceId(value) {
	this._choiceId = value;
}

univote_bfh_ch_common_partyList.prototype.setChoiceId = univote_bfh_ch_common_partyList_setChoiceId;
//
// accessor is univote_bfh_ch_common_partyList.prototype.getListNumber
// element get for listNumber
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for listNumber
// setter function is is univote_bfh_ch_common_partyList.prototype.setListNumber
//
function univote_bfh_ch_common_partyList_getListNumber() {
	return this._listNumber;
}

univote_bfh_ch_common_partyList.prototype.getListNumber = univote_bfh_ch_common_partyList_getListNumber;

function univote_bfh_ch_common_partyList_setListNumber(value) {
	this._listNumber = value;
}

univote_bfh_ch_common_partyList.prototype.setListNumber = univote_bfh_ch_common_partyList_setListNumber;
//
// accessor is univote_bfh_ch_common_partyList.prototype.getPartyName
// element get for partyName
// - element type is {http://univote.bfh.ch/common}localizedText
// - required element
// - array
//
// element set for partyName
// setter function is is univote_bfh_ch_common_partyList.prototype.setPartyName
//
function univote_bfh_ch_common_partyList_getPartyName() {
	return this._partyName;
}

univote_bfh_ch_common_partyList.prototype.getPartyName = univote_bfh_ch_common_partyList_getPartyName;

function univote_bfh_ch_common_partyList_setPartyName(value) {
	this._partyName = value;
}

univote_bfh_ch_common_partyList.prototype.setPartyName = univote_bfh_ch_common_partyList_setPartyName;
//
// accessor is univote_bfh_ch_common_partyList.prototype.getPartyShortName
// element get for partyShortName
// - element type is {http://univote.bfh.ch/common}localizedText
// - required element
// - array
//
// element set for partyShortName
// setter function is is univote_bfh_ch_common_partyList.prototype.setPartyShortName
//
function univote_bfh_ch_common_partyList_getPartyShortName() {
	return this._partyShortName;
}

univote_bfh_ch_common_partyList.prototype.getPartyShortName = univote_bfh_ch_common_partyList_getPartyShortName;

function univote_bfh_ch_common_partyList_setPartyShortName(value) {
	this._partyShortName = value;
}

univote_bfh_ch_common_partyList.prototype.setPartyShortName = univote_bfh_ch_common_partyList_setPartyShortName;
//
// accessor is univote_bfh_ch_common_partyList.prototype.getParentListId
// element get for parentListId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for parentListId
// setter function is is univote_bfh_ch_common_partyList.prototype.setParentListId
//
function univote_bfh_ch_common_partyList_getParentListId() {
	return this._parentListId;
}

univote_bfh_ch_common_partyList.prototype.getParentListId = univote_bfh_ch_common_partyList_getParentListId;

function univote_bfh_ch_common_partyList_setParentListId(value) {
	this._parentListId = value;
}

univote_bfh_ch_common_partyList.prototype.setParentListId = univote_bfh_ch_common_partyList_setParentListId;
//
// Serialize {http://univote.bfh.ch/common}partyList
//
function univote_bfh_ch_common_partyList_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<choiceId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._choiceId);
		xml = xml + '</choiceId>';
	}
	// block for local variables
	{
		xml = xml + '<listNumber>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._listNumber);
		xml = xml + '</listNumber>';
	}
	// block for local variables
	{
		if (this._partyName != null) {
			for (var ax = 0;ax < this._partyName.length;ax ++) {
				if (this._partyName[ax] == null) {
					xml = xml + '<partyName/>';
				} else {
					xml = xml + this._partyName[ax].serialize(cxfjsutils, 'partyName', null);
				}
			}
		}
	}
	// block for local variables
	{
		if (this._partyShortName != null) {
			for (var ax = 0;ax < this._partyShortName.length;ax ++) {
				if (this._partyShortName[ax] == null) {
					xml = xml + '<partyShortName/>';
				} else {
					xml = xml + this._partyShortName[ax].serialize(cxfjsutils, 'partyShortName', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + '<parentListId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._parentListId);
		xml = xml + '</parentListId>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_partyList.prototype.serialize = univote_bfh_ch_common_partyList_serialize;

function univote_bfh_ch_common_partyList_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_partyList();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing choiceId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setChoiceId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing listNumber');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setListNumber(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing partyName');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'partyName')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_localizedText_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'partyName'));
		newobject.setPartyName(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing partyShortName');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'partyShortName')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_localizedText_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'partyShortName'));
		newobject.setPartyShortName(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing parentListId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setParentListId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}encryptedVotes
//
function univote_bfh_ch_common_encryptedVotes () {
	this.typeMarker = 'univote_bfh_ch_common_encryptedVotes';
	this._electionId = '';
	this._vote = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_encryptedVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_encryptedVotes.prototype.setElectionId
//
function univote_bfh_ch_common_encryptedVotes_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_encryptedVotes.prototype.getElectionId = univote_bfh_ch_common_encryptedVotes_getElectionId;

function univote_bfh_ch_common_encryptedVotes_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_encryptedVotes.prototype.setElectionId = univote_bfh_ch_common_encryptedVotes_setElectionId;
//
// accessor is univote_bfh_ch_common_encryptedVotes.prototype.getVote
// element get for vote
// - element type is {http://univote.bfh.ch/common}encryptedVote
// - required element
// - array
//
// element set for vote
// setter function is is univote_bfh_ch_common_encryptedVotes.prototype.setVote
//
function univote_bfh_ch_common_encryptedVotes_getVote() {
	return this._vote;
}

univote_bfh_ch_common_encryptedVotes.prototype.getVote = univote_bfh_ch_common_encryptedVotes_getVote;

function univote_bfh_ch_common_encryptedVotes_setVote(value) {
	this._vote = value;
}

univote_bfh_ch_common_encryptedVotes.prototype.setVote = univote_bfh_ch_common_encryptedVotes_setVote;
//
// accessor is univote_bfh_ch_common_encryptedVotes.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_encryptedVotes.prototype.setSignature
//
function univote_bfh_ch_common_encryptedVotes_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_encryptedVotes.prototype.getSignature = univote_bfh_ch_common_encryptedVotes_getSignature;

function univote_bfh_ch_common_encryptedVotes_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_encryptedVotes.prototype.setSignature = univote_bfh_ch_common_encryptedVotes_setSignature;
//
// Serialize {http://univote.bfh.ch/common}encryptedVotes
//
function univote_bfh_ch_common_encryptedVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._vote != null) {
			for (var ax = 0;ax < this._vote.length;ax ++) {
				if (this._vote[ax] == null) {
					xml = xml + '<vote/>';
				} else {
					xml = xml + this._vote[ax].serialize(cxfjsutils, 'vote', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_encryptedVotes.prototype.serialize = univote_bfh_ch_common_encryptedVotes_serialize;

function univote_bfh_ch_common_encryptedVotes_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_encryptedVotes();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing vote');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_encryptedVote_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote'));
		newobject.setVote(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}electionSystemInfo
//
function univote_bfh_ch_common_electionSystemInfo () {
	this.typeMarker = 'univote_bfh_ch_common_electionSystemInfo';
	this._certificateAuthority = null;
	this._electionAdministration = null;
	this._electionManager = null;
	this._mixer = [];
	this._tallier = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_electionSystemInfo.prototype.getCertificateAuthority
// element get for certificateAuthority
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for certificateAuthority
// setter function is is univote_bfh_ch_common_electionSystemInfo.prototype.setCertificateAuthority
//
function univote_bfh_ch_common_electionSystemInfo_getCertificateAuthority() {
	return this._certificateAuthority;
}

univote_bfh_ch_common_electionSystemInfo.prototype.getCertificateAuthority = univote_bfh_ch_common_electionSystemInfo_getCertificateAuthority;

function univote_bfh_ch_common_electionSystemInfo_setCertificateAuthority(value) {
	this._certificateAuthority = value;
}

univote_bfh_ch_common_electionSystemInfo.prototype.setCertificateAuthority = univote_bfh_ch_common_electionSystemInfo_setCertificateAuthority;
//
// accessor is univote_bfh_ch_common_electionSystemInfo.prototype.getElectionAdministration
// element get for electionAdministration
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for electionAdministration
// setter function is is univote_bfh_ch_common_electionSystemInfo.prototype.setElectionAdministration
//
function univote_bfh_ch_common_electionSystemInfo_getElectionAdministration() {
	return this._electionAdministration;
}

univote_bfh_ch_common_electionSystemInfo.prototype.getElectionAdministration = univote_bfh_ch_common_electionSystemInfo_getElectionAdministration;

function univote_bfh_ch_common_electionSystemInfo_setElectionAdministration(value) {
	this._electionAdministration = value;
}

univote_bfh_ch_common_electionSystemInfo.prototype.setElectionAdministration = univote_bfh_ch_common_electionSystemInfo_setElectionAdministration;
//
// accessor is univote_bfh_ch_common_electionSystemInfo.prototype.getElectionManager
// element get for electionManager
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for electionManager
// setter function is is univote_bfh_ch_common_electionSystemInfo.prototype.setElectionManager
//
function univote_bfh_ch_common_electionSystemInfo_getElectionManager() {
	return this._electionManager;
}

univote_bfh_ch_common_electionSystemInfo.prototype.getElectionManager = univote_bfh_ch_common_electionSystemInfo_getElectionManager;

function univote_bfh_ch_common_electionSystemInfo_setElectionManager(value) {
	this._electionManager = value;
}

univote_bfh_ch_common_electionSystemInfo.prototype.setElectionManager = univote_bfh_ch_common_electionSystemInfo_setElectionManager;
//
// accessor is univote_bfh_ch_common_electionSystemInfo.prototype.getMixer
// element get for mixer
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
// - array
//
// element set for mixer
// setter function is is univote_bfh_ch_common_electionSystemInfo.prototype.setMixer
//
function univote_bfh_ch_common_electionSystemInfo_getMixer() {
	return this._mixer;
}

univote_bfh_ch_common_electionSystemInfo.prototype.getMixer = univote_bfh_ch_common_electionSystemInfo_getMixer;

function univote_bfh_ch_common_electionSystemInfo_setMixer(value) {
	this._mixer = value;
}

univote_bfh_ch_common_electionSystemInfo.prototype.setMixer = univote_bfh_ch_common_electionSystemInfo_setMixer;
//
// accessor is univote_bfh_ch_common_electionSystemInfo.prototype.getTallier
// element get for tallier
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
// - array
//
// element set for tallier
// setter function is is univote_bfh_ch_common_electionSystemInfo.prototype.setTallier
//
function univote_bfh_ch_common_electionSystemInfo_getTallier() {
	return this._tallier;
}

univote_bfh_ch_common_electionSystemInfo.prototype.getTallier = univote_bfh_ch_common_electionSystemInfo_getTallier;

function univote_bfh_ch_common_electionSystemInfo_setTallier(value) {
	this._tallier = value;
}

univote_bfh_ch_common_electionSystemInfo.prototype.setTallier = univote_bfh_ch_common_electionSystemInfo_setTallier;
//
// accessor is univote_bfh_ch_common_electionSystemInfo.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electionSystemInfo.prototype.setSignature
//
function univote_bfh_ch_common_electionSystemInfo_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_electionSystemInfo.prototype.getSignature = univote_bfh_ch_common_electionSystemInfo_getSignature;

function univote_bfh_ch_common_electionSystemInfo_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_electionSystemInfo.prototype.setSignature = univote_bfh_ch_common_electionSystemInfo_setSignature;
//
// Serialize {http://univote.bfh.ch/common}electionSystemInfo
//
function univote_bfh_ch_common_electionSystemInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + this._certificateAuthority.serialize(cxfjsutils, 'certificateAuthority', null);
	}
	// block for local variables
	{
		xml = xml + this._electionAdministration.serialize(cxfjsutils, 'electionAdministration', null);
	}
	// block for local variables
	{
		xml = xml + this._electionManager.serialize(cxfjsutils, 'electionManager', null);
	}
	// block for local variables
	{
		if (this._mixer != null) {
			for (var ax = 0;ax < this._mixer.length;ax ++) {
				if (this._mixer[ax] == null) {
					xml = xml + '<mixer/>';
				} else {
					xml = xml + this._mixer[ax].serialize(cxfjsutils, 'mixer', null);
				}
			}
		}
	}
	// block for local variables
	{
		if (this._tallier != null) {
			for (var ax = 0;ax < this._tallier.length;ax ++) {
				if (this._tallier[ax] == null) {
					xml = xml + '<tallier/>';
				} else {
					xml = xml + this._tallier[ax].serialize(cxfjsutils, 'tallier', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_electionSystemInfo.prototype.serialize = univote_bfh_ch_common_electionSystemInfo_serialize;

function univote_bfh_ch_common_electionSystemInfo_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_electionSystemInfo();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing certificateAuthority');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_certificate_deserialize(cxfjsutils, curElement);
	}
	newobject.setCertificateAuthority(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionAdministration');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_certificate_deserialize(cxfjsutils, curElement);
	}
	newobject.setElectionAdministration(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionManager');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_certificate_deserialize(cxfjsutils, curElement);
	}
	newobject.setElectionManager(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing mixer');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mixer')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_certificate_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mixer'));
		newobject.setMixer(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing tallier');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'tallier')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_certificate_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'tallier'));
		newobject.setTallier(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}plaintextVotes
//
function univote_bfh_ch_common_plaintextVotes () {
	this.typeMarker = 'univote_bfh_ch_common_plaintextVotes';
	this._electionId = '';
	this._vote = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_plaintextVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_plaintextVotes.prototype.setElectionId
//
function univote_bfh_ch_common_plaintextVotes_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_plaintextVotes.prototype.getElectionId = univote_bfh_ch_common_plaintextVotes_getElectionId;

function univote_bfh_ch_common_plaintextVotes_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_plaintextVotes.prototype.setElectionId = univote_bfh_ch_common_plaintextVotes_setElectionId;
//
// accessor is univote_bfh_ch_common_plaintextVotes.prototype.getVote
// element get for vote
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for vote
// setter function is is univote_bfh_ch_common_plaintextVotes.prototype.setVote
//
function univote_bfh_ch_common_plaintextVotes_getVote() {
	return this._vote;
}

univote_bfh_ch_common_plaintextVotes.prototype.getVote = univote_bfh_ch_common_plaintextVotes_getVote;

function univote_bfh_ch_common_plaintextVotes_setVote(value) {
	this._vote = value;
}

univote_bfh_ch_common_plaintextVotes.prototype.setVote = univote_bfh_ch_common_plaintextVotes_setVote;
//
// accessor is univote_bfh_ch_common_plaintextVotes.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_plaintextVotes.prototype.setSignature
//
function univote_bfh_ch_common_plaintextVotes_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_plaintextVotes.prototype.getSignature = univote_bfh_ch_common_plaintextVotes_getSignature;

function univote_bfh_ch_common_plaintextVotes_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_plaintextVotes.prototype.setSignature = univote_bfh_ch_common_plaintextVotes_setSignature;
//
// Serialize {http://univote.bfh.ch/common}plaintextVotes
//
function univote_bfh_ch_common_plaintextVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._vote != null) {
			for (var ax = 0;ax < this._vote.length;ax ++) {
				if (this._vote[ax] == null) {
					xml = xml + '<vote/>';
				} else {
					xml = xml + '<vote>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._vote[ax]);
					xml = xml + '</vote>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_plaintextVotes.prototype.serialize = univote_bfh_ch_common_plaintextVotes_serialize;

function univote_bfh_ch_common_plaintextVotes_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_plaintextVotes();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing vote');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote'));
		newobject.setVote(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Simple type (enumeration) {http://univote.bfh.ch/common}languageCode
//
// - DE
// - FR
// - EN
//
// Constructor for XML Schema item {http://univote.bfh.ch/common}encryptionKeyShare
//
function univote_bfh_ch_common_encryptionKeyShare () {
	this.typeMarker = 'univote_bfh_ch_common_encryptionKeyShare';
	this._electionId = '';
	this._key = '';
	this._proof = null;
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_encryptionKeyShare.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_encryptionKeyShare.prototype.setElectionId
//
function univote_bfh_ch_common_encryptionKeyShare_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.getElectionId = univote_bfh_ch_common_encryptionKeyShare_getElectionId;

function univote_bfh_ch_common_encryptionKeyShare_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.setElectionId = univote_bfh_ch_common_encryptionKeyShare_setElectionId;
//
// accessor is univote_bfh_ch_common_encryptionKeyShare.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for key
// setter function is is univote_bfh_ch_common_encryptionKeyShare.prototype.setKey
//
function univote_bfh_ch_common_encryptionKeyShare_getKey() {
	return this._key;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.getKey = univote_bfh_ch_common_encryptionKeyShare_getKey;

function univote_bfh_ch_common_encryptionKeyShare_setKey(value) {
	this._key = value;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.setKey = univote_bfh_ch_common_encryptionKeyShare_setKey;
//
// accessor is univote_bfh_ch_common_encryptionKeyShare.prototype.getProof
// element get for proof
// - element type is {http://univote.bfh.ch/common}proof
// - required element
//
// element set for proof
// setter function is is univote_bfh_ch_common_encryptionKeyShare.prototype.setProof
//
function univote_bfh_ch_common_encryptionKeyShare_getProof() {
	return this._proof;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.getProof = univote_bfh_ch_common_encryptionKeyShare_getProof;

function univote_bfh_ch_common_encryptionKeyShare_setProof(value) {
	this._proof = value;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.setProof = univote_bfh_ch_common_encryptionKeyShare_setProof;
//
// accessor is univote_bfh_ch_common_encryptionKeyShare.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_encryptionKeyShare.prototype.setSignature
//
function univote_bfh_ch_common_encryptionKeyShare_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.getSignature = univote_bfh_ch_common_encryptionKeyShare_getSignature;

function univote_bfh_ch_common_encryptionKeyShare_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.setSignature = univote_bfh_ch_common_encryptionKeyShare_setSignature;
//
// Serialize {http://univote.bfh.ch/common}encryptionKeyShare
//
function univote_bfh_ch_common_encryptionKeyShare_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<key>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._key);
		xml = xml + '</key>';
	}
	// block for local variables
	{
		xml = xml + this._proof.serialize(cxfjsutils, 'proof', null);
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_encryptionKeyShare.prototype.serialize = univote_bfh_ch_common_encryptionKeyShare_serialize;

function univote_bfh_ch_common_encryptionKeyShare_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_encryptionKeyShare();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing key');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setKey(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing proof');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_proof_deserialize(cxfjsutils, curElement);
	}
	newobject.setProof(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}sumRule
//
function univote_bfh_ch_common_sumRule () {
	this.typeMarker = 'univote_bfh_ch_common_sumRule';
	this._ruleId = 0;
	this._choiceId = [];
	this._lowerBound = 0;
	this._upperBound = 0;
}

//
// accessor is univote_bfh_ch_common_sumRule.prototype.getRuleId
// element get for ruleId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for ruleId
// setter function is is univote_bfh_ch_common_sumRule.prototype.setRuleId
//
function univote_bfh_ch_common_sumRule_getRuleId() {
	return this._ruleId;
}

univote_bfh_ch_common_sumRule.prototype.getRuleId = univote_bfh_ch_common_sumRule_getRuleId;

function univote_bfh_ch_common_sumRule_setRuleId(value) {
	this._ruleId = value;
}

univote_bfh_ch_common_sumRule.prototype.setRuleId = univote_bfh_ch_common_sumRule_setRuleId;
//
// accessor is univote_bfh_ch_common_sumRule.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
// - array
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_sumRule.prototype.setChoiceId
//
function univote_bfh_ch_common_sumRule_getChoiceId() {
	return this._choiceId;
}

univote_bfh_ch_common_sumRule.prototype.getChoiceId = univote_bfh_ch_common_sumRule_getChoiceId;

function univote_bfh_ch_common_sumRule_setChoiceId(value) {
	this._choiceId = value;
}

univote_bfh_ch_common_sumRule.prototype.setChoiceId = univote_bfh_ch_common_sumRule_setChoiceId;
//
// accessor is univote_bfh_ch_common_sumRule.prototype.getLowerBound
// element get for lowerBound
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for lowerBound
// setter function is is univote_bfh_ch_common_sumRule.prototype.setLowerBound
//
function univote_bfh_ch_common_sumRule_getLowerBound() {
	return this._lowerBound;
}

univote_bfh_ch_common_sumRule.prototype.getLowerBound = univote_bfh_ch_common_sumRule_getLowerBound;

function univote_bfh_ch_common_sumRule_setLowerBound(value) {
	this._lowerBound = value;
}

univote_bfh_ch_common_sumRule.prototype.setLowerBound = univote_bfh_ch_common_sumRule_setLowerBound;
//
// accessor is univote_bfh_ch_common_sumRule.prototype.getUpperBound
// element get for upperBound
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for upperBound
// setter function is is univote_bfh_ch_common_sumRule.prototype.setUpperBound
//
function univote_bfh_ch_common_sumRule_getUpperBound() {
	return this._upperBound;
}

univote_bfh_ch_common_sumRule.prototype.getUpperBound = univote_bfh_ch_common_sumRule_getUpperBound;

function univote_bfh_ch_common_sumRule_setUpperBound(value) {
	this._upperBound = value;
}

univote_bfh_ch_common_sumRule.prototype.setUpperBound = univote_bfh_ch_common_sumRule_setUpperBound;
//
// Serialize {http://univote.bfh.ch/common}sumRule
//
function univote_bfh_ch_common_sumRule_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<ruleId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._ruleId);
		xml = xml + '</ruleId>';
	}
	// block for local variables
	{
		if (this._choiceId != null) {
			for (var ax = 0;ax < this._choiceId.length;ax ++) {
				if (this._choiceId[ax] == null) {
					xml = xml + '<choiceId/>';
				} else {
					xml = xml + '<choiceId>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._choiceId[ax]);
					xml = xml + '</choiceId>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + '<lowerBound>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._lowerBound);
		xml = xml + '</lowerBound>';
	}
	// block for local variables
	{
		xml = xml + '<upperBound>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._upperBound);
		xml = xml + '</upperBound>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_sumRule.prototype.serialize = univote_bfh_ch_common_sumRule_serialize;

function univote_bfh_ch_common_sumRule_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_sumRule();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing ruleId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setRuleId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing choiceId');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = parseInt(value);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId'));
		newobject.setChoiceId(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing lowerBound');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setLowerBound(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing upperBound');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setUpperBound(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}forAllRule
//
function univote_bfh_ch_common_forAllRule () {
	this.typeMarker = 'univote_bfh_ch_common_forAllRule';
	this._ruleId = 0;
	this._choiceId = [];
	this._lowerBound = 0;
	this._upperBound = 0;
}

//
// accessor is univote_bfh_ch_common_forAllRule.prototype.getRuleId
// element get for ruleId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for ruleId
// setter function is is univote_bfh_ch_common_forAllRule.prototype.setRuleId
//
function univote_bfh_ch_common_forAllRule_getRuleId() {
	return this._ruleId;
}

univote_bfh_ch_common_forAllRule.prototype.getRuleId = univote_bfh_ch_common_forAllRule_getRuleId;

function univote_bfh_ch_common_forAllRule_setRuleId(value) {
	this._ruleId = value;
}

univote_bfh_ch_common_forAllRule.prototype.setRuleId = univote_bfh_ch_common_forAllRule_setRuleId;
//
// accessor is univote_bfh_ch_common_forAllRule.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
// - array
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_forAllRule.prototype.setChoiceId
//
function univote_bfh_ch_common_forAllRule_getChoiceId() {
	return this._choiceId;
}

univote_bfh_ch_common_forAllRule.prototype.getChoiceId = univote_bfh_ch_common_forAllRule_getChoiceId;

function univote_bfh_ch_common_forAllRule_setChoiceId(value) {
	this._choiceId = value;
}

univote_bfh_ch_common_forAllRule.prototype.setChoiceId = univote_bfh_ch_common_forAllRule_setChoiceId;
//
// accessor is univote_bfh_ch_common_forAllRule.prototype.getLowerBound
// element get for lowerBound
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for lowerBound
// setter function is is univote_bfh_ch_common_forAllRule.prototype.setLowerBound
//
function univote_bfh_ch_common_forAllRule_getLowerBound() {
	return this._lowerBound;
}

univote_bfh_ch_common_forAllRule.prototype.getLowerBound = univote_bfh_ch_common_forAllRule_getLowerBound;

function univote_bfh_ch_common_forAllRule_setLowerBound(value) {
	this._lowerBound = value;
}

univote_bfh_ch_common_forAllRule.prototype.setLowerBound = univote_bfh_ch_common_forAllRule_setLowerBound;
//
// accessor is univote_bfh_ch_common_forAllRule.prototype.getUpperBound
// element get for upperBound
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for upperBound
// setter function is is univote_bfh_ch_common_forAllRule.prototype.setUpperBound
//
function univote_bfh_ch_common_forAllRule_getUpperBound() {
	return this._upperBound;
}

univote_bfh_ch_common_forAllRule.prototype.getUpperBound = univote_bfh_ch_common_forAllRule_getUpperBound;

function univote_bfh_ch_common_forAllRule_setUpperBound(value) {
	this._upperBound = value;
}

univote_bfh_ch_common_forAllRule.prototype.setUpperBound = univote_bfh_ch_common_forAllRule_setUpperBound;
//
// Serialize {http://univote.bfh.ch/common}forAllRule
//
function univote_bfh_ch_common_forAllRule_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<ruleId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._ruleId);
		xml = xml + '</ruleId>';
	}
	// block for local variables
	{
		if (this._choiceId != null) {
			for (var ax = 0;ax < this._choiceId.length;ax ++) {
				if (this._choiceId[ax] == null) {
					xml = xml + '<choiceId/>';
				} else {
					xml = xml + '<choiceId>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._choiceId[ax]);
					xml = xml + '</choiceId>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + '<lowerBound>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._lowerBound);
		xml = xml + '</lowerBound>';
	}
	// block for local variables
	{
		xml = xml + '<upperBound>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._upperBound);
		xml = xml + '</upperBound>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_forAllRule.prototype.serialize = univote_bfh_ch_common_forAllRule_serialize;

function univote_bfh_ch_common_forAllRule_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_forAllRule();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing ruleId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setRuleId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing choiceId');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = parseInt(value);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId'));
		newobject.setChoiceId(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing lowerBound');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setLowerBound(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing upperBound');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setUpperBound(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}voterSignature
//
function univote_bfh_ch_common_voterSignature () {
	this.typeMarker = 'univote_bfh_ch_common_voterSignature';
	this._firstValue = '';
	this._secondValue = '';
}

//
// accessor is univote_bfh_ch_common_voterSignature.prototype.getFirstValue
// element get for firstValue
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for firstValue
// setter function is is univote_bfh_ch_common_voterSignature.prototype.setFirstValue
//
function univote_bfh_ch_common_voterSignature_getFirstValue() {
	return this._firstValue;
}

univote_bfh_ch_common_voterSignature.prototype.getFirstValue = univote_bfh_ch_common_voterSignature_getFirstValue;

function univote_bfh_ch_common_voterSignature_setFirstValue(value) {
	this._firstValue = value;
}

univote_bfh_ch_common_voterSignature.prototype.setFirstValue = univote_bfh_ch_common_voterSignature_setFirstValue;
//
// accessor is univote_bfh_ch_common_voterSignature.prototype.getSecondValue
// element get for secondValue
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for secondValue
// setter function is is univote_bfh_ch_common_voterSignature.prototype.setSecondValue
//
function univote_bfh_ch_common_voterSignature_getSecondValue() {
	return this._secondValue;
}

univote_bfh_ch_common_voterSignature.prototype.getSecondValue = univote_bfh_ch_common_voterSignature_getSecondValue;

function univote_bfh_ch_common_voterSignature_setSecondValue(value) {
	this._secondValue = value;
}

univote_bfh_ch_common_voterSignature.prototype.setSecondValue = univote_bfh_ch_common_voterSignature_setSecondValue;
//
// Serialize {http://univote.bfh.ch/common}voterSignature
//
function univote_bfh_ch_common_voterSignature_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<firstValue>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._firstValue);
		xml = xml + '</firstValue>';
	}
	// block for local variables
	{
		xml = xml + '<secondValue>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._secondValue);
		xml = xml + '</secondValue>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_voterSignature.prototype.serialize = univote_bfh_ch_common_voterSignature_serialize;

function univote_bfh_ch_common_voterSignature_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_voterSignature();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing firstValue');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setFirstValue(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing secondValue');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setSecondValue(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}ballot
//
function univote_bfh_ch_common_ballot () {
	this.typeMarker = 'univote_bfh_ch_common_ballot';
	this._electionId = '';
	this._verificationKey = '';
	this._encryptedVote = null;
	this._proof = null;
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_ballot.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_ballot.prototype.setElectionId
//
function univote_bfh_ch_common_ballot_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_ballot.prototype.getElectionId = univote_bfh_ch_common_ballot_getElectionId;

function univote_bfh_ch_common_ballot_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_ballot.prototype.setElectionId = univote_bfh_ch_common_ballot_setElectionId;
//
// accessor is univote_bfh_ch_common_ballot.prototype.getVerificationKey
// element get for verificationKey
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for verificationKey
// setter function is is univote_bfh_ch_common_ballot.prototype.setVerificationKey
//
function univote_bfh_ch_common_ballot_getVerificationKey() {
	return this._verificationKey;
}

univote_bfh_ch_common_ballot.prototype.getVerificationKey = univote_bfh_ch_common_ballot_getVerificationKey;

function univote_bfh_ch_common_ballot_setVerificationKey(value) {
	this._verificationKey = value;
}

univote_bfh_ch_common_ballot.prototype.setVerificationKey = univote_bfh_ch_common_ballot_setVerificationKey;
//
// accessor is univote_bfh_ch_common_ballot.prototype.getEncryptedVote
// element get for encryptedVote
// - element type is {http://univote.bfh.ch/common}encryptedVote
// - required element
//
// element set for encryptedVote
// setter function is is univote_bfh_ch_common_ballot.prototype.setEncryptedVote
//
function univote_bfh_ch_common_ballot_getEncryptedVote() {
	return this._encryptedVote;
}

univote_bfh_ch_common_ballot.prototype.getEncryptedVote = univote_bfh_ch_common_ballot_getEncryptedVote;

function univote_bfh_ch_common_ballot_setEncryptedVote(value) {
	this._encryptedVote = value;
}

univote_bfh_ch_common_ballot.prototype.setEncryptedVote = univote_bfh_ch_common_ballot_setEncryptedVote;
//
// accessor is univote_bfh_ch_common_ballot.prototype.getProof
// element get for proof
// - element type is {http://univote.bfh.ch/common}proof
// - required element
//
// element set for proof
// setter function is is univote_bfh_ch_common_ballot.prototype.setProof
//
function univote_bfh_ch_common_ballot_getProof() {
	return this._proof;
}

univote_bfh_ch_common_ballot.prototype.getProof = univote_bfh_ch_common_ballot_getProof;

function univote_bfh_ch_common_ballot_setProof(value) {
	this._proof = value;
}

univote_bfh_ch_common_ballot.prototype.setProof = univote_bfh_ch_common_ballot_setProof;
//
// accessor is univote_bfh_ch_common_ballot.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}voterSignature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_ballot.prototype.setSignature
//
function univote_bfh_ch_common_ballot_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_ballot.prototype.getSignature = univote_bfh_ch_common_ballot_getSignature;

function univote_bfh_ch_common_ballot_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_ballot.prototype.setSignature = univote_bfh_ch_common_ballot_setSignature;
//
// Serialize {http://univote.bfh.ch/common}ballot
//
function univote_bfh_ch_common_ballot_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<verificationKey>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._verificationKey);
		xml = xml + '</verificationKey>';
	}
	// block for local variables
	{
		xml = xml + this._encryptedVote.serialize(cxfjsutils, 'encryptedVote', null);
	}
	// block for local variables
	{
		xml = xml + this._proof.serialize(cxfjsutils, 'proof', null);
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_ballot.prototype.serialize = univote_bfh_ch_common_ballot_serialize;

function univote_bfh_ch_common_ballot_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_ballot();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing verificationKey');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setVerificationKey(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing encryptedVote');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_encryptedVote_deserialize(cxfjsutils, curElement);
	}
	newobject.setEncryptedVote(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing proof');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_proof_deserialize(cxfjsutils, curElement);
	}
	newobject.setProof(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_voterSignature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}encryptedVote
//
function univote_bfh_ch_common_encryptedVote () {
	this.typeMarker = 'univote_bfh_ch_common_encryptedVote';
	this._firstValue = '';
	this._secondValue = '';
}

//
// accessor is univote_bfh_ch_common_encryptedVote.prototype.getFirstValue
// element get for firstValue
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for firstValue
// setter function is is univote_bfh_ch_common_encryptedVote.prototype.setFirstValue
//
function univote_bfh_ch_common_encryptedVote_getFirstValue() {
	return this._firstValue;
}

univote_bfh_ch_common_encryptedVote.prototype.getFirstValue = univote_bfh_ch_common_encryptedVote_getFirstValue;

function univote_bfh_ch_common_encryptedVote_setFirstValue(value) {
	this._firstValue = value;
}

univote_bfh_ch_common_encryptedVote.prototype.setFirstValue = univote_bfh_ch_common_encryptedVote_setFirstValue;
//
// accessor is univote_bfh_ch_common_encryptedVote.prototype.getSecondValue
// element get for secondValue
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for secondValue
// setter function is is univote_bfh_ch_common_encryptedVote.prototype.setSecondValue
//
function univote_bfh_ch_common_encryptedVote_getSecondValue() {
	return this._secondValue;
}

univote_bfh_ch_common_encryptedVote.prototype.getSecondValue = univote_bfh_ch_common_encryptedVote_getSecondValue;

function univote_bfh_ch_common_encryptedVote_setSecondValue(value) {
	this._secondValue = value;
}

univote_bfh_ch_common_encryptedVote.prototype.setSecondValue = univote_bfh_ch_common_encryptedVote_setSecondValue;
//
// Serialize {http://univote.bfh.ch/common}encryptedVote
//
function univote_bfh_ch_common_encryptedVote_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<firstValue>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._firstValue);
		xml = xml + '</firstValue>';
	}
	// block for local variables
	{
		xml = xml + '<secondValue>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._secondValue);
		xml = xml + '</secondValue>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_encryptedVote.prototype.serialize = univote_bfh_ch_common_encryptedVote_serialize;

function univote_bfh_ch_common_encryptedVote_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_encryptedVote();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing firstValue');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setFirstValue(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing secondValue');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setSecondValue(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}blindedGenerator
//
function univote_bfh_ch_common_blindedGenerator () {
	this.typeMarker = 'univote_bfh_ch_common_blindedGenerator';
	this._electionId = '';
	this._generator = '';
	this._proof = null;
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_blindedGenerator.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_blindedGenerator.prototype.setElectionId
//
function univote_bfh_ch_common_blindedGenerator_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_blindedGenerator.prototype.getElectionId = univote_bfh_ch_common_blindedGenerator_getElectionId;

function univote_bfh_ch_common_blindedGenerator_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_blindedGenerator.prototype.setElectionId = univote_bfh_ch_common_blindedGenerator_setElectionId;
//
// accessor is univote_bfh_ch_common_blindedGenerator.prototype.getGenerator
// element get for generator
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for generator
// setter function is is univote_bfh_ch_common_blindedGenerator.prototype.setGenerator
//
function univote_bfh_ch_common_blindedGenerator_getGenerator() {
	return this._generator;
}

univote_bfh_ch_common_blindedGenerator.prototype.getGenerator = univote_bfh_ch_common_blindedGenerator_getGenerator;

function univote_bfh_ch_common_blindedGenerator_setGenerator(value) {
	this._generator = value;
}

univote_bfh_ch_common_blindedGenerator.prototype.setGenerator = univote_bfh_ch_common_blindedGenerator_setGenerator;
//
// accessor is univote_bfh_ch_common_blindedGenerator.prototype.getProof
// element get for proof
// - element type is {http://univote.bfh.ch/common}proof
// - required element
//
// element set for proof
// setter function is is univote_bfh_ch_common_blindedGenerator.prototype.setProof
//
function univote_bfh_ch_common_blindedGenerator_getProof() {
	return this._proof;
}

univote_bfh_ch_common_blindedGenerator.prototype.getProof = univote_bfh_ch_common_blindedGenerator_getProof;

function univote_bfh_ch_common_blindedGenerator_setProof(value) {
	this._proof = value;
}

univote_bfh_ch_common_blindedGenerator.prototype.setProof = univote_bfh_ch_common_blindedGenerator_setProof;
//
// accessor is univote_bfh_ch_common_blindedGenerator.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_blindedGenerator.prototype.setSignature
//
function univote_bfh_ch_common_blindedGenerator_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_blindedGenerator.prototype.getSignature = univote_bfh_ch_common_blindedGenerator_getSignature;

function univote_bfh_ch_common_blindedGenerator_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_blindedGenerator.prototype.setSignature = univote_bfh_ch_common_blindedGenerator_setSignature;
//
// Serialize {http://univote.bfh.ch/common}blindedGenerator
//
function univote_bfh_ch_common_blindedGenerator_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<generator>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._generator);
		xml = xml + '</generator>';
	}
	// block for local variables
	{
		xml = xml + this._proof.serialize(cxfjsutils, 'proof', null);
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_blindedGenerator.prototype.serialize = univote_bfh_ch_common_blindedGenerator_serialize;

function univote_bfh_ch_common_blindedGenerator_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_blindedGenerator();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing generator');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGenerator(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing proof');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_proof_deserialize(cxfjsutils, curElement);
	}
	newobject.setProof(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}signature
//
function univote_bfh_ch_common_signature () {
	this.typeMarker = 'univote_bfh_ch_common_signature';
	this._signerId = '';
	this._timestamp = '';
	this._value = '';
}

//
// accessor is univote_bfh_ch_common_signature.prototype.getSignerId
// element get for signerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for signerId
// setter function is is univote_bfh_ch_common_signature.prototype.setSignerId
//
function univote_bfh_ch_common_signature_getSignerId() {
	return this._signerId;
}

univote_bfh_ch_common_signature.prototype.getSignerId = univote_bfh_ch_common_signature_getSignerId;

function univote_bfh_ch_common_signature_setSignerId(value) {
	this._signerId = value;
}

univote_bfh_ch_common_signature.prototype.setSignerId = univote_bfh_ch_common_signature_setSignerId;
//
// accessor is univote_bfh_ch_common_signature.prototype.getTimestamp
// element get for timestamp
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for timestamp
// setter function is is univote_bfh_ch_common_signature.prototype.setTimestamp
//
function univote_bfh_ch_common_signature_getTimestamp() {
	return this._timestamp;
}

univote_bfh_ch_common_signature.prototype.getTimestamp = univote_bfh_ch_common_signature_getTimestamp;

function univote_bfh_ch_common_signature_setTimestamp(value) {
	this._timestamp = value;
}

univote_bfh_ch_common_signature.prototype.setTimestamp = univote_bfh_ch_common_signature_setTimestamp;
//
// accessor is univote_bfh_ch_common_signature.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for value
// setter function is is univote_bfh_ch_common_signature.prototype.setValue
//
function univote_bfh_ch_common_signature_getValue() {
	return this._value;
}

univote_bfh_ch_common_signature.prototype.getValue = univote_bfh_ch_common_signature_getValue;

function univote_bfh_ch_common_signature_setValue(value) {
	this._value = value;
}

univote_bfh_ch_common_signature.prototype.setValue = univote_bfh_ch_common_signature_setValue;
//
// Serialize {http://univote.bfh.ch/common}signature
//
function univote_bfh_ch_common_signature_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<signerId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._signerId);
		xml = xml + '</signerId>';
	}
	// block for local variables
	{
		xml = xml + '<timestamp>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._timestamp);
		xml = xml + '</timestamp>';
	}
	// block for local variables
	{
		xml = xml + '<value>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._value);
		xml = xml + '</value>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_signature.prototype.serialize = univote_bfh_ch_common_signature_serialize;

function univote_bfh_ch_common_signature_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_signature();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signerId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setSignerId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing timestamp');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setTimestamp(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing value');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setValue(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}rule
//
function univote_bfh_ch_common_rule () {
	this.typeMarker = 'univote_bfh_ch_common_rule';
	this._ruleId = 0;
	this._choiceId = [];
}

//
// accessor is univote_bfh_ch_common_rule.prototype.getRuleId
// element get for ruleId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for ruleId
// setter function is is univote_bfh_ch_common_rule.prototype.setRuleId
//
function univote_bfh_ch_common_rule_getRuleId() {
	return this._ruleId;
}

univote_bfh_ch_common_rule.prototype.getRuleId = univote_bfh_ch_common_rule_getRuleId;

function univote_bfh_ch_common_rule_setRuleId(value) {
	this._ruleId = value;
}

univote_bfh_ch_common_rule.prototype.setRuleId = univote_bfh_ch_common_rule_setRuleId;
//
// accessor is univote_bfh_ch_common_rule.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
// - array
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_rule.prototype.setChoiceId
//
function univote_bfh_ch_common_rule_getChoiceId() {
	return this._choiceId;
}

univote_bfh_ch_common_rule.prototype.getChoiceId = univote_bfh_ch_common_rule_getChoiceId;

function univote_bfh_ch_common_rule_setChoiceId(value) {
	this._choiceId = value;
}

univote_bfh_ch_common_rule.prototype.setChoiceId = univote_bfh_ch_common_rule_setChoiceId;
//
// Serialize {http://univote.bfh.ch/common}rule
//
function univote_bfh_ch_common_rule_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<ruleId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._ruleId);
		xml = xml + '</ruleId>';
	}
	// block for local variables
	{
		if (this._choiceId != null) {
			for (var ax = 0;ax < this._choiceId.length;ax ++) {
				if (this._choiceId[ax] == null) {
					xml = xml + '<choiceId/>';
				} else {
					xml = xml + '<choiceId>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._choiceId[ax]);
					xml = xml + '</choiceId>';
				}
			}
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_rule.prototype.serialize = univote_bfh_ch_common_rule_serialize;

function univote_bfh_ch_common_rule_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_rule();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing ruleId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setRuleId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing choiceId');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = parseInt(value);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId'));
		newobject.setChoiceId(item);
		var item = null;
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}mixedEncryptedVotes
//
function univote_bfh_ch_common_mixedEncryptedVotes () {
	this.typeMarker = 'univote_bfh_ch_common_mixedEncryptedVotes';
	this._electionId = '';
	this._vote = [];
	this._proof = null;
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_mixedEncryptedVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_mixedEncryptedVotes.prototype.setElectionId
//
function univote_bfh_ch_common_mixedEncryptedVotes_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.getElectionId = univote_bfh_ch_common_mixedEncryptedVotes_getElectionId;

function univote_bfh_ch_common_mixedEncryptedVotes_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.setElectionId = univote_bfh_ch_common_mixedEncryptedVotes_setElectionId;
//
// accessor is univote_bfh_ch_common_mixedEncryptedVotes.prototype.getVote
// element get for vote
// - element type is {http://univote.bfh.ch/common}encryptedVote
// - required element
// - array
//
// element set for vote
// setter function is is univote_bfh_ch_common_mixedEncryptedVotes.prototype.setVote
//
function univote_bfh_ch_common_mixedEncryptedVotes_getVote() {
	return this._vote;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.getVote = univote_bfh_ch_common_mixedEncryptedVotes_getVote;

function univote_bfh_ch_common_mixedEncryptedVotes_setVote(value) {
	this._vote = value;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.setVote = univote_bfh_ch_common_mixedEncryptedVotes_setVote;
//
// accessor is univote_bfh_ch_common_mixedEncryptedVotes.prototype.getProof
// element get for proof
// - element type is {http://univote.bfh.ch/common}proof
// - required element
//
// element set for proof
// setter function is is univote_bfh_ch_common_mixedEncryptedVotes.prototype.setProof
//
function univote_bfh_ch_common_mixedEncryptedVotes_getProof() {
	return this._proof;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.getProof = univote_bfh_ch_common_mixedEncryptedVotes_getProof;

function univote_bfh_ch_common_mixedEncryptedVotes_setProof(value) {
	this._proof = value;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.setProof = univote_bfh_ch_common_mixedEncryptedVotes_setProof;
//
// accessor is univote_bfh_ch_common_mixedEncryptedVotes.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_mixedEncryptedVotes.prototype.setSignature
//
function univote_bfh_ch_common_mixedEncryptedVotes_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.getSignature = univote_bfh_ch_common_mixedEncryptedVotes_getSignature;

function univote_bfh_ch_common_mixedEncryptedVotes_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.setSignature = univote_bfh_ch_common_mixedEncryptedVotes_setSignature;
//
// Serialize {http://univote.bfh.ch/common}mixedEncryptedVotes
//
function univote_bfh_ch_common_mixedEncryptedVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._vote != null) {
			for (var ax = 0;ax < this._vote.length;ax ++) {
				if (this._vote[ax] == null) {
					xml = xml + '<vote/>';
				} else {
					xml = xml + this._vote[ax].serialize(cxfjsutils, 'vote', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._proof.serialize(cxfjsutils, 'proof', null);
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.serialize = univote_bfh_ch_common_mixedEncryptedVotes_serialize;

function univote_bfh_ch_common_mixedEncryptedVotes_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_mixedEncryptedVotes();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing vote');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_encryptedVote_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote'));
		newobject.setVote(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing proof');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_proof_deserialize(cxfjsutils, curElement);
	}
	newobject.setProof(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}electionGenerator
//
function univote_bfh_ch_common_electionGenerator () {
	this.typeMarker = 'univote_bfh_ch_common_electionGenerator';
	this._electionId = '';
	this._generator = '';
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_electionGenerator.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_electionGenerator.prototype.setElectionId
//
function univote_bfh_ch_common_electionGenerator_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_electionGenerator.prototype.getElectionId = univote_bfh_ch_common_electionGenerator_getElectionId;

function univote_bfh_ch_common_electionGenerator_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_electionGenerator.prototype.setElectionId = univote_bfh_ch_common_electionGenerator_setElectionId;
//
// accessor is univote_bfh_ch_common_electionGenerator.prototype.getGenerator
// element get for generator
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for generator
// setter function is is univote_bfh_ch_common_electionGenerator.prototype.setGenerator
//
function univote_bfh_ch_common_electionGenerator_getGenerator() {
	return this._generator;
}

univote_bfh_ch_common_electionGenerator.prototype.getGenerator = univote_bfh_ch_common_electionGenerator_getGenerator;

function univote_bfh_ch_common_electionGenerator_setGenerator(value) {
	this._generator = value;
}

univote_bfh_ch_common_electionGenerator.prototype.setGenerator = univote_bfh_ch_common_electionGenerator_setGenerator;
//
// accessor is univote_bfh_ch_common_electionGenerator.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electionGenerator.prototype.setSignature
//
function univote_bfh_ch_common_electionGenerator_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_electionGenerator.prototype.getSignature = univote_bfh_ch_common_electionGenerator_getSignature;

function univote_bfh_ch_common_electionGenerator_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_electionGenerator.prototype.setSignature = univote_bfh_ch_common_electionGenerator_setSignature;
//
// Serialize {http://univote.bfh.ch/common}electionGenerator
//
function univote_bfh_ch_common_electionGenerator_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<generator>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._generator);
		xml = xml + '</generator>';
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_electionGenerator.prototype.serialize = univote_bfh_ch_common_electionGenerator_serialize;

function univote_bfh_ch_common_electionGenerator_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_electionGenerator();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing generator');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGenerator(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}certificate
//
function univote_bfh_ch_common_certificate () {
	this.typeMarker = 'univote_bfh_ch_common_certificate';
	this._value = '';
}

//
// accessor is univote_bfh_ch_common_certificate.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - required element
//
// element set for value
// setter function is is univote_bfh_ch_common_certificate.prototype.setValue
//
function univote_bfh_ch_common_certificate_getValue() {
	return this._value;
}

univote_bfh_ch_common_certificate.prototype.getValue = univote_bfh_ch_common_certificate_getValue;

function univote_bfh_ch_common_certificate_setValue(value) {
	this._value = value;
}

univote_bfh_ch_common_certificate.prototype.setValue = univote_bfh_ch_common_certificate_setValue;
//
// Serialize {http://univote.bfh.ch/common}certificate
//
function univote_bfh_ch_common_certificate_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<value>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._value);
		xml = xml + '</value>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_certificate.prototype.serialize = univote_bfh_ch_common_certificate_serialize;

function univote_bfh_ch_common_certificate_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_certificate();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing value');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = cxfjsutils.deserializeBase64orMom(curElement);
	}
	newobject.setValue(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}electionDefinition
//
function univote_bfh_ch_common_electionDefinition () {
	this.typeMarker = 'univote_bfh_ch_common_electionDefinition';
	this._electionId = '';
	this._description = '';
	this._keyLength = 0;
	this._mixerId = [];
	this._tallierId = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setElectionId
//
function univote_bfh_ch_common_electionDefinition_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_electionDefinition.prototype.getElectionId = univote_bfh_ch_common_electionDefinition_getElectionId;

function univote_bfh_ch_common_electionDefinition_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_electionDefinition.prototype.setElectionId = univote_bfh_ch_common_electionDefinition_setElectionId;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setDescription
//
function univote_bfh_ch_common_electionDefinition_getDescription() {
	return this._description;
}

univote_bfh_ch_common_electionDefinition.prototype.getDescription = univote_bfh_ch_common_electionDefinition_getDescription;

function univote_bfh_ch_common_electionDefinition_setDescription(value) {
	this._description = value;
}

univote_bfh_ch_common_electionDefinition.prototype.setDescription = univote_bfh_ch_common_electionDefinition_setDescription;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getKeyLength
// element get for keyLength
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for keyLength
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setKeyLength
//
function univote_bfh_ch_common_electionDefinition_getKeyLength() {
	return this._keyLength;
}

univote_bfh_ch_common_electionDefinition.prototype.getKeyLength = univote_bfh_ch_common_electionDefinition_getKeyLength;

function univote_bfh_ch_common_electionDefinition_setKeyLength(value) {
	this._keyLength = value;
}

univote_bfh_ch_common_electionDefinition.prototype.setKeyLength = univote_bfh_ch_common_electionDefinition_setKeyLength;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for mixerId
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setMixerId
//
function univote_bfh_ch_common_electionDefinition_getMixerId() {
	return this._mixerId;
}

univote_bfh_ch_common_electionDefinition.prototype.getMixerId = univote_bfh_ch_common_electionDefinition_getMixerId;

function univote_bfh_ch_common_electionDefinition_setMixerId(value) {
	this._mixerId = value;
}

univote_bfh_ch_common_electionDefinition.prototype.setMixerId = univote_bfh_ch_common_electionDefinition_setMixerId;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getTallierId
// element get for tallierId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for tallierId
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setTallierId
//
function univote_bfh_ch_common_electionDefinition_getTallierId() {
	return this._tallierId;
}

univote_bfh_ch_common_electionDefinition.prototype.getTallierId = univote_bfh_ch_common_electionDefinition_getTallierId;

function univote_bfh_ch_common_electionDefinition_setTallierId(value) {
	this._tallierId = value;
}

univote_bfh_ch_common_electionDefinition.prototype.setTallierId = univote_bfh_ch_common_electionDefinition_setTallierId;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setSignature
//
function univote_bfh_ch_common_electionDefinition_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_electionDefinition.prototype.getSignature = univote_bfh_ch_common_electionDefinition_getSignature;

function univote_bfh_ch_common_electionDefinition_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_electionDefinition.prototype.setSignature = univote_bfh_ch_common_electionDefinition_setSignature;
//
// Serialize {http://univote.bfh.ch/common}electionDefinition
//
function univote_bfh_ch_common_electionDefinition_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<description>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._description);
		xml = xml + '</description>';
	}
	// block for local variables
	{
		xml = xml + '<keyLength>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._keyLength);
		xml = xml + '</keyLength>';
	}
	// block for local variables
	{
		if (this._mixerId != null) {
			for (var ax = 0;ax < this._mixerId.length;ax ++) {
				if (this._mixerId[ax] == null) {
					xml = xml + '<mixerId/>';
				} else {
					xml = xml + '<mixerId>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId[ax]);
					xml = xml + '</mixerId>';
				}
			}
		}
	}
	// block for local variables
	{
		if (this._tallierId != null) {
			for (var ax = 0;ax < this._tallierId.length;ax ++) {
				if (this._tallierId[ax] == null) {
					xml = xml + '<tallierId/>';
				} else {
					xml = xml + '<tallierId>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._tallierId[ax]);
					xml = xml + '</tallierId>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_electionDefinition.prototype.serialize = univote_bfh_ch_common_electionDefinition_serialize;

function univote_bfh_ch_common_electionDefinition_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_electionDefinition();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing description');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setDescription(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing keyLength');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setKeyLength(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing mixerId');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mixerId')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mixerId'));
		newobject.setMixerId(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing tallierId');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'tallierId')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'tallierId'));
		newobject.setTallierId(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}signatureParameters
//
function univote_bfh_ch_common_signatureParameters () {
	this.typeMarker = 'univote_bfh_ch_common_signatureParameters';
	this._electionId = '';
	this._prime = '';
	this._groupOrder = '';
	this._generator = '';
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_signatureParameters.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_signatureParameters.prototype.setElectionId
//
function univote_bfh_ch_common_signatureParameters_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_signatureParameters.prototype.getElectionId = univote_bfh_ch_common_signatureParameters_getElectionId;

function univote_bfh_ch_common_signatureParameters_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_signatureParameters.prototype.setElectionId = univote_bfh_ch_common_signatureParameters_setElectionId;
//
// accessor is univote_bfh_ch_common_signatureParameters.prototype.getPrime
// element get for prime
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for prime
// setter function is is univote_bfh_ch_common_signatureParameters.prototype.setPrime
//
function univote_bfh_ch_common_signatureParameters_getPrime() {
	return this._prime;
}

univote_bfh_ch_common_signatureParameters.prototype.getPrime = univote_bfh_ch_common_signatureParameters_getPrime;

function univote_bfh_ch_common_signatureParameters_setPrime(value) {
	this._prime = value;
}

univote_bfh_ch_common_signatureParameters.prototype.setPrime = univote_bfh_ch_common_signatureParameters_setPrime;
//
// accessor is univote_bfh_ch_common_signatureParameters.prototype.getGroupOrder
// element get for groupOrder
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for groupOrder
// setter function is is univote_bfh_ch_common_signatureParameters.prototype.setGroupOrder
//
function univote_bfh_ch_common_signatureParameters_getGroupOrder() {
	return this._groupOrder;
}

univote_bfh_ch_common_signatureParameters.prototype.getGroupOrder = univote_bfh_ch_common_signatureParameters_getGroupOrder;

function univote_bfh_ch_common_signatureParameters_setGroupOrder(value) {
	this._groupOrder = value;
}

univote_bfh_ch_common_signatureParameters.prototype.setGroupOrder = univote_bfh_ch_common_signatureParameters_setGroupOrder;
//
// accessor is univote_bfh_ch_common_signatureParameters.prototype.getGenerator
// element get for generator
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for generator
// setter function is is univote_bfh_ch_common_signatureParameters.prototype.setGenerator
//
function univote_bfh_ch_common_signatureParameters_getGenerator() {
	return this._generator;
}

univote_bfh_ch_common_signatureParameters.prototype.getGenerator = univote_bfh_ch_common_signatureParameters_getGenerator;

function univote_bfh_ch_common_signatureParameters_setGenerator(value) {
	this._generator = value;
}

univote_bfh_ch_common_signatureParameters.prototype.setGenerator = univote_bfh_ch_common_signatureParameters_setGenerator;
//
// accessor is univote_bfh_ch_common_signatureParameters.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_signatureParameters.prototype.setSignature
//
function univote_bfh_ch_common_signatureParameters_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_signatureParameters.prototype.getSignature = univote_bfh_ch_common_signatureParameters_getSignature;

function univote_bfh_ch_common_signatureParameters_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_signatureParameters.prototype.setSignature = univote_bfh_ch_common_signatureParameters_setSignature;
//
// Serialize {http://univote.bfh.ch/common}signatureParameters
//
function univote_bfh_ch_common_signatureParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<prime>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._prime);
		xml = xml + '</prime>';
	}
	// block for local variables
	{
		xml = xml + '<groupOrder>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._groupOrder);
		xml = xml + '</groupOrder>';
	}
	// block for local variables
	{
		xml = xml + '<generator>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._generator);
		xml = xml + '</generator>';
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_signatureParameters.prototype.serialize = univote_bfh_ch_common_signatureParameters_serialize;

function univote_bfh_ch_common_signatureParameters_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_signatureParameters();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing prime');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setPrime(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing groupOrder');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGroupOrder(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing generator');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGenerator(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}decryptedVotes
//
function univote_bfh_ch_common_decryptedVotes () {
	this.typeMarker = 'univote_bfh_ch_common_decryptedVotes';
	this._electionId = '';
	this._vote = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_decryptedVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_decryptedVotes.prototype.setElectionId
//
function univote_bfh_ch_common_decryptedVotes_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_decryptedVotes.prototype.getElectionId = univote_bfh_ch_common_decryptedVotes_getElectionId;

function univote_bfh_ch_common_decryptedVotes_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_decryptedVotes.prototype.setElectionId = univote_bfh_ch_common_decryptedVotes_setElectionId;
//
// accessor is univote_bfh_ch_common_decryptedVotes.prototype.getVote
// element get for vote
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for vote
// setter function is is univote_bfh_ch_common_decryptedVotes.prototype.setVote
//
function univote_bfh_ch_common_decryptedVotes_getVote() {
	return this._vote;
}

univote_bfh_ch_common_decryptedVotes.prototype.getVote = univote_bfh_ch_common_decryptedVotes_getVote;

function univote_bfh_ch_common_decryptedVotes_setVote(value) {
	this._vote = value;
}

univote_bfh_ch_common_decryptedVotes.prototype.setVote = univote_bfh_ch_common_decryptedVotes_setVote;
//
// accessor is univote_bfh_ch_common_decryptedVotes.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_decryptedVotes.prototype.setSignature
//
function univote_bfh_ch_common_decryptedVotes_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_decryptedVotes.prototype.getSignature = univote_bfh_ch_common_decryptedVotes_getSignature;

function univote_bfh_ch_common_decryptedVotes_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_decryptedVotes.prototype.setSignature = univote_bfh_ch_common_decryptedVotes_setSignature;
//
// Serialize {http://univote.bfh.ch/common}decryptedVotes
//
function univote_bfh_ch_common_decryptedVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._vote != null) {
			for (var ax = 0;ax < this._vote.length;ax ++) {
				if (this._vote[ax] == null) {
					xml = xml + '<vote/>';
				} else {
					xml = xml + '<vote>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._vote[ax]);
					xml = xml + '</vote>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_decryptedVotes.prototype.serialize = univote_bfh_ch_common_decryptedVotes_serialize;

function univote_bfh_ch_common_decryptedVotes_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_decryptedVotes();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing vote');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote'));
		newobject.setVote(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}verificationKeysToMix
//
function univote_bfh_ch_common_verificationKeysToMix () {
	this.typeMarker = 'univote_bfh_ch_common_verificationKeysToMix';
	this._mixerId = '';
	this._electionId = '';
	this._key = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_verificationKeysToMix.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mixerId
// setter function is is univote_bfh_ch_common_verificationKeysToMix.prototype.setMixerId
//
function univote_bfh_ch_common_verificationKeysToMix_getMixerId() {
	return this._mixerId;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.getMixerId = univote_bfh_ch_common_verificationKeysToMix_getMixerId;

function univote_bfh_ch_common_verificationKeysToMix_setMixerId(value) {
	this._mixerId = value;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.setMixerId = univote_bfh_ch_common_verificationKeysToMix_setMixerId;
//
// accessor is univote_bfh_ch_common_verificationKeysToMix.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_verificationKeysToMix.prototype.setElectionId
//
function univote_bfh_ch_common_verificationKeysToMix_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.getElectionId = univote_bfh_ch_common_verificationKeysToMix_getElectionId;

function univote_bfh_ch_common_verificationKeysToMix_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.setElectionId = univote_bfh_ch_common_verificationKeysToMix_setElectionId;
//
// accessor is univote_bfh_ch_common_verificationKeysToMix.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for key
// setter function is is univote_bfh_ch_common_verificationKeysToMix.prototype.setKey
//
function univote_bfh_ch_common_verificationKeysToMix_getKey() {
	return this._key;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.getKey = univote_bfh_ch_common_verificationKeysToMix_getKey;

function univote_bfh_ch_common_verificationKeysToMix_setKey(value) {
	this._key = value;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.setKey = univote_bfh_ch_common_verificationKeysToMix_setKey;
//
// accessor is univote_bfh_ch_common_verificationKeysToMix.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_verificationKeysToMix.prototype.setSignature
//
function univote_bfh_ch_common_verificationKeysToMix_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.getSignature = univote_bfh_ch_common_verificationKeysToMix_getSignature;

function univote_bfh_ch_common_verificationKeysToMix_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.setSignature = univote_bfh_ch_common_verificationKeysToMix_setSignature;
//
// Serialize {http://univote.bfh.ch/common}verificationKeysToMix
//
function univote_bfh_ch_common_verificationKeysToMix_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<mixerId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId);
		xml = xml + '</mixerId>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._key != null) {
			for (var ax = 0;ax < this._key.length;ax ++) {
				if (this._key[ax] == null) {
					xml = xml + '<key/>';
				} else {
					xml = xml + '<key>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._key[ax]);
					xml = xml + '</key>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_verificationKeysToMix.prototype.serialize = univote_bfh_ch_common_verificationKeysToMix_serialize;

function univote_bfh_ch_common_verificationKeysToMix_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_verificationKeysToMix();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing mixerId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setMixerId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing key');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'key')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'key'));
		newobject.setKey(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}proof
//
function univote_bfh_ch_common_proof () {
	this.typeMarker = 'univote_bfh_ch_common_proof';
	this._commitment = [];
	this._response = [];
}

//
// accessor is univote_bfh_ch_common_proof.prototype.getCommitment
// element get for commitment
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for commitment
// setter function is is univote_bfh_ch_common_proof.prototype.setCommitment
//
function univote_bfh_ch_common_proof_getCommitment() {
	return this._commitment;
}

univote_bfh_ch_common_proof.prototype.getCommitment = univote_bfh_ch_common_proof_getCommitment;

function univote_bfh_ch_common_proof_setCommitment(value) {
	this._commitment = value;
}

univote_bfh_ch_common_proof.prototype.setCommitment = univote_bfh_ch_common_proof_setCommitment;
//
// accessor is univote_bfh_ch_common_proof.prototype.getResponse
// element get for response
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for response
// setter function is is univote_bfh_ch_common_proof.prototype.setResponse
//
function univote_bfh_ch_common_proof_getResponse() {
	return this._response;
}

univote_bfh_ch_common_proof.prototype.getResponse = univote_bfh_ch_common_proof_getResponse;

function univote_bfh_ch_common_proof_setResponse(value) {
	this._response = value;
}

univote_bfh_ch_common_proof.prototype.setResponse = univote_bfh_ch_common_proof_setResponse;
//
// Serialize {http://univote.bfh.ch/common}proof
//
function univote_bfh_ch_common_proof_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._commitment != null) {
			for (var ax = 0;ax < this._commitment.length;ax ++) {
				if (this._commitment[ax] == null) {
					xml = xml + '<commitment/>';
				} else {
					xml = xml + '<commitment>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._commitment[ax]);
					xml = xml + '</commitment>';
				}
			}
		}
	}
	// block for local variables
	{
		if (this._response != null) {
			for (var ax = 0;ax < this._response.length;ax ++) {
				if (this._response[ax] == null) {
					xml = xml + '<response/>';
				} else {
					xml = xml + '<response>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._response[ax]);
					xml = xml + '</response>';
				}
			}
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_proof.prototype.serialize = univote_bfh_ch_common_proof_serialize;

function univote_bfh_ch_common_proof_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_proof();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing commitment');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'commitment')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'commitment'));
		newobject.setCommitment(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing response');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'response')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'response'));
		newobject.setResponse(item);
		var item = null;
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}partiallyDecryptedVotes
//
function univote_bfh_ch_common_partiallyDecryptedVotes () {
	this.typeMarker = 'univote_bfh_ch_common_partiallyDecryptedVotes';
	this._electionId = '';
	this._vote = [];
	this._proof = null;
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_partiallyDecryptedVotes.prototype.setElectionId
//
function univote_bfh_ch_common_partiallyDecryptedVotes_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getElectionId = univote_bfh_ch_common_partiallyDecryptedVotes_getElectionId;

function univote_bfh_ch_common_partiallyDecryptedVotes_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.setElectionId = univote_bfh_ch_common_partiallyDecryptedVotes_setElectionId;
//
// accessor is univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getVote
// element get for vote
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for vote
// setter function is is univote_bfh_ch_common_partiallyDecryptedVotes.prototype.setVote
//
function univote_bfh_ch_common_partiallyDecryptedVotes_getVote() {
	return this._vote;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getVote = univote_bfh_ch_common_partiallyDecryptedVotes_getVote;

function univote_bfh_ch_common_partiallyDecryptedVotes_setVote(value) {
	this._vote = value;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.setVote = univote_bfh_ch_common_partiallyDecryptedVotes_setVote;
//
// accessor is univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getProof
// element get for proof
// - element type is {http://univote.bfh.ch/common}proof
// - required element
//
// element set for proof
// setter function is is univote_bfh_ch_common_partiallyDecryptedVotes.prototype.setProof
//
function univote_bfh_ch_common_partiallyDecryptedVotes_getProof() {
	return this._proof;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getProof = univote_bfh_ch_common_partiallyDecryptedVotes_getProof;

function univote_bfh_ch_common_partiallyDecryptedVotes_setProof(value) {
	this._proof = value;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.setProof = univote_bfh_ch_common_partiallyDecryptedVotes_setProof;
//
// accessor is univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_partiallyDecryptedVotes.prototype.setSignature
//
function univote_bfh_ch_common_partiallyDecryptedVotes_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getSignature = univote_bfh_ch_common_partiallyDecryptedVotes_getSignature;

function univote_bfh_ch_common_partiallyDecryptedVotes_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.setSignature = univote_bfh_ch_common_partiallyDecryptedVotes_setSignature;
//
// Serialize {http://univote.bfh.ch/common}partiallyDecryptedVotes
//
function univote_bfh_ch_common_partiallyDecryptedVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._vote != null) {
			for (var ax = 0;ax < this._vote.length;ax ++) {
				if (this._vote[ax] == null) {
					xml = xml + '<vote/>';
				} else {
					xml = xml + '<vote>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._vote[ax]);
					xml = xml + '</vote>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._proof.serialize(cxfjsutils, 'proof', null);
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.serialize = univote_bfh_ch_common_partiallyDecryptedVotes_serialize;

function univote_bfh_ch_common_partiallyDecryptedVotes_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_partiallyDecryptedVotes();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing vote');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'vote'));
		newobject.setVote(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing proof');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_proof_deserialize(cxfjsutils, curElement);
	}
	newobject.setProof(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}verificationKeys
//
function univote_bfh_ch_common_verificationKeys () {
	this.typeMarker = 'univote_bfh_ch_common_verificationKeys';
	this._electionId = '';
	this._key = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_verificationKeys.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_verificationKeys.prototype.setElectionId
//
function univote_bfh_ch_common_verificationKeys_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_verificationKeys.prototype.getElectionId = univote_bfh_ch_common_verificationKeys_getElectionId;

function univote_bfh_ch_common_verificationKeys_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_verificationKeys.prototype.setElectionId = univote_bfh_ch_common_verificationKeys_setElectionId;
//
// accessor is univote_bfh_ch_common_verificationKeys.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for key
// setter function is is univote_bfh_ch_common_verificationKeys.prototype.setKey
//
function univote_bfh_ch_common_verificationKeys_getKey() {
	return this._key;
}

univote_bfh_ch_common_verificationKeys.prototype.getKey = univote_bfh_ch_common_verificationKeys_getKey;

function univote_bfh_ch_common_verificationKeys_setKey(value) {
	this._key = value;
}

univote_bfh_ch_common_verificationKeys.prototype.setKey = univote_bfh_ch_common_verificationKeys_setKey;
//
// accessor is univote_bfh_ch_common_verificationKeys.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_verificationKeys.prototype.setSignature
//
function univote_bfh_ch_common_verificationKeys_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_verificationKeys.prototype.getSignature = univote_bfh_ch_common_verificationKeys_getSignature;

function univote_bfh_ch_common_verificationKeys_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_verificationKeys.prototype.setSignature = univote_bfh_ch_common_verificationKeys_setSignature;
//
// Serialize {http://univote.bfh.ch/common}verificationKeys
//
function univote_bfh_ch_common_verificationKeys_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._key != null) {
			for (var ax = 0;ax < this._key.length;ax ++) {
				if (this._key[ax] == null) {
					xml = xml + '<key/>';
				} else {
					xml = xml + '<key>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._key[ax]);
					xml = xml + '</key>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_verificationKeys.prototype.serialize = univote_bfh_ch_common_verificationKeys_serialize;

function univote_bfh_ch_common_verificationKeys_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_verificationKeys();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing key');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'key')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'key'));
		newobject.setKey(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}candidate
//
function univote_bfh_ch_common_candidate () {
	this.typeMarker = 'univote_bfh_ch_common_candidate';
	this._choiceId = 0;
	this._candidateNumber = '';
	this._lastName = '';
	this._firstName = '';
	this._studyBranch = [];
	this._semesterCount = 0;
	this._studyDegree = [];
	this._partyListId = 0;
	this._repetionOnPartyList = 0;
}

//
// accessor is univote_bfh_ch_common_candidate.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_candidate.prototype.setChoiceId
//
function univote_bfh_ch_common_candidate_getChoiceId() {
	return this._choiceId;
}

univote_bfh_ch_common_candidate.prototype.getChoiceId = univote_bfh_ch_common_candidate_getChoiceId;

function univote_bfh_ch_common_candidate_setChoiceId(value) {
	this._choiceId = value;
}

univote_bfh_ch_common_candidate.prototype.setChoiceId = univote_bfh_ch_common_candidate_setChoiceId;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getCandidateNumber
// element get for candidateNumber
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for candidateNumber
// setter function is is univote_bfh_ch_common_candidate.prototype.setCandidateNumber
//
function univote_bfh_ch_common_candidate_getCandidateNumber() {
	return this._candidateNumber;
}

univote_bfh_ch_common_candidate.prototype.getCandidateNumber = univote_bfh_ch_common_candidate_getCandidateNumber;

function univote_bfh_ch_common_candidate_setCandidateNumber(value) {
	this._candidateNumber = value;
}

univote_bfh_ch_common_candidate.prototype.setCandidateNumber = univote_bfh_ch_common_candidate_setCandidateNumber;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getLastName
// element get for lastName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for lastName
// setter function is is univote_bfh_ch_common_candidate.prototype.setLastName
//
function univote_bfh_ch_common_candidate_getLastName() {
	return this._lastName;
}

univote_bfh_ch_common_candidate.prototype.getLastName = univote_bfh_ch_common_candidate_getLastName;

function univote_bfh_ch_common_candidate_setLastName(value) {
	this._lastName = value;
}

univote_bfh_ch_common_candidate.prototype.setLastName = univote_bfh_ch_common_candidate_setLastName;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getFirstName
// element get for firstName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for firstName
// setter function is is univote_bfh_ch_common_candidate.prototype.setFirstName
//
function univote_bfh_ch_common_candidate_getFirstName() {
	return this._firstName;
}

univote_bfh_ch_common_candidate.prototype.getFirstName = univote_bfh_ch_common_candidate_getFirstName;

function univote_bfh_ch_common_candidate_setFirstName(value) {
	this._firstName = value;
}

univote_bfh_ch_common_candidate.prototype.setFirstName = univote_bfh_ch_common_candidate_setFirstName;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getStudyBranch
// element get for studyBranch
// - element type is {http://univote.bfh.ch/common}localizedText
// - required element
// - array
//
// element set for studyBranch
// setter function is is univote_bfh_ch_common_candidate.prototype.setStudyBranch
//
function univote_bfh_ch_common_candidate_getStudyBranch() {
	return this._studyBranch;
}

univote_bfh_ch_common_candidate.prototype.getStudyBranch = univote_bfh_ch_common_candidate_getStudyBranch;

function univote_bfh_ch_common_candidate_setStudyBranch(value) {
	this._studyBranch = value;
}

univote_bfh_ch_common_candidate.prototype.setStudyBranch = univote_bfh_ch_common_candidate_setStudyBranch;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getSemesterCount
// element get for semesterCount
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for semesterCount
// setter function is is univote_bfh_ch_common_candidate.prototype.setSemesterCount
//
function univote_bfh_ch_common_candidate_getSemesterCount() {
	return this._semesterCount;
}

univote_bfh_ch_common_candidate.prototype.getSemesterCount = univote_bfh_ch_common_candidate_getSemesterCount;

function univote_bfh_ch_common_candidate_setSemesterCount(value) {
	this._semesterCount = value;
}

univote_bfh_ch_common_candidate.prototype.setSemesterCount = univote_bfh_ch_common_candidate_setSemesterCount;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getStudyDegree
// element get for studyDegree
// - element type is {http://univote.bfh.ch/common}localizedText
// - required element
// - array
//
// element set for studyDegree
// setter function is is univote_bfh_ch_common_candidate.prototype.setStudyDegree
//
function univote_bfh_ch_common_candidate_getStudyDegree() {
	return this._studyDegree;
}

univote_bfh_ch_common_candidate.prototype.getStudyDegree = univote_bfh_ch_common_candidate_getStudyDegree;

function univote_bfh_ch_common_candidate_setStudyDegree(value) {
	this._studyDegree = value;
}

univote_bfh_ch_common_candidate.prototype.setStudyDegree = univote_bfh_ch_common_candidate_setStudyDegree;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getPartyListId
// element get for partyListId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for partyListId
// setter function is is univote_bfh_ch_common_candidate.prototype.setPartyListId
//
function univote_bfh_ch_common_candidate_getPartyListId() {
	return this._partyListId;
}

univote_bfh_ch_common_candidate.prototype.getPartyListId = univote_bfh_ch_common_candidate_getPartyListId;

function univote_bfh_ch_common_candidate_setPartyListId(value) {
	this._partyListId = value;
}

univote_bfh_ch_common_candidate.prototype.setPartyListId = univote_bfh_ch_common_candidate_setPartyListId;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getRepetionOnPartyList
// element get for repetionOnPartyList
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for repetionOnPartyList
// setter function is is univote_bfh_ch_common_candidate.prototype.setRepetionOnPartyList
//
function univote_bfh_ch_common_candidate_getRepetionOnPartyList() {
	return this._repetionOnPartyList;
}

univote_bfh_ch_common_candidate.prototype.getRepetionOnPartyList = univote_bfh_ch_common_candidate_getRepetionOnPartyList;

function univote_bfh_ch_common_candidate_setRepetionOnPartyList(value) {
	this._repetionOnPartyList = value;
}

univote_bfh_ch_common_candidate.prototype.setRepetionOnPartyList = univote_bfh_ch_common_candidate_setRepetionOnPartyList;
//
// Serialize {http://univote.bfh.ch/common}candidate
//
function univote_bfh_ch_common_candidate_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<choiceId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._choiceId);
		xml = xml + '</choiceId>';
	}
	// block for local variables
	{
		xml = xml + '<candidateNumber>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._candidateNumber);
		xml = xml + '</candidateNumber>';
	}
	// block for local variables
	{
		xml = xml + '<lastName>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._lastName);
		xml = xml + '</lastName>';
	}
	// block for local variables
	{
		xml = xml + '<firstName>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._firstName);
		xml = xml + '</firstName>';
	}
	// block for local variables
	{
		if (this._studyBranch != null) {
			for (var ax = 0;ax < this._studyBranch.length;ax ++) {
				if (this._studyBranch[ax] == null) {
					xml = xml + '<studyBranch/>';
				} else {
					xml = xml + this._studyBranch[ax].serialize(cxfjsutils, 'studyBranch', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + '<semesterCount>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._semesterCount);
		xml = xml + '</semesterCount>';
	}
	// block for local variables
	{
		if (this._studyDegree != null) {
			for (var ax = 0;ax < this._studyDegree.length;ax ++) {
				if (this._studyDegree[ax] == null) {
					xml = xml + '<studyDegree/>';
				} else {
					xml = xml + this._studyDegree[ax].serialize(cxfjsutils, 'studyDegree', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + '<partyListId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._partyListId);
		xml = xml + '</partyListId>';
	}
	// block for local variables
	{
		xml = xml + '<repetionOnPartyList>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._repetionOnPartyList);
		xml = xml + '</repetionOnPartyList>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_candidate.prototype.serialize = univote_bfh_ch_common_candidate_serialize;

function univote_bfh_ch_common_candidate_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_candidate();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing choiceId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setChoiceId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing candidateNumber');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setCandidateNumber(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing lastName');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setLastName(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing firstName');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setFirstName(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing studyBranch');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'studyBranch')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_localizedText_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'studyBranch'));
		newobject.setStudyBranch(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing semesterCount');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setSemesterCount(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing studyDegree');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'studyDegree')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_localizedText_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'studyDegree'));
		newobject.setStudyDegree(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing partyListId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setPartyListId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing repetionOnPartyList');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setRepetionOnPartyList(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}choice
//
function univote_bfh_ch_common_choice () {
	this.typeMarker = 'univote_bfh_ch_common_choice';
	this._choiceId = 0;
}

//
// accessor is univote_bfh_ch_common_choice.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_choice.prototype.setChoiceId
//
function univote_bfh_ch_common_choice_getChoiceId() {
	return this._choiceId;
}

univote_bfh_ch_common_choice.prototype.getChoiceId = univote_bfh_ch_common_choice_getChoiceId;

function univote_bfh_ch_common_choice_setChoiceId(value) {
	this._choiceId = value;
}

univote_bfh_ch_common_choice.prototype.setChoiceId = univote_bfh_ch_common_choice_setChoiceId;
//
// Serialize {http://univote.bfh.ch/common}choice
//
function univote_bfh_ch_common_choice_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<choiceId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._choiceId);
		xml = xml + '</choiceId>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_choice.prototype.serialize = univote_bfh_ch_common_choice_serialize;

function univote_bfh_ch_common_choice_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_choice();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing choiceId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setChoiceId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}localizedText
//
function univote_bfh_ch_common_localizedText () {
	this.typeMarker = 'univote_bfh_ch_common_localizedText';
	this._language = '';
	this._text = '';
}

//
// accessor is univote_bfh_ch_common_localizedText.prototype.getLanguage
// element get for language
// - element type is {http://univote.bfh.ch/common}languageCode
// - required element
//
// element set for language
// setter function is is univote_bfh_ch_common_localizedText.prototype.setLanguage
//
function univote_bfh_ch_common_localizedText_getLanguage() {
	return this._language;
}

univote_bfh_ch_common_localizedText.prototype.getLanguage = univote_bfh_ch_common_localizedText_getLanguage;

function univote_bfh_ch_common_localizedText_setLanguage(value) {
	this._language = value;
}

univote_bfh_ch_common_localizedText.prototype.setLanguage = univote_bfh_ch_common_localizedText_setLanguage;
//
// accessor is univote_bfh_ch_common_localizedText.prototype.getText
// element get for text
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for text
// setter function is is univote_bfh_ch_common_localizedText.prototype.setText
//
function univote_bfh_ch_common_localizedText_getText() {
	return this._text;
}

univote_bfh_ch_common_localizedText.prototype.getText = univote_bfh_ch_common_localizedText_getText;

function univote_bfh_ch_common_localizedText_setText(value) {
	this._text = value;
}

univote_bfh_ch_common_localizedText.prototype.setText = univote_bfh_ch_common_localizedText_setText;
//
// Serialize {http://univote.bfh.ch/common}localizedText
//
function univote_bfh_ch_common_localizedText_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<language>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._language);
		xml = xml + '</language>';
	}
	// block for local variables
	{
		xml = xml + '<text>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._text);
		xml = xml + '</text>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_localizedText.prototype.serialize = univote_bfh_ch_common_localizedText_serialize;

function univote_bfh_ch_common_localizedText_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_localizedText();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing language');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setLanguage(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing text');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setText(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}mixingParameters
//
function univote_bfh_ch_common_mixingParameters () {
	this.typeMarker = 'univote_bfh_ch_common_mixingParameters';
	this._mixerId = '';
	this._electionId = '';
	this._prime = '';
	this._groupOrder = '';
	this._generator = '';
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_mixingParameters.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mixerId
// setter function is is univote_bfh_ch_common_mixingParameters.prototype.setMixerId
//
function univote_bfh_ch_common_mixingParameters_getMixerId() {
	return this._mixerId;
}

univote_bfh_ch_common_mixingParameters.prototype.getMixerId = univote_bfh_ch_common_mixingParameters_getMixerId;

function univote_bfh_ch_common_mixingParameters_setMixerId(value) {
	this._mixerId = value;
}

univote_bfh_ch_common_mixingParameters.prototype.setMixerId = univote_bfh_ch_common_mixingParameters_setMixerId;
//
// accessor is univote_bfh_ch_common_mixingParameters.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_mixingParameters.prototype.setElectionId
//
function univote_bfh_ch_common_mixingParameters_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_mixingParameters.prototype.getElectionId = univote_bfh_ch_common_mixingParameters_getElectionId;

function univote_bfh_ch_common_mixingParameters_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_mixingParameters.prototype.setElectionId = univote_bfh_ch_common_mixingParameters_setElectionId;
//
// accessor is univote_bfh_ch_common_mixingParameters.prototype.getPrime
// element get for prime
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for prime
// setter function is is univote_bfh_ch_common_mixingParameters.prototype.setPrime
//
function univote_bfh_ch_common_mixingParameters_getPrime() {
	return this._prime;
}

univote_bfh_ch_common_mixingParameters.prototype.getPrime = univote_bfh_ch_common_mixingParameters_getPrime;

function univote_bfh_ch_common_mixingParameters_setPrime(value) {
	this._prime = value;
}

univote_bfh_ch_common_mixingParameters.prototype.setPrime = univote_bfh_ch_common_mixingParameters_setPrime;
//
// accessor is univote_bfh_ch_common_mixingParameters.prototype.getGroupOrder
// element get for groupOrder
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for groupOrder
// setter function is is univote_bfh_ch_common_mixingParameters.prototype.setGroupOrder
//
function univote_bfh_ch_common_mixingParameters_getGroupOrder() {
	return this._groupOrder;
}

univote_bfh_ch_common_mixingParameters.prototype.getGroupOrder = univote_bfh_ch_common_mixingParameters_getGroupOrder;

function univote_bfh_ch_common_mixingParameters_setGroupOrder(value) {
	this._groupOrder = value;
}

univote_bfh_ch_common_mixingParameters.prototype.setGroupOrder = univote_bfh_ch_common_mixingParameters_setGroupOrder;
//
// accessor is univote_bfh_ch_common_mixingParameters.prototype.getGenerator
// element get for generator
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for generator
// setter function is is univote_bfh_ch_common_mixingParameters.prototype.setGenerator
//
function univote_bfh_ch_common_mixingParameters_getGenerator() {
	return this._generator;
}

univote_bfh_ch_common_mixingParameters.prototype.getGenerator = univote_bfh_ch_common_mixingParameters_getGenerator;

function univote_bfh_ch_common_mixingParameters_setGenerator(value) {
	this._generator = value;
}

univote_bfh_ch_common_mixingParameters.prototype.setGenerator = univote_bfh_ch_common_mixingParameters_setGenerator;
//
// accessor is univote_bfh_ch_common_mixingParameters.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_mixingParameters.prototype.setSignature
//
function univote_bfh_ch_common_mixingParameters_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_mixingParameters.prototype.getSignature = univote_bfh_ch_common_mixingParameters_getSignature;

function univote_bfh_ch_common_mixingParameters_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_mixingParameters.prototype.setSignature = univote_bfh_ch_common_mixingParameters_setSignature;
//
// Serialize {http://univote.bfh.ch/common}mixingParameters
//
function univote_bfh_ch_common_mixingParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<mixerId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId);
		xml = xml + '</mixerId>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<prime>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._prime);
		xml = xml + '</prime>';
	}
	// block for local variables
	{
		xml = xml + '<groupOrder>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._groupOrder);
		xml = xml + '</groupOrder>';
	}
	// block for local variables
	{
		xml = xml + '<generator>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._generator);
		xml = xml + '</generator>';
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_mixingParameters.prototype.serialize = univote_bfh_ch_common_mixingParameters_serialize;

function univote_bfh_ch_common_mixingParameters_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_mixingParameters();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing mixerId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setMixerId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing prime');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setPrime(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing groupOrder');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGroupOrder(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing generator');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGenerator(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}encryptionKey
//
function univote_bfh_ch_common_encryptionKey () {
	this.typeMarker = 'univote_bfh_ch_common_encryptionKey';
	this._electionId = '';
	this._key = '';
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_encryptionKey.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_encryptionKey.prototype.setElectionId
//
function univote_bfh_ch_common_encryptionKey_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_encryptionKey.prototype.getElectionId = univote_bfh_ch_common_encryptionKey_getElectionId;

function univote_bfh_ch_common_encryptionKey_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_encryptionKey.prototype.setElectionId = univote_bfh_ch_common_encryptionKey_setElectionId;
//
// accessor is univote_bfh_ch_common_encryptionKey.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for key
// setter function is is univote_bfh_ch_common_encryptionKey.prototype.setKey
//
function univote_bfh_ch_common_encryptionKey_getKey() {
	return this._key;
}

univote_bfh_ch_common_encryptionKey.prototype.getKey = univote_bfh_ch_common_encryptionKey_getKey;

function univote_bfh_ch_common_encryptionKey_setKey(value) {
	this._key = value;
}

univote_bfh_ch_common_encryptionKey.prototype.setKey = univote_bfh_ch_common_encryptionKey_setKey;
//
// accessor is univote_bfh_ch_common_encryptionKey.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_encryptionKey.prototype.setSignature
//
function univote_bfh_ch_common_encryptionKey_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_encryptionKey.prototype.getSignature = univote_bfh_ch_common_encryptionKey_getSignature;

function univote_bfh_ch_common_encryptionKey_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_encryptionKey.prototype.setSignature = univote_bfh_ch_common_encryptionKey_setSignature;
//
// Serialize {http://univote.bfh.ch/common}encryptionKey
//
function univote_bfh_ch_common_encryptionKey_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<key>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._key);
		xml = xml + '</key>';
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_encryptionKey.prototype.serialize = univote_bfh_ch_common_encryptionKey_serialize;

function univote_bfh_ch_common_encryptionKey_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_encryptionKey();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing key');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setKey(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}ballots
//
function univote_bfh_ch_common_ballots () {
	this.typeMarker = 'univote_bfh_ch_common_ballots';
	this._electionId = '';
	this._ballot = [];
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_ballots.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_ballots.prototype.setElectionId
//
function univote_bfh_ch_common_ballots_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_ballots.prototype.getElectionId = univote_bfh_ch_common_ballots_getElectionId;

function univote_bfh_ch_common_ballots_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_ballots.prototype.setElectionId = univote_bfh_ch_common_ballots_setElectionId;
//
// accessor is univote_bfh_ch_common_ballots.prototype.getBallot
// element get for ballot
// - element type is {http://univote.bfh.ch/common}ballot
// - required element
// - array
//
// element set for ballot
// setter function is is univote_bfh_ch_common_ballots.prototype.setBallot
//
function univote_bfh_ch_common_ballots_getBallot() {
	return this._ballot;
}

univote_bfh_ch_common_ballots.prototype.getBallot = univote_bfh_ch_common_ballots_getBallot;

function univote_bfh_ch_common_ballots_setBallot(value) {
	this._ballot = value;
}

univote_bfh_ch_common_ballots.prototype.setBallot = univote_bfh_ch_common_ballots_setBallot;
//
// accessor is univote_bfh_ch_common_ballots.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_ballots.prototype.setSignature
//
function univote_bfh_ch_common_ballots_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_ballots.prototype.getSignature = univote_bfh_ch_common_ballots_getSignature;

function univote_bfh_ch_common_ballots_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_ballots.prototype.setSignature = univote_bfh_ch_common_ballots_setSignature;
//
// Serialize {http://univote.bfh.ch/common}ballots
//
function univote_bfh_ch_common_ballots_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._ballot != null) {
			for (var ax = 0;ax < this._ballot.length;ax ++) {
				if (this._ballot[ax] == null) {
					xml = xml + '<ballot/>';
				} else {
					xml = xml + this._ballot[ax].serialize(cxfjsutils, 'ballot', null);
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_ballots.prototype.serialize = univote_bfh_ch_common_ballots_serialize;

function univote_bfh_ch_common_ballots_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_ballots();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing ballot');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'ballot')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = univote_bfh_ch_common_ballot_deserialize(cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'ballot'));
		newobject.setBallot(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}encryptionParameters
//
function univote_bfh_ch_common_encryptionParameters () {
	this.typeMarker = 'univote_bfh_ch_common_encryptionParameters';
	this._electionId = '';
	this._prime = '';
	this._groupOrder = '';
	this._generator = '';
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_encryptionParameters.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_encryptionParameters.prototype.setElectionId
//
function univote_bfh_ch_common_encryptionParameters_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_encryptionParameters.prototype.getElectionId = univote_bfh_ch_common_encryptionParameters_getElectionId;

function univote_bfh_ch_common_encryptionParameters_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_encryptionParameters.prototype.setElectionId = univote_bfh_ch_common_encryptionParameters_setElectionId;
//
// accessor is univote_bfh_ch_common_encryptionParameters.prototype.getPrime
// element get for prime
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for prime
// setter function is is univote_bfh_ch_common_encryptionParameters.prototype.setPrime
//
function univote_bfh_ch_common_encryptionParameters_getPrime() {
	return this._prime;
}

univote_bfh_ch_common_encryptionParameters.prototype.getPrime = univote_bfh_ch_common_encryptionParameters_getPrime;

function univote_bfh_ch_common_encryptionParameters_setPrime(value) {
	this._prime = value;
}

univote_bfh_ch_common_encryptionParameters.prototype.setPrime = univote_bfh_ch_common_encryptionParameters_setPrime;
//
// accessor is univote_bfh_ch_common_encryptionParameters.prototype.getGroupOrder
// element get for groupOrder
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for groupOrder
// setter function is is univote_bfh_ch_common_encryptionParameters.prototype.setGroupOrder
//
function univote_bfh_ch_common_encryptionParameters_getGroupOrder() {
	return this._groupOrder;
}

univote_bfh_ch_common_encryptionParameters.prototype.getGroupOrder = univote_bfh_ch_common_encryptionParameters_getGroupOrder;

function univote_bfh_ch_common_encryptionParameters_setGroupOrder(value) {
	this._groupOrder = value;
}

univote_bfh_ch_common_encryptionParameters.prototype.setGroupOrder = univote_bfh_ch_common_encryptionParameters_setGroupOrder;
//
// accessor is univote_bfh_ch_common_encryptionParameters.prototype.getGenerator
// element get for generator
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for generator
// setter function is is univote_bfh_ch_common_encryptionParameters.prototype.setGenerator
//
function univote_bfh_ch_common_encryptionParameters_getGenerator() {
	return this._generator;
}

univote_bfh_ch_common_encryptionParameters.prototype.getGenerator = univote_bfh_ch_common_encryptionParameters_getGenerator;

function univote_bfh_ch_common_encryptionParameters_setGenerator(value) {
	this._generator = value;
}

univote_bfh_ch_common_encryptionParameters.prototype.setGenerator = univote_bfh_ch_common_encryptionParameters_setGenerator;
//
// accessor is univote_bfh_ch_common_encryptionParameters.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_encryptionParameters.prototype.setSignature
//
function univote_bfh_ch_common_encryptionParameters_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_encryptionParameters.prototype.getSignature = univote_bfh_ch_common_encryptionParameters_getSignature;

function univote_bfh_ch_common_encryptionParameters_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_encryptionParameters.prototype.setSignature = univote_bfh_ch_common_encryptionParameters_setSignature;
//
// Serialize {http://univote.bfh.ch/common}encryptionParameters
//
function univote_bfh_ch_common_encryptionParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		xml = xml + '<prime>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._prime);
		xml = xml + '</prime>';
	}
	// block for local variables
	{
		xml = xml + '<groupOrder>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._groupOrder);
		xml = xml + '</groupOrder>';
	}
	// block for local variables
	{
		xml = xml + '<generator>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._generator);
		xml = xml + '</generator>';
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_encryptionParameters.prototype.serialize = univote_bfh_ch_common_encryptionParameters_serialize;

function univote_bfh_ch_common_encryptionParameters_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_encryptionParameters();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing prime');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setPrime(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing groupOrder');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGroupOrder(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing generator');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setGenerator(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}mixedVerificationKeys
//
function univote_bfh_ch_common_mixedVerificationKeys () {
	this.typeMarker = 'univote_bfh_ch_common_mixedVerificationKeys';
	this._electionId = '';
	this._key = [];
	this._proof = null;
	this._signature = null;
}

//
// accessor is univote_bfh_ch_common_mixedVerificationKeys.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_mixedVerificationKeys.prototype.setElectionId
//
function univote_bfh_ch_common_mixedVerificationKeys_getElectionId() {
	return this._electionId;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.getElectionId = univote_bfh_ch_common_mixedVerificationKeys_getElectionId;

function univote_bfh_ch_common_mixedVerificationKeys_setElectionId(value) {
	this._electionId = value;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.setElectionId = univote_bfh_ch_common_mixedVerificationKeys_setElectionId;
//
// accessor is univote_bfh_ch_common_mixedVerificationKeys.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
// - array
//
// element set for key
// setter function is is univote_bfh_ch_common_mixedVerificationKeys.prototype.setKey
//
function univote_bfh_ch_common_mixedVerificationKeys_getKey() {
	return this._key;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.getKey = univote_bfh_ch_common_mixedVerificationKeys_getKey;

function univote_bfh_ch_common_mixedVerificationKeys_setKey(value) {
	this._key = value;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.setKey = univote_bfh_ch_common_mixedVerificationKeys_setKey;
//
// accessor is univote_bfh_ch_common_mixedVerificationKeys.prototype.getProof
// element get for proof
// - element type is {http://univote.bfh.ch/common}proof
// - required element
//
// element set for proof
// setter function is is univote_bfh_ch_common_mixedVerificationKeys.prototype.setProof
//
function univote_bfh_ch_common_mixedVerificationKeys_getProof() {
	return this._proof;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.getProof = univote_bfh_ch_common_mixedVerificationKeys_getProof;

function univote_bfh_ch_common_mixedVerificationKeys_setProof(value) {
	this._proof = value;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.setProof = univote_bfh_ch_common_mixedVerificationKeys_setProof;
//
// accessor is univote_bfh_ch_common_mixedVerificationKeys.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_mixedVerificationKeys.prototype.setSignature
//
function univote_bfh_ch_common_mixedVerificationKeys_getSignature() {
	return this._signature;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.getSignature = univote_bfh_ch_common_mixedVerificationKeys_getSignature;

function univote_bfh_ch_common_mixedVerificationKeys_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.setSignature = univote_bfh_ch_common_mixedVerificationKeys_setSignature;
//
// Serialize {http://univote.bfh.ch/common}mixedVerificationKeys
//
function univote_bfh_ch_common_mixedVerificationKeys_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<electionId>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._electionId);
		xml = xml + '</electionId>';
	}
	// block for local variables
	{
		if (this._key != null) {
			for (var ax = 0;ax < this._key.length;ax ++) {
				if (this._key[ax] == null) {
					xml = xml + '<key/>';
				} else {
					xml = xml + '<key>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._key[ax]);
					xml = xml + '</key>';
				}
			}
		}
	}
	// block for local variables
	{
		xml = xml + this._proof.serialize(cxfjsutils, 'proof', null);
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_common_mixedVerificationKeys.prototype.serialize = univote_bfh_ch_common_mixedVerificationKeys_serialize;

function univote_bfh_ch_common_mixedVerificationKeys_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_common_mixedVerificationKeys();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing electionId');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setElectionId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing key');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'key')) {
		item = [];
		do  {
			var arrayItem;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
		while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'key'));
		newobject.setKey(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing proof');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_proof_deserialize(cxfjsutils, curElement);
	}
	newobject.setProof(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Definitions for schema: null
// VotingService.wsdl#types1
//
//
// Definitions for schema: http://univote.bfh.ch/election
// VotingService.xsd
//
//
// Constructor for XML Schema item {http://univote.bfh.ch/election}castVote
//
function univote_bfh_ch_election_castVote () {
	this.typeMarker = 'univote_bfh_ch_election_castVote';
	this._ballot = null;
}

//
// accessor is univote_bfh_ch_election_castVote.prototype.getBallot
// element get for ballot
// - element type is {http://univote.bfh.ch/common}ballot
// - required element
//
// element set for ballot
// setter function is is univote_bfh_ch_election_castVote.prototype.setBallot
//
function univote_bfh_ch_election_castVote_getBallot() {
	return this._ballot;
}

univote_bfh_ch_election_castVote.prototype.getBallot = univote_bfh_ch_election_castVote_getBallot;

function univote_bfh_ch_election_castVote_setBallot(value) {
	this._ballot = value;
}

univote_bfh_ch_election_castVote.prototype.setBallot = univote_bfh_ch_election_castVote_setBallot;
//
// Serialize {http://univote.bfh.ch/election}castVote
//
function univote_bfh_ch_election_castVote_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + this._ballot.serialize(cxfjsutils, 'ballot', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_election_castVote.prototype.serialize = univote_bfh_ch_election_castVote_serialize;

function univote_bfh_ch_election_castVote_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_election_castVote();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing ballot');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_ballot_deserialize(cxfjsutils, curElement);
	}
	newobject.setBallot(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}castVoteResponse
//
function univote_bfh_ch_election_castVoteResponse () {
	this.typeMarker = 'univote_bfh_ch_election_castVoteResponse';
	this._signature = null;
}

//
// accessor is univote_bfh_ch_election_castVoteResponse.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_election_castVoteResponse.prototype.setSignature
//
function univote_bfh_ch_election_castVoteResponse_getSignature() {
	return this._signature;
}

univote_bfh_ch_election_castVoteResponse.prototype.getSignature = univote_bfh_ch_election_castVoteResponse_getSignature;

function univote_bfh_ch_election_castVoteResponse_setSignature(value) {
	this._signature = value;
}

univote_bfh_ch_election_castVoteResponse.prototype.setSignature = univote_bfh_ch_election_castVoteResponse_setSignature;
//
// Serialize {http://univote.bfh.ch/election}castVoteResponse
//
function univote_bfh_ch_election_castVoteResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + this._signature.serialize(cxfjsutils, 'signature', null);
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

univote_bfh_ch_election_castVoteResponse.prototype.serialize = univote_bfh_ch_election_castVoteResponse_serialize;

function univote_bfh_ch_election_castVoteResponse_deserialize (cxfjsutils, element) {
	var newobject = new univote_bfh_ch_election_castVoteResponse();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing signature');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		item = univote_bfh_ch_common_signature_deserialize(cxfjsutils, curElement);
	}
	newobject.setSignature(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Definitions for service: {http://univote.bfh.ch/election}VotingService
//

// Javascript for {http://univote.bfh.ch/election}Voting

function univote_bfh_ch_election_Voting () {
	this.jsutils = new CxfApacheOrgUtil();
	this.jsutils.interfaceObject = this;
	this.synchronous = false;
	this.url = null;
	this.client = null;
	this.response = null;
	this.globalElementSerializers = [];
	this.globalElementDeserializers = [];
	this.globalElementSerializers['{http://univote.bfh.ch/common}mixedVerificationKey'] = univote_bfh_ch_common_mixedVerificationKey_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}mixedVerificationKey'] = univote_bfh_ch_common_mixedVerificationKey_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}voterCertificates'] = univote_bfh_ch_common_voterCertificates_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}voterCertificates'] = univote_bfh_ch_common_voterCertificates_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}electionData'] = univote_bfh_ch_common_electionData_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}electionData'] = univote_bfh_ch_common_electionData_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}encryptedVotesToMix'] = univote_bfh_ch_common_encryptedVotesToMix_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptedVotesToMix'] = univote_bfh_ch_common_encryptedVotesToMix_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}electoralRoll'] = univote_bfh_ch_common_electoralRoll_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}electoralRoll'] = univote_bfh_ch_common_electoralRoll_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}verificationKeyToMix'] = univote_bfh_ch_common_verificationKeyToMix_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}verificationKeyToMix'] = univote_bfh_ch_common_verificationKeyToMix_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}electionOptions'] = univote_bfh_ch_common_electionOptions_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}electionOptions'] = univote_bfh_ch_common_electionOptions_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}voterCertificate'] = univote_bfh_ch_common_voterCertificate_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}voterCertificate'] = univote_bfh_ch_common_voterCertificate_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}partyList'] = univote_bfh_ch_common_partyList_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}partyList'] = univote_bfh_ch_common_partyList_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}encryptedVotes'] = univote_bfh_ch_common_encryptedVotes_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptedVotes'] = univote_bfh_ch_common_encryptedVotes_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}electionSystemInfo'] = univote_bfh_ch_common_electionSystemInfo_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}electionSystemInfo'] = univote_bfh_ch_common_electionSystemInfo_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}plaintextVotes'] = univote_bfh_ch_common_plaintextVotes_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}plaintextVotes'] = univote_bfh_ch_common_plaintextVotes_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}encryptionKeyShare'] = univote_bfh_ch_common_encryptionKeyShare_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptionKeyShare'] = univote_bfh_ch_common_encryptionKeyShare_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}sumRule'] = univote_bfh_ch_common_sumRule_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}sumRule'] = univote_bfh_ch_common_sumRule_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}forAllRule'] = univote_bfh_ch_common_forAllRule_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}forAllRule'] = univote_bfh_ch_common_forAllRule_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}voterSignature'] = univote_bfh_ch_common_voterSignature_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}voterSignature'] = univote_bfh_ch_common_voterSignature_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}ballot'] = univote_bfh_ch_common_ballot_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}ballot'] = univote_bfh_ch_common_ballot_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}encryptedVote'] = univote_bfh_ch_common_encryptedVote_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptedVote'] = univote_bfh_ch_common_encryptedVote_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}blindedGenerator'] = univote_bfh_ch_common_blindedGenerator_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}blindedGenerator'] = univote_bfh_ch_common_blindedGenerator_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}signature'] = univote_bfh_ch_common_signature_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}signature'] = univote_bfh_ch_common_signature_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}rule'] = univote_bfh_ch_common_rule_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}rule'] = univote_bfh_ch_common_rule_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}mixedEncryptedVotes'] = univote_bfh_ch_common_mixedEncryptedVotes_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}mixedEncryptedVotes'] = univote_bfh_ch_common_mixedEncryptedVotes_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}electionGenerator'] = univote_bfh_ch_common_electionGenerator_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}electionGenerator'] = univote_bfh_ch_common_electionGenerator_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}certificate'] = univote_bfh_ch_common_certificate_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}certificate'] = univote_bfh_ch_common_certificate_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}electionDefinition'] = univote_bfh_ch_common_electionDefinition_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}electionDefinition'] = univote_bfh_ch_common_electionDefinition_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}signatureParameters'] = univote_bfh_ch_common_signatureParameters_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}signatureParameters'] = univote_bfh_ch_common_signatureParameters_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}decryptedVotes'] = univote_bfh_ch_common_decryptedVotes_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}decryptedVotes'] = univote_bfh_ch_common_decryptedVotes_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}verificationKeysToMix'] = univote_bfh_ch_common_verificationKeysToMix_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}verificationKeysToMix'] = univote_bfh_ch_common_verificationKeysToMix_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}proof'] = univote_bfh_ch_common_proof_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}proof'] = univote_bfh_ch_common_proof_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}partiallyDecryptedVotes'] = univote_bfh_ch_common_partiallyDecryptedVotes_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}partiallyDecryptedVotes'] = univote_bfh_ch_common_partiallyDecryptedVotes_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}verificationKeys'] = univote_bfh_ch_common_verificationKeys_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}verificationKeys'] = univote_bfh_ch_common_verificationKeys_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}candidate'] = univote_bfh_ch_common_candidate_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}candidate'] = univote_bfh_ch_common_candidate_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}choice'] = univote_bfh_ch_common_choice_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}choice'] = univote_bfh_ch_common_choice_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}localizedText'] = univote_bfh_ch_common_localizedText_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}localizedText'] = univote_bfh_ch_common_localizedText_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}mixingParameters'] = univote_bfh_ch_common_mixingParameters_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}mixingParameters'] = univote_bfh_ch_common_mixingParameters_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}encryptionKey'] = univote_bfh_ch_common_encryptionKey_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptionKey'] = univote_bfh_ch_common_encryptionKey_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}ballots'] = univote_bfh_ch_common_ballots_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}ballots'] = univote_bfh_ch_common_ballots_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}encryptionParameters'] = univote_bfh_ch_common_encryptionParameters_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptionParameters'] = univote_bfh_ch_common_encryptionParameters_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/common}mixedVerificationKeys'] = univote_bfh_ch_common_mixedVerificationKeys_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/common}mixedVerificationKeys'] = univote_bfh_ch_common_mixedVerificationKeys_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/election}castVote'] = univote_bfh_ch_election_castVote_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/election}castVote'] = univote_bfh_ch_election_castVote_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/election}castVoteResponse'] = univote_bfh_ch_election_castVoteResponse_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/election}castVoteResponse'] = univote_bfh_ch_election_castVoteResponse_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/election}castVote'] = univote_bfh_ch_election_castVote_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/election}castVote'] = univote_bfh_ch_election_castVote_deserialize;
	this.globalElementSerializers['{http://univote.bfh.ch/election}castVoteResponse'] = univote_bfh_ch_election_castVoteResponse_serialize;
	this.globalElementDeserializers['{http://univote.bfh.ch/election}castVoteResponse'] = univote_bfh_ch_election_castVoteResponse_deserialize;
}

function univote_bfh_ch_election_castVote_op_onsuccess(client, responseXml) {
	if (client.user_onsuccess) {
		var responseObject = null;
		var element = responseXml.documentElement;
		this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
		while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
			element = this.jsutils.getNextElementSibling(element);
			if (element == null) {
				throw 'No env:Body in message.'
			}
		}
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
		this.jsutils.trace('calling univote_bfh_ch_election_castVoteResponse_deserializeResponse');
		responseObject = univote_bfh_ch_election_castVoteResponse_deserializeResponse(this.jsutils, element);
		client.user_onsuccess(responseObject);
	}
}

univote_bfh_ch_election_Voting.prototype.castVote_onsuccess = univote_bfh_ch_election_castVote_op_onsuccess;

function univote_bfh_ch_election_castVote_op_onerror(client, responseXML) {  // @BFH Added responseXML
	if (client.user_onerror) {
		var httpStatus;
		var httpStatusText;
		try {
			httpStatus = client.req.status;
			httpStatusText = client.req.statusText;
		} catch(e) {
			httpStatus = -1;
			httpStatusText = 'Error opening connection to server';
		}
		
		client.user_onerror(httpStatus, httpStatusText, responseXML);  // @BFH Added responseElement
	}
}

univote_bfh_ch_election_Voting.prototype.castVote_onerror = univote_bfh_ch_election_castVote_op_onerror;

//
// Operation {http://univote.bfh.ch/election}castVote
// Wrapped operation.
// parameter ballot
// - Object constructor is univote_bfh_ch_common_ballot
//
function univote_bfh_ch_election_castVote_op(successCallback, errorCallback, ballot) {
	this.client = new CxfApacheOrgClient(this.jsutils);
	var xml = null;
	var args = new Array(1);
	args[0] = ballot;
	xml = this.castVote_serializeInput(this.jsutils, args);
	this.client.user_onsuccess = successCallback;
	this.client.user_onerror = errorCallback;
	var closureThis = this;
	this.client.onsuccess = function(client, responseXml) {
		closureThis.castVote_onsuccess(client, responseXml);
	};
	this.client.onerror = function(client, responseXML) {    // @BFH Added responseXML
		closureThis.castVote_onerror(client, responseXML);   // @BFH Added responseXML
	};
	var requestHeaders = [];
	requestHeaders['SOAPAction'] = '';
	this.jsutils.trace('synchronous = ' + this.synchronous);
	this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_Voting.prototype.castVote = univote_bfh_ch_election_castVote_op;

function univote_bfh_ch_election_castVote_serializeInput(cxfjsutils, args) {
	var wrapperObj = new univote_bfh_ch_election_castVote();
	wrapperObj.setBallot(args[0]);
	var xml;
	xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
	// block for local variables
	{
		xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:castVote', null);
	}
	xml = xml + cxfjsutils.endSoap11Message();
	return xml;
}

univote_bfh_ch_election_Voting.prototype.castVote_serializeInput = univote_bfh_ch_election_castVote_serializeInput;

function univote_bfh_ch_election_castVoteResponse_deserializeResponse(cxfjsutils, partElement) {
	var returnObject = univote_bfh_ch_election_castVoteResponse_deserialize (cxfjsutils, partElement);

	return returnObject;
}
function univote_bfh_ch_election_Voting_univote_bfh_ch_election_VotingPort () {
	this.url = 'REPLACE_WITH_ACTUAL_URL';
}
univote_bfh_ch_election_Voting_univote_bfh_ch_election_VotingPort.prototype = new univote_bfh_ch_election_Voting;
