//
// Definitions for schema: null
//  file:/C:/Users/hss3/Desktop/apache-cxf-2.7.1/bin/ElectionBoardService.wsdl#types1
//
//
// Definitions for schema: http://univote.bfh.ch/election
//  file:/C:/Users/hss3/Desktop/apache-cxf-2.7.1/bin/ElectionBoardService.xsd
//
//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getVerificationKeysMixedBy
//
function univote_bfh_ch_election_getVerificationKeysMixedBy () {
    this.typeMarker = 'univote_bfh_ch_election_getVerificationKeysMixedBy';
    this._electionId = '';
    this._mixerId = '';
}

//
// accessor is univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.setElectionId
//
function univote_bfh_ch_election_getVerificationKeysMixedBy_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.getElectionId = univote_bfh_ch_election_getVerificationKeysMixedBy_getElectionId;

function univote_bfh_ch_election_getVerificationKeysMixedBy_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.setElectionId = univote_bfh_ch_election_getVerificationKeysMixedBy_setElectionId;
//
// accessor is univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mixerId
// setter function is is univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.setMixerId
//
function univote_bfh_ch_election_getVerificationKeysMixedBy_getMixerId() { return this._mixerId;}

univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.getMixerId = univote_bfh_ch_election_getVerificationKeysMixedBy_getMixerId;

function univote_bfh_ch_election_getVerificationKeysMixedBy_setMixerId(value) { this._mixerId = value;}

univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.setMixerId = univote_bfh_ch_election_getVerificationKeysMixedBy_setMixerId;
//
// Serialize {http://univote.bfh.ch/election}getVerificationKeysMixedBy
//
function univote_bfh_ch_election_getVerificationKeysMixedBy_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<mixerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId);
     xml = xml + '</mixerId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getVerificationKeysMixedBy.prototype.serialize = univote_bfh_ch_election_getVerificationKeysMixedBy_serialize;

function univote_bfh_ch_election_getVerificationKeysMixedBy_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getVerificationKeysMixedBy();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getBallots
//
function univote_bfh_ch_election_getBallots () {
    this.typeMarker = 'univote_bfh_ch_election_getBallots';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getBallots.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getBallots.prototype.setElectionId
//
function univote_bfh_ch_election_getBallots_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getBallots.prototype.getElectionId = univote_bfh_ch_election_getBallots_getElectionId;

function univote_bfh_ch_election_getBallots_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getBallots.prototype.setElectionId = univote_bfh_ch_election_getBallots_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getBallots
//
function univote_bfh_ch_election_getBallots_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getBallots.prototype.serialize = univote_bfh_ch_election_getBallots_serialize;

function univote_bfh_ch_election_getBallots_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getBallots();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getMixedVerificationKeys
//
function univote_bfh_ch_election_getMixedVerificationKeys () {
    this.typeMarker = 'univote_bfh_ch_election_getMixedVerificationKeys';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getMixedVerificationKeys.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getMixedVerificationKeys.prototype.setElectionId
//
function univote_bfh_ch_election_getMixedVerificationKeys_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getMixedVerificationKeys.prototype.getElectionId = univote_bfh_ch_election_getMixedVerificationKeys_getElectionId;

function univote_bfh_ch_election_getMixedVerificationKeys_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getMixedVerificationKeys.prototype.setElectionId = univote_bfh_ch_election_getMixedVerificationKeys_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getMixedVerificationKeys
//
function univote_bfh_ch_election_getMixedVerificationKeys_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getMixedVerificationKeys.prototype.serialize = univote_bfh_ch_election_getMixedVerificationKeys_serialize;

function univote_bfh_ch_election_getMixedVerificationKeys_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getMixedVerificationKeys();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getEncryptionKeyResponse
//
function univote_bfh_ch_election_getEncryptionKeyResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getEncryptionKeyResponse';
    this._encryptionKey = null;
}

//
// accessor is univote_bfh_ch_election_getEncryptionKeyResponse.prototype.getEncryptionKey
// element get for encryptionKey
// - element type is {http://univote.bfh.ch/common}encryptionKey
// - required element
//
// element set for encryptionKey
// setter function is is univote_bfh_ch_election_getEncryptionKeyResponse.prototype.setEncryptionKey
//
function univote_bfh_ch_election_getEncryptionKeyResponse_getEncryptionKey() { return this._encryptionKey;}

univote_bfh_ch_election_getEncryptionKeyResponse.prototype.getEncryptionKey = univote_bfh_ch_election_getEncryptionKeyResponse_getEncryptionKey;

function univote_bfh_ch_election_getEncryptionKeyResponse_setEncryptionKey(value) { this._encryptionKey = value;}

univote_bfh_ch_election_getEncryptionKeyResponse.prototype.setEncryptionKey = univote_bfh_ch_election_getEncryptionKeyResponse_setEncryptionKey;
//
// Serialize {http://univote.bfh.ch/election}getEncryptionKeyResponse
//
function univote_bfh_ch_election_getEncryptionKeyResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._encryptionKey.serialize(cxfjsutils, 'encryptionKey', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getEncryptionKeyResponse.prototype.serialize = univote_bfh_ch_election_getEncryptionKeyResponse_serialize;

function univote_bfh_ch_election_getEncryptionKeyResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getEncryptionKeyResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing encryptionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_encryptionKey_deserialize(cxfjsutils, curElement);
    }
    newobject.setEncryptionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionOptionsResponse
//
function univote_bfh_ch_election_getElectionOptionsResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionOptionsResponse';
    this._electionOptions = null;
}

//
// accessor is univote_bfh_ch_election_getElectionOptionsResponse.prototype.getElectionOptions
// element get for electionOptions
// - element type is {http://univote.bfh.ch/common}electionOptions
// - required element
//
// element set for electionOptions
// setter function is is univote_bfh_ch_election_getElectionOptionsResponse.prototype.setElectionOptions
//
function univote_bfh_ch_election_getElectionOptionsResponse_getElectionOptions() { return this._electionOptions;}

univote_bfh_ch_election_getElectionOptionsResponse.prototype.getElectionOptions = univote_bfh_ch_election_getElectionOptionsResponse_getElectionOptions;

function univote_bfh_ch_election_getElectionOptionsResponse_setElectionOptions(value) { this._electionOptions = value;}

univote_bfh_ch_election_getElectionOptionsResponse.prototype.setElectionOptions = univote_bfh_ch_election_getElectionOptionsResponse_setElectionOptions;
//
// Serialize {http://univote.bfh.ch/election}getElectionOptionsResponse
//
function univote_bfh_ch_election_getElectionOptionsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._electionOptions.serialize(cxfjsutils, 'electionOptions', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionOptionsResponse.prototype.serialize = univote_bfh_ch_election_getElectionOptionsResponse_serialize;

function univote_bfh_ch_election_getElectionOptionsResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionOptionsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing electionOptions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_electionOptions_deserialize(cxfjsutils, curElement);
    }
    newobject.setElectionOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificatesResponse
//
function univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse';
    this._voterCertificate = [];
}

//
// accessor is univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse.prototype.getVoterCertificate
// element get for voterCertificate
// - element type is {http://univote.bfh.ch/common}voterCertificate
// - required element
// - array
//
// element set for voterCertificate
// setter function is is univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse.prototype.setVoterCertificate
//
function univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_getVoterCertificate() { return this._voterCertificate;}

univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse.prototype.getVoterCertificate = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_getVoterCertificate;

function univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_setVoterCertificate(value) { this._voterCertificate = value;}

univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse.prototype.setVoterCertificate = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_setVoterCertificate;
//
// Serialize {http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificatesResponse
//
function univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._voterCertificate != null) {
      for (var ax = 0;ax < this._voterCertificate.length;ax ++) {
       if (this._voterCertificate[ax] == null) {
        xml = xml + '<voterCertificate/>';
       } else {
        xml = xml + this._voterCertificate[ax].serialize(cxfjsutils, 'voterCertificate', null);
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

univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse.prototype.serialize = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_serialize;

function univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing voterCertificate');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'voterCertificate')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = univote_bfh_ch_common_voterCertificate_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'voterCertificate'));
     newobject.setVoterCertificate(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getBlindedGenerator
//
function univote_bfh_ch_election_getBlindedGenerator () {
    this.typeMarker = 'univote_bfh_ch_election_getBlindedGenerator';
    this._electionId = '';
    this._mixerId = '';
}

//
// accessor is univote_bfh_ch_election_getBlindedGenerator.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getBlindedGenerator.prototype.setElectionId
//
function univote_bfh_ch_election_getBlindedGenerator_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getBlindedGenerator.prototype.getElectionId = univote_bfh_ch_election_getBlindedGenerator_getElectionId;

function univote_bfh_ch_election_getBlindedGenerator_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getBlindedGenerator.prototype.setElectionId = univote_bfh_ch_election_getBlindedGenerator_setElectionId;
//
// accessor is univote_bfh_ch_election_getBlindedGenerator.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mixerId
// setter function is is univote_bfh_ch_election_getBlindedGenerator.prototype.setMixerId
//
function univote_bfh_ch_election_getBlindedGenerator_getMixerId() { return this._mixerId;}

univote_bfh_ch_election_getBlindedGenerator.prototype.getMixerId = univote_bfh_ch_election_getBlindedGenerator_getMixerId;

function univote_bfh_ch_election_getBlindedGenerator_setMixerId(value) { this._mixerId = value;}

univote_bfh_ch_election_getBlindedGenerator.prototype.setMixerId = univote_bfh_ch_election_getBlindedGenerator_setMixerId;
//
// Serialize {http://univote.bfh.ch/election}getBlindedGenerator
//
function univote_bfh_ch_election_getBlindedGenerator_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<mixerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId);
     xml = xml + '</mixerId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getBlindedGenerator.prototype.serialize = univote_bfh_ch_election_getBlindedGenerator_serialize;

function univote_bfh_ch_election_getBlindedGenerator_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getBlindedGenerator();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getBallotResponse
//
function univote_bfh_ch_election_getBallotResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getBallotResponse';
    this._ballot = null;
}

//
// accessor is univote_bfh_ch_election_getBallotResponse.prototype.getBallot
// element get for ballot
// - element type is {http://univote.bfh.ch/common}ballot
// - required element
//
// element set for ballot
// setter function is is univote_bfh_ch_election_getBallotResponse.prototype.setBallot
//
function univote_bfh_ch_election_getBallotResponse_getBallot() { return this._ballot;}

univote_bfh_ch_election_getBallotResponse.prototype.getBallot = univote_bfh_ch_election_getBallotResponse_getBallot;

function univote_bfh_ch_election_getBallotResponse_setBallot(value) { this._ballot = value;}

univote_bfh_ch_election_getBallotResponse.prototype.setBallot = univote_bfh_ch_election_getBallotResponse_setBallot;
//
// Serialize {http://univote.bfh.ch/election}getBallotResponse
//
function univote_bfh_ch_election_getBallotResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

univote_bfh_ch_election_getBallotResponse.prototype.serialize = univote_bfh_ch_election_getBallotResponse_serialize;

function univote_bfh_ch_election_getBallotResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getBallotResponse();
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
// Constructor for XML Schema item {http://univote.bfh.ch/election}getDecryptedVotes
//
function univote_bfh_ch_election_getDecryptedVotes () {
    this.typeMarker = 'univote_bfh_ch_election_getDecryptedVotes';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getDecryptedVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getDecryptedVotes.prototype.setElectionId
//
function univote_bfh_ch_election_getDecryptedVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getDecryptedVotes.prototype.getElectionId = univote_bfh_ch_election_getDecryptedVotes_getElectionId;

function univote_bfh_ch_election_getDecryptedVotes_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getDecryptedVotes.prototype.setElectionId = univote_bfh_ch_election_getDecryptedVotes_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getDecryptedVotes
//
function univote_bfh_ch_election_getDecryptedVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getDecryptedVotes.prototype.serialize = univote_bfh_ch_election_getDecryptedVotes_serialize;

function univote_bfh_ch_election_getDecryptedVotes_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getDecryptedVotes();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getVerificationKeysMixedByResponse
//
function univote_bfh_ch_election_getVerificationKeysMixedByResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getVerificationKeysMixedByResponse';
    this._mixedVerificationKeys = null;
}

//
// accessor is univote_bfh_ch_election_getVerificationKeysMixedByResponse.prototype.getMixedVerificationKeys
// element get for mixedVerificationKeys
// - element type is {http://univote.bfh.ch/common}mixedVerificationKeys
// - required element
//
// element set for mixedVerificationKeys
// setter function is is univote_bfh_ch_election_getVerificationKeysMixedByResponse.prototype.setMixedVerificationKeys
//
function univote_bfh_ch_election_getVerificationKeysMixedByResponse_getMixedVerificationKeys() { return this._mixedVerificationKeys;}

univote_bfh_ch_election_getVerificationKeysMixedByResponse.prototype.getMixedVerificationKeys = univote_bfh_ch_election_getVerificationKeysMixedByResponse_getMixedVerificationKeys;

function univote_bfh_ch_election_getVerificationKeysMixedByResponse_setMixedVerificationKeys(value) { this._mixedVerificationKeys = value;}

univote_bfh_ch_election_getVerificationKeysMixedByResponse.prototype.setMixedVerificationKeys = univote_bfh_ch_election_getVerificationKeysMixedByResponse_setMixedVerificationKeys;
//
// Serialize {http://univote.bfh.ch/election}getVerificationKeysMixedByResponse
//
function univote_bfh_ch_election_getVerificationKeysMixedByResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._mixedVerificationKeys.serialize(cxfjsutils, 'mixedVerificationKeys', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getVerificationKeysMixedByResponse.prototype.serialize = univote_bfh_ch_election_getVerificationKeysMixedByResponse_serialize;

function univote_bfh_ch_election_getVerificationKeysMixedByResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getVerificationKeysMixedByResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mixedVerificationKeys');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_mixedVerificationKeys_deserialize(cxfjsutils, curElement);
    }
    newobject.setMixedVerificationKeys(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getDecryptedVotesResponse
//
function univote_bfh_ch_election_getDecryptedVotesResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getDecryptedVotesResponse';
    this._decryptedVotes = null;
}

//
// accessor is univote_bfh_ch_election_getDecryptedVotesResponse.prototype.getDecryptedVotes
// element get for decryptedVotes
// - element type is {http://univote.bfh.ch/common}decryptedVotes
// - required element
//
// element set for decryptedVotes
// setter function is is univote_bfh_ch_election_getDecryptedVotesResponse.prototype.setDecryptedVotes
//
function univote_bfh_ch_election_getDecryptedVotesResponse_getDecryptedVotes() { return this._decryptedVotes;}

univote_bfh_ch_election_getDecryptedVotesResponse.prototype.getDecryptedVotes = univote_bfh_ch_election_getDecryptedVotesResponse_getDecryptedVotes;

function univote_bfh_ch_election_getDecryptedVotesResponse_setDecryptedVotes(value) { this._decryptedVotes = value;}

univote_bfh_ch_election_getDecryptedVotesResponse.prototype.setDecryptedVotes = univote_bfh_ch_election_getDecryptedVotesResponse_setDecryptedVotes;
//
// Serialize {http://univote.bfh.ch/election}getDecryptedVotesResponse
//
function univote_bfh_ch_election_getDecryptedVotesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._decryptedVotes.serialize(cxfjsutils, 'decryptedVotes', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getDecryptedVotesResponse.prototype.serialize = univote_bfh_ch_election_getDecryptedVotesResponse_serialize;

function univote_bfh_ch_election_getDecryptedVotesResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getDecryptedVotesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing decryptedVotes');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_decryptedVotes_deserialize(cxfjsutils, curElement);
    }
    newobject.setDecryptedVotes(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getEncryptionKeyShare
//
function univote_bfh_ch_election_getEncryptionKeyShare () {
    this.typeMarker = 'univote_bfh_ch_election_getEncryptionKeyShare';
    this._electionId = '';
    this._tallierId = '';
}

//
// accessor is univote_bfh_ch_election_getEncryptionKeyShare.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getEncryptionKeyShare.prototype.setElectionId
//
function univote_bfh_ch_election_getEncryptionKeyShare_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getEncryptionKeyShare.prototype.getElectionId = univote_bfh_ch_election_getEncryptionKeyShare_getElectionId;

function univote_bfh_ch_election_getEncryptionKeyShare_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getEncryptionKeyShare.prototype.setElectionId = univote_bfh_ch_election_getEncryptionKeyShare_setElectionId;
//
// accessor is univote_bfh_ch_election_getEncryptionKeyShare.prototype.getTallierId
// element get for tallierId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for tallierId
// setter function is is univote_bfh_ch_election_getEncryptionKeyShare.prototype.setTallierId
//
function univote_bfh_ch_election_getEncryptionKeyShare_getTallierId() { return this._tallierId;}

univote_bfh_ch_election_getEncryptionKeyShare.prototype.getTallierId = univote_bfh_ch_election_getEncryptionKeyShare_getTallierId;

function univote_bfh_ch_election_getEncryptionKeyShare_setTallierId(value) { this._tallierId = value;}

univote_bfh_ch_election_getEncryptionKeyShare.prototype.setTallierId = univote_bfh_ch_election_getEncryptionKeyShare_setTallierId;
//
// Serialize {http://univote.bfh.ch/election}getEncryptionKeyShare
//
function univote_bfh_ch_election_getEncryptionKeyShare_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<tallierId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._tallierId);
     xml = xml + '</tallierId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getEncryptionKeyShare.prototype.serialize = univote_bfh_ch_election_getEncryptionKeyShare_serialize;

function univote_bfh_ch_election_getEncryptionKeyShare_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getEncryptionKeyShare();
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
    cxfjsutils.trace('processing tallierId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTallierId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getMixedEncryptedVotes
//
function univote_bfh_ch_election_getMixedEncryptedVotes () {
    this.typeMarker = 'univote_bfh_ch_election_getMixedEncryptedVotes';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getMixedEncryptedVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getMixedEncryptedVotes.prototype.setElectionId
//
function univote_bfh_ch_election_getMixedEncryptedVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getMixedEncryptedVotes.prototype.getElectionId = univote_bfh_ch_election_getMixedEncryptedVotes_getElectionId;

function univote_bfh_ch_election_getMixedEncryptedVotes_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getMixedEncryptedVotes.prototype.setElectionId = univote_bfh_ch_election_getMixedEncryptedVotes_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getMixedEncryptedVotes
//
function univote_bfh_ch_election_getMixedEncryptedVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getMixedEncryptedVotes.prototype.serialize = univote_bfh_ch_election_getMixedEncryptedVotes_serialize;

function univote_bfh_ch_election_getMixedEncryptedVotes_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getMixedEncryptedVotes();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getPartiallyDecryptedVotes
//
function univote_bfh_ch_election_getPartiallyDecryptedVotes () {
    this.typeMarker = 'univote_bfh_ch_election_getPartiallyDecryptedVotes';
    this._electionId = '';
    this._tallierId = '';
}

//
// accessor is univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.setElectionId
//
function univote_bfh_ch_election_getPartiallyDecryptedVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.getElectionId = univote_bfh_ch_election_getPartiallyDecryptedVotes_getElectionId;

function univote_bfh_ch_election_getPartiallyDecryptedVotes_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.setElectionId = univote_bfh_ch_election_getPartiallyDecryptedVotes_setElectionId;
//
// accessor is univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.getTallierId
// element get for tallierId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for tallierId
// setter function is is univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.setTallierId
//
function univote_bfh_ch_election_getPartiallyDecryptedVotes_getTallierId() { return this._tallierId;}

univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.getTallierId = univote_bfh_ch_election_getPartiallyDecryptedVotes_getTallierId;

function univote_bfh_ch_election_getPartiallyDecryptedVotes_setTallierId(value) { this._tallierId = value;}

univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.setTallierId = univote_bfh_ch_election_getPartiallyDecryptedVotes_setTallierId;
//
// Serialize {http://univote.bfh.ch/election}getPartiallyDecryptedVotes
//
function univote_bfh_ch_election_getPartiallyDecryptedVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<tallierId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._tallierId);
     xml = xml + '</tallierId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getPartiallyDecryptedVotes.prototype.serialize = univote_bfh_ch_election_getPartiallyDecryptedVotes_serialize;

function univote_bfh_ch_election_getPartiallyDecryptedVotes_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getPartiallyDecryptedVotes();
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
    cxfjsutils.trace('processing tallierId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTallierId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getVoterCertificates
//
function univote_bfh_ch_election_getVoterCertificates () {
    this.typeMarker = 'univote_bfh_ch_election_getVoterCertificates';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getVoterCertificates.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getVoterCertificates.prototype.setElectionId
//
function univote_bfh_ch_election_getVoterCertificates_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getVoterCertificates.prototype.getElectionId = univote_bfh_ch_election_getVoterCertificates_getElectionId;

function univote_bfh_ch_election_getVoterCertificates_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getVoterCertificates.prototype.setElectionId = univote_bfh_ch_election_getVoterCertificates_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getVoterCertificates
//
function univote_bfh_ch_election_getVoterCertificates_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getVoterCertificates.prototype.serialize = univote_bfh_ch_election_getVoterCertificates_serialize;

function univote_bfh_ch_election_getVoterCertificates_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getVoterCertificates();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getEncryptedVotesMixedBy
//
function univote_bfh_ch_election_getEncryptedVotesMixedBy () {
    this.typeMarker = 'univote_bfh_ch_election_getEncryptedVotesMixedBy';
    this._electionId = '';
    this._mixerId = '';
}

//
// accessor is univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.setElectionId
//
function univote_bfh_ch_election_getEncryptedVotesMixedBy_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.getElectionId = univote_bfh_ch_election_getEncryptedVotesMixedBy_getElectionId;

function univote_bfh_ch_election_getEncryptedVotesMixedBy_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.setElectionId = univote_bfh_ch_election_getEncryptedVotesMixedBy_setElectionId;
//
// accessor is univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mixerId
// setter function is is univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.setMixerId
//
function univote_bfh_ch_election_getEncryptedVotesMixedBy_getMixerId() { return this._mixerId;}

univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.getMixerId = univote_bfh_ch_election_getEncryptedVotesMixedBy_getMixerId;

function univote_bfh_ch_election_getEncryptedVotesMixedBy_setMixerId(value) { this._mixerId = value;}

univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.setMixerId = univote_bfh_ch_election_getEncryptedVotesMixedBy_setMixerId;
//
// Serialize {http://univote.bfh.ch/election}getEncryptedVotesMixedBy
//
function univote_bfh_ch_election_getEncryptedVotesMixedBy_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<mixerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId);
     xml = xml + '</mixerId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getEncryptedVotesMixedBy.prototype.serialize = univote_bfh_ch_election_getEncryptedVotesMixedBy_serialize;

function univote_bfh_ch_election_getEncryptedVotesMixedBy_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getEncryptedVotesMixedBy();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getVoterCertificatesResponse
//
function univote_bfh_ch_election_getVoterCertificatesResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getVoterCertificatesResponse';
    this._voterCertificates = null;
}

//
// accessor is univote_bfh_ch_election_getVoterCertificatesResponse.prototype.getVoterCertificates
// element get for voterCertificates
// - element type is {http://univote.bfh.ch/common}voterCertificates
// - required element
//
// element set for voterCertificates
// setter function is is univote_bfh_ch_election_getVoterCertificatesResponse.prototype.setVoterCertificates
//
function univote_bfh_ch_election_getVoterCertificatesResponse_getVoterCertificates() { return this._voterCertificates;}

univote_bfh_ch_election_getVoterCertificatesResponse.prototype.getVoterCertificates = univote_bfh_ch_election_getVoterCertificatesResponse_getVoterCertificates;

function univote_bfh_ch_election_getVoterCertificatesResponse_setVoterCertificates(value) { this._voterCertificates = value;}

univote_bfh_ch_election_getVoterCertificatesResponse.prototype.setVoterCertificates = univote_bfh_ch_election_getVoterCertificatesResponse_setVoterCertificates;
//
// Serialize {http://univote.bfh.ch/election}getVoterCertificatesResponse
//
function univote_bfh_ch_election_getVoterCertificatesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._voterCertificates.serialize(cxfjsutils, 'voterCertificates', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getVoterCertificatesResponse.prototype.serialize = univote_bfh_ch_election_getVoterCertificatesResponse_serialize;

function univote_bfh_ch_election_getVoterCertificatesResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getVoterCertificatesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing voterCertificates');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_voterCertificates_deserialize(cxfjsutils, curElement);
    }
    newobject.setVoterCertificates(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getLatelyMixedVerificationKeysResponse
//
function univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse';
    this._mixedVerificationKey = [];
}

//
// accessor is univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse.prototype.getMixedVerificationKey
// element get for mixedVerificationKey
// - element type is {http://univote.bfh.ch/common}mixedVerificationKey
// - required element
// - array
//
// element set for mixedVerificationKey
// setter function is is univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse.prototype.setMixedVerificationKey
//
function univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_getMixedVerificationKey() { return this._mixedVerificationKey;}

univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse.prototype.getMixedVerificationKey = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_getMixedVerificationKey;

function univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_setMixedVerificationKey(value) { this._mixedVerificationKey = value;}

univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse.prototype.setMixedVerificationKey = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_setMixedVerificationKey;
//
// Serialize {http://univote.bfh.ch/election}getLatelyMixedVerificationKeysResponse
//
function univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._mixedVerificationKey != null) {
      for (var ax = 0;ax < this._mixedVerificationKey.length;ax ++) {
       if (this._mixedVerificationKey[ax] == null) {
        xml = xml + '<mixedVerificationKey/>';
       } else {
        xml = xml + this._mixedVerificationKey[ax].serialize(cxfjsutils, 'mixedVerificationKey', null);
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

univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse.prototype.serialize = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_serialize;

function univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mixedVerificationKey');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mixedVerificationKey')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = univote_bfh_ch_common_mixedVerificationKey_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mixedVerificationKey'));
     newobject.setMixedVerificationKey(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionDefinitionResponse
//
function univote_bfh_ch_election_getElectionDefinitionResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionDefinitionResponse';
    this._electionDefinition = null;
}

//
// accessor is univote_bfh_ch_election_getElectionDefinitionResponse.prototype.getElectionDefinition
// element get for electionDefinition
// - element type is {http://univote.bfh.ch/common}electionDefinition
// - required element
//
// element set for electionDefinition
// setter function is is univote_bfh_ch_election_getElectionDefinitionResponse.prototype.setElectionDefinition
//
function univote_bfh_ch_election_getElectionDefinitionResponse_getElectionDefinition() { return this._electionDefinition;}

univote_bfh_ch_election_getElectionDefinitionResponse.prototype.getElectionDefinition = univote_bfh_ch_election_getElectionDefinitionResponse_getElectionDefinition;

function univote_bfh_ch_election_getElectionDefinitionResponse_setElectionDefinition(value) { this._electionDefinition = value;}

univote_bfh_ch_election_getElectionDefinitionResponse.prototype.setElectionDefinition = univote_bfh_ch_election_getElectionDefinitionResponse_setElectionDefinition;
//
// Serialize {http://univote.bfh.ch/election}getElectionDefinitionResponse
//
function univote_bfh_ch_election_getElectionDefinitionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._electionDefinition.serialize(cxfjsutils, 'electionDefinition', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionDefinitionResponse.prototype.serialize = univote_bfh_ch_election_getElectionDefinitionResponse_serialize;

function univote_bfh_ch_election_getElectionDefinitionResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionDefinitionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing electionDefinition');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_electionDefinition_deserialize(cxfjsutils, curElement);
    }
    newobject.setElectionDefinition(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionGeneratorResponse
//
function univote_bfh_ch_election_getElectionGeneratorResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionGeneratorResponse';
    this._electionGenerator = null;
}

//
// accessor is univote_bfh_ch_election_getElectionGeneratorResponse.prototype.getElectionGenerator
// element get for electionGenerator
// - element type is {http://univote.bfh.ch/common}electionGenerator
// - required element
//
// element set for electionGenerator
// setter function is is univote_bfh_ch_election_getElectionGeneratorResponse.prototype.setElectionGenerator
//
function univote_bfh_ch_election_getElectionGeneratorResponse_getElectionGenerator() { return this._electionGenerator;}

univote_bfh_ch_election_getElectionGeneratorResponse.prototype.getElectionGenerator = univote_bfh_ch_election_getElectionGeneratorResponse_getElectionGenerator;

function univote_bfh_ch_election_getElectionGeneratorResponse_setElectionGenerator(value) { this._electionGenerator = value;}

univote_bfh_ch_election_getElectionGeneratorResponse.prototype.setElectionGenerator = univote_bfh_ch_election_getElectionGeneratorResponse_setElectionGenerator;
//
// Serialize {http://univote.bfh.ch/election}getElectionGeneratorResponse
//
function univote_bfh_ch_election_getElectionGeneratorResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._electionGenerator.serialize(cxfjsutils, 'electionGenerator', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionGeneratorResponse.prototype.serialize = univote_bfh_ch_election_getElectionGeneratorResponse_serialize;

function univote_bfh_ch_election_getElectionGeneratorResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionGeneratorResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing electionGenerator');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_electionGenerator_deserialize(cxfjsutils, curElement);
    }
    newobject.setElectionGenerator(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificates
//
function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates () {
    this.typeMarker = 'univote_bfh_ch_election_getLatelyRegisteredVoterCertificates';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getLatelyRegisteredVoterCertificates.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getLatelyRegisteredVoterCertificates.prototype.setElectionId
//
function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getLatelyRegisteredVoterCertificates.prototype.getElectionId = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_getElectionId;

function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getLatelyRegisteredVoterCertificates.prototype.setElectionId = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificates
//
function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getLatelyRegisteredVoterCertificates.prototype.serialize = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_serialize;

function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getLatelyRegisteredVoterCertificates();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getVerificationKeysLatelyMixedBy
//
function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy () {
    this.typeMarker = 'univote_bfh_ch_election_getVerificationKeysLatelyMixedBy';
    this._electionId = '';
    this._mixerId = '';
}

//
// accessor is univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.setElectionId
//
function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.getElectionId = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_getElectionId;

function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.setElectionId = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_setElectionId;
//
// accessor is univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.getMixerId
// element get for mixerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mixerId
// setter function is is univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.setMixerId
//
function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_getMixerId() { return this._mixerId;}

univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.getMixerId = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_getMixerId;

function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_setMixerId(value) { this._mixerId = value;}

univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.setMixerId = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_setMixerId;
//
// Serialize {http://univote.bfh.ch/election}getVerificationKeysLatelyMixedBy
//
function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<mixerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mixerId);
     xml = xml + '</mixerId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getVerificationKeysLatelyMixedBy.prototype.serialize = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_serialize;

function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getVerificationKeysLatelyMixedBy();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getBlindedGeneratorResponse
//
function univote_bfh_ch_election_getBlindedGeneratorResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getBlindedGeneratorResponse';
    this._blindedGenerator = null;
}

//
// accessor is univote_bfh_ch_election_getBlindedGeneratorResponse.prototype.getBlindedGenerator
// element get for blindedGenerator
// - element type is {http://univote.bfh.ch/common}blindedGenerator
// - required element
//
// element set for blindedGenerator
// setter function is is univote_bfh_ch_election_getBlindedGeneratorResponse.prototype.setBlindedGenerator
//
function univote_bfh_ch_election_getBlindedGeneratorResponse_getBlindedGenerator() { return this._blindedGenerator;}

univote_bfh_ch_election_getBlindedGeneratorResponse.prototype.getBlindedGenerator = univote_bfh_ch_election_getBlindedGeneratorResponse_getBlindedGenerator;

function univote_bfh_ch_election_getBlindedGeneratorResponse_setBlindedGenerator(value) { this._blindedGenerator = value;}

univote_bfh_ch_election_getBlindedGeneratorResponse.prototype.setBlindedGenerator = univote_bfh_ch_election_getBlindedGeneratorResponse_setBlindedGenerator;
//
// Serialize {http://univote.bfh.ch/election}getBlindedGeneratorResponse
//
function univote_bfh_ch_election_getBlindedGeneratorResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._blindedGenerator.serialize(cxfjsutils, 'blindedGenerator', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getBlindedGeneratorResponse.prototype.serialize = univote_bfh_ch_election_getBlindedGeneratorResponse_serialize;

function univote_bfh_ch_election_getBlindedGeneratorResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getBlindedGeneratorResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing blindedGenerator');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_blindedGenerator_deserialize(cxfjsutils, curElement);
    }
    newobject.setBlindedGenerator(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getEncryptionParameters
//
function univote_bfh_ch_election_getEncryptionParameters () {
    this.typeMarker = 'univote_bfh_ch_election_getEncryptionParameters';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getEncryptionParameters.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getEncryptionParameters.prototype.setElectionId
//
function univote_bfh_ch_election_getEncryptionParameters_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getEncryptionParameters.prototype.getElectionId = univote_bfh_ch_election_getEncryptionParameters_getElectionId;

function univote_bfh_ch_election_getEncryptionParameters_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getEncryptionParameters.prototype.setElectionId = univote_bfh_ch_election_getEncryptionParameters_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getEncryptionParameters
//
function univote_bfh_ch_election_getEncryptionParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getEncryptionParameters.prototype.serialize = univote_bfh_ch_election_getEncryptionParameters_serialize;

function univote_bfh_ch_election_getEncryptionParameters_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getEncryptionParameters();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionSystemInfoResponse
//
function univote_bfh_ch_election_getElectionSystemInfoResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionSystemInfoResponse';
    this._electionSystemInfo = null;
}

//
// accessor is univote_bfh_ch_election_getElectionSystemInfoResponse.prototype.getElectionSystemInfo
// element get for electionSystemInfo
// - element type is {http://univote.bfh.ch/common}electionSystemInfo
// - required element
//
// element set for electionSystemInfo
// setter function is is univote_bfh_ch_election_getElectionSystemInfoResponse.prototype.setElectionSystemInfo
//
function univote_bfh_ch_election_getElectionSystemInfoResponse_getElectionSystemInfo() { return this._electionSystemInfo;}

univote_bfh_ch_election_getElectionSystemInfoResponse.prototype.getElectionSystemInfo = univote_bfh_ch_election_getElectionSystemInfoResponse_getElectionSystemInfo;

function univote_bfh_ch_election_getElectionSystemInfoResponse_setElectionSystemInfo(value) { this._electionSystemInfo = value;}

univote_bfh_ch_election_getElectionSystemInfoResponse.prototype.setElectionSystemInfo = univote_bfh_ch_election_getElectionSystemInfoResponse_setElectionSystemInfo;
//
// Serialize {http://univote.bfh.ch/election}getElectionSystemInfoResponse
//
function univote_bfh_ch_election_getElectionSystemInfoResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._electionSystemInfo.serialize(cxfjsutils, 'electionSystemInfo', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionSystemInfoResponse.prototype.serialize = univote_bfh_ch_election_getElectionSystemInfoResponse_serialize;

function univote_bfh_ch_election_getElectionSystemInfoResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionSystemInfoResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing electionSystemInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_electionSystemInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setElectionSystemInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionDataResponse
//
function univote_bfh_ch_election_getElectionDataResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionDataResponse';
    this._electionData = null;
}

//
// accessor is univote_bfh_ch_election_getElectionDataResponse.prototype.getElectionData
// element get for electionData
// - element type is {http://univote.bfh.ch/common}electionData
// - required element
//
// element set for electionData
// setter function is is univote_bfh_ch_election_getElectionDataResponse.prototype.setElectionData
//
function univote_bfh_ch_election_getElectionDataResponse_getElectionData() { return this._electionData;}

univote_bfh_ch_election_getElectionDataResponse.prototype.getElectionData = univote_bfh_ch_election_getElectionDataResponse_getElectionData;

function univote_bfh_ch_election_getElectionDataResponse_setElectionData(value) { this._electionData = value;}

univote_bfh_ch_election_getElectionDataResponse.prototype.setElectionData = univote_bfh_ch_election_getElectionDataResponse_setElectionData;
//
// Serialize {http://univote.bfh.ch/election}getElectionDataResponse
//
function univote_bfh_ch_election_getElectionDataResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._electionData.serialize(cxfjsutils, 'electionData', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionDataResponse.prototype.serialize = univote_bfh_ch_election_getElectionDataResponse_serialize;

function univote_bfh_ch_election_getElectionDataResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionDataResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing electionData');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_electionData_deserialize(cxfjsutils, curElement);
    }
    newobject.setElectionData(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getVerificationKeysLatelyMixedByResponse
//
function univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse';
    this._mixedVerificationKey = [];
}

//
// accessor is univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse.prototype.getMixedVerificationKey
// element get for mixedVerificationKey
// - element type is {http://univote.bfh.ch/common}mixedVerificationKey
// - required element
// - array
//
// element set for mixedVerificationKey
// setter function is is univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse.prototype.setMixedVerificationKey
//
function univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_getMixedVerificationKey() { return this._mixedVerificationKey;}

univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse.prototype.getMixedVerificationKey = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_getMixedVerificationKey;

function univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_setMixedVerificationKey(value) { this._mixedVerificationKey = value;}

univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse.prototype.setMixedVerificationKey = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_setMixedVerificationKey;
//
// Serialize {http://univote.bfh.ch/election}getVerificationKeysLatelyMixedByResponse
//
function univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._mixedVerificationKey != null) {
      for (var ax = 0;ax < this._mixedVerificationKey.length;ax ++) {
       if (this._mixedVerificationKey[ax] == null) {
        xml = xml + '<mixedVerificationKey/>';
       } else {
        xml = xml + this._mixedVerificationKey[ax].serialize(cxfjsutils, 'mixedVerificationKey', null);
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

univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse.prototype.serialize = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_serialize;

function univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mixedVerificationKey');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mixedVerificationKey')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = univote_bfh_ch_common_mixedVerificationKey_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mixedVerificationKey'));
     newobject.setMixedVerificationKey(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getPartiallyDecryptedVotesResponse
//
function univote_bfh_ch_election_getPartiallyDecryptedVotesResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getPartiallyDecryptedVotesResponse';
    this._partiallyDecryptedVotes = null;
}

//
// accessor is univote_bfh_ch_election_getPartiallyDecryptedVotesResponse.prototype.getPartiallyDecryptedVotes
// element get for partiallyDecryptedVotes
// - element type is {http://univote.bfh.ch/common}partiallyDecryptedVotes
// - required element
//
// element set for partiallyDecryptedVotes
// setter function is is univote_bfh_ch_election_getPartiallyDecryptedVotesResponse.prototype.setPartiallyDecryptedVotes
//
function univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_getPartiallyDecryptedVotes() { return this._partiallyDecryptedVotes;}

univote_bfh_ch_election_getPartiallyDecryptedVotesResponse.prototype.getPartiallyDecryptedVotes = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_getPartiallyDecryptedVotes;

function univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_setPartiallyDecryptedVotes(value) { this._partiallyDecryptedVotes = value;}

univote_bfh_ch_election_getPartiallyDecryptedVotesResponse.prototype.setPartiallyDecryptedVotes = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_setPartiallyDecryptedVotes;
//
// Serialize {http://univote.bfh.ch/election}getPartiallyDecryptedVotesResponse
//
function univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._partiallyDecryptedVotes.serialize(cxfjsutils, 'partiallyDecryptedVotes', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getPartiallyDecryptedVotesResponse.prototype.serialize = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_serialize;

function univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getPartiallyDecryptedVotesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing partiallyDecryptedVotes');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_partiallyDecryptedVotes_deserialize(cxfjsutils, curElement);
    }
    newobject.setPartiallyDecryptedVotes(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionData
//
function univote_bfh_ch_election_getElectionData () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionData';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getElectionData.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getElectionData.prototype.setElectionId
//
function univote_bfh_ch_election_getElectionData_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getElectionData.prototype.getElectionId = univote_bfh_ch_election_getElectionData_getElectionId;

function univote_bfh_ch_election_getElectionData_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getElectionData.prototype.setElectionId = univote_bfh_ch_election_getElectionData_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getElectionData
//
function univote_bfh_ch_election_getElectionData_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionData.prototype.serialize = univote_bfh_ch_election_getElectionData_serialize;

function univote_bfh_ch_election_getElectionData_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionData();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getMixedEncryptedVotesResponse
//
function univote_bfh_ch_election_getMixedEncryptedVotesResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getMixedEncryptedVotesResponse';
    this._mixedEncryptedVotes = null;
}

//
// accessor is univote_bfh_ch_election_getMixedEncryptedVotesResponse.prototype.getMixedEncryptedVotes
// element get for mixedEncryptedVotes
// - element type is {http://univote.bfh.ch/common}mixedEncryptedVotes
// - required element
//
// element set for mixedEncryptedVotes
// setter function is is univote_bfh_ch_election_getMixedEncryptedVotesResponse.prototype.setMixedEncryptedVotes
//
function univote_bfh_ch_election_getMixedEncryptedVotesResponse_getMixedEncryptedVotes() { return this._mixedEncryptedVotes;}

univote_bfh_ch_election_getMixedEncryptedVotesResponse.prototype.getMixedEncryptedVotes = univote_bfh_ch_election_getMixedEncryptedVotesResponse_getMixedEncryptedVotes;

function univote_bfh_ch_election_getMixedEncryptedVotesResponse_setMixedEncryptedVotes(value) { this._mixedEncryptedVotes = value;}

univote_bfh_ch_election_getMixedEncryptedVotesResponse.prototype.setMixedEncryptedVotes = univote_bfh_ch_election_getMixedEncryptedVotesResponse_setMixedEncryptedVotes;
//
// Serialize {http://univote.bfh.ch/election}getMixedEncryptedVotesResponse
//
function univote_bfh_ch_election_getMixedEncryptedVotesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._mixedEncryptedVotes.serialize(cxfjsutils, 'mixedEncryptedVotes', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getMixedEncryptedVotesResponse.prototype.serialize = univote_bfh_ch_election_getMixedEncryptedVotesResponse_serialize;

function univote_bfh_ch_election_getMixedEncryptedVotesResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getMixedEncryptedVotesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mixedEncryptedVotes');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_mixedEncryptedVotes_deserialize(cxfjsutils, curElement);
    }
    newobject.setMixedEncryptedVotes(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getEncryptionKeyShareResponse
//
function univote_bfh_ch_election_getEncryptionKeyShareResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getEncryptionKeyShareResponse';
    this._encryptionKeyShare = null;
}

//
// accessor is univote_bfh_ch_election_getEncryptionKeyShareResponse.prototype.getEncryptionKeyShare
// element get for encryptionKeyShare
// - element type is {http://univote.bfh.ch/common}encryptionKeyShare
// - required element
//
// element set for encryptionKeyShare
// setter function is is univote_bfh_ch_election_getEncryptionKeyShareResponse.prototype.setEncryptionKeyShare
//
function univote_bfh_ch_election_getEncryptionKeyShareResponse_getEncryptionKeyShare() { return this._encryptionKeyShare;}

univote_bfh_ch_election_getEncryptionKeyShareResponse.prototype.getEncryptionKeyShare = univote_bfh_ch_election_getEncryptionKeyShareResponse_getEncryptionKeyShare;

function univote_bfh_ch_election_getEncryptionKeyShareResponse_setEncryptionKeyShare(value) { this._encryptionKeyShare = value;}

univote_bfh_ch_election_getEncryptionKeyShareResponse.prototype.setEncryptionKeyShare = univote_bfh_ch_election_getEncryptionKeyShareResponse_setEncryptionKeyShare;
//
// Serialize {http://univote.bfh.ch/election}getEncryptionKeyShareResponse
//
function univote_bfh_ch_election_getEncryptionKeyShareResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._encryptionKeyShare.serialize(cxfjsutils, 'encryptionKeyShare', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getEncryptionKeyShareResponse.prototype.serialize = univote_bfh_ch_election_getEncryptionKeyShareResponse_serialize;

function univote_bfh_ch_election_getEncryptionKeyShareResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getEncryptionKeyShareResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing encryptionKeyShare');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_encryptionKeyShare_deserialize(cxfjsutils, curElement);
    }
    newobject.setEncryptionKeyShare(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getSignatureParametersResponse
//
function univote_bfh_ch_election_getSignatureParametersResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getSignatureParametersResponse';
    this._signatureParameters = null;
}

//
// accessor is univote_bfh_ch_election_getSignatureParametersResponse.prototype.getSignatureParameters
// element get for signatureParameters
// - element type is {http://univote.bfh.ch/common}signatureParameters
// - required element
//
// element set for signatureParameters
// setter function is is univote_bfh_ch_election_getSignatureParametersResponse.prototype.setSignatureParameters
//
function univote_bfh_ch_election_getSignatureParametersResponse_getSignatureParameters() { return this._signatureParameters;}

univote_bfh_ch_election_getSignatureParametersResponse.prototype.getSignatureParameters = univote_bfh_ch_election_getSignatureParametersResponse_getSignatureParameters;

function univote_bfh_ch_election_getSignatureParametersResponse_setSignatureParameters(value) { this._signatureParameters = value;}

univote_bfh_ch_election_getSignatureParametersResponse.prototype.setSignatureParameters = univote_bfh_ch_election_getSignatureParametersResponse_setSignatureParameters;
//
// Serialize {http://univote.bfh.ch/election}getSignatureParametersResponse
//
function univote_bfh_ch_election_getSignatureParametersResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._signatureParameters.serialize(cxfjsutils, 'signatureParameters', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getSignatureParametersResponse.prototype.serialize = univote_bfh_ch_election_getSignatureParametersResponse_serialize;

function univote_bfh_ch_election_getSignatureParametersResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getSignatureParametersResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing signatureParameters');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_signatureParameters_deserialize(cxfjsutils, curElement);
    }
    newobject.setSignatureParameters(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionGenerator
//
function univote_bfh_ch_election_getElectionGenerator () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionGenerator';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getElectionGenerator.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getElectionGenerator.prototype.setElectionId
//
function univote_bfh_ch_election_getElectionGenerator_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getElectionGenerator.prototype.getElectionId = univote_bfh_ch_election_getElectionGenerator_getElectionId;

function univote_bfh_ch_election_getElectionGenerator_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getElectionGenerator.prototype.setElectionId = univote_bfh_ch_election_getElectionGenerator_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getElectionGenerator
//
function univote_bfh_ch_election_getElectionGenerator_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionGenerator.prototype.serialize = univote_bfh_ch_election_getElectionGenerator_serialize;

function univote_bfh_ch_election_getElectionGenerator_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionGenerator();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getRootCertificateResponse
//
function univote_bfh_ch_election_getRootCertificateResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getRootCertificateResponse';
    this._certificate = null;
}

//
// accessor is univote_bfh_ch_election_getRootCertificateResponse.prototype.getCertificate
// element get for certificate
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for certificate
// setter function is is univote_bfh_ch_election_getRootCertificateResponse.prototype.setCertificate
//
function univote_bfh_ch_election_getRootCertificateResponse_getCertificate() { return this._certificate;}

univote_bfh_ch_election_getRootCertificateResponse.prototype.getCertificate = univote_bfh_ch_election_getRootCertificateResponse_getCertificate;

function univote_bfh_ch_election_getRootCertificateResponse_setCertificate(value) { this._certificate = value;}

univote_bfh_ch_election_getRootCertificateResponse.prototype.setCertificate = univote_bfh_ch_election_getRootCertificateResponse_setCertificate;
//
// Serialize {http://univote.bfh.ch/election}getRootCertificateResponse
//
function univote_bfh_ch_election_getRootCertificateResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._certificate.serialize(cxfjsutils, 'certificate', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getRootCertificateResponse.prototype.serialize = univote_bfh_ch_election_getRootCertificateResponse_serialize;

function univote_bfh_ch_election_getRootCertificateResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getRootCertificateResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getEncryptionParametersResponse
//
function univote_bfh_ch_election_getEncryptionParametersResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getEncryptionParametersResponse';
    this._encryptionParameters = null;
}

//
// accessor is univote_bfh_ch_election_getEncryptionParametersResponse.prototype.getEncryptionParameters
// element get for encryptionParameters
// - element type is {http://univote.bfh.ch/common}encryptionParameters
// - required element
//
// element set for encryptionParameters
// setter function is is univote_bfh_ch_election_getEncryptionParametersResponse.prototype.setEncryptionParameters
//
function univote_bfh_ch_election_getEncryptionParametersResponse_getEncryptionParameters() { return this._encryptionParameters;}

univote_bfh_ch_election_getEncryptionParametersResponse.prototype.getEncryptionParameters = univote_bfh_ch_election_getEncryptionParametersResponse_getEncryptionParameters;

function univote_bfh_ch_election_getEncryptionParametersResponse_setEncryptionParameters(value) { this._encryptionParameters = value;}

univote_bfh_ch_election_getEncryptionParametersResponse.prototype.setEncryptionParameters = univote_bfh_ch_election_getEncryptionParametersResponse_setEncryptionParameters;
//
// Serialize {http://univote.bfh.ch/election}getEncryptionParametersResponse
//
function univote_bfh_ch_election_getEncryptionParametersResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._encryptionParameters.serialize(cxfjsutils, 'encryptionParameters', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getEncryptionParametersResponse.prototype.serialize = univote_bfh_ch_election_getEncryptionParametersResponse_serialize;

function univote_bfh_ch_election_getEncryptionParametersResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getEncryptionParametersResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing encryptionParameters');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_encryptionParameters_deserialize(cxfjsutils, curElement);
    }
    newobject.setEncryptionParameters(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getRootCertificate
//
function univote_bfh_ch_election_getRootCertificate () {
    this.typeMarker = 'univote_bfh_ch_election_getRootCertificate';
}

//
// Serialize {http://univote.bfh.ch/election}getRootCertificate
//
function univote_bfh_ch_election_getRootCertificate_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getRootCertificate.prototype.serialize = univote_bfh_ch_election_getRootCertificate_serialize;

function univote_bfh_ch_election_getRootCertificate_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getRootCertificate();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectoralRoll
//
function univote_bfh_ch_election_getElectoralRoll () {
    this.typeMarker = 'univote_bfh_ch_election_getElectoralRoll';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getElectoralRoll.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getElectoralRoll.prototype.setElectionId
//
function univote_bfh_ch_election_getElectoralRoll_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getElectoralRoll.prototype.getElectionId = univote_bfh_ch_election_getElectoralRoll_getElectionId;

function univote_bfh_ch_election_getElectoralRoll_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getElectoralRoll.prototype.setElectionId = univote_bfh_ch_election_getElectoralRoll_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getElectoralRoll
//
function univote_bfh_ch_election_getElectoralRoll_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectoralRoll.prototype.serialize = univote_bfh_ch_election_getElectoralRoll_serialize;

function univote_bfh_ch_election_getElectoralRoll_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectoralRoll();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getBallot
//
function univote_bfh_ch_election_getBallot () {
    this.typeMarker = 'univote_bfh_ch_election_getBallot';
    this._electionId = '';
    this._verificationKey = '';
}

//
// accessor is univote_bfh_ch_election_getBallot.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getBallot.prototype.setElectionId
//
function univote_bfh_ch_election_getBallot_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getBallot.prototype.getElectionId = univote_bfh_ch_election_getBallot_getElectionId;

function univote_bfh_ch_election_getBallot_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getBallot.prototype.setElectionId = univote_bfh_ch_election_getBallot_setElectionId;
//
// accessor is univote_bfh_ch_election_getBallot.prototype.getVerificationKey
// element get for verificationKey
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for verificationKey
// setter function is is univote_bfh_ch_election_getBallot.prototype.setVerificationKey
//
function univote_bfh_ch_election_getBallot_getVerificationKey() { return this._verificationKey;}

univote_bfh_ch_election_getBallot.prototype.getVerificationKey = univote_bfh_ch_election_getBallot_getVerificationKey;

function univote_bfh_ch_election_getBallot_setVerificationKey(value) { this._verificationKey = value;}

univote_bfh_ch_election_getBallot.prototype.setVerificationKey = univote_bfh_ch_election_getBallot_setVerificationKey;
//
// Serialize {http://univote.bfh.ch/election}getBallot
//
function univote_bfh_ch_election_getBallot_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getBallot.prototype.serialize = univote_bfh_ch_election_getBallot_serialize;

function univote_bfh_ch_election_getBallot_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getBallot();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getEncryptionKey
//
function univote_bfh_ch_election_getEncryptionKey () {
    this.typeMarker = 'univote_bfh_ch_election_getEncryptionKey';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getEncryptionKey.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getEncryptionKey.prototype.setElectionId
//
function univote_bfh_ch_election_getEncryptionKey_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getEncryptionKey.prototype.getElectionId = univote_bfh_ch_election_getEncryptionKey_getElectionId;

function univote_bfh_ch_election_getEncryptionKey_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getEncryptionKey.prototype.setElectionId = univote_bfh_ch_election_getEncryptionKey_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getEncryptionKey
//
function univote_bfh_ch_election_getEncryptionKey_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getEncryptionKey.prototype.serialize = univote_bfh_ch_election_getEncryptionKey_serialize;

function univote_bfh_ch_election_getEncryptionKey_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getEncryptionKey();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getPlaintextVotesResponse
//
function univote_bfh_ch_election_getPlaintextVotesResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getPlaintextVotesResponse';
    this._plaintextVotes = null;
}

//
// accessor is univote_bfh_ch_election_getPlaintextVotesResponse.prototype.getPlaintextVotes
// element get for plaintextVotes
// - element type is {http://univote.bfh.ch/common}plaintextVotes
// - required element
//
// element set for plaintextVotes
// setter function is is univote_bfh_ch_election_getPlaintextVotesResponse.prototype.setPlaintextVotes
//
function univote_bfh_ch_election_getPlaintextVotesResponse_getPlaintextVotes() { return this._plaintextVotes;}

univote_bfh_ch_election_getPlaintextVotesResponse.prototype.getPlaintextVotes = univote_bfh_ch_election_getPlaintextVotesResponse_getPlaintextVotes;

function univote_bfh_ch_election_getPlaintextVotesResponse_setPlaintextVotes(value) { this._plaintextVotes = value;}

univote_bfh_ch_election_getPlaintextVotesResponse.prototype.setPlaintextVotes = univote_bfh_ch_election_getPlaintextVotesResponse_setPlaintextVotes;
//
// Serialize {http://univote.bfh.ch/election}getPlaintextVotesResponse
//
function univote_bfh_ch_election_getPlaintextVotesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._plaintextVotes.serialize(cxfjsutils, 'plaintextVotes', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getPlaintextVotesResponse.prototype.serialize = univote_bfh_ch_election_getPlaintextVotesResponse_serialize;

function univote_bfh_ch_election_getPlaintextVotesResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getPlaintextVotesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing plaintextVotes');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_plaintextVotes_deserialize(cxfjsutils, curElement);
    }
    newobject.setPlaintextVotes(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getLatelyMixedVerificationKeys
//
function univote_bfh_ch_election_getLatelyMixedVerificationKeys () {
    this.typeMarker = 'univote_bfh_ch_election_getLatelyMixedVerificationKeys';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getLatelyMixedVerificationKeys.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getLatelyMixedVerificationKeys.prototype.setElectionId
//
function univote_bfh_ch_election_getLatelyMixedVerificationKeys_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getLatelyMixedVerificationKeys.prototype.getElectionId = univote_bfh_ch_election_getLatelyMixedVerificationKeys_getElectionId;

function univote_bfh_ch_election_getLatelyMixedVerificationKeys_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getLatelyMixedVerificationKeys.prototype.setElectionId = univote_bfh_ch_election_getLatelyMixedVerificationKeys_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getLatelyMixedVerificationKeys
//
function univote_bfh_ch_election_getLatelyMixedVerificationKeys_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getLatelyMixedVerificationKeys.prototype.serialize = univote_bfh_ch_election_getLatelyMixedVerificationKeys_serialize;

function univote_bfh_ch_election_getLatelyMixedVerificationKeys_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getLatelyMixedVerificationKeys();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getBallotsResponse
//
function univote_bfh_ch_election_getBallotsResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getBallotsResponse';
    this._ballots = null;
}

//
// accessor is univote_bfh_ch_election_getBallotsResponse.prototype.getBallots
// element get for ballots
// - element type is {http://univote.bfh.ch/common}ballots
// - required element
//
// element set for ballots
// setter function is is univote_bfh_ch_election_getBallotsResponse.prototype.setBallots
//
function univote_bfh_ch_election_getBallotsResponse_getBallots() { return this._ballots;}

univote_bfh_ch_election_getBallotsResponse.prototype.getBallots = univote_bfh_ch_election_getBallotsResponse_getBallots;

function univote_bfh_ch_election_getBallotsResponse_setBallots(value) { this._ballots = value;}

univote_bfh_ch_election_getBallotsResponse.prototype.setBallots = univote_bfh_ch_election_getBallotsResponse_setBallots;
//
// Serialize {http://univote.bfh.ch/election}getBallotsResponse
//
function univote_bfh_ch_election_getBallotsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._ballots.serialize(cxfjsutils, 'ballots', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getBallotsResponse.prototype.serialize = univote_bfh_ch_election_getBallotsResponse_serialize;

function univote_bfh_ch_election_getBallotsResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getBallotsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ballots');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_ballots_deserialize(cxfjsutils, curElement);
    }
    newobject.setBallots(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getSignatureParameters
//
function univote_bfh_ch_election_getSignatureParameters () {
    this.typeMarker = 'univote_bfh_ch_election_getSignatureParameters';
}

//
// Serialize {http://univote.bfh.ch/election}getSignatureParameters
//
function univote_bfh_ch_election_getSignatureParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getSignatureParameters.prototype.serialize = univote_bfh_ch_election_getSignatureParameters_serialize;

function univote_bfh_ch_election_getSignatureParameters_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getSignatureParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getPlaintextVotes
//
function univote_bfh_ch_election_getPlaintextVotes () {
    this.typeMarker = 'univote_bfh_ch_election_getPlaintextVotes';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getPlaintextVotes.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getPlaintextVotes.prototype.setElectionId
//
function univote_bfh_ch_election_getPlaintextVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getPlaintextVotes.prototype.getElectionId = univote_bfh_ch_election_getPlaintextVotes_getElectionId;

function univote_bfh_ch_election_getPlaintextVotes_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getPlaintextVotes.prototype.setElectionId = univote_bfh_ch_election_getPlaintextVotes_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getPlaintextVotes
//
function univote_bfh_ch_election_getPlaintextVotes_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getPlaintextVotes.prototype.serialize = univote_bfh_ch_election_getPlaintextVotes_serialize;

function univote_bfh_ch_election_getPlaintextVotes_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getPlaintextVotes();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getEncryptedVotesMixedByResponse
//
function univote_bfh_ch_election_getEncryptedVotesMixedByResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getEncryptedVotesMixedByResponse';
    this._mixedEncryptedVotes = null;
}

//
// accessor is univote_bfh_ch_election_getEncryptedVotesMixedByResponse.prototype.getMixedEncryptedVotes
// element get for mixedEncryptedVotes
// - element type is {http://univote.bfh.ch/common}mixedEncryptedVotes
// - required element
//
// element set for mixedEncryptedVotes
// setter function is is univote_bfh_ch_election_getEncryptedVotesMixedByResponse.prototype.setMixedEncryptedVotes
//
function univote_bfh_ch_election_getEncryptedVotesMixedByResponse_getMixedEncryptedVotes() { return this._mixedEncryptedVotes;}

univote_bfh_ch_election_getEncryptedVotesMixedByResponse.prototype.getMixedEncryptedVotes = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_getMixedEncryptedVotes;

function univote_bfh_ch_election_getEncryptedVotesMixedByResponse_setMixedEncryptedVotes(value) { this._mixedEncryptedVotes = value;}

univote_bfh_ch_election_getEncryptedVotesMixedByResponse.prototype.setMixedEncryptedVotes = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_setMixedEncryptedVotes;
//
// Serialize {http://univote.bfh.ch/election}getEncryptedVotesMixedByResponse
//
function univote_bfh_ch_election_getEncryptedVotesMixedByResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._mixedEncryptedVotes.serialize(cxfjsutils, 'mixedEncryptedVotes', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getEncryptedVotesMixedByResponse.prototype.serialize = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_serialize;

function univote_bfh_ch_election_getEncryptedVotesMixedByResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getEncryptedVotesMixedByResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mixedEncryptedVotes');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_mixedEncryptedVotes_deserialize(cxfjsutils, curElement);
    }
    newobject.setMixedEncryptedVotes(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectoralRollResponse
//
function univote_bfh_ch_election_getElectoralRollResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getElectoralRollResponse';
    this._electoralRoll = null;
}

//
// accessor is univote_bfh_ch_election_getElectoralRollResponse.prototype.getElectoralRoll
// element get for electoralRoll
// - element type is {http://univote.bfh.ch/common}electoralRoll
// - required element
//
// element set for electoralRoll
// setter function is is univote_bfh_ch_election_getElectoralRollResponse.prototype.setElectoralRoll
//
function univote_bfh_ch_election_getElectoralRollResponse_getElectoralRoll() { return this._electoralRoll;}

univote_bfh_ch_election_getElectoralRollResponse.prototype.getElectoralRoll = univote_bfh_ch_election_getElectoralRollResponse_getElectoralRoll;

function univote_bfh_ch_election_getElectoralRollResponse_setElectoralRoll(value) { this._electoralRoll = value;}

univote_bfh_ch_election_getElectoralRollResponse.prototype.setElectoralRoll = univote_bfh_ch_election_getElectoralRollResponse_setElectoralRoll;
//
// Serialize {http://univote.bfh.ch/election}getElectoralRollResponse
//
function univote_bfh_ch_election_getElectoralRollResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._electoralRoll.serialize(cxfjsutils, 'electoralRoll', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectoralRollResponse.prototype.serialize = univote_bfh_ch_election_getElectoralRollResponse_serialize;

function univote_bfh_ch_election_getElectoralRollResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectoralRollResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing electoralRoll');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_electoralRoll_deserialize(cxfjsutils, curElement);
    }
    newobject.setElectoralRoll(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionOptions
//
function univote_bfh_ch_election_getElectionOptions () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionOptions';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getElectionOptions.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getElectionOptions.prototype.setElectionId
//
function univote_bfh_ch_election_getElectionOptions_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getElectionOptions.prototype.getElectionId = univote_bfh_ch_election_getElectionOptions_getElectionId;

function univote_bfh_ch_election_getElectionOptions_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getElectionOptions.prototype.setElectionId = univote_bfh_ch_election_getElectionOptions_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getElectionOptions
//
function univote_bfh_ch_election_getElectionOptions_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionOptions.prototype.serialize = univote_bfh_ch_election_getElectionOptions_serialize;

function univote_bfh_ch_election_getElectionOptions_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionOptions();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionSystemInfo
//
function univote_bfh_ch_election_getElectionSystemInfo () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionSystemInfo';
}

//
// Serialize {http://univote.bfh.ch/election}getElectionSystemInfo
//
function univote_bfh_ch_election_getElectionSystemInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionSystemInfo.prototype.serialize = univote_bfh_ch_election_getElectionSystemInfo_serialize;

function univote_bfh_ch_election_getElectionSystemInfo_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionSystemInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getElectionDefinition
//
function univote_bfh_ch_election_getElectionDefinition () {
    this.typeMarker = 'univote_bfh_ch_election_getElectionDefinition';
    this._electionId = '';
}

//
// accessor is univote_bfh_ch_election_getElectionDefinition.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_election_getElectionDefinition.prototype.setElectionId
//
function univote_bfh_ch_election_getElectionDefinition_getElectionId() { return this._electionId;}

univote_bfh_ch_election_getElectionDefinition.prototype.getElectionId = univote_bfh_ch_election_getElectionDefinition_getElectionId;

function univote_bfh_ch_election_getElectionDefinition_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_election_getElectionDefinition.prototype.setElectionId = univote_bfh_ch_election_getElectionDefinition_setElectionId;
//
// Serialize {http://univote.bfh.ch/election}getElectionDefinition
//
function univote_bfh_ch_election_getElectionDefinition_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getElectionDefinition.prototype.serialize = univote_bfh_ch_election_getElectionDefinition_serialize;

function univote_bfh_ch_election_getElectionDefinition_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getElectionDefinition();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/election}getMixedVerificationKeysResponse
//
function univote_bfh_ch_election_getMixedVerificationKeysResponse () {
    this.typeMarker = 'univote_bfh_ch_election_getMixedVerificationKeysResponse';
    this._mixedVerificationKeys = null;
}

//
// accessor is univote_bfh_ch_election_getMixedVerificationKeysResponse.prototype.getMixedVerificationKeys
// element get for mixedVerificationKeys
// - element type is {http://univote.bfh.ch/common}mixedVerificationKeys
// - required element
//
// element set for mixedVerificationKeys
// setter function is is univote_bfh_ch_election_getMixedVerificationKeysResponse.prototype.setMixedVerificationKeys
//
function univote_bfh_ch_election_getMixedVerificationKeysResponse_getMixedVerificationKeys() { return this._mixedVerificationKeys;}

univote_bfh_ch_election_getMixedVerificationKeysResponse.prototype.getMixedVerificationKeys = univote_bfh_ch_election_getMixedVerificationKeysResponse_getMixedVerificationKeys;

function univote_bfh_ch_election_getMixedVerificationKeysResponse_setMixedVerificationKeys(value) { this._mixedVerificationKeys = value;}

univote_bfh_ch_election_getMixedVerificationKeysResponse.prototype.setMixedVerificationKeys = univote_bfh_ch_election_getMixedVerificationKeysResponse_setMixedVerificationKeys;
//
// Serialize {http://univote.bfh.ch/election}getMixedVerificationKeysResponse
//
function univote_bfh_ch_election_getMixedVerificationKeysResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._mixedVerificationKeys.serialize(cxfjsutils, 'mixedVerificationKeys', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_election_getMixedVerificationKeysResponse.prototype.serialize = univote_bfh_ch_election_getMixedVerificationKeysResponse_serialize;

function univote_bfh_ch_election_getMixedVerificationKeysResponse_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_election_getMixedVerificationKeysResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mixedVerificationKeys');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = univote_bfh_ch_common_mixedVerificationKeys_deserialize(cxfjsutils, curElement);
    }
    newobject.setMixedVerificationKeys(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Definitions for schema: http://univote.bfh.ch/common
//  file:/C:/Users/hss3/Desktop/apache-cxf-2.7.1/bin/Common.xsd
//
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
function univote_bfh_ch_common_voterCertificates_getElectionId() { return this._electionId;}

univote_bfh_ch_common_voterCertificates.prototype.getElectionId = univote_bfh_ch_common_voterCertificates_getElectionId;

function univote_bfh_ch_common_voterCertificates_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_voterCertificates_getCertificate() { return this._certificate;}

univote_bfh_ch_common_voterCertificates.prototype.getCertificate = univote_bfh_ch_common_voterCertificates_getCertificate;

function univote_bfh_ch_common_voterCertificates_setCertificate(value) { this._certificate = value;}

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
function univote_bfh_ch_common_voterCertificates_getSignature() { return this._signature;}

univote_bfh_ch_common_voterCertificates.prototype.getSignature = univote_bfh_ch_common_voterCertificates_getSignature;

function univote_bfh_ch_common_voterCertificates_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
// Simple type (enumeration) {http://univote.bfh.ch/common}candidateStatus
//
// - PREVIOUS
// - NEW
//
// Constructor for XML Schema item {http://univote.bfh.ch/common}electionData
//
function univote_bfh_ch_common_electionData () {
    this.typeMarker = 'univote_bfh_ch_common_electionData';
    this._electionId = '';
    this._title = '';
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
function univote_bfh_ch_common_electionData_getElectionId() { return this._electionId;}

univote_bfh_ch_common_electionData.prototype.getElectionId = univote_bfh_ch_common_electionData_getElectionId;

function univote_bfh_ch_common_electionData_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_common_electionData.prototype.setElectionId = univote_bfh_ch_common_electionData_setElectionId;
//
// accessor is univote_bfh_ch_common_electionData.prototype.getTitle
// element get for title
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for title
// setter function is is univote_bfh_ch_common_electionData.prototype.setTitle
//
function univote_bfh_ch_common_electionData_getTitle() { return this._title;}

univote_bfh_ch_common_electionData.prototype.getTitle = univote_bfh_ch_common_electionData_getTitle;

function univote_bfh_ch_common_electionData_setTitle(value) { this._title = value;}

univote_bfh_ch_common_electionData.prototype.setTitle = univote_bfh_ch_common_electionData_setTitle;
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
function univote_bfh_ch_common_electionData_getChoice() { return this._choice;}

univote_bfh_ch_common_electionData.prototype.getChoice = univote_bfh_ch_common_electionData_getChoice;

function univote_bfh_ch_common_electionData_setChoice(value) { this._choice = value;}

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
function univote_bfh_ch_common_electionData_getRule() { return this._rule;}

univote_bfh_ch_common_electionData.prototype.getRule = univote_bfh_ch_common_electionData_getRule;

function univote_bfh_ch_common_electionData_setRule(value) { this._rule = value;}

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
function univote_bfh_ch_common_electionData_getPrime() { return this._prime;}

univote_bfh_ch_common_electionData.prototype.getPrime = univote_bfh_ch_common_electionData_getPrime;

function univote_bfh_ch_common_electionData_setPrime(value) { this._prime = value;}

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
function univote_bfh_ch_common_electionData_getGroupOrder() { return this._groupOrder;}

univote_bfh_ch_common_electionData.prototype.getGroupOrder = univote_bfh_ch_common_electionData_getGroupOrder;

function univote_bfh_ch_common_electionData_setGroupOrder(value) { this._groupOrder = value;}

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
function univote_bfh_ch_common_electionData_getGenerator() { return this._generator;}

univote_bfh_ch_common_electionData.prototype.getGenerator = univote_bfh_ch_common_electionData_getGenerator;

function univote_bfh_ch_common_electionData_setGenerator(value) { this._generator = value;}

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
function univote_bfh_ch_common_electionData_getEncryptionKey() { return this._encryptionKey;}

univote_bfh_ch_common_electionData.prototype.getEncryptionKey = univote_bfh_ch_common_electionData_getEncryptionKey;

function univote_bfh_ch_common_electionData_setEncryptionKey(value) { this._encryptionKey = value;}

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
function univote_bfh_ch_common_electionData_getElectionGenerator() { return this._electionGenerator;}

univote_bfh_ch_common_electionData.prototype.getElectionGenerator = univote_bfh_ch_common_electionData_getElectionGenerator;

function univote_bfh_ch_common_electionData_setElectionGenerator(value) { this._electionGenerator = value;}

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
function univote_bfh_ch_common_electionData_getSignature() { return this._signature;}

univote_bfh_ch_common_electionData.prototype.getSignature = univote_bfh_ch_common_electionData_getSignature;

function univote_bfh_ch_common_electionData_setSignature(value) { this._signature = value;}

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
     xml = xml + '<title>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._title);
     xml = xml + '</title>';
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
    cxfjsutils.trace('processing title');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTitle(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing choice');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choice')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
		//@BFH>
		//Create the right object reading the xsi:type attribute of the current element
		if(curElement.getAttribute("xsi:type").indexOf("candidate") != -1){
			arrayItem = univote_bfh_ch_common_candidate_deserialize(cxfjsutils, curElement);
		}
		else if(curElement.getAttribute("xsi:type").indexOf("politicalList") != -1){
			arrayItem = univote_bfh_ch_common_politicalList_deserialize(cxfjsutils, curElement);
		}
		else{
			arrayItem = univote_bfh_ch_common_choice_deserialize(cxfjsutils, curElement);
		}
       //arrayItem = univote_bfh_ch_common_choice_deserialize(cxfjsutils, curElement);
	   //<@BFH
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
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
		//@BFH>
		//Create the right object reading the xsi:type attribute of the current element
		if(curElement.getAttribute("xsi:type").indexOf("forallRule") != -1){
			arrayItem = univote_bfh_ch_common_forallRule_deserialize(cxfjsutils, curElement);
		}
		else if(curElement.getAttribute("xsi:type").indexOf("summationRule") != -1){
			arrayItem = univote_bfh_ch_common_summationRule_deserialize(cxfjsutils, curElement);
		}
		else{
			arrayItem = univote_bfh_ch_common_rule_deserialize(cxfjsutils, curElement);
		}
		//arrayItem = univote_bfh_ch_common_rule_deserialize(cxfjsutils, curElement);
		//<@BFH
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
// Constructor for XML Schema item {http://univote.bfh.ch/common}revokedVerificationKey
//
function univote_bfh_ch_common_revokedVerificationKey () {
    this.typeMarker = 'univote_bfh_ch_common_revokedVerificationKey';
    this._electionId = '';
    this._voterId = '';
    this._key = '';
    this._signature = null;
}

//
// accessor is univote_bfh_ch_common_revokedVerificationKey.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_revokedVerificationKey.prototype.setElectionId
//
function univote_bfh_ch_common_revokedVerificationKey_getElectionId() { return this._electionId;}

univote_bfh_ch_common_revokedVerificationKey.prototype.getElectionId = univote_bfh_ch_common_revokedVerificationKey_getElectionId;

function univote_bfh_ch_common_revokedVerificationKey_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_common_revokedVerificationKey.prototype.setElectionId = univote_bfh_ch_common_revokedVerificationKey_setElectionId;
//
// accessor is univote_bfh_ch_common_revokedVerificationKey.prototype.getVoterId
// element get for voterId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for voterId
// setter function is is univote_bfh_ch_common_revokedVerificationKey.prototype.setVoterId
//
function univote_bfh_ch_common_revokedVerificationKey_getVoterId() { return this._voterId;}

univote_bfh_ch_common_revokedVerificationKey.prototype.getVoterId = univote_bfh_ch_common_revokedVerificationKey_getVoterId;

function univote_bfh_ch_common_revokedVerificationKey_setVoterId(value) { this._voterId = value;}

univote_bfh_ch_common_revokedVerificationKey.prototype.setVoterId = univote_bfh_ch_common_revokedVerificationKey_setVoterId;
//
// accessor is univote_bfh_ch_common_revokedVerificationKey.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for key
// setter function is is univote_bfh_ch_common_revokedVerificationKey.prototype.setKey
//
function univote_bfh_ch_common_revokedVerificationKey_getKey() { return this._key;}

univote_bfh_ch_common_revokedVerificationKey.prototype.getKey = univote_bfh_ch_common_revokedVerificationKey_getKey;

function univote_bfh_ch_common_revokedVerificationKey_setKey(value) { this._key = value;}

univote_bfh_ch_common_revokedVerificationKey.prototype.setKey = univote_bfh_ch_common_revokedVerificationKey_setKey;
//
// accessor is univote_bfh_ch_common_revokedVerificationKey.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_revokedVerificationKey.prototype.setSignature
//
function univote_bfh_ch_common_revokedVerificationKey_getSignature() { return this._signature;}

univote_bfh_ch_common_revokedVerificationKey.prototype.getSignature = univote_bfh_ch_common_revokedVerificationKey_getSignature;

function univote_bfh_ch_common_revokedVerificationKey_setSignature(value) { this._signature = value;}

univote_bfh_ch_common_revokedVerificationKey.prototype.setSignature = univote_bfh_ch_common_revokedVerificationKey_setSignature;
//
// Serialize {http://univote.bfh.ch/common}revokedVerificationKey
//
function univote_bfh_ch_common_revokedVerificationKey_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<voterId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._voterId);
     xml = xml + '</voterId>';
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

univote_bfh_ch_common_revokedVerificationKey.prototype.serialize = univote_bfh_ch_common_revokedVerificationKey_serialize;

function univote_bfh_ch_common_revokedVerificationKey_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_revokedVerificationKey();
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
    cxfjsutils.trace('processing voterId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setVoterId(item);
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
function univote_bfh_ch_common_electionOptions_getElectionId() { return this._electionId;}

univote_bfh_ch_common_electionOptions.prototype.getElectionId = univote_bfh_ch_common_electionOptions_getElectionId;

function univote_bfh_ch_common_electionOptions_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_electionOptions_getChoice() { return this._choice;}

univote_bfh_ch_common_electionOptions.prototype.getChoice = univote_bfh_ch_common_electionOptions_getChoice;

function univote_bfh_ch_common_electionOptions_setChoice(value) { this._choice = value;}

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
function univote_bfh_ch_common_electionOptions_getRule() { return this._rule;}

univote_bfh_ch_common_electionOptions.prototype.getRule = univote_bfh_ch_common_electionOptions_getRule;

function univote_bfh_ch_common_electionOptions_setRule(value) { this._rule = value;}

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
function univote_bfh_ch_common_electionOptions_getSignature() { return this._signature;}

univote_bfh_ch_common_electionOptions.prototype.getSignature = univote_bfh_ch_common_electionOptions_getSignature;

function univote_bfh_ch_common_electionOptions_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
		//@BFH>
		//Create the right object reading the xsi:type attribute of the current element
		if(curElement.getAttribute("xsi:type").indexOf("candidate") != -1){
			arrayItem = univote_bfh_ch_common_candidate_deserialize(cxfjsutils, curElement);
		}
		else if(curElement.getAttribute("xsi:type").indexOf("politicalList") != -1){
			arrayItem = univote_bfh_ch_common_politicalList_deserialize(cxfjsutils, curElement);
		}
		else{
			arrayItem = univote_bfh_ch_common_choice_deserialize(cxfjsutils, curElement);
		}
	   //arrayItem = univote_bfh_ch_common_choice_deserialize(cxfjsutils, curElement);
       //<@BFH
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
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
	    //@BFH>
		//Create the right object reading the xsi:type attribute of the current element
		if(curElement.getAttribute("xsi:type").indexOf("forallRule") != -1){
			arrayItem = univote_bfh_ch_common_forallRule_deserialize(cxfjsutils, curElement);
		}
		else if(curElement.getAttribute("xsi:type").indexOf("summationRule") != -1){
			arrayItem = univote_bfh_ch_common_summationRule_deserialize(cxfjsutils, curElement);
		}
		else{
			arrayItem = univote_bfh_ch_common_rule_deserialize(cxfjsutils, curElement);
		}
	   //arrayItem = univote_bfh_ch_common_rule_deserialize(cxfjsutils, curElement);
       //<@BFH
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
function univote_bfh_ch_common_electionSystemInfo_getCertificateAuthority() { return this._certificateAuthority;}

univote_bfh_ch_common_electionSystemInfo.prototype.getCertificateAuthority = univote_bfh_ch_common_electionSystemInfo_getCertificateAuthority;

function univote_bfh_ch_common_electionSystemInfo_setCertificateAuthority(value) { this._certificateAuthority = value;}

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
function univote_bfh_ch_common_electionSystemInfo_getElectionAdministration() { return this._electionAdministration;}

univote_bfh_ch_common_electionSystemInfo.prototype.getElectionAdministration = univote_bfh_ch_common_electionSystemInfo_getElectionAdministration;

function univote_bfh_ch_common_electionSystemInfo_setElectionAdministration(value) { this._electionAdministration = value;}

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
function univote_bfh_ch_common_electionSystemInfo_getElectionManager() { return this._electionManager;}

univote_bfh_ch_common_electionSystemInfo.prototype.getElectionManager = univote_bfh_ch_common_electionSystemInfo_getElectionManager;

function univote_bfh_ch_common_electionSystemInfo_setElectionManager(value) { this._electionManager = value;}

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
function univote_bfh_ch_common_electionSystemInfo_getMixer() { return this._mixer;}

univote_bfh_ch_common_electionSystemInfo.prototype.getMixer = univote_bfh_ch_common_electionSystemInfo_getMixer;

function univote_bfh_ch_common_electionSystemInfo_setMixer(value) { this._mixer = value;}

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
function univote_bfh_ch_common_electionSystemInfo_getTallier() { return this._tallier;}

univote_bfh_ch_common_electionSystemInfo.prototype.getTallier = univote_bfh_ch_common_electionSystemInfo_getTallier;

function univote_bfh_ch_common_electionSystemInfo_setTallier(value) { this._tallier = value;}

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
function univote_bfh_ch_common_electionSystemInfo_getSignature() { return this._signature;}

univote_bfh_ch_common_electionSystemInfo.prototype.getSignature = univote_bfh_ch_common_electionSystemInfo_getSignature;

function univote_bfh_ch_common_electionSystemInfo_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
      var arrayItem = null;
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
// Simple type (enumeration) {http://univote.bfh.ch/common}languageCode
//
// - DE
// - FR
// - EN
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
function univote_bfh_ch_common_plaintextVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_common_plaintextVotes.prototype.getElectionId = univote_bfh_ch_common_plaintextVotes_getElectionId;

function univote_bfh_ch_common_plaintextVotes_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_plaintextVotes_getVote() { return this._vote;}

univote_bfh_ch_common_plaintextVotes.prototype.getVote = univote_bfh_ch_common_plaintextVotes_getVote;

function univote_bfh_ch_common_plaintextVotes_setVote(value) { this._vote = value;}

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
function univote_bfh_ch_common_plaintextVotes_getSignature() { return this._signature;}

univote_bfh_ch_common_plaintextVotes.prototype.getSignature = univote_bfh_ch_common_plaintextVotes_getSignature;

function univote_bfh_ch_common_plaintextVotes_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
function univote_bfh_ch_common_ballot_getElectionId() { return this._electionId;}

univote_bfh_ch_common_ballot.prototype.getElectionId = univote_bfh_ch_common_ballot_getElectionId;

function univote_bfh_ch_common_ballot_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_ballot_getVerificationKey() { return this._verificationKey;}

univote_bfh_ch_common_ballot.prototype.getVerificationKey = univote_bfh_ch_common_ballot_getVerificationKey;

function univote_bfh_ch_common_ballot_setVerificationKey(value) { this._verificationKey = value;}

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
function univote_bfh_ch_common_ballot_getEncryptedVote() { return this._encryptedVote;}

univote_bfh_ch_common_ballot.prototype.getEncryptedVote = univote_bfh_ch_common_ballot_getEncryptedVote;

function univote_bfh_ch_common_ballot_setEncryptedVote(value) { this._encryptedVote = value;}

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
function univote_bfh_ch_common_ballot_getProof() { return this._proof;}

univote_bfh_ch_common_ballot.prototype.getProof = univote_bfh_ch_common_ballot_getProof;

function univote_bfh_ch_common_ballot_setProof(value) { this._proof = value;}

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
function univote_bfh_ch_common_ballot_getSignature() { return this._signature;}

univote_bfh_ch_common_ballot.prototype.getSignature = univote_bfh_ch_common_ballot_getSignature;

function univote_bfh_ch_common_ballot_setSignature(value) { this._signature = value;}

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
function univote_bfh_ch_common_blindedGenerator_getElectionId() { return this._electionId;}

univote_bfh_ch_common_blindedGenerator.prototype.getElectionId = univote_bfh_ch_common_blindedGenerator_getElectionId;

function univote_bfh_ch_common_blindedGenerator_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_blindedGenerator_getGenerator() { return this._generator;}

univote_bfh_ch_common_blindedGenerator.prototype.getGenerator = univote_bfh_ch_common_blindedGenerator_getGenerator;

function univote_bfh_ch_common_blindedGenerator_setGenerator(value) { this._generator = value;}

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
function univote_bfh_ch_common_blindedGenerator_getProof() { return this._proof;}

univote_bfh_ch_common_blindedGenerator.prototype.getProof = univote_bfh_ch_common_blindedGenerator_getProof;

function univote_bfh_ch_common_blindedGenerator_setProof(value) { this._proof = value;}

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
function univote_bfh_ch_common_blindedGenerator_getSignature() { return this._signature;}

univote_bfh_ch_common_blindedGenerator.prototype.getSignature = univote_bfh_ch_common_blindedGenerator_getSignature;

function univote_bfh_ch_common_blindedGenerator_setSignature(value) { this._signature = value;}

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
// Constructor for XML Schema item {http://univote.bfh.ch/common}forallRule
//
function univote_bfh_ch_common_forallRule () {
    this.typeMarker = 'univote_bfh_ch_common_forallRule';
    this._choiceId = [];
    this._lowerBound = 0;
    this._upperBound = 0;
}

//
// accessor is univote_bfh_ch_common_forallRule.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
// - array
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_forallRule.prototype.setChoiceId
//
function univote_bfh_ch_common_forallRule_getChoiceId() { return this._choiceId;}

univote_bfh_ch_common_forallRule.prototype.getChoiceId = univote_bfh_ch_common_forallRule_getChoiceId;

function univote_bfh_ch_common_forallRule_setChoiceId(value) { this._choiceId = value;}

univote_bfh_ch_common_forallRule.prototype.setChoiceId = univote_bfh_ch_common_forallRule_setChoiceId;
//
// accessor is univote_bfh_ch_common_forallRule.prototype.getLowerBound
// element get for lowerBound
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for lowerBound
// setter function is is univote_bfh_ch_common_forallRule.prototype.setLowerBound
//
function univote_bfh_ch_common_forallRule_getLowerBound() { return this._lowerBound;}

univote_bfh_ch_common_forallRule.prototype.getLowerBound = univote_bfh_ch_common_forallRule_getLowerBound;

function univote_bfh_ch_common_forallRule_setLowerBound(value) { this._lowerBound = value;}

univote_bfh_ch_common_forallRule.prototype.setLowerBound = univote_bfh_ch_common_forallRule_setLowerBound;
//
// accessor is univote_bfh_ch_common_forallRule.prototype.getUpperBound
// element get for upperBound
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for upperBound
// setter function is is univote_bfh_ch_common_forallRule.prototype.setUpperBound
//
function univote_bfh_ch_common_forallRule_getUpperBound() { return this._upperBound;}

univote_bfh_ch_common_forallRule.prototype.getUpperBound = univote_bfh_ch_common_forallRule_getUpperBound;

function univote_bfh_ch_common_forallRule_setUpperBound(value) { this._upperBound = value;}

univote_bfh_ch_common_forallRule.prototype.setUpperBound = univote_bfh_ch_common_forallRule_setUpperBound;
//
// Serialize {http://univote.bfh.ch/common}forallRule
//
function univote_bfh_ch_common_forallRule_serialize(cxfjsutils, elementName, extraNamespaces) {
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

univote_bfh_ch_common_forallRule.prototype.serialize = univote_bfh_ch_common_forallRule_serialize;

function univote_bfh_ch_common_forallRule_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_forallRule();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing choiceId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId')) {
     item = [];
     do  {
      var arrayItem = null;
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
// Constructor for XML Schema item {http://univote.bfh.ch/common}newVerificationKey
//
function univote_bfh_ch_common_newVerificationKey () {
    this.typeMarker = 'univote_bfh_ch_common_newVerificationKey';
    this._electionId = '';
    this._voterId = '';
    this._key = '';
    this._signature = null;
}

//
// accessor is univote_bfh_ch_common_newVerificationKey.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_newVerificationKey.prototype.setElectionId
//
function univote_bfh_ch_common_newVerificationKey_getElectionId() { return this._electionId;}

univote_bfh_ch_common_newVerificationKey.prototype.getElectionId = univote_bfh_ch_common_newVerificationKey_getElectionId;

function univote_bfh_ch_common_newVerificationKey_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_common_newVerificationKey.prototype.setElectionId = univote_bfh_ch_common_newVerificationKey_setElectionId;
//
// accessor is univote_bfh_ch_common_newVerificationKey.prototype.getVoterId
// element get for voterId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for voterId
// setter function is is univote_bfh_ch_common_newVerificationKey.prototype.setVoterId
//
function univote_bfh_ch_common_newVerificationKey_getVoterId() { return this._voterId;}

univote_bfh_ch_common_newVerificationKey.prototype.getVoterId = univote_bfh_ch_common_newVerificationKey_getVoterId;

function univote_bfh_ch_common_newVerificationKey_setVoterId(value) { this._voterId = value;}

univote_bfh_ch_common_newVerificationKey.prototype.setVoterId = univote_bfh_ch_common_newVerificationKey_setVoterId;
//
// accessor is univote_bfh_ch_common_newVerificationKey.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for key
// setter function is is univote_bfh_ch_common_newVerificationKey.prototype.setKey
//
function univote_bfh_ch_common_newVerificationKey_getKey() { return this._key;}

univote_bfh_ch_common_newVerificationKey.prototype.getKey = univote_bfh_ch_common_newVerificationKey_getKey;

function univote_bfh_ch_common_newVerificationKey_setKey(value) { this._key = value;}

univote_bfh_ch_common_newVerificationKey.prototype.setKey = univote_bfh_ch_common_newVerificationKey_setKey;
//
// accessor is univote_bfh_ch_common_newVerificationKey.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_newVerificationKey.prototype.setSignature
//
function univote_bfh_ch_common_newVerificationKey_getSignature() { return this._signature;}

univote_bfh_ch_common_newVerificationKey.prototype.getSignature = univote_bfh_ch_common_newVerificationKey_getSignature;

function univote_bfh_ch_common_newVerificationKey_setSignature(value) { this._signature = value;}

univote_bfh_ch_common_newVerificationKey.prototype.setSignature = univote_bfh_ch_common_newVerificationKey_setSignature;
//
// Serialize {http://univote.bfh.ch/common}newVerificationKey
//
function univote_bfh_ch_common_newVerificationKey_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<voterId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._voterId);
     xml = xml + '</voterId>';
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

univote_bfh_ch_common_newVerificationKey.prototype.serialize = univote_bfh_ch_common_newVerificationKey_serialize;

function univote_bfh_ch_common_newVerificationKey_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_newVerificationKey();
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
    cxfjsutils.trace('processing voterId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setVoterId(item);
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
// Constructor for XML Schema item {http://univote.bfh.ch/common}rule
//
function univote_bfh_ch_common_rule () {
    this.typeMarker = 'univote_bfh_ch_common_rule';
    this._choiceId = [];
}

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
function univote_bfh_ch_common_rule_getChoiceId() { return this._choiceId;}

univote_bfh_ch_common_rule.prototype.getChoiceId = univote_bfh_ch_common_rule_getChoiceId;

function univote_bfh_ch_common_rule_setChoiceId(value) { this._choiceId = value;}

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
    cxfjsutils.trace('processing choiceId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId')) {
     item = [];
     do  {
      var arrayItem = null;
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
function univote_bfh_ch_common_signatureParameters_getElectionId() { return this._electionId;}

univote_bfh_ch_common_signatureParameters.prototype.getElectionId = univote_bfh_ch_common_signatureParameters_getElectionId;

function univote_bfh_ch_common_signatureParameters_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_signatureParameters_getPrime() { return this._prime;}

univote_bfh_ch_common_signatureParameters.prototype.getPrime = univote_bfh_ch_common_signatureParameters_getPrime;

function univote_bfh_ch_common_signatureParameters_setPrime(value) { this._prime = value;}

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
function univote_bfh_ch_common_signatureParameters_getGroupOrder() { return this._groupOrder;}

univote_bfh_ch_common_signatureParameters.prototype.getGroupOrder = univote_bfh_ch_common_signatureParameters_getGroupOrder;

function univote_bfh_ch_common_signatureParameters_setGroupOrder(value) { this._groupOrder = value;}

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
function univote_bfh_ch_common_signatureParameters_getGenerator() { return this._generator;}

univote_bfh_ch_common_signatureParameters.prototype.getGenerator = univote_bfh_ch_common_signatureParameters_getGenerator;

function univote_bfh_ch_common_signatureParameters_setGenerator(value) { this._generator = value;}

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
function univote_bfh_ch_common_signatureParameters_getSignature() { return this._signature;}

univote_bfh_ch_common_signatureParameters.prototype.getSignature = univote_bfh_ch_common_signatureParameters_getSignature;

function univote_bfh_ch_common_signatureParameters_setSignature(value) { this._signature = value;}

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
function univote_bfh_ch_common_proof_getCommitment() { return this._commitment;}

univote_bfh_ch_common_proof.prototype.getCommitment = univote_bfh_ch_common_proof_getCommitment;

function univote_bfh_ch_common_proof_setCommitment(value) { this._commitment = value;}

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
function univote_bfh_ch_common_proof_getResponse() { return this._response;}

univote_bfh_ch_common_proof.prototype.getResponse = univote_bfh_ch_common_proof_getResponse;

function univote_bfh_ch_common_proof_setResponse(value) { this._response = value;}

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
      var arrayItem = null;
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
      var arrayItem = null;
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
function univote_bfh_ch_common_partiallyDecryptedVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getElectionId = univote_bfh_ch_common_partiallyDecryptedVotes_getElectionId;

function univote_bfh_ch_common_partiallyDecryptedVotes_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_partiallyDecryptedVotes_getVote() { return this._vote;}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getVote = univote_bfh_ch_common_partiallyDecryptedVotes_getVote;

function univote_bfh_ch_common_partiallyDecryptedVotes_setVote(value) { this._vote = value;}

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
function univote_bfh_ch_common_partiallyDecryptedVotes_getProof() { return this._proof;}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getProof = univote_bfh_ch_common_partiallyDecryptedVotes_getProof;

function univote_bfh_ch_common_partiallyDecryptedVotes_setProof(value) { this._proof = value;}

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
function univote_bfh_ch_common_partiallyDecryptedVotes_getSignature() { return this._signature;}

univote_bfh_ch_common_partiallyDecryptedVotes.prototype.getSignature = univote_bfh_ch_common_partiallyDecryptedVotes_getSignature;

function univote_bfh_ch_common_partiallyDecryptedVotes_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
// Constructor for XML Schema item {http://univote.bfh.ch/common}electionAdministrationInfo
//
function univote_bfh_ch_common_electionAdministrationInfo () {
    this.typeMarker = 'univote_bfh_ch_common_electionAdministrationInfo';
    this._identifier = '';
    this._certificate = null;
    this._signature = null;
}

//
// accessor is univote_bfh_ch_common_electionAdministrationInfo.prototype.getIdentifier
// element get for identifier
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for identifier
// setter function is is univote_bfh_ch_common_electionAdministrationInfo.prototype.setIdentifier
//
function univote_bfh_ch_common_electionAdministrationInfo_getIdentifier() { return this._identifier;}

univote_bfh_ch_common_electionAdministrationInfo.prototype.getIdentifier = univote_bfh_ch_common_electionAdministrationInfo_getIdentifier;

function univote_bfh_ch_common_electionAdministrationInfo_setIdentifier(value) { this._identifier = value;}

univote_bfh_ch_common_electionAdministrationInfo.prototype.setIdentifier = univote_bfh_ch_common_electionAdministrationInfo_setIdentifier;
//
// accessor is univote_bfh_ch_common_electionAdministrationInfo.prototype.getCertificate
// element get for certificate
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for certificate
// setter function is is univote_bfh_ch_common_electionAdministrationInfo.prototype.setCertificate
//
function univote_bfh_ch_common_electionAdministrationInfo_getCertificate() { return this._certificate;}

univote_bfh_ch_common_electionAdministrationInfo.prototype.getCertificate = univote_bfh_ch_common_electionAdministrationInfo_getCertificate;

function univote_bfh_ch_common_electionAdministrationInfo_setCertificate(value) { this._certificate = value;}

univote_bfh_ch_common_electionAdministrationInfo.prototype.setCertificate = univote_bfh_ch_common_electionAdministrationInfo_setCertificate;
//
// accessor is univote_bfh_ch_common_electionAdministrationInfo.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electionAdministrationInfo.prototype.setSignature
//
function univote_bfh_ch_common_electionAdministrationInfo_getSignature() { return this._signature;}

univote_bfh_ch_common_electionAdministrationInfo.prototype.getSignature = univote_bfh_ch_common_electionAdministrationInfo_getSignature;

function univote_bfh_ch_common_electionAdministrationInfo_setSignature(value) { this._signature = value;}

univote_bfh_ch_common_electionAdministrationInfo.prototype.setSignature = univote_bfh_ch_common_electionAdministrationInfo_setSignature;
//
// Serialize {http://univote.bfh.ch/common}electionAdministrationInfo
//
function univote_bfh_ch_common_electionAdministrationInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<identifier>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._identifier);
     xml = xml + '</identifier>';
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

univote_bfh_ch_common_electionAdministrationInfo.prototype.serialize = univote_bfh_ch_common_electionAdministrationInfo_serialize;

function univote_bfh_ch_common_electionAdministrationInfo_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_electionAdministrationInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing identifier');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setIdentifier(item);
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
function univote_bfh_ch_common_choice_getChoiceId() { return this._choiceId;}

univote_bfh_ch_common_choice.prototype.getChoiceId = univote_bfh_ch_common_choice_getChoiceId;

function univote_bfh_ch_common_choice_setChoiceId(value) { this._choiceId = value;}

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
function univote_bfh_ch_common_localizedText_getLanguage() { return this._language;}

univote_bfh_ch_common_localizedText.prototype.getLanguage = univote_bfh_ch_common_localizedText_getLanguage;

function univote_bfh_ch_common_localizedText_setLanguage(value) { this._language = value;}

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
function univote_bfh_ch_common_localizedText_getText() { return this._text;}

univote_bfh_ch_common_localizedText.prototype.getText = univote_bfh_ch_common_localizedText_getText;

function univote_bfh_ch_common_localizedText_setText(value) { this._text = value;}

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
function univote_bfh_ch_common_encryptionKey_getElectionId() { return this._electionId;}

univote_bfh_ch_common_encryptionKey.prototype.getElectionId = univote_bfh_ch_common_encryptionKey_getElectionId;

function univote_bfh_ch_common_encryptionKey_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_encryptionKey_getKey() { return this._key;}

univote_bfh_ch_common_encryptionKey.prototype.getKey = univote_bfh_ch_common_encryptionKey_getKey;

function univote_bfh_ch_common_encryptionKey_setKey(value) { this._key = value;}

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
function univote_bfh_ch_common_encryptionKey_getSignature() { return this._signature;}

univote_bfh_ch_common_encryptionKey.prototype.getSignature = univote_bfh_ch_common_encryptionKey_getSignature;

function univote_bfh_ch_common_encryptionKey_setSignature(value) { this._signature = value;}

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
function univote_bfh_ch_common_mixingParameters_getMixerId() { return this._mixerId;}

univote_bfh_ch_common_mixingParameters.prototype.getMixerId = univote_bfh_ch_common_mixingParameters_getMixerId;

function univote_bfh_ch_common_mixingParameters_setMixerId(value) { this._mixerId = value;}

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
function univote_bfh_ch_common_mixingParameters_getElectionId() { return this._electionId;}

univote_bfh_ch_common_mixingParameters.prototype.getElectionId = univote_bfh_ch_common_mixingParameters_getElectionId;

function univote_bfh_ch_common_mixingParameters_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_mixingParameters_getPrime() { return this._prime;}

univote_bfh_ch_common_mixingParameters.prototype.getPrime = univote_bfh_ch_common_mixingParameters_getPrime;

function univote_bfh_ch_common_mixingParameters_setPrime(value) { this._prime = value;}

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
function univote_bfh_ch_common_mixingParameters_getGroupOrder() { return this._groupOrder;}

univote_bfh_ch_common_mixingParameters.prototype.getGroupOrder = univote_bfh_ch_common_mixingParameters_getGroupOrder;

function univote_bfh_ch_common_mixingParameters_setGroupOrder(value) { this._groupOrder = value;}

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
function univote_bfh_ch_common_mixingParameters_getGenerator() { return this._generator;}

univote_bfh_ch_common_mixingParameters.prototype.getGenerator = univote_bfh_ch_common_mixingParameters_getGenerator;

function univote_bfh_ch_common_mixingParameters_setGenerator(value) { this._generator = value;}

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
function univote_bfh_ch_common_mixingParameters_getSignature() { return this._signature;}

univote_bfh_ch_common_mixingParameters.prototype.getSignature = univote_bfh_ch_common_mixingParameters_getSignature;

function univote_bfh_ch_common_mixingParameters_setSignature(value) { this._signature = value;}

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
// Constructor for XML Schema item {http://univote.bfh.ch/common}summationRule
//
function univote_bfh_ch_common_summationRule () {
    this.typeMarker = 'univote_bfh_ch_common_summationRule';
    this._choiceId = [];
    this._lowerBound = 0;
    this._upperBound = 0;
}

//
// accessor is univote_bfh_ch_common_summationRule.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
// - array
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_summationRule.prototype.setChoiceId
//
function univote_bfh_ch_common_summationRule_getChoiceId() { return this._choiceId;}

univote_bfh_ch_common_summationRule.prototype.getChoiceId = univote_bfh_ch_common_summationRule_getChoiceId;

function univote_bfh_ch_common_summationRule_setChoiceId(value) { this._choiceId = value;}

univote_bfh_ch_common_summationRule.prototype.setChoiceId = univote_bfh_ch_common_summationRule_setChoiceId;
//
// accessor is univote_bfh_ch_common_summationRule.prototype.getLowerBound
// element get for lowerBound
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for lowerBound
// setter function is is univote_bfh_ch_common_summationRule.prototype.setLowerBound
//
function univote_bfh_ch_common_summationRule_getLowerBound() { return this._lowerBound;}

univote_bfh_ch_common_summationRule.prototype.getLowerBound = univote_bfh_ch_common_summationRule_getLowerBound;

function univote_bfh_ch_common_summationRule_setLowerBound(value) { this._lowerBound = value;}

univote_bfh_ch_common_summationRule.prototype.setLowerBound = univote_bfh_ch_common_summationRule_setLowerBound;
//
// accessor is univote_bfh_ch_common_summationRule.prototype.getUpperBound
// element get for upperBound
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for upperBound
// setter function is is univote_bfh_ch_common_summationRule.prototype.setUpperBound
//
function univote_bfh_ch_common_summationRule_getUpperBound() { return this._upperBound;}

univote_bfh_ch_common_summationRule.prototype.getUpperBound = univote_bfh_ch_common_summationRule_getUpperBound;

function univote_bfh_ch_common_summationRule_setUpperBound(value) { this._upperBound = value;}

univote_bfh_ch_common_summationRule.prototype.setUpperBound = univote_bfh_ch_common_summationRule_setUpperBound;
//
// Serialize {http://univote.bfh.ch/common}summationRule
//
function univote_bfh_ch_common_summationRule_serialize(cxfjsutils, elementName, extraNamespaces) {
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

univote_bfh_ch_common_summationRule.prototype.serialize = univote_bfh_ch_common_summationRule_serialize;

function univote_bfh_ch_common_summationRule_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_summationRule();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing choiceId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choiceId')) {
     item = [];
     do  {
      var arrayItem = null;
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
function univote_bfh_ch_common_ballots_getElectionId() { return this._electionId;}

univote_bfh_ch_common_ballots.prototype.getElectionId = univote_bfh_ch_common_ballots_getElectionId;

function univote_bfh_ch_common_ballots_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_ballots_getBallot() { return this._ballot;}

univote_bfh_ch_common_ballots.prototype.getBallot = univote_bfh_ch_common_ballots_getBallot;

function univote_bfh_ch_common_ballots_setBallot(value) { this._ballot = value;}

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
function univote_bfh_ch_common_ballots_getSignature() { return this._signature;}

univote_bfh_ch_common_ballots.prototype.getSignature = univote_bfh_ch_common_ballots_getSignature;

function univote_bfh_ch_common_ballots_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
function univote_bfh_ch_common_mixedVerificationKeys_getElectionId() { return this._electionId;}

univote_bfh_ch_common_mixedVerificationKeys.prototype.getElectionId = univote_bfh_ch_common_mixedVerificationKeys_getElectionId;

function univote_bfh_ch_common_mixedVerificationKeys_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_mixedVerificationKeys_getKey() { return this._key;}

univote_bfh_ch_common_mixedVerificationKeys.prototype.getKey = univote_bfh_ch_common_mixedVerificationKeys_getKey;

function univote_bfh_ch_common_mixedVerificationKeys_setKey(value) { this._key = value;}

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
function univote_bfh_ch_common_mixedVerificationKeys_getProof() { return this._proof;}

univote_bfh_ch_common_mixedVerificationKeys.prototype.getProof = univote_bfh_ch_common_mixedVerificationKeys_getProof;

function univote_bfh_ch_common_mixedVerificationKeys_setProof(value) { this._proof = value;}

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
function univote_bfh_ch_common_mixedVerificationKeys_getSignature() { return this._signature;}

univote_bfh_ch_common_mixedVerificationKeys.prototype.getSignature = univote_bfh_ch_common_mixedVerificationKeys_getSignature;

function univote_bfh_ch_common_mixedVerificationKeys_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
// Simple type (enumeration) {http://univote.bfh.ch/common}sex
//
// - M
// - F
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
function univote_bfh_ch_common_mixedVerificationKey_getElectionId() { return this._electionId;}

univote_bfh_ch_common_mixedVerificationKey.prototype.getElectionId = univote_bfh_ch_common_mixedVerificationKey_getElectionId;

function univote_bfh_ch_common_mixedVerificationKey_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_mixedVerificationKey_getKey() { return this._key;}

univote_bfh_ch_common_mixedVerificationKey.prototype.getKey = univote_bfh_ch_common_mixedVerificationKey_getKey;

function univote_bfh_ch_common_mixedVerificationKey_setKey(value) { this._key = value;}

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
function univote_bfh_ch_common_mixedVerificationKey_getProof() { return this._proof;}

univote_bfh_ch_common_mixedVerificationKey.prototype.getProof = univote_bfh_ch_common_mixedVerificationKey_getProof;

function univote_bfh_ch_common_mixedVerificationKey_setProof(value) { this._proof = value;}

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
function univote_bfh_ch_common_mixedVerificationKey_getSignature() { return this._signature;}

univote_bfh_ch_common_mixedVerificationKey.prototype.getSignature = univote_bfh_ch_common_mixedVerificationKey_getSignature;

function univote_bfh_ch_common_mixedVerificationKey_setSignature(value) { this._signature = value;}

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
function univote_bfh_ch_common_encryptedVotesToMix_getMixerId() { return this._mixerId;}

univote_bfh_ch_common_encryptedVotesToMix.prototype.getMixerId = univote_bfh_ch_common_encryptedVotesToMix_getMixerId;

function univote_bfh_ch_common_encryptedVotesToMix_setMixerId(value) { this._mixerId = value;}

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
function univote_bfh_ch_common_encryptedVotesToMix_getElectionId() { return this._electionId;}

univote_bfh_ch_common_encryptedVotesToMix.prototype.getElectionId = univote_bfh_ch_common_encryptedVotesToMix_getElectionId;

function univote_bfh_ch_common_encryptedVotesToMix_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_encryptedVotesToMix_getVote() { return this._vote;}

univote_bfh_ch_common_encryptedVotesToMix.prototype.getVote = univote_bfh_ch_common_encryptedVotesToMix_getVote;

function univote_bfh_ch_common_encryptedVotesToMix_setVote(value) { this._vote = value;}

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
function univote_bfh_ch_common_encryptedVotesToMix_getSignature() { return this._signature;}

univote_bfh_ch_common_encryptedVotesToMix.prototype.getSignature = univote_bfh_ch_common_encryptedVotesToMix_getSignature;

function univote_bfh_ch_common_encryptedVotesToMix_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
function univote_bfh_ch_common_electoralRoll_getElectionId() { return this._electionId;}

univote_bfh_ch_common_electoralRoll.prototype.getElectionId = univote_bfh_ch_common_electoralRoll_getElectionId;

function univote_bfh_ch_common_electoralRoll_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_electoralRoll_getVoterHash() { return this._voterHash;}

univote_bfh_ch_common_electoralRoll.prototype.getVoterHash = univote_bfh_ch_common_electoralRoll_getVoterHash;

function univote_bfh_ch_common_electoralRoll_setVoterHash(value) { this._voterHash = value;}

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
function univote_bfh_ch_common_electoralRoll_getSignature() { return this._signature;}

univote_bfh_ch_common_electoralRoll.prototype.getSignature = univote_bfh_ch_common_electoralRoll_getSignature;

function univote_bfh_ch_common_electoralRoll_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
function univote_bfh_ch_common_verificationKeyToMix_getMixerId() { return this._mixerId;}

univote_bfh_ch_common_verificationKeyToMix.prototype.getMixerId = univote_bfh_ch_common_verificationKeyToMix_getMixerId;

function univote_bfh_ch_common_verificationKeyToMix_setMixerId(value) { this._mixerId = value;}

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
function univote_bfh_ch_common_verificationKeyToMix_getElectionId() { return this._electionId;}

univote_bfh_ch_common_verificationKeyToMix.prototype.getElectionId = univote_bfh_ch_common_verificationKeyToMix_getElectionId;

function univote_bfh_ch_common_verificationKeyToMix_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_verificationKeyToMix_getKey() { return this._key;}

univote_bfh_ch_common_verificationKeyToMix.prototype.getKey = univote_bfh_ch_common_verificationKeyToMix_getKey;

function univote_bfh_ch_common_verificationKeyToMix_setKey(value) { this._key = value;}

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
function univote_bfh_ch_common_verificationKeyToMix_getSignature() { return this._signature;}

univote_bfh_ch_common_verificationKeyToMix.prototype.getSignature = univote_bfh_ch_common_verificationKeyToMix_getSignature;

function univote_bfh_ch_common_verificationKeyToMix_setSignature(value) { this._signature = value;}

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
function univote_bfh_ch_common_voterCertificate_getElectionId() { return this._electionId;}

univote_bfh_ch_common_voterCertificate.prototype.getElectionId = univote_bfh_ch_common_voterCertificate_getElectionId;

function univote_bfh_ch_common_voterCertificate_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_voterCertificate_getCertificate() { return this._certificate;}

univote_bfh_ch_common_voterCertificate.prototype.getCertificate = univote_bfh_ch_common_voterCertificate_getCertificate;

function univote_bfh_ch_common_voterCertificate_setCertificate(value) { this._certificate = value;}

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
function univote_bfh_ch_common_voterCertificate_getSignature() { return this._signature;}

univote_bfh_ch_common_voterCertificate.prototype.getSignature = univote_bfh_ch_common_voterCertificate_getSignature;

function univote_bfh_ch_common_voterCertificate_setSignature(value) { this._signature = value;}

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
function univote_bfh_ch_common_encryptedVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_common_encryptedVotes.prototype.getElectionId = univote_bfh_ch_common_encryptedVotes_getElectionId;

function univote_bfh_ch_common_encryptedVotes_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_encryptedVotes_getVote() { return this._vote;}

univote_bfh_ch_common_encryptedVotes.prototype.getVote = univote_bfh_ch_common_encryptedVotes_getVote;

function univote_bfh_ch_common_encryptedVotes_setVote(value) { this._vote = value;}

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
function univote_bfh_ch_common_encryptedVotes_getSignature() { return this._signature;}

univote_bfh_ch_common_encryptedVotes.prototype.getSignature = univote_bfh_ch_common_encryptedVotes_getSignature;

function univote_bfh_ch_common_encryptedVotes_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
// Constructor for XML Schema item {http://univote.bfh.ch/common}mixerInfo
//
function univote_bfh_ch_common_mixerInfo () {
    this.typeMarker = 'univote_bfh_ch_common_mixerInfo';
    this._identifier = '';
    this._endpointUrl = '';
    this._certificate = null;
    this._signature = null;
}

//
// accessor is univote_bfh_ch_common_mixerInfo.prototype.getIdentifier
// element get for identifier
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for identifier
// setter function is is univote_bfh_ch_common_mixerInfo.prototype.setIdentifier
//
function univote_bfh_ch_common_mixerInfo_getIdentifier() { return this._identifier;}

univote_bfh_ch_common_mixerInfo.prototype.getIdentifier = univote_bfh_ch_common_mixerInfo_getIdentifier;

function univote_bfh_ch_common_mixerInfo_setIdentifier(value) { this._identifier = value;}

univote_bfh_ch_common_mixerInfo.prototype.setIdentifier = univote_bfh_ch_common_mixerInfo_setIdentifier;
//
// accessor is univote_bfh_ch_common_mixerInfo.prototype.getEndpointUrl
// element get for endpointUrl
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for endpointUrl
// setter function is is univote_bfh_ch_common_mixerInfo.prototype.setEndpointUrl
//
function univote_bfh_ch_common_mixerInfo_getEndpointUrl() { return this._endpointUrl;}

univote_bfh_ch_common_mixerInfo.prototype.getEndpointUrl = univote_bfh_ch_common_mixerInfo_getEndpointUrl;

function univote_bfh_ch_common_mixerInfo_setEndpointUrl(value) { this._endpointUrl = value;}

univote_bfh_ch_common_mixerInfo.prototype.setEndpointUrl = univote_bfh_ch_common_mixerInfo_setEndpointUrl;
//
// accessor is univote_bfh_ch_common_mixerInfo.prototype.getCertificate
// element get for certificate
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for certificate
// setter function is is univote_bfh_ch_common_mixerInfo.prototype.setCertificate
//
function univote_bfh_ch_common_mixerInfo_getCertificate() { return this._certificate;}

univote_bfh_ch_common_mixerInfo.prototype.getCertificate = univote_bfh_ch_common_mixerInfo_getCertificate;

function univote_bfh_ch_common_mixerInfo_setCertificate(value) { this._certificate = value;}

univote_bfh_ch_common_mixerInfo.prototype.setCertificate = univote_bfh_ch_common_mixerInfo_setCertificate;
//
// accessor is univote_bfh_ch_common_mixerInfo.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_mixerInfo.prototype.setSignature
//
function univote_bfh_ch_common_mixerInfo_getSignature() { return this._signature;}

univote_bfh_ch_common_mixerInfo.prototype.getSignature = univote_bfh_ch_common_mixerInfo_getSignature;

function univote_bfh_ch_common_mixerInfo_setSignature(value) { this._signature = value;}

univote_bfh_ch_common_mixerInfo.prototype.setSignature = univote_bfh_ch_common_mixerInfo_setSignature;
//
// Serialize {http://univote.bfh.ch/common}mixerInfo
//
function univote_bfh_ch_common_mixerInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<identifier>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._identifier);
     xml = xml + '</identifier>';
    }
    // block for local variables
    {
     xml = xml + '<endpointUrl>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._endpointUrl);
     xml = xml + '</endpointUrl>';
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

univote_bfh_ch_common_mixerInfo.prototype.serialize = univote_bfh_ch_common_mixerInfo_serialize;

function univote_bfh_ch_common_mixerInfo_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_mixerInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing identifier');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setIdentifier(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing endpointUrl');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setEndpointUrl(item);
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
// Constructor for XML Schema item {http://univote.bfh.ch/common}tallierInfo
//
function univote_bfh_ch_common_tallierInfo () {
    this.typeMarker = 'univote_bfh_ch_common_tallierInfo';
    this._identifier = '';
    this._endpointUrl = '';
    this._certificate = null;
    this._signature = null;
}

//
// accessor is univote_bfh_ch_common_tallierInfo.prototype.getIdentifier
// element get for identifier
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for identifier
// setter function is is univote_bfh_ch_common_tallierInfo.prototype.setIdentifier
//
function univote_bfh_ch_common_tallierInfo_getIdentifier() { return this._identifier;}

univote_bfh_ch_common_tallierInfo.prototype.getIdentifier = univote_bfh_ch_common_tallierInfo_getIdentifier;

function univote_bfh_ch_common_tallierInfo_setIdentifier(value) { this._identifier = value;}

univote_bfh_ch_common_tallierInfo.prototype.setIdentifier = univote_bfh_ch_common_tallierInfo_setIdentifier;
//
// accessor is univote_bfh_ch_common_tallierInfo.prototype.getEndpointUrl
// element get for endpointUrl
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for endpointUrl
// setter function is is univote_bfh_ch_common_tallierInfo.prototype.setEndpointUrl
//
function univote_bfh_ch_common_tallierInfo_getEndpointUrl() { return this._endpointUrl;}

univote_bfh_ch_common_tallierInfo.prototype.getEndpointUrl = univote_bfh_ch_common_tallierInfo_getEndpointUrl;

function univote_bfh_ch_common_tallierInfo_setEndpointUrl(value) { this._endpointUrl = value;}

univote_bfh_ch_common_tallierInfo.prototype.setEndpointUrl = univote_bfh_ch_common_tallierInfo_setEndpointUrl;
//
// accessor is univote_bfh_ch_common_tallierInfo.prototype.getCertificate
// element get for certificate
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for certificate
// setter function is is univote_bfh_ch_common_tallierInfo.prototype.setCertificate
//
function univote_bfh_ch_common_tallierInfo_getCertificate() { return this._certificate;}

univote_bfh_ch_common_tallierInfo.prototype.getCertificate = univote_bfh_ch_common_tallierInfo_getCertificate;

function univote_bfh_ch_common_tallierInfo_setCertificate(value) { this._certificate = value;}

univote_bfh_ch_common_tallierInfo.prototype.setCertificate = univote_bfh_ch_common_tallierInfo_setCertificate;
//
// accessor is univote_bfh_ch_common_tallierInfo.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_tallierInfo.prototype.setSignature
//
function univote_bfh_ch_common_tallierInfo_getSignature() { return this._signature;}

univote_bfh_ch_common_tallierInfo.prototype.getSignature = univote_bfh_ch_common_tallierInfo_getSignature;

function univote_bfh_ch_common_tallierInfo_setSignature(value) { this._signature = value;}

univote_bfh_ch_common_tallierInfo.prototype.setSignature = univote_bfh_ch_common_tallierInfo_setSignature;
//
// Serialize {http://univote.bfh.ch/common}tallierInfo
//
function univote_bfh_ch_common_tallierInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<identifier>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._identifier);
     xml = xml + '</identifier>';
    }
    // block for local variables
    {
     xml = xml + '<endpointUrl>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._endpointUrl);
     xml = xml + '</endpointUrl>';
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

univote_bfh_ch_common_tallierInfo.prototype.serialize = univote_bfh_ch_common_tallierInfo_serialize;

function univote_bfh_ch_common_tallierInfo_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_tallierInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing identifier');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setIdentifier(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing endpointUrl');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setEndpointUrl(item);
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
function univote_bfh_ch_common_encryptionKeyShare_getElectionId() { return this._electionId;}

univote_bfh_ch_common_encryptionKeyShare.prototype.getElectionId = univote_bfh_ch_common_encryptionKeyShare_getElectionId;

function univote_bfh_ch_common_encryptionKeyShare_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_encryptionKeyShare_getKey() { return this._key;}

univote_bfh_ch_common_encryptionKeyShare.prototype.getKey = univote_bfh_ch_common_encryptionKeyShare_getKey;

function univote_bfh_ch_common_encryptionKeyShare_setKey(value) { this._key = value;}

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
function univote_bfh_ch_common_encryptionKeyShare_getProof() { return this._proof;}

univote_bfh_ch_common_encryptionKeyShare.prototype.getProof = univote_bfh_ch_common_encryptionKeyShare_getProof;

function univote_bfh_ch_common_encryptionKeyShare_setProof(value) { this._proof = value;}

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
function univote_bfh_ch_common_encryptionKeyShare_getSignature() { return this._signature;}

univote_bfh_ch_common_encryptionKeyShare.prototype.getSignature = univote_bfh_ch_common_encryptionKeyShare_getSignature;

function univote_bfh_ch_common_encryptionKeyShare_setSignature(value) { this._signature = value;}

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
function univote_bfh_ch_common_voterSignature_getFirstValue() { return this._firstValue;}

univote_bfh_ch_common_voterSignature.prototype.getFirstValue = univote_bfh_ch_common_voterSignature_getFirstValue;

function univote_bfh_ch_common_voterSignature_setFirstValue(value) { this._firstValue = value;}

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
function univote_bfh_ch_common_voterSignature_getSecondValue() { return this._secondValue;}

univote_bfh_ch_common_voterSignature.prototype.getSecondValue = univote_bfh_ch_common_voterSignature_getSecondValue;

function univote_bfh_ch_common_voterSignature_setSecondValue(value) { this._secondValue = value;}

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
function univote_bfh_ch_common_encryptedVote_getFirstValue() { return this._firstValue;}

univote_bfh_ch_common_encryptedVote.prototype.getFirstValue = univote_bfh_ch_common_encryptedVote_getFirstValue;

function univote_bfh_ch_common_encryptedVote_setFirstValue(value) { this._firstValue = value;}

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
function univote_bfh_ch_common_encryptedVote_getSecondValue() { return this._secondValue;}

univote_bfh_ch_common_encryptedVote.prototype.getSecondValue = univote_bfh_ch_common_encryptedVote_getSecondValue;

function univote_bfh_ch_common_encryptedVote_setSecondValue(value) { this._secondValue = value;}

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
// Constructor for XML Schema item {http://univote.bfh.ch/common}electionManagerInfo
//
function univote_bfh_ch_common_electionManagerInfo () {
    this.typeMarker = 'univote_bfh_ch_common_electionManagerInfo';
    this._identifier = '';
    this._certificate = null;
    this._signature = null;
}

//
// accessor is univote_bfh_ch_common_electionManagerInfo.prototype.getIdentifier
// element get for identifier
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for identifier
// setter function is is univote_bfh_ch_common_electionManagerInfo.prototype.setIdentifier
//
function univote_bfh_ch_common_electionManagerInfo_getIdentifier() { return this._identifier;}

univote_bfh_ch_common_electionManagerInfo.prototype.getIdentifier = univote_bfh_ch_common_electionManagerInfo_getIdentifier;

function univote_bfh_ch_common_electionManagerInfo_setIdentifier(value) { this._identifier = value;}

univote_bfh_ch_common_electionManagerInfo.prototype.setIdentifier = univote_bfh_ch_common_electionManagerInfo_setIdentifier;
//
// accessor is univote_bfh_ch_common_electionManagerInfo.prototype.getCertificate
// element get for certificate
// - element type is {http://univote.bfh.ch/common}certificate
// - required element
//
// element set for certificate
// setter function is is univote_bfh_ch_common_electionManagerInfo.prototype.setCertificate
//
function univote_bfh_ch_common_electionManagerInfo_getCertificate() { return this._certificate;}

univote_bfh_ch_common_electionManagerInfo.prototype.getCertificate = univote_bfh_ch_common_electionManagerInfo_getCertificate;

function univote_bfh_ch_common_electionManagerInfo_setCertificate(value) { this._certificate = value;}

univote_bfh_ch_common_electionManagerInfo.prototype.setCertificate = univote_bfh_ch_common_electionManagerInfo_setCertificate;
//
// accessor is univote_bfh_ch_common_electionManagerInfo.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electionManagerInfo.prototype.setSignature
//
function univote_bfh_ch_common_electionManagerInfo_getSignature() { return this._signature;}

univote_bfh_ch_common_electionManagerInfo.prototype.getSignature = univote_bfh_ch_common_electionManagerInfo_getSignature;

function univote_bfh_ch_common_electionManagerInfo_setSignature(value) { this._signature = value;}

univote_bfh_ch_common_electionManagerInfo.prototype.setSignature = univote_bfh_ch_common_electionManagerInfo_setSignature;
//
// Serialize {http://univote.bfh.ch/common}electionManagerInfo
//
function univote_bfh_ch_common_electionManagerInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<identifier>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._identifier);
     xml = xml + '</identifier>';
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

univote_bfh_ch_common_electionManagerInfo.prototype.serialize = univote_bfh_ch_common_electionManagerInfo_serialize;

function univote_bfh_ch_common_electionManagerInfo_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_electionManagerInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing identifier');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setIdentifier(item);
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
function univote_bfh_ch_common_signature_getSignerId() { return this._signerId;}

univote_bfh_ch_common_signature.prototype.getSignerId = univote_bfh_ch_common_signature_getSignerId;

function univote_bfh_ch_common_signature_setSignerId(value) { this._signerId = value;}

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
function univote_bfh_ch_common_signature_getTimestamp() { return this._timestamp;}

univote_bfh_ch_common_signature.prototype.getTimestamp = univote_bfh_ch_common_signature_getTimestamp;

function univote_bfh_ch_common_signature_setTimestamp(value) { this._timestamp = value;}

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
function univote_bfh_ch_common_signature_getValue() { return this._value;}

univote_bfh_ch_common_signature.prototype.getValue = univote_bfh_ch_common_signature_getValue;

function univote_bfh_ch_common_signature_setValue(value) { this._value = value;}

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
// Constructor for XML Schema item {http://univote.bfh.ch/common}revokedCertificate
//
function univote_bfh_ch_common_revokedCertificate () {
    this.typeMarker = 'univote_bfh_ch_common_revokedCertificate';
    this._electionId = '';
    this._voterId = '';
    this._key = '';
    this._value = '';
    this._signature = null;
}

//
// accessor is univote_bfh_ch_common_revokedCertificate.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_revokedCertificate.prototype.setElectionId
//
function univote_bfh_ch_common_revokedCertificate_getElectionId() { return this._electionId;}

univote_bfh_ch_common_revokedCertificate.prototype.getElectionId = univote_bfh_ch_common_revokedCertificate_getElectionId;

function univote_bfh_ch_common_revokedCertificate_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_common_revokedCertificate.prototype.setElectionId = univote_bfh_ch_common_revokedCertificate_setElectionId;
//
// accessor is univote_bfh_ch_common_revokedCertificate.prototype.getVoterId
// element get for voterId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for voterId
// setter function is is univote_bfh_ch_common_revokedCertificate.prototype.setVoterId
//
function univote_bfh_ch_common_revokedCertificate_getVoterId() { return this._voterId;}

univote_bfh_ch_common_revokedCertificate.prototype.getVoterId = univote_bfh_ch_common_revokedCertificate_getVoterId;

function univote_bfh_ch_common_revokedCertificate_setVoterId(value) { this._voterId = value;}

univote_bfh_ch_common_revokedCertificate.prototype.setVoterId = univote_bfh_ch_common_revokedCertificate_setVoterId;
//
// accessor is univote_bfh_ch_common_revokedCertificate.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for key
// setter function is is univote_bfh_ch_common_revokedCertificate.prototype.setKey
//
function univote_bfh_ch_common_revokedCertificate_getKey() { return this._key;}

univote_bfh_ch_common_revokedCertificate.prototype.getKey = univote_bfh_ch_common_revokedCertificate_getKey;

function univote_bfh_ch_common_revokedCertificate_setKey(value) { this._key = value;}

univote_bfh_ch_common_revokedCertificate.prototype.setKey = univote_bfh_ch_common_revokedCertificate_setKey;
//
// accessor is univote_bfh_ch_common_revokedCertificate.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - required element
//
// element set for value
// setter function is is univote_bfh_ch_common_revokedCertificate.prototype.setValue
//
function univote_bfh_ch_common_revokedCertificate_getValue() { return this._value;}

univote_bfh_ch_common_revokedCertificate.prototype.getValue = univote_bfh_ch_common_revokedCertificate_getValue;

function univote_bfh_ch_common_revokedCertificate_setValue(value) { this._value = value;}

univote_bfh_ch_common_revokedCertificate.prototype.setValue = univote_bfh_ch_common_revokedCertificate_setValue;
//
// accessor is univote_bfh_ch_common_revokedCertificate.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_revokedCertificate.prototype.setSignature
//
function univote_bfh_ch_common_revokedCertificate_getSignature() { return this._signature;}

univote_bfh_ch_common_revokedCertificate.prototype.getSignature = univote_bfh_ch_common_revokedCertificate_getSignature;

function univote_bfh_ch_common_revokedCertificate_setSignature(value) { this._signature = value;}

univote_bfh_ch_common_revokedCertificate.prototype.setSignature = univote_bfh_ch_common_revokedCertificate_setSignature;
//
// Serialize {http://univote.bfh.ch/common}revokedCertificate
//
function univote_bfh_ch_common_revokedCertificate_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<voterId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._voterId);
     xml = xml + '</voterId>';
    }
    // block for local variables
    {
     xml = xml + '<key>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._key);
     xml = xml + '</key>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
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

univote_bfh_ch_common_revokedCertificate.prototype.serialize = univote_bfh_ch_common_revokedCertificate_serialize;

function univote_bfh_ch_common_revokedCertificate_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_revokedCertificate();
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
    cxfjsutils.trace('processing voterId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setVoterId(item);
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
function univote_bfh_ch_common_mixedEncryptedVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.getElectionId = univote_bfh_ch_common_mixedEncryptedVotes_getElectionId;

function univote_bfh_ch_common_mixedEncryptedVotes_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_mixedEncryptedVotes_getVote() { return this._vote;}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.getVote = univote_bfh_ch_common_mixedEncryptedVotes_getVote;

function univote_bfh_ch_common_mixedEncryptedVotes_setVote(value) { this._vote = value;}

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
function univote_bfh_ch_common_mixedEncryptedVotes_getProof() { return this._proof;}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.getProof = univote_bfh_ch_common_mixedEncryptedVotes_getProof;

function univote_bfh_ch_common_mixedEncryptedVotes_setProof(value) { this._proof = value;}

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
function univote_bfh_ch_common_mixedEncryptedVotes_getSignature() { return this._signature;}

univote_bfh_ch_common_mixedEncryptedVotes.prototype.getSignature = univote_bfh_ch_common_mixedEncryptedVotes_getSignature;

function univote_bfh_ch_common_mixedEncryptedVotes_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
function univote_bfh_ch_common_electionGenerator_getElectionId() { return this._electionId;}

univote_bfh_ch_common_electionGenerator.prototype.getElectionId = univote_bfh_ch_common_electionGenerator_getElectionId;

function univote_bfh_ch_common_electionGenerator_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_electionGenerator_getGenerator() { return this._generator;}

univote_bfh_ch_common_electionGenerator.prototype.getGenerator = univote_bfh_ch_common_electionGenerator_getGenerator;

function univote_bfh_ch_common_electionGenerator_setGenerator(value) { this._generator = value;}

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
function univote_bfh_ch_common_electionGenerator_getSignature() { return this._signature;}

univote_bfh_ch_common_electionGenerator.prototype.getSignature = univote_bfh_ch_common_electionGenerator_getSignature;

function univote_bfh_ch_common_electionGenerator_setSignature(value) { this._signature = value;}

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
function univote_bfh_ch_common_certificate_getValue() { return this._value;}

univote_bfh_ch_common_certificate.prototype.getValue = univote_bfh_ch_common_certificate_getValue;

function univote_bfh_ch_common_certificate_setValue(value) { this._value = value;}

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
    this._title = '';
    this._keyLength = 0;
    this._mixerId = [];
    this._tallierId = [];
    this._votingPhaseBegin = '';
    this._votingPhaseEnd = '';
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
function univote_bfh_ch_common_electionDefinition_getElectionId() { return this._electionId;}

univote_bfh_ch_common_electionDefinition.prototype.getElectionId = univote_bfh_ch_common_electionDefinition_getElectionId;

function univote_bfh_ch_common_electionDefinition_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_common_electionDefinition.prototype.setElectionId = univote_bfh_ch_common_electionDefinition_setElectionId;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getTitle
// element get for title
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for title
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setTitle
//
function univote_bfh_ch_common_electionDefinition_getTitle() { return this._title;}

univote_bfh_ch_common_electionDefinition.prototype.getTitle = univote_bfh_ch_common_electionDefinition_getTitle;

function univote_bfh_ch_common_electionDefinition_setTitle(value) { this._title = value;}

univote_bfh_ch_common_electionDefinition.prototype.setTitle = univote_bfh_ch_common_electionDefinition_setTitle;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getKeyLength
// element get for keyLength
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for keyLength
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setKeyLength
//
function univote_bfh_ch_common_electionDefinition_getKeyLength() { return this._keyLength;}

univote_bfh_ch_common_electionDefinition.prototype.getKeyLength = univote_bfh_ch_common_electionDefinition_getKeyLength;

function univote_bfh_ch_common_electionDefinition_setKeyLength(value) { this._keyLength = value;}

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
function univote_bfh_ch_common_electionDefinition_getMixerId() { return this._mixerId;}

univote_bfh_ch_common_electionDefinition.prototype.getMixerId = univote_bfh_ch_common_electionDefinition_getMixerId;

function univote_bfh_ch_common_electionDefinition_setMixerId(value) { this._mixerId = value;}

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
function univote_bfh_ch_common_electionDefinition_getTallierId() { return this._tallierId;}

univote_bfh_ch_common_electionDefinition.prototype.getTallierId = univote_bfh_ch_common_electionDefinition_getTallierId;

function univote_bfh_ch_common_electionDefinition_setTallierId(value) { this._tallierId = value;}

univote_bfh_ch_common_electionDefinition.prototype.setTallierId = univote_bfh_ch_common_electionDefinition_setTallierId;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getVotingPhaseBegin
// element get for votingPhaseBegin
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for votingPhaseBegin
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setVotingPhaseBegin
//
function univote_bfh_ch_common_electionDefinition_getVotingPhaseBegin() { return this._votingPhaseBegin;}

univote_bfh_ch_common_electionDefinition.prototype.getVotingPhaseBegin = univote_bfh_ch_common_electionDefinition_getVotingPhaseBegin;

function univote_bfh_ch_common_electionDefinition_setVotingPhaseBegin(value) { this._votingPhaseBegin = value;}

univote_bfh_ch_common_electionDefinition.prototype.setVotingPhaseBegin = univote_bfh_ch_common_electionDefinition_setVotingPhaseBegin;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getVotingPhaseEnd
// element get for votingPhaseEnd
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for votingPhaseEnd
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setVotingPhaseEnd
//
function univote_bfh_ch_common_electionDefinition_getVotingPhaseEnd() { return this._votingPhaseEnd;}

univote_bfh_ch_common_electionDefinition.prototype.getVotingPhaseEnd = univote_bfh_ch_common_electionDefinition_getVotingPhaseEnd;

function univote_bfh_ch_common_electionDefinition_setVotingPhaseEnd(value) { this._votingPhaseEnd = value;}

univote_bfh_ch_common_electionDefinition.prototype.setVotingPhaseEnd = univote_bfh_ch_common_electionDefinition_setVotingPhaseEnd;
//
// accessor is univote_bfh_ch_common_electionDefinition.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_electionDefinition.prototype.setSignature
//
function univote_bfh_ch_common_electionDefinition_getSignature() { return this._signature;}

univote_bfh_ch_common_electionDefinition.prototype.getSignature = univote_bfh_ch_common_electionDefinition_getSignature;

function univote_bfh_ch_common_electionDefinition_setSignature(value) { this._signature = value;}

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
     xml = xml + '<title>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._title);
     xml = xml + '</title>';
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
     xml = xml + '<votingPhaseBegin>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._votingPhaseBegin);
     xml = xml + '</votingPhaseBegin>';
    }
    // block for local variables
    {
     xml = xml + '<votingPhaseEnd>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._votingPhaseEnd);
     xml = xml + '</votingPhaseEnd>';
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
    cxfjsutils.trace('processing title');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTitle(item);
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
      var arrayItem = null;
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
      var arrayItem = null;
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
    cxfjsutils.trace('processing votingPhaseBegin');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setVotingPhaseBegin(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing votingPhaseEnd');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setVotingPhaseEnd(item);
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
function univote_bfh_ch_common_decryptedVotes_getElectionId() { return this._electionId;}

univote_bfh_ch_common_decryptedVotes.prototype.getElectionId = univote_bfh_ch_common_decryptedVotes_getElectionId;

function univote_bfh_ch_common_decryptedVotes_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_decryptedVotes_getVote() { return this._vote;}

univote_bfh_ch_common_decryptedVotes.prototype.getVote = univote_bfh_ch_common_decryptedVotes_getVote;

function univote_bfh_ch_common_decryptedVotes_setVote(value) { this._vote = value;}

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
function univote_bfh_ch_common_decryptedVotes_getSignature() { return this._signature;}

univote_bfh_ch_common_decryptedVotes.prototype.getSignature = univote_bfh_ch_common_decryptedVotes_getSignature;

function univote_bfh_ch_common_decryptedVotes_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
function univote_bfh_ch_common_verificationKeysToMix_getMixerId() { return this._mixerId;}

univote_bfh_ch_common_verificationKeysToMix.prototype.getMixerId = univote_bfh_ch_common_verificationKeysToMix_getMixerId;

function univote_bfh_ch_common_verificationKeysToMix_setMixerId(value) { this._mixerId = value;}

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
function univote_bfh_ch_common_verificationKeysToMix_getElectionId() { return this._electionId;}

univote_bfh_ch_common_verificationKeysToMix.prototype.getElectionId = univote_bfh_ch_common_verificationKeysToMix_getElectionId;

function univote_bfh_ch_common_verificationKeysToMix_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_verificationKeysToMix_getKey() { return this._key;}

univote_bfh_ch_common_verificationKeysToMix.prototype.getKey = univote_bfh_ch_common_verificationKeysToMix_getKey;

function univote_bfh_ch_common_verificationKeysToMix_setKey(value) { this._key = value;}

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
function univote_bfh_ch_common_verificationKeysToMix_getSignature() { return this._signature;}

univote_bfh_ch_common_verificationKeysToMix.prototype.getSignature = univote_bfh_ch_common_verificationKeysToMix_getSignature;

function univote_bfh_ch_common_verificationKeysToMix_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
    this._number = '';
    this._lastName = '';
    this._firstName = '';
    this._sex = '';
    this._yearOfBirth = '';
    this._studyBranch = [];
    this._studyDegree = [];
    this._semesterCount = 0;
    this._status = '';
    this._listId = 0;
    this._cumulation = 0;
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
function univote_bfh_ch_common_candidate_getChoiceId() { return this._choiceId;}

univote_bfh_ch_common_candidate.prototype.getChoiceId = univote_bfh_ch_common_candidate_getChoiceId;

function univote_bfh_ch_common_candidate_setChoiceId(value) { this._choiceId = value;}

univote_bfh_ch_common_candidate.prototype.setChoiceId = univote_bfh_ch_common_candidate_setChoiceId;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getNumber
// element get for number
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for number
// setter function is is univote_bfh_ch_common_candidate.prototype.setNumber
//
function univote_bfh_ch_common_candidate_getNumber() { return this._number;}

univote_bfh_ch_common_candidate.prototype.getNumber = univote_bfh_ch_common_candidate_getNumber;

function univote_bfh_ch_common_candidate_setNumber(value) { this._number = value;}

univote_bfh_ch_common_candidate.prototype.setNumber = univote_bfh_ch_common_candidate_setNumber;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getLastName
// element get for lastName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for lastName
// setter function is is univote_bfh_ch_common_candidate.prototype.setLastName
//
function univote_bfh_ch_common_candidate_getLastName() { return this._lastName;}

univote_bfh_ch_common_candidate.prototype.getLastName = univote_bfh_ch_common_candidate_getLastName;

function univote_bfh_ch_common_candidate_setLastName(value) { this._lastName = value;}

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
function univote_bfh_ch_common_candidate_getFirstName() { return this._firstName;}

univote_bfh_ch_common_candidate.prototype.getFirstName = univote_bfh_ch_common_candidate_getFirstName;

function univote_bfh_ch_common_candidate_setFirstName(value) { this._firstName = value;}

univote_bfh_ch_common_candidate.prototype.setFirstName = univote_bfh_ch_common_candidate_setFirstName;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getSex
// element get for sex
// - element type is {http://univote.bfh.ch/common}sex
// - required element
//
// element set for sex
// setter function is is univote_bfh_ch_common_candidate.prototype.setSex
//
function univote_bfh_ch_common_candidate_getSex() { return this._sex;}

univote_bfh_ch_common_candidate.prototype.getSex = univote_bfh_ch_common_candidate_getSex;

function univote_bfh_ch_common_candidate_setSex(value) { this._sex = value;}

univote_bfh_ch_common_candidate.prototype.setSex = univote_bfh_ch_common_candidate_setSex;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getYearOfBirth
// element get for yearOfBirth
// - element type is {http://www.w3.org/2001/XMLSchema}gYear
// - required element
//
// element set for yearOfBirth
// setter function is is univote_bfh_ch_common_candidate.prototype.setYearOfBirth
//
function univote_bfh_ch_common_candidate_getYearOfBirth() { return this._yearOfBirth;}

univote_bfh_ch_common_candidate.prototype.getYearOfBirth = univote_bfh_ch_common_candidate_getYearOfBirth;

function univote_bfh_ch_common_candidate_setYearOfBirth(value) { this._yearOfBirth = value;}

univote_bfh_ch_common_candidate.prototype.setYearOfBirth = univote_bfh_ch_common_candidate_setYearOfBirth;
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
function univote_bfh_ch_common_candidate_getStudyBranch() { return this._studyBranch;}

univote_bfh_ch_common_candidate.prototype.getStudyBranch = univote_bfh_ch_common_candidate_getStudyBranch;

function univote_bfh_ch_common_candidate_setStudyBranch(value) { this._studyBranch = value;}

univote_bfh_ch_common_candidate.prototype.setStudyBranch = univote_bfh_ch_common_candidate_setStudyBranch;
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
function univote_bfh_ch_common_candidate_getStudyDegree() { return this._studyDegree;}

univote_bfh_ch_common_candidate.prototype.getStudyDegree = univote_bfh_ch_common_candidate_getStudyDegree;

function univote_bfh_ch_common_candidate_setStudyDegree(value) { this._studyDegree = value;}

univote_bfh_ch_common_candidate.prototype.setStudyDegree = univote_bfh_ch_common_candidate_setStudyDegree;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getSemesterCount
// element get for semesterCount
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for semesterCount
// setter function is is univote_bfh_ch_common_candidate.prototype.setSemesterCount
//
function univote_bfh_ch_common_candidate_getSemesterCount() { return this._semesterCount;}

univote_bfh_ch_common_candidate.prototype.getSemesterCount = univote_bfh_ch_common_candidate_getSemesterCount;

function univote_bfh_ch_common_candidate_setSemesterCount(value) { this._semesterCount = value;}

univote_bfh_ch_common_candidate.prototype.setSemesterCount = univote_bfh_ch_common_candidate_setSemesterCount;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getStatus
// element get for status
// - element type is {http://univote.bfh.ch/common}candidateStatus
// - required element
//
// element set for status
// setter function is is univote_bfh_ch_common_candidate.prototype.setStatus
//
function univote_bfh_ch_common_candidate_getStatus() { return this._status;}

univote_bfh_ch_common_candidate.prototype.getStatus = univote_bfh_ch_common_candidate_getStatus;

function univote_bfh_ch_common_candidate_setStatus(value) { this._status = value;}

univote_bfh_ch_common_candidate.prototype.setStatus = univote_bfh_ch_common_candidate_setStatus;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getListId
// element get for listId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for listId
// setter function is is univote_bfh_ch_common_candidate.prototype.setListId
//
function univote_bfh_ch_common_candidate_getListId() { return this._listId;}

univote_bfh_ch_common_candidate.prototype.getListId = univote_bfh_ch_common_candidate_getListId;

function univote_bfh_ch_common_candidate_setListId(value) { this._listId = value;}

univote_bfh_ch_common_candidate.prototype.setListId = univote_bfh_ch_common_candidate_setListId;
//
// accessor is univote_bfh_ch_common_candidate.prototype.getCumulation
// element get for cumulation
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for cumulation
// setter function is is univote_bfh_ch_common_candidate.prototype.setCumulation
//
function univote_bfh_ch_common_candidate_getCumulation() { return this._cumulation;}

univote_bfh_ch_common_candidate.prototype.getCumulation = univote_bfh_ch_common_candidate_getCumulation;

function univote_bfh_ch_common_candidate_setCumulation(value) { this._cumulation = value;}

univote_bfh_ch_common_candidate.prototype.setCumulation = univote_bfh_ch_common_candidate_setCumulation;
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
     xml = xml + '<number>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._number);
     xml = xml + '</number>';
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
     xml = xml + '<sex>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._sex);
     xml = xml + '</sex>';
    }
    // block for local variables
    {
     xml = xml + '<yearOfBirth>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._yearOfBirth);
     xml = xml + '</yearOfBirth>';
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
     xml = xml + '<semesterCount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._semesterCount);
     xml = xml + '</semesterCount>';
    }
    // block for local variables
    {
     xml = xml + '<status>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._status);
     xml = xml + '</status>';
    }
    // block for local variables
    {
     xml = xml + '<listId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._listId);
     xml = xml + '</listId>';
    }
    // block for local variables
    {
     xml = xml + '<cumulation>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._cumulation);
     xml = xml + '</cumulation>';
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
    cxfjsutils.trace('processing number');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setNumber(item);
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
    cxfjsutils.trace('processing sex');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSex(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing yearOfBirth');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setYearOfBirth(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing studyBranch');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'studyBranch')) {
     item = [];
     do  {
      var arrayItem = null;
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
    cxfjsutils.trace('processing studyDegree');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'studyDegree')) {
     item = [];
     do  {
      var arrayItem = null;
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
    cxfjsutils.trace('processing status');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setStatus(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing listId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setListId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cumulation');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCumulation(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://univote.bfh.ch/common}politicalList
//
function univote_bfh_ch_common_politicalList () {
    this.typeMarker = 'univote_bfh_ch_common_politicalList';
    this._choiceId = 0;
    this._number = '';
    this._title = [];
    this._partyName = [];
    this._partyShortName = [];
}

//
// accessor is univote_bfh_ch_common_politicalList.prototype.getChoiceId
// element get for choiceId
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for choiceId
// setter function is is univote_bfh_ch_common_politicalList.prototype.setChoiceId
//
function univote_bfh_ch_common_politicalList_getChoiceId() { return this._choiceId;}

univote_bfh_ch_common_politicalList.prototype.getChoiceId = univote_bfh_ch_common_politicalList_getChoiceId;

function univote_bfh_ch_common_politicalList_setChoiceId(value) { this._choiceId = value;}

univote_bfh_ch_common_politicalList.prototype.setChoiceId = univote_bfh_ch_common_politicalList_setChoiceId;
//
// accessor is univote_bfh_ch_common_politicalList.prototype.getNumber
// element get for number
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for number
// setter function is is univote_bfh_ch_common_politicalList.prototype.setNumber
//
function univote_bfh_ch_common_politicalList_getNumber() { return this._number;}

univote_bfh_ch_common_politicalList.prototype.getNumber = univote_bfh_ch_common_politicalList_getNumber;

function univote_bfh_ch_common_politicalList_setNumber(value) { this._number = value;}

univote_bfh_ch_common_politicalList.prototype.setNumber = univote_bfh_ch_common_politicalList_setNumber;
//
// accessor is univote_bfh_ch_common_politicalList.prototype.getTitle
// element get for title
// - element type is {http://univote.bfh.ch/common}localizedText
// - required element
// - array
//
// element set for title
// setter function is is univote_bfh_ch_common_politicalList.prototype.setTitle
//
function univote_bfh_ch_common_politicalList_getTitle() { return this._title;}

univote_bfh_ch_common_politicalList.prototype.getTitle = univote_bfh_ch_common_politicalList_getTitle;

function univote_bfh_ch_common_politicalList_setTitle(value) { this._title = value;}

univote_bfh_ch_common_politicalList.prototype.setTitle = univote_bfh_ch_common_politicalList_setTitle;
//
// accessor is univote_bfh_ch_common_politicalList.prototype.getPartyName
// element get for partyName
// - element type is {http://univote.bfh.ch/common}localizedText
// - required element
// - array
//
// element set for partyName
// setter function is is univote_bfh_ch_common_politicalList.prototype.setPartyName
//
function univote_bfh_ch_common_politicalList_getPartyName() { return this._partyName;}

univote_bfh_ch_common_politicalList.prototype.getPartyName = univote_bfh_ch_common_politicalList_getPartyName;

function univote_bfh_ch_common_politicalList_setPartyName(value) { this._partyName = value;}

univote_bfh_ch_common_politicalList.prototype.setPartyName = univote_bfh_ch_common_politicalList_setPartyName;
//
// accessor is univote_bfh_ch_common_politicalList.prototype.getPartyShortName
// element get for partyShortName
// - element type is {http://univote.bfh.ch/common}localizedText
// - required element
// - array
//
// element set for partyShortName
// setter function is is univote_bfh_ch_common_politicalList.prototype.setPartyShortName
//
function univote_bfh_ch_common_politicalList_getPartyShortName() { return this._partyShortName;}

univote_bfh_ch_common_politicalList.prototype.getPartyShortName = univote_bfh_ch_common_politicalList_getPartyShortName;

function univote_bfh_ch_common_politicalList_setPartyShortName(value) { this._partyShortName = value;}

univote_bfh_ch_common_politicalList.prototype.setPartyShortName = univote_bfh_ch_common_politicalList_setPartyShortName;
//
// Serialize {http://univote.bfh.ch/common}politicalList
//
function univote_bfh_ch_common_politicalList_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<number>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._number);
     xml = xml + '</number>';
    }
    // block for local variables
    {
     if (this._title != null) {
      for (var ax = 0;ax < this._title.length;ax ++) {
       if (this._title[ax] == null) {
        xml = xml + '<title/>';
       } else {
        xml = xml + this._title[ax].serialize(cxfjsutils, 'title', null);
       }
      }
     }
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

univote_bfh_ch_common_politicalList.prototype.serialize = univote_bfh_ch_common_politicalList_serialize;

function univote_bfh_ch_common_politicalList_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_politicalList();
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
    cxfjsutils.trace('processing number');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setNumber(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing title');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'title')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = univote_bfh_ch_common_localizedText_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'title'));
     newobject.setTitle(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing partyName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'partyName')) {
     item = [];
     do  {
      var arrayItem = null;
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
      var arrayItem = null;
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
function univote_bfh_ch_common_verificationKeys_getElectionId() { return this._electionId;}

univote_bfh_ch_common_verificationKeys.prototype.getElectionId = univote_bfh_ch_common_verificationKeys_getElectionId;

function univote_bfh_ch_common_verificationKeys_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_verificationKeys_getKey() { return this._key;}

univote_bfh_ch_common_verificationKeys.prototype.getKey = univote_bfh_ch_common_verificationKeys_getKey;

function univote_bfh_ch_common_verificationKeys_setKey(value) { this._key = value;}

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
function univote_bfh_ch_common_verificationKeys_getSignature() { return this._signature;}

univote_bfh_ch_common_verificationKeys.prototype.getSignature = univote_bfh_ch_common_verificationKeys_getSignature;

function univote_bfh_ch_common_verificationKeys_setSignature(value) { this._signature = value;}

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
      var arrayItem = null;
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
// Constructor for XML Schema item {http://univote.bfh.ch/common}newCertificate
//
function univote_bfh_ch_common_newCertificate () {
    this.typeMarker = 'univote_bfh_ch_common_newCertificate';
    this._electionId = '';
    this._voterId = '';
    this._key = '';
    this._value = '';
    this._signature = null;
}

//
// accessor is univote_bfh_ch_common_newCertificate.prototype.getElectionId
// element get for electionId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for electionId
// setter function is is univote_bfh_ch_common_newCertificate.prototype.setElectionId
//
function univote_bfh_ch_common_newCertificate_getElectionId() { return this._electionId;}

univote_bfh_ch_common_newCertificate.prototype.getElectionId = univote_bfh_ch_common_newCertificate_getElectionId;

function univote_bfh_ch_common_newCertificate_setElectionId(value) { this._electionId = value;}

univote_bfh_ch_common_newCertificate.prototype.setElectionId = univote_bfh_ch_common_newCertificate_setElectionId;
//
// accessor is univote_bfh_ch_common_newCertificate.prototype.getVoterId
// element get for voterId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for voterId
// setter function is is univote_bfh_ch_common_newCertificate.prototype.setVoterId
//
function univote_bfh_ch_common_newCertificate_getVoterId() { return this._voterId;}

univote_bfh_ch_common_newCertificate.prototype.getVoterId = univote_bfh_ch_common_newCertificate_getVoterId;

function univote_bfh_ch_common_newCertificate_setVoterId(value) { this._voterId = value;}

univote_bfh_ch_common_newCertificate.prototype.setVoterId = univote_bfh_ch_common_newCertificate_setVoterId;
//
// accessor is univote_bfh_ch_common_newCertificate.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for key
// setter function is is univote_bfh_ch_common_newCertificate.prototype.setKey
//
function univote_bfh_ch_common_newCertificate_getKey() { return this._key;}

univote_bfh_ch_common_newCertificate.prototype.getKey = univote_bfh_ch_common_newCertificate_getKey;

function univote_bfh_ch_common_newCertificate_setKey(value) { this._key = value;}

univote_bfh_ch_common_newCertificate.prototype.setKey = univote_bfh_ch_common_newCertificate_setKey;
//
// accessor is univote_bfh_ch_common_newCertificate.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - required element
//
// element set for value
// setter function is is univote_bfh_ch_common_newCertificate.prototype.setValue
//
function univote_bfh_ch_common_newCertificate_getValue() { return this._value;}

univote_bfh_ch_common_newCertificate.prototype.getValue = univote_bfh_ch_common_newCertificate_getValue;

function univote_bfh_ch_common_newCertificate_setValue(value) { this._value = value;}

univote_bfh_ch_common_newCertificate.prototype.setValue = univote_bfh_ch_common_newCertificate_setValue;
//
// accessor is univote_bfh_ch_common_newCertificate.prototype.getSignature
// element get for signature
// - element type is {http://univote.bfh.ch/common}signature
// - required element
//
// element set for signature
// setter function is is univote_bfh_ch_common_newCertificate.prototype.setSignature
//
function univote_bfh_ch_common_newCertificate_getSignature() { return this._signature;}

univote_bfh_ch_common_newCertificate.prototype.getSignature = univote_bfh_ch_common_newCertificate_getSignature;

function univote_bfh_ch_common_newCertificate_setSignature(value) { this._signature = value;}

univote_bfh_ch_common_newCertificate.prototype.setSignature = univote_bfh_ch_common_newCertificate_setSignature;
//
// Serialize {http://univote.bfh.ch/common}newCertificate
//
function univote_bfh_ch_common_newCertificate_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<voterId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._voterId);
     xml = xml + '</voterId>';
    }
    // block for local variables
    {
     xml = xml + '<key>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._key);
     xml = xml + '</key>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
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

univote_bfh_ch_common_newCertificate.prototype.serialize = univote_bfh_ch_common_newCertificate_serialize;

function univote_bfh_ch_common_newCertificate_deserialize (cxfjsutils, element) {
    var newobject = new univote_bfh_ch_common_newCertificate();
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
    cxfjsutils.trace('processing voterId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setVoterId(item);
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
function univote_bfh_ch_common_encryptionParameters_getElectionId() { return this._electionId;}

univote_bfh_ch_common_encryptionParameters.prototype.getElectionId = univote_bfh_ch_common_encryptionParameters_getElectionId;

function univote_bfh_ch_common_encryptionParameters_setElectionId(value) { this._electionId = value;}

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
function univote_bfh_ch_common_encryptionParameters_getPrime() { return this._prime;}

univote_bfh_ch_common_encryptionParameters.prototype.getPrime = univote_bfh_ch_common_encryptionParameters_getPrime;

function univote_bfh_ch_common_encryptionParameters_setPrime(value) { this._prime = value;}

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
function univote_bfh_ch_common_encryptionParameters_getGroupOrder() { return this._groupOrder;}

univote_bfh_ch_common_encryptionParameters.prototype.getGroupOrder = univote_bfh_ch_common_encryptionParameters_getGroupOrder;

function univote_bfh_ch_common_encryptionParameters_setGroupOrder(value) { this._groupOrder = value;}

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
function univote_bfh_ch_common_encryptionParameters_getGenerator() { return this._generator;}

univote_bfh_ch_common_encryptionParameters.prototype.getGenerator = univote_bfh_ch_common_encryptionParameters_getGenerator;

function univote_bfh_ch_common_encryptionParameters_setGenerator(value) { this._generator = value;}

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
function univote_bfh_ch_common_encryptionParameters_getSignature() { return this._signature;}

univote_bfh_ch_common_encryptionParameters.prototype.getSignature = univote_bfh_ch_common_encryptionParameters_getSignature;

function univote_bfh_ch_common_encryptionParameters_setSignature(value) { this._signature = value;}

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
// Definitions for service: {http://univote.bfh.ch/election}ElectionBoardService
//

// Javascript for {http://univote.bfh.ch/election}ElectionBoard

function univote_bfh_ch_election_ElectionBoard () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVerificationKeysMixedBy'] = univote_bfh_ch_election_getVerificationKeysMixedBy_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVerificationKeysMixedBy'] = univote_bfh_ch_election_getVerificationKeysMixedBy_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBallots'] = univote_bfh_ch_election_getBallots_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBallots'] = univote_bfh_ch_election_getBallots_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getMixedVerificationKeys'] = univote_bfh_ch_election_getMixedVerificationKeys_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getMixedVerificationKeys'] = univote_bfh_ch_election_getMixedVerificationKeys_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionKeyResponse'] = univote_bfh_ch_election_getEncryptionKeyResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionKeyResponse'] = univote_bfh_ch_election_getEncryptionKeyResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionOptionsResponse'] = univote_bfh_ch_election_getElectionOptionsResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionOptionsResponse'] = univote_bfh_ch_election_getElectionOptionsResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificatesResponse'] = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificatesResponse'] = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBlindedGenerator'] = univote_bfh_ch_election_getBlindedGenerator_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBlindedGenerator'] = univote_bfh_ch_election_getBlindedGenerator_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBallotResponse'] = univote_bfh_ch_election_getBallotResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBallotResponse'] = univote_bfh_ch_election_getBallotResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getDecryptedVotes'] = univote_bfh_ch_election_getDecryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getDecryptedVotes'] = univote_bfh_ch_election_getDecryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVerificationKeysMixedByResponse'] = univote_bfh_ch_election_getVerificationKeysMixedByResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVerificationKeysMixedByResponse'] = univote_bfh_ch_election_getVerificationKeysMixedByResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getDecryptedVotesResponse'] = univote_bfh_ch_election_getDecryptedVotesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getDecryptedVotesResponse'] = univote_bfh_ch_election_getDecryptedVotesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionKeyShare'] = univote_bfh_ch_election_getEncryptionKeyShare_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionKeyShare'] = univote_bfh_ch_election_getEncryptionKeyShare_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getMixedEncryptedVotes'] = univote_bfh_ch_election_getMixedEncryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getMixedEncryptedVotes'] = univote_bfh_ch_election_getMixedEncryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getPartiallyDecryptedVotes'] = univote_bfh_ch_election_getPartiallyDecryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getPartiallyDecryptedVotes'] = univote_bfh_ch_election_getPartiallyDecryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVoterCertificates'] = univote_bfh_ch_election_getVoterCertificates_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVoterCertificates'] = univote_bfh_ch_election_getVoterCertificates_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptedVotesMixedBy'] = univote_bfh_ch_election_getEncryptedVotesMixedBy_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptedVotesMixedBy'] = univote_bfh_ch_election_getEncryptedVotesMixedBy_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVoterCertificatesResponse'] = univote_bfh_ch_election_getVoterCertificatesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVoterCertificatesResponse'] = univote_bfh_ch_election_getVoterCertificatesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getLatelyMixedVerificationKeysResponse'] = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getLatelyMixedVerificationKeysResponse'] = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionDefinitionResponse'] = univote_bfh_ch_election_getElectionDefinitionResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionDefinitionResponse'] = univote_bfh_ch_election_getElectionDefinitionResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionGeneratorResponse'] = univote_bfh_ch_election_getElectionGeneratorResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionGeneratorResponse'] = univote_bfh_ch_election_getElectionGeneratorResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificates'] = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificates'] = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVerificationKeysLatelyMixedBy'] = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVerificationKeysLatelyMixedBy'] = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBlindedGeneratorResponse'] = univote_bfh_ch_election_getBlindedGeneratorResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBlindedGeneratorResponse'] = univote_bfh_ch_election_getBlindedGeneratorResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionParameters'] = univote_bfh_ch_election_getEncryptionParameters_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionParameters'] = univote_bfh_ch_election_getEncryptionParameters_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionSystemInfoResponse'] = univote_bfh_ch_election_getElectionSystemInfoResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionSystemInfoResponse'] = univote_bfh_ch_election_getElectionSystemInfoResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionDataResponse'] = univote_bfh_ch_election_getElectionDataResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionDataResponse'] = univote_bfh_ch_election_getElectionDataResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVerificationKeysLatelyMixedByResponse'] = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVerificationKeysLatelyMixedByResponse'] = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getPartiallyDecryptedVotesResponse'] = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getPartiallyDecryptedVotesResponse'] = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionData'] = univote_bfh_ch_election_getElectionData_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionData'] = univote_bfh_ch_election_getElectionData_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getMixedEncryptedVotesResponse'] = univote_bfh_ch_election_getMixedEncryptedVotesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getMixedEncryptedVotesResponse'] = univote_bfh_ch_election_getMixedEncryptedVotesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionKeyShareResponse'] = univote_bfh_ch_election_getEncryptionKeyShareResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionKeyShareResponse'] = univote_bfh_ch_election_getEncryptionKeyShareResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getSignatureParametersResponse'] = univote_bfh_ch_election_getSignatureParametersResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getSignatureParametersResponse'] = univote_bfh_ch_election_getSignatureParametersResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionGenerator'] = univote_bfh_ch_election_getElectionGenerator_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionGenerator'] = univote_bfh_ch_election_getElectionGenerator_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getRootCertificateResponse'] = univote_bfh_ch_election_getRootCertificateResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getRootCertificateResponse'] = univote_bfh_ch_election_getRootCertificateResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionParametersResponse'] = univote_bfh_ch_election_getEncryptionParametersResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionParametersResponse'] = univote_bfh_ch_election_getEncryptionParametersResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getRootCertificate'] = univote_bfh_ch_election_getRootCertificate_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getRootCertificate'] = univote_bfh_ch_election_getRootCertificate_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectoralRoll'] = univote_bfh_ch_election_getElectoralRoll_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectoralRoll'] = univote_bfh_ch_election_getElectoralRoll_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBallot'] = univote_bfh_ch_election_getBallot_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBallot'] = univote_bfh_ch_election_getBallot_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionKey'] = univote_bfh_ch_election_getEncryptionKey_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionKey'] = univote_bfh_ch_election_getEncryptionKey_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getPlaintextVotesResponse'] = univote_bfh_ch_election_getPlaintextVotesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getPlaintextVotesResponse'] = univote_bfh_ch_election_getPlaintextVotesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getLatelyMixedVerificationKeys'] = univote_bfh_ch_election_getLatelyMixedVerificationKeys_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getLatelyMixedVerificationKeys'] = univote_bfh_ch_election_getLatelyMixedVerificationKeys_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBallotsResponse'] = univote_bfh_ch_election_getBallotsResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBallotsResponse'] = univote_bfh_ch_election_getBallotsResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getSignatureParameters'] = univote_bfh_ch_election_getSignatureParameters_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getSignatureParameters'] = univote_bfh_ch_election_getSignatureParameters_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getPlaintextVotes'] = univote_bfh_ch_election_getPlaintextVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getPlaintextVotes'] = univote_bfh_ch_election_getPlaintextVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptedVotesMixedByResponse'] = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptedVotesMixedByResponse'] = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectoralRollResponse'] = univote_bfh_ch_election_getElectoralRollResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectoralRollResponse'] = univote_bfh_ch_election_getElectoralRollResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionOptions'] = univote_bfh_ch_election_getElectionOptions_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionOptions'] = univote_bfh_ch_election_getElectionOptions_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionSystemInfo'] = univote_bfh_ch_election_getElectionSystemInfo_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionSystemInfo'] = univote_bfh_ch_election_getElectionSystemInfo_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionDefinition'] = univote_bfh_ch_election_getElectionDefinition_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionDefinition'] = univote_bfh_ch_election_getElectionDefinition_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getMixedVerificationKeysResponse'] = univote_bfh_ch_election_getMixedVerificationKeysResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getMixedVerificationKeysResponse'] = univote_bfh_ch_election_getMixedVerificationKeysResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVerificationKeysMixedBy'] = univote_bfh_ch_election_getVerificationKeysMixedBy_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVerificationKeysMixedBy'] = univote_bfh_ch_election_getVerificationKeysMixedBy_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBallots'] = univote_bfh_ch_election_getBallots_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBallots'] = univote_bfh_ch_election_getBallots_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getMixedVerificationKeys'] = univote_bfh_ch_election_getMixedVerificationKeys_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getMixedVerificationKeys'] = univote_bfh_ch_election_getMixedVerificationKeys_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionKeyResponse'] = univote_bfh_ch_election_getEncryptionKeyResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionKeyResponse'] = univote_bfh_ch_election_getEncryptionKeyResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionOptionsResponse'] = univote_bfh_ch_election_getElectionOptionsResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionOptionsResponse'] = univote_bfh_ch_election_getElectionOptionsResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificatesResponse'] = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificatesResponse'] = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBlindedGenerator'] = univote_bfh_ch_election_getBlindedGenerator_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBlindedGenerator'] = univote_bfh_ch_election_getBlindedGenerator_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBallotResponse'] = univote_bfh_ch_election_getBallotResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBallotResponse'] = univote_bfh_ch_election_getBallotResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getDecryptedVotes'] = univote_bfh_ch_election_getDecryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getDecryptedVotes'] = univote_bfh_ch_election_getDecryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVerificationKeysMixedByResponse'] = univote_bfh_ch_election_getVerificationKeysMixedByResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVerificationKeysMixedByResponse'] = univote_bfh_ch_election_getVerificationKeysMixedByResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getDecryptedVotesResponse'] = univote_bfh_ch_election_getDecryptedVotesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getDecryptedVotesResponse'] = univote_bfh_ch_election_getDecryptedVotesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionKeyShare'] = univote_bfh_ch_election_getEncryptionKeyShare_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionKeyShare'] = univote_bfh_ch_election_getEncryptionKeyShare_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getMixedEncryptedVotes'] = univote_bfh_ch_election_getMixedEncryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getMixedEncryptedVotes'] = univote_bfh_ch_election_getMixedEncryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getPartiallyDecryptedVotes'] = univote_bfh_ch_election_getPartiallyDecryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getPartiallyDecryptedVotes'] = univote_bfh_ch_election_getPartiallyDecryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVoterCertificates'] = univote_bfh_ch_election_getVoterCertificates_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVoterCertificates'] = univote_bfh_ch_election_getVoterCertificates_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptedVotesMixedBy'] = univote_bfh_ch_election_getEncryptedVotesMixedBy_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptedVotesMixedBy'] = univote_bfh_ch_election_getEncryptedVotesMixedBy_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVoterCertificatesResponse'] = univote_bfh_ch_election_getVoterCertificatesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVoterCertificatesResponse'] = univote_bfh_ch_election_getVoterCertificatesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getLatelyMixedVerificationKeysResponse'] = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getLatelyMixedVerificationKeysResponse'] = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionDefinitionResponse'] = univote_bfh_ch_election_getElectionDefinitionResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionDefinitionResponse'] = univote_bfh_ch_election_getElectionDefinitionResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionGeneratorResponse'] = univote_bfh_ch_election_getElectionGeneratorResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionGeneratorResponse'] = univote_bfh_ch_election_getElectionGeneratorResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificates'] = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificates'] = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVerificationKeysLatelyMixedBy'] = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVerificationKeysLatelyMixedBy'] = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBlindedGeneratorResponse'] = univote_bfh_ch_election_getBlindedGeneratorResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBlindedGeneratorResponse'] = univote_bfh_ch_election_getBlindedGeneratorResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionParameters'] = univote_bfh_ch_election_getEncryptionParameters_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionParameters'] = univote_bfh_ch_election_getEncryptionParameters_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionSystemInfoResponse'] = univote_bfh_ch_election_getElectionSystemInfoResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionSystemInfoResponse'] = univote_bfh_ch_election_getElectionSystemInfoResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionDataResponse'] = univote_bfh_ch_election_getElectionDataResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionDataResponse'] = univote_bfh_ch_election_getElectionDataResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getVerificationKeysLatelyMixedByResponse'] = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getVerificationKeysLatelyMixedByResponse'] = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getPartiallyDecryptedVotesResponse'] = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getPartiallyDecryptedVotesResponse'] = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionData'] = univote_bfh_ch_election_getElectionData_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionData'] = univote_bfh_ch_election_getElectionData_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getMixedEncryptedVotesResponse'] = univote_bfh_ch_election_getMixedEncryptedVotesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getMixedEncryptedVotesResponse'] = univote_bfh_ch_election_getMixedEncryptedVotesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionKeyShareResponse'] = univote_bfh_ch_election_getEncryptionKeyShareResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionKeyShareResponse'] = univote_bfh_ch_election_getEncryptionKeyShareResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getSignatureParametersResponse'] = univote_bfh_ch_election_getSignatureParametersResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getSignatureParametersResponse'] = univote_bfh_ch_election_getSignatureParametersResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionGenerator'] = univote_bfh_ch_election_getElectionGenerator_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionGenerator'] = univote_bfh_ch_election_getElectionGenerator_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getRootCertificateResponse'] = univote_bfh_ch_election_getRootCertificateResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getRootCertificateResponse'] = univote_bfh_ch_election_getRootCertificateResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionParametersResponse'] = univote_bfh_ch_election_getEncryptionParametersResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionParametersResponse'] = univote_bfh_ch_election_getEncryptionParametersResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getRootCertificate'] = univote_bfh_ch_election_getRootCertificate_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getRootCertificate'] = univote_bfh_ch_election_getRootCertificate_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectoralRoll'] = univote_bfh_ch_election_getElectoralRoll_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectoralRoll'] = univote_bfh_ch_election_getElectoralRoll_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBallot'] = univote_bfh_ch_election_getBallot_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBallot'] = univote_bfh_ch_election_getBallot_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptionKey'] = univote_bfh_ch_election_getEncryptionKey_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptionKey'] = univote_bfh_ch_election_getEncryptionKey_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getPlaintextVotesResponse'] = univote_bfh_ch_election_getPlaintextVotesResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getPlaintextVotesResponse'] = univote_bfh_ch_election_getPlaintextVotesResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getLatelyMixedVerificationKeys'] = univote_bfh_ch_election_getLatelyMixedVerificationKeys_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getLatelyMixedVerificationKeys'] = univote_bfh_ch_election_getLatelyMixedVerificationKeys_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getBallotsResponse'] = univote_bfh_ch_election_getBallotsResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getBallotsResponse'] = univote_bfh_ch_election_getBallotsResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getSignatureParameters'] = univote_bfh_ch_election_getSignatureParameters_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getSignatureParameters'] = univote_bfh_ch_election_getSignatureParameters_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getPlaintextVotes'] = univote_bfh_ch_election_getPlaintextVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getPlaintextVotes'] = univote_bfh_ch_election_getPlaintextVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getEncryptedVotesMixedByResponse'] = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getEncryptedVotesMixedByResponse'] = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectoralRollResponse'] = univote_bfh_ch_election_getElectoralRollResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectoralRollResponse'] = univote_bfh_ch_election_getElectoralRollResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionOptions'] = univote_bfh_ch_election_getElectionOptions_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionOptions'] = univote_bfh_ch_election_getElectionOptions_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionSystemInfo'] = univote_bfh_ch_election_getElectionSystemInfo_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionSystemInfo'] = univote_bfh_ch_election_getElectionSystemInfo_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getElectionDefinition'] = univote_bfh_ch_election_getElectionDefinition_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getElectionDefinition'] = univote_bfh_ch_election_getElectionDefinition_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/election}getMixedVerificationKeysResponse'] = univote_bfh_ch_election_getMixedVerificationKeysResponse_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/election}getMixedVerificationKeysResponse'] = univote_bfh_ch_election_getMixedVerificationKeysResponse_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}voterCertificates'] = univote_bfh_ch_common_voterCertificates_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}voterCertificates'] = univote_bfh_ch_common_voterCertificates_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}electionData'] = univote_bfh_ch_common_electionData_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}electionData'] = univote_bfh_ch_common_electionData_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}revokedVerificationKey'] = univote_bfh_ch_common_revokedVerificationKey_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}revokedVerificationKey'] = univote_bfh_ch_common_revokedVerificationKey_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}electionOptions'] = univote_bfh_ch_common_electionOptions_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}electionOptions'] = univote_bfh_ch_common_electionOptions_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}electionSystemInfo'] = univote_bfh_ch_common_electionSystemInfo_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}electionSystemInfo'] = univote_bfh_ch_common_electionSystemInfo_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}plaintextVotes'] = univote_bfh_ch_common_plaintextVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}plaintextVotes'] = univote_bfh_ch_common_plaintextVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}ballot'] = univote_bfh_ch_common_ballot_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}ballot'] = univote_bfh_ch_common_ballot_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}blindedGenerator'] = univote_bfh_ch_common_blindedGenerator_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}blindedGenerator'] = univote_bfh_ch_common_blindedGenerator_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}forallRule'] = univote_bfh_ch_common_forallRule_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}forallRule'] = univote_bfh_ch_common_forallRule_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}newVerificationKey'] = univote_bfh_ch_common_newVerificationKey_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}newVerificationKey'] = univote_bfh_ch_common_newVerificationKey_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}rule'] = univote_bfh_ch_common_rule_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}rule'] = univote_bfh_ch_common_rule_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}signatureParameters'] = univote_bfh_ch_common_signatureParameters_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}signatureParameters'] = univote_bfh_ch_common_signatureParameters_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}proof'] = univote_bfh_ch_common_proof_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}proof'] = univote_bfh_ch_common_proof_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}partiallyDecryptedVotes'] = univote_bfh_ch_common_partiallyDecryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}partiallyDecryptedVotes'] = univote_bfh_ch_common_partiallyDecryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}electionAdministrationInfo'] = univote_bfh_ch_common_electionAdministrationInfo_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}electionAdministrationInfo'] = univote_bfh_ch_common_electionAdministrationInfo_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}choice'] = univote_bfh_ch_common_choice_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}choice'] = univote_bfh_ch_common_choice_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}localizedText'] = univote_bfh_ch_common_localizedText_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}localizedText'] = univote_bfh_ch_common_localizedText_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}encryptionKey'] = univote_bfh_ch_common_encryptionKey_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptionKey'] = univote_bfh_ch_common_encryptionKey_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}mixingParameters'] = univote_bfh_ch_common_mixingParameters_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}mixingParameters'] = univote_bfh_ch_common_mixingParameters_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}summationRule'] = univote_bfh_ch_common_summationRule_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}summationRule'] = univote_bfh_ch_common_summationRule_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}ballots'] = univote_bfh_ch_common_ballots_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}ballots'] = univote_bfh_ch_common_ballots_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}mixedVerificationKeys'] = univote_bfh_ch_common_mixedVerificationKeys_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}mixedVerificationKeys'] = univote_bfh_ch_common_mixedVerificationKeys_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}mixedVerificationKey'] = univote_bfh_ch_common_mixedVerificationKey_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}mixedVerificationKey'] = univote_bfh_ch_common_mixedVerificationKey_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}encryptedVotesToMix'] = univote_bfh_ch_common_encryptedVotesToMix_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptedVotesToMix'] = univote_bfh_ch_common_encryptedVotesToMix_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}electoralRoll'] = univote_bfh_ch_common_electoralRoll_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}electoralRoll'] = univote_bfh_ch_common_electoralRoll_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}verificationKeyToMix'] = univote_bfh_ch_common_verificationKeyToMix_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}verificationKeyToMix'] = univote_bfh_ch_common_verificationKeyToMix_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}voterCertificate'] = univote_bfh_ch_common_voterCertificate_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}voterCertificate'] = univote_bfh_ch_common_voterCertificate_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}encryptedVotes'] = univote_bfh_ch_common_encryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptedVotes'] = univote_bfh_ch_common_encryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}mixerInfo'] = univote_bfh_ch_common_mixerInfo_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}mixerInfo'] = univote_bfh_ch_common_mixerInfo_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}tallierInfo'] = univote_bfh_ch_common_tallierInfo_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}tallierInfo'] = univote_bfh_ch_common_tallierInfo_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}encryptionKeyShare'] = univote_bfh_ch_common_encryptionKeyShare_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptionKeyShare'] = univote_bfh_ch_common_encryptionKeyShare_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}voterSignature'] = univote_bfh_ch_common_voterSignature_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}voterSignature'] = univote_bfh_ch_common_voterSignature_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}encryptedVote'] = univote_bfh_ch_common_encryptedVote_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptedVote'] = univote_bfh_ch_common_encryptedVote_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}electionManagerInfo'] = univote_bfh_ch_common_electionManagerInfo_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}electionManagerInfo'] = univote_bfh_ch_common_electionManagerInfo_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}signature'] = univote_bfh_ch_common_signature_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}signature'] = univote_bfh_ch_common_signature_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}revokedCertificate'] = univote_bfh_ch_common_revokedCertificate_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}revokedCertificate'] = univote_bfh_ch_common_revokedCertificate_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}mixedEncryptedVotes'] = univote_bfh_ch_common_mixedEncryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}mixedEncryptedVotes'] = univote_bfh_ch_common_mixedEncryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}electionGenerator'] = univote_bfh_ch_common_electionGenerator_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}electionGenerator'] = univote_bfh_ch_common_electionGenerator_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}certificate'] = univote_bfh_ch_common_certificate_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}certificate'] = univote_bfh_ch_common_certificate_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}electionDefinition'] = univote_bfh_ch_common_electionDefinition_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}electionDefinition'] = univote_bfh_ch_common_electionDefinition_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}decryptedVotes'] = univote_bfh_ch_common_decryptedVotes_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}decryptedVotes'] = univote_bfh_ch_common_decryptedVotes_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}verificationKeysToMix'] = univote_bfh_ch_common_verificationKeysToMix_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}verificationKeysToMix'] = univote_bfh_ch_common_verificationKeysToMix_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}candidate'] = univote_bfh_ch_common_candidate_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}candidate'] = univote_bfh_ch_common_candidate_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}politicalList'] = univote_bfh_ch_common_politicalList_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}politicalList'] = univote_bfh_ch_common_politicalList_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}verificationKeys'] = univote_bfh_ch_common_verificationKeys_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}verificationKeys'] = univote_bfh_ch_common_verificationKeys_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}newCertificate'] = univote_bfh_ch_common_newCertificate_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}newCertificate'] = univote_bfh_ch_common_newCertificate_deserialize;
    this.globalElementSerializers['{http://univote.bfh.ch/common}encryptionParameters'] = univote_bfh_ch_common_encryptionParameters_serialize;
    this.globalElementDeserializers['{http://univote.bfh.ch/common}encryptionParameters'] = univote_bfh_ch_common_encryptionParameters_deserialize;
}

function univote_bfh_ch_election_getVerificationKeysMixedBy_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getVerificationKeysMixedByResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getVerificationKeysMixedByResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getVerificationKeysMixedBy_onsuccess = univote_bfh_ch_election_getVerificationKeysMixedBy_op_onsuccess;

function univote_bfh_ch_election_getVerificationKeysMixedBy_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getVerificationKeysMixedBy_onerror = univote_bfh_ch_election_getVerificationKeysMixedBy_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getVerificationKeysMixedBy
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter mixerId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getVerificationKeysMixedBy_op(successCallback, errorCallback, electionId, mixerId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = electionId;
    args[1] = mixerId;
    xml = this.getVerificationKeysMixedBy_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getVerificationKeysMixedBy_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getVerificationKeysMixedBy_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getVerificationKeysMixedBy = univote_bfh_ch_election_getVerificationKeysMixedBy_op;

function univote_bfh_ch_election_getVerificationKeysMixedBy_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getVerificationKeysMixedBy();
    wrapperObj.setElectionId(args[0]);
    wrapperObj.setMixerId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getVerificationKeysMixedBy', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getVerificationKeysMixedBy_serializeInput = univote_bfh_ch_election_getVerificationKeysMixedBy_serializeInput;

function univote_bfh_ch_election_getVerificationKeysMixedByResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getVerificationKeysMixedByResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getElectionData_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getElectionDataResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getElectionDataResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionData_onsuccess = univote_bfh_ch_election_getElectionData_op_onsuccess;

function univote_bfh_ch_election_getElectionData_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionData_onerror = univote_bfh_ch_election_getElectionData_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getElectionData
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getElectionData_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getElectionData_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getElectionData_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getElectionData_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionData = univote_bfh_ch_election_getElectionData_op;

function univote_bfh_ch_election_getElectionData_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getElectionData();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getElectionData', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionData_serializeInput = univote_bfh_ch_election_getElectionData_serializeInput;

function univote_bfh_ch_election_getElectionDataResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getElectionDataResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getPlaintextVotes_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getPlaintextVotesResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getPlaintextVotesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getPlaintextVotes_onsuccess = univote_bfh_ch_election_getPlaintextVotes_op_onsuccess;

function univote_bfh_ch_election_getPlaintextVotes_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getPlaintextVotes_onerror = univote_bfh_ch_election_getPlaintextVotes_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getPlaintextVotes
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getPlaintextVotes_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getPlaintextVotes_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getPlaintextVotes_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getPlaintextVotes_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getPlaintextVotes = univote_bfh_ch_election_getPlaintextVotes_op;

function univote_bfh_ch_election_getPlaintextVotes_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getPlaintextVotes();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getPlaintextVotes', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getPlaintextVotes_serializeInput = univote_bfh_ch_election_getPlaintextVotes_serializeInput;

function univote_bfh_ch_election_getPlaintextVotesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getPlaintextVotesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getElectionOptions_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getElectionOptionsResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getElectionOptionsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionOptions_onsuccess = univote_bfh_ch_election_getElectionOptions_op_onsuccess;

function univote_bfh_ch_election_getElectionOptions_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionOptions_onerror = univote_bfh_ch_election_getElectionOptions_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getElectionOptions
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getElectionOptions_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getElectionOptions_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getElectionOptions_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getElectionOptions_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionOptions = univote_bfh_ch_election_getElectionOptions_op;

function univote_bfh_ch_election_getElectionOptions_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getElectionOptions();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getElectionOptions', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionOptions_serializeInput = univote_bfh_ch_election_getElectionOptions_serializeInput;

function univote_bfh_ch_election_getElectionOptionsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getElectionOptionsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getMixedVerificationKeys_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getMixedVerificationKeysResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getMixedVerificationKeysResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getMixedVerificationKeys_onsuccess = univote_bfh_ch_election_getMixedVerificationKeys_op_onsuccess;

function univote_bfh_ch_election_getMixedVerificationKeys_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getMixedVerificationKeys_onerror = univote_bfh_ch_election_getMixedVerificationKeys_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getMixedVerificationKeys
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getMixedVerificationKeys_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getMixedVerificationKeys_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getMixedVerificationKeys_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getMixedVerificationKeys_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getMixedVerificationKeys = univote_bfh_ch_election_getMixedVerificationKeys_op;

function univote_bfh_ch_election_getMixedVerificationKeys_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getMixedVerificationKeys();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getMixedVerificationKeys', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getMixedVerificationKeys_serializeInput = univote_bfh_ch_election_getMixedVerificationKeys_serializeInput;

function univote_bfh_ch_election_getMixedVerificationKeysResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getMixedVerificationKeysResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getBallots_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getBallotsResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getBallotsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getBallots_onsuccess = univote_bfh_ch_election_getBallots_op_onsuccess;

function univote_bfh_ch_election_getBallots_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getBallots_onerror = univote_bfh_ch_election_getBallots_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getBallots
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getBallots_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getBallots_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getBallots_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getBallots_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getBallots = univote_bfh_ch_election_getBallots_op;

function univote_bfh_ch_election_getBallots_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getBallots();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getBallots', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getBallots_serializeInput = univote_bfh_ch_election_getBallots_serializeInput;

function univote_bfh_ch_election_getBallotsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getBallotsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getLatelyRegisteredVoterCertificates_onsuccess = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_op_onsuccess;

function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getLatelyRegisteredVoterCertificates_onerror = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getLatelyRegisteredVoterCertificates
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getLatelyRegisteredVoterCertificates_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getLatelyRegisteredVoterCertificates_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getLatelyRegisteredVoterCertificates_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getLatelyRegisteredVoterCertificates = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_op;

function univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getLatelyRegisteredVoterCertificates();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getLatelyRegisteredVoterCertificates', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getLatelyRegisteredVoterCertificates_serializeInput = univote_bfh_ch_election_getLatelyRegisteredVoterCertificates_serializeInput;

function univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getLatelyRegisteredVoterCertificatesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getEncryptionParameters_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getEncryptionParametersResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getEncryptionParametersResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionParameters_onsuccess = univote_bfh_ch_election_getEncryptionParameters_op_onsuccess;

function univote_bfh_ch_election_getEncryptionParameters_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionParameters_onerror = univote_bfh_ch_election_getEncryptionParameters_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getEncryptionParameters
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getEncryptionParameters_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getEncryptionParameters_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getEncryptionParameters_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getEncryptionParameters_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionParameters = univote_bfh_ch_election_getEncryptionParameters_op;

function univote_bfh_ch_election_getEncryptionParameters_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getEncryptionParameters();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getEncryptionParameters', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionParameters_serializeInput = univote_bfh_ch_election_getEncryptionParameters_serializeInput;

function univote_bfh_ch_election_getEncryptionParametersResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getEncryptionParametersResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getRootCertificate_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getRootCertificateResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getRootCertificateResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getRootCertificate_onsuccess = univote_bfh_ch_election_getRootCertificate_op_onsuccess;

function univote_bfh_ch_election_getRootCertificate_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getRootCertificate_onerror = univote_bfh_ch_election_getRootCertificate_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getRootCertificate
// Wrapped operation.
//
function univote_bfh_ch_election_getRootCertificate_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getRootCertificate_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getRootCertificate_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getRootCertificate_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getRootCertificate = univote_bfh_ch_election_getRootCertificate_op;

function univote_bfh_ch_election_getRootCertificate_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getRootCertificate();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getRootCertificate', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getRootCertificate_serializeInput = univote_bfh_ch_election_getRootCertificate_serializeInput;

function univote_bfh_ch_election_getRootCertificateResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getRootCertificateResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getSignatureParameters_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getSignatureParametersResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getSignatureParametersResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getSignatureParameters_onsuccess = univote_bfh_ch_election_getSignatureParameters_op_onsuccess;

function univote_bfh_ch_election_getSignatureParameters_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getSignatureParameters_onerror = univote_bfh_ch_election_getSignatureParameters_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getSignatureParameters
// Wrapped operation.
//
function univote_bfh_ch_election_getSignatureParameters_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getSignatureParameters_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getSignatureParameters_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getSignatureParameters_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getSignatureParameters = univote_bfh_ch_election_getSignatureParameters_op;

function univote_bfh_ch_election_getSignatureParameters_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getSignatureParameters();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getSignatureParameters', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getSignatureParameters_serializeInput = univote_bfh_ch_election_getSignatureParameters_serializeInput;

function univote_bfh_ch_election_getSignatureParametersResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getSignatureParametersResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getBlindedGenerator_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getBlindedGeneratorResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getBlindedGeneratorResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getBlindedGenerator_onsuccess = univote_bfh_ch_election_getBlindedGenerator_op_onsuccess;

function univote_bfh_ch_election_getBlindedGenerator_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getBlindedGenerator_onerror = univote_bfh_ch_election_getBlindedGenerator_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getBlindedGenerator
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter mixerId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getBlindedGenerator_op(successCallback, errorCallback, electionId, mixerId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = electionId;
    args[1] = mixerId;
    xml = this.getBlindedGenerator_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getBlindedGenerator_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getBlindedGenerator_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getBlindedGenerator = univote_bfh_ch_election_getBlindedGenerator_op;

function univote_bfh_ch_election_getBlindedGenerator_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getBlindedGenerator();
    wrapperObj.setElectionId(args[0]);
    wrapperObj.setMixerId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getBlindedGenerator', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getBlindedGenerator_serializeInput = univote_bfh_ch_election_getBlindedGenerator_serializeInput;

function univote_bfh_ch_election_getBlindedGeneratorResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getBlindedGeneratorResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getBallot_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getBallotResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getBallotResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getBallot_onsuccess = univote_bfh_ch_election_getBallot_op_onsuccess;

function univote_bfh_ch_election_getBallot_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getBallot_onerror = univote_bfh_ch_election_getBallot_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getBallot
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter verificationKey
// - simple type {http://www.w3.org/2001/XMLSchema}integer//
function univote_bfh_ch_election_getBallot_op(successCallback, errorCallback, electionId, verificationKey) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = electionId;
    args[1] = verificationKey;
    xml = this.getBallot_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getBallot_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getBallot_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getBallot = univote_bfh_ch_election_getBallot_op;

function univote_bfh_ch_election_getBallot_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getBallot();
    wrapperObj.setElectionId(args[0]);
    wrapperObj.setVerificationKey(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getBallot', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getBallot_serializeInput = univote_bfh_ch_election_getBallot_serializeInput;

function univote_bfh_ch_election_getBallotResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getBallotResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getMixedEncryptedVotes_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getMixedEncryptedVotesResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getMixedEncryptedVotesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getMixedEncryptedVotes_onsuccess = univote_bfh_ch_election_getMixedEncryptedVotes_op_onsuccess;

function univote_bfh_ch_election_getMixedEncryptedVotes_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getMixedEncryptedVotes_onerror = univote_bfh_ch_election_getMixedEncryptedVotes_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getMixedEncryptedVotes
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getMixedEncryptedVotes_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getMixedEncryptedVotes_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getMixedEncryptedVotes_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getMixedEncryptedVotes_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getMixedEncryptedVotes = univote_bfh_ch_election_getMixedEncryptedVotes_op;

function univote_bfh_ch_election_getMixedEncryptedVotes_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getMixedEncryptedVotes();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getMixedEncryptedVotes', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getMixedEncryptedVotes_serializeInput = univote_bfh_ch_election_getMixedEncryptedVotes_serializeInput;

function univote_bfh_ch_election_getMixedEncryptedVotesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getMixedEncryptedVotesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getDecryptedVotes_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getDecryptedVotesResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getDecryptedVotesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getDecryptedVotes_onsuccess = univote_bfh_ch_election_getDecryptedVotes_op_onsuccess;

function univote_bfh_ch_election_getDecryptedVotes_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getDecryptedVotes_onerror = univote_bfh_ch_election_getDecryptedVotes_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getDecryptedVotes
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getDecryptedVotes_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getDecryptedVotes_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getDecryptedVotes_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getDecryptedVotes_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getDecryptedVotes = univote_bfh_ch_election_getDecryptedVotes_op;

function univote_bfh_ch_election_getDecryptedVotes_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getDecryptedVotes();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getDecryptedVotes', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getDecryptedVotes_serializeInput = univote_bfh_ch_election_getDecryptedVotes_serializeInput;

function univote_bfh_ch_election_getDecryptedVotesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getDecryptedVotesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getVerificationKeysLatelyMixedBy_onsuccess = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_op_onsuccess;

function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getVerificationKeysLatelyMixedBy_onerror = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getVerificationKeysLatelyMixedBy
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter mixerId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_op(successCallback, errorCallback, electionId, mixerId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = electionId;
    args[1] = mixerId;
    xml = this.getVerificationKeysLatelyMixedBy_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getVerificationKeysLatelyMixedBy_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getVerificationKeysLatelyMixedBy_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getVerificationKeysLatelyMixedBy = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_op;

function univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getVerificationKeysLatelyMixedBy();
    wrapperObj.setElectionId(args[0]);
    wrapperObj.setMixerId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getVerificationKeysLatelyMixedBy', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getVerificationKeysLatelyMixedBy_serializeInput = univote_bfh_ch_election_getVerificationKeysLatelyMixedBy_serializeInput;

function univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getVerificationKeysLatelyMixedByResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getEncryptionKey_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getEncryptionKeyResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getEncryptionKeyResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionKey_onsuccess = univote_bfh_ch_election_getEncryptionKey_op_onsuccess;

function univote_bfh_ch_election_getEncryptionKey_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionKey_onerror = univote_bfh_ch_election_getEncryptionKey_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getEncryptionKey
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getEncryptionKey_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getEncryptionKey_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getEncryptionKey_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getEncryptionKey_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionKey = univote_bfh_ch_election_getEncryptionKey_op;

function univote_bfh_ch_election_getEncryptionKey_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getEncryptionKey();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getEncryptionKey', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionKey_serializeInput = univote_bfh_ch_election_getEncryptionKey_serializeInput;

function univote_bfh_ch_election_getEncryptionKeyResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getEncryptionKeyResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getLatelyMixedVerificationKeys_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getLatelyMixedVerificationKeys_onsuccess = univote_bfh_ch_election_getLatelyMixedVerificationKeys_op_onsuccess;

function univote_bfh_ch_election_getLatelyMixedVerificationKeys_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getLatelyMixedVerificationKeys_onerror = univote_bfh_ch_election_getLatelyMixedVerificationKeys_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getLatelyMixedVerificationKeys
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getLatelyMixedVerificationKeys_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getLatelyMixedVerificationKeys_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getLatelyMixedVerificationKeys_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getLatelyMixedVerificationKeys_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getLatelyMixedVerificationKeys = univote_bfh_ch_election_getLatelyMixedVerificationKeys_op;

function univote_bfh_ch_election_getLatelyMixedVerificationKeys_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getLatelyMixedVerificationKeys();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getLatelyMixedVerificationKeys', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getLatelyMixedVerificationKeys_serializeInput = univote_bfh_ch_election_getLatelyMixedVerificationKeys_serializeInput;

function univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getLatelyMixedVerificationKeysResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getElectoralRoll_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getElectoralRollResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getElectoralRollResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectoralRoll_onsuccess = univote_bfh_ch_election_getElectoralRoll_op_onsuccess;

function univote_bfh_ch_election_getElectoralRoll_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectoralRoll_onerror = univote_bfh_ch_election_getElectoralRoll_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getElectoralRoll
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getElectoralRoll_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getElectoralRoll_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getElectoralRoll_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getElectoralRoll_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectoralRoll = univote_bfh_ch_election_getElectoralRoll_op;

function univote_bfh_ch_election_getElectoralRoll_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getElectoralRoll();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getElectoralRoll', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectoralRoll_serializeInput = univote_bfh_ch_election_getElectoralRoll_serializeInput;

function univote_bfh_ch_election_getElectoralRollResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getElectoralRollResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getEncryptionKeyShare_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getEncryptionKeyShareResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getEncryptionKeyShareResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionKeyShare_onsuccess = univote_bfh_ch_election_getEncryptionKeyShare_op_onsuccess;

function univote_bfh_ch_election_getEncryptionKeyShare_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionKeyShare_onerror = univote_bfh_ch_election_getEncryptionKeyShare_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getEncryptionKeyShare
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter tallierId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getEncryptionKeyShare_op(successCallback, errorCallback, electionId, tallierId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = electionId;
    args[1] = tallierId;
    xml = this.getEncryptionKeyShare_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getEncryptionKeyShare_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getEncryptionKeyShare_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionKeyShare = univote_bfh_ch_election_getEncryptionKeyShare_op;

function univote_bfh_ch_election_getEncryptionKeyShare_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getEncryptionKeyShare();
    wrapperObj.setElectionId(args[0]);
    wrapperObj.setTallierId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getEncryptionKeyShare', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptionKeyShare_serializeInput = univote_bfh_ch_election_getEncryptionKeyShare_serializeInput;

function univote_bfh_ch_election_getEncryptionKeyShareResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getEncryptionKeyShareResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getElectionDefinition_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getElectionDefinitionResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getElectionDefinitionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionDefinition_onsuccess = univote_bfh_ch_election_getElectionDefinition_op_onsuccess;

function univote_bfh_ch_election_getElectionDefinition_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionDefinition_onerror = univote_bfh_ch_election_getElectionDefinition_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getElectionDefinition
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getElectionDefinition_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getElectionDefinition_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getElectionDefinition_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getElectionDefinition_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionDefinition = univote_bfh_ch_election_getElectionDefinition_op;

function univote_bfh_ch_election_getElectionDefinition_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getElectionDefinition();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getElectionDefinition', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionDefinition_serializeInput = univote_bfh_ch_election_getElectionDefinition_serializeInput;

function univote_bfh_ch_election_getElectionDefinitionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getElectionDefinitionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getVoterCertificates_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getVoterCertificatesResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getVoterCertificatesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getVoterCertificates_onsuccess = univote_bfh_ch_election_getVoterCertificates_op_onsuccess;

function univote_bfh_ch_election_getVoterCertificates_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getVoterCertificates_onerror = univote_bfh_ch_election_getVoterCertificates_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getVoterCertificates
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getVoterCertificates_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getVoterCertificates_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getVoterCertificates_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getVoterCertificates_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getVoterCertificates = univote_bfh_ch_election_getVoterCertificates_op;

function univote_bfh_ch_election_getVoterCertificates_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getVoterCertificates();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getVoterCertificates', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getVoterCertificates_serializeInput = univote_bfh_ch_election_getVoterCertificates_serializeInput;

function univote_bfh_ch_election_getVoterCertificatesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getVoterCertificatesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getElectionGenerator_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getElectionGeneratorResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getElectionGeneratorResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionGenerator_onsuccess = univote_bfh_ch_election_getElectionGenerator_op_onsuccess;

function univote_bfh_ch_election_getElectionGenerator_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionGenerator_onerror = univote_bfh_ch_election_getElectionGenerator_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getElectionGenerator
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getElectionGenerator_op(successCallback, errorCallback, electionId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = electionId;
    xml = this.getElectionGenerator_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getElectionGenerator_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getElectionGenerator_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionGenerator = univote_bfh_ch_election_getElectionGenerator_op;

function univote_bfh_ch_election_getElectionGenerator_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getElectionGenerator();
    wrapperObj.setElectionId(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getElectionGenerator', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionGenerator_serializeInput = univote_bfh_ch_election_getElectionGenerator_serializeInput;

function univote_bfh_ch_election_getElectionGeneratorResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getElectionGeneratorResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getPartiallyDecryptedVotes_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getPartiallyDecryptedVotes_onsuccess = univote_bfh_ch_election_getPartiallyDecryptedVotes_op_onsuccess;

function univote_bfh_ch_election_getPartiallyDecryptedVotes_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getPartiallyDecryptedVotes_onerror = univote_bfh_ch_election_getPartiallyDecryptedVotes_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getPartiallyDecryptedVotes
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter tallierId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getPartiallyDecryptedVotes_op(successCallback, errorCallback, electionId, tallierId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = electionId;
    args[1] = tallierId;
    xml = this.getPartiallyDecryptedVotes_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getPartiallyDecryptedVotes_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getPartiallyDecryptedVotes_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getPartiallyDecryptedVotes = univote_bfh_ch_election_getPartiallyDecryptedVotes_op;

function univote_bfh_ch_election_getPartiallyDecryptedVotes_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getPartiallyDecryptedVotes();
    wrapperObj.setElectionId(args[0]);
    wrapperObj.setTallierId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getPartiallyDecryptedVotes', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getPartiallyDecryptedVotes_serializeInput = univote_bfh_ch_election_getPartiallyDecryptedVotes_serializeInput;

function univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getPartiallyDecryptedVotesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getEncryptedVotesMixedBy_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getEncryptedVotesMixedByResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptedVotesMixedBy_onsuccess = univote_bfh_ch_election_getEncryptedVotesMixedBy_op_onsuccess;

function univote_bfh_ch_election_getEncryptedVotesMixedBy_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptedVotesMixedBy_onerror = univote_bfh_ch_election_getEncryptedVotesMixedBy_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getEncryptedVotesMixedBy
// Wrapped operation.
// parameter electionId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter mixerId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function univote_bfh_ch_election_getEncryptedVotesMixedBy_op(successCallback, errorCallback, electionId, mixerId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = electionId;
    args[1] = mixerId;
    xml = this.getEncryptedVotesMixedBy_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getEncryptedVotesMixedBy_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getEncryptedVotesMixedBy_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptedVotesMixedBy = univote_bfh_ch_election_getEncryptedVotesMixedBy_op;

function univote_bfh_ch_election_getEncryptedVotesMixedBy_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getEncryptedVotesMixedBy();
    wrapperObj.setElectionId(args[0]);
    wrapperObj.setMixerId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getEncryptedVotesMixedBy', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getEncryptedVotesMixedBy_serializeInput = univote_bfh_ch_election_getEncryptedVotesMixedBy_serializeInput;

function univote_bfh_ch_election_getEncryptedVotesMixedByResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getEncryptedVotesMixedByResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_getElectionSystemInfo_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling univote_bfh_ch_election_getElectionSystemInfoResponse_deserializeResponse');
     responseObject = univote_bfh_ch_election_getElectionSystemInfoResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionSystemInfo_onsuccess = univote_bfh_ch_election_getElectionSystemInfo_op_onsuccess;

function univote_bfh_ch_election_getElectionSystemInfo_op_onerror(client) {
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
     client.user_onerror(httpStatus, httpStatusText);
    }
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionSystemInfo_onerror = univote_bfh_ch_election_getElectionSystemInfo_op_onerror;

//
// Operation {http://univote.bfh.ch/election}getElectionSystemInfo
// Wrapped operation.
//
function univote_bfh_ch_election_getElectionSystemInfo_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getElectionSystemInfo_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getElectionSystemInfo_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getElectionSystemInfo_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionSystemInfo = univote_bfh_ch_election_getElectionSystemInfo_op;

function univote_bfh_ch_election_getElectionSystemInfo_serializeInput(cxfjsutils, args) {
    var wrapperObj = new univote_bfh_ch_election_getElectionSystemInfo();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://univote.bfh.ch/election' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getElectionSystemInfo', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

univote_bfh_ch_election_ElectionBoard.prototype.getElectionSystemInfo_serializeInput = univote_bfh_ch_election_getElectionSystemInfo_serializeInput;

function univote_bfh_ch_election_getElectionSystemInfoResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = univote_bfh_ch_election_getElectionSystemInfoResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function univote_bfh_ch_election_ElectionBoard_univote_bfh_ch_election_ElectionBoardPort () {
  this.url = 'REPLACE_WITH_ACTUAL_URL';
}
univote_bfh_ch_election_ElectionBoard_univote_bfh_ch_election_ElectionBoardPort.prototype = new univote_bfh_ch_election_ElectionBoard;
