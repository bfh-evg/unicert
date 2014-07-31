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
 * This file contains the vote page specific JS. 
 * 
 */

// Configuration.
//-------------------------------------
window.uvConfig = window.uvConfig || {};

/** 
 * Home site.
 */
var HOME_SITE					= uvConfig.HOME_SITE || 'index.xhtml';

/** 
 * Url for voting service.
 */
var URL_VOTING_SERVICE			= uvConfig.URL_VOTING_SERVICE || '/VotingServiceTest/';

/** 
 * Flag that inidicates whether everything should be computed asynchronously.
 * -> This is used to support old browsers (like IE7/8) to prevent script timeouts.
 */
var COMPUTE_ASYNCHRONOUSLY		= uvConfig.COMPUTE_ASYNCHRONOUSLY || false;

/** 
 * Flag that indicates whether the secret key should be uploaded manually always.
 */
var UPLOAD_SK_MANUALLY_ALWAYS	= uvConfig.UPLOAD_SK_MANUALLY_ALWAYS || false;
//-------------------------------------


/** 
 * Holds the used DOM elements. 
 */
var elements = {};

/** 
 * Holds the used dialogs.
 */
var dialogs = {};

/** 
 * Holds voter's secret key (bigInt).
 */
var secretKey;

/** 
 * Holds the election data received by the voting service (univote_bfh_ch_common_electionData).
 */
var electionData;

/** 
 * Holds the election id.
 */
var electionId;

/** 
 * Holds the election generator (bigInt).
 */
var electionGenerator;

/** 
 * Holds the encryption key (bigInt).
 */
var encryptionKey;

/** 
 * Holds all choice ids (used for vote encoding).
 */
var choiceIds;

/** 
 * Holds all summation rules (array of univote_bfh_ch_common_summationRule).
 */
var sumRules;

/** 
 * Holds all for all rules (array of univote_bfh_ch_common_forallRule).
 */
var forAllRules;

/**
 * Flag that is set to true if not only candidates but also list can be selected. 
 */
var listsAreSelectable = false;

/**
 * Holds user's language/locale (used for lacalized election data).
 */
var lang;

/** 
 * Flag that is set to true if no political lists are available (only candidates).
 */
var noList = false;


/**
 * Initialisation on document ready.
 */
$(document).ready(function(){
	
	// Get DOM elements
	elements.step1 = document.getElementById('step_1');
	elements.step2 = document.getElementById('step_2');
	elements.step3 = document.getElementById('step_3');
	
	elements.step1content = document.getElementById('step_1_content');
	elements.step2content = document.getElementById('step_2_content');
	elements.step3content = document.getElementById('step_3_content');
	
	elements.skUploadFile = document.getElementById('sk-upload-file');
	elements.skUploadManually = document.getElementById('sk-upload-manually');
	elements.file = document.getElementById('file');
	elements.filemanually = document.getElementById('filemanually');
	elements.password = document.getElementById('password');
	elements.uploadKeyError = document.getElementById('upload_key_error');
	
	elements.electionTitle = document.getElementById('election-title');
	elements.voteText = document.getElementById('vote-text');
	elements.lists = document.getElementById('lists');
	elements.listsContent = document.getElementById('lists_content');
	
	elements.result = document.getElementById('result-scroll');
	
	elements.sendVoteSuccess = document.getElementById('send-vote-success');
	elements.sendVoteError = document.getElementById('send-vote-error');
	elements.sendVoteErrorMessage = document.getElementById('send-vote-error-message');
	elements.qrcodeHolder = document.getElementById('qrcode-holder');
	
	// Get dialogs
	dialogs.video = document.getElementById('dialog-video');
	dialogs.confirm = document.getElementById('dialog-confirm');
	dialogs.$confirm = $(dialogs.confirm);
	
	// Get election id and user's language/locale
	electionId = document.getElementById('electionid').value;
	lang = document.getElementById('lang').value.toLowerCase();
	
	// Block UI while loading election data from voting service
	$.blockUI({
		message: '<p>'+msg.loading+'</p>',
		fadeIn:  10
	});
	
	// Initiate retrieving election data from voting service
	setTimeout(retrieveElectionData, 50);
	
	// Switch to manually secret key upload if flag is set or the file api is not supported
	if (UPLOAD_SK_MANUALLY_ALWAYS || !fileApiSupported()) {
		$(elements.skUploadFile).hide();
		$(elements.skUploadManually).show();
	}
});

/**
 * Checks for file api support.
 * 
 * @return true if file api is supported.
 */
function fileApiSupported() {
	return (window.File && window.FileReader && window.FileList);
}

/**
 * Uploads (to the browser not to the server) the secret key. The secret key can
 * be uploaded either by file upload or manually by copy/paste. That depends on 
 * whether the browser supports the file api and whether the flag UPLOAD_SK_MANUALLY_ALWAYS 
 * is set.  
 */
function uploadSecretKey() {
	
	// Hide previous error message
	$(elements.uploadKeyError).hide();
	
	// Get password
	var pw = elements.password.value;
	
	if ( UPLOAD_SK_MANUALLY_ALWAYS || !fileApiSupported() ) {
		// Secret key is uploaded manually by copy/paste
		
		// Get secret key
		var filemanually = elements.filemanually.value;
		
		// Check for secret key and password
		if ( filemanually == '' || pw == '' ) {
			showUploadKeyError( 'filemanuallyOrPwMissing' );
		} else {
			// Decrypt secret key
			decryptSecretKey(filemanually, pw);
		}
	} else {
		// Secret key is uploaded by file upload
		
		// Get selected files
		var files = elements.file.files;
		
		// Check for files and password
		if ( files.length == 0 || pw == '' ) {
			showUploadKeyError( msg.fileOrPwMissing);
		} else {
			// Start reading the file
			// -> Decryption of secret key starts as soon as the file is read
			var reader = new FileReader();
			reader.onload = function(e) { decryptSecretKey(e.target.result, pw); };
			reader.readAsText(files[0]);
		}
	} 
}

/**
 * Decrypts secret key. On success, step 2 is displayed directly, otherwise on 
 * error (wrong password, broken secret key), an error message is displayed to 
 * the user.
 * 
 * @param key - Secret key as string.
 * @param pw - Password as string.
 */
function decryptSecretKey( key, pw ) {
	
	// Decrypt secret key using crypto library
	var sk = uvCrypto.decryptSecretKey( key, pw, function(errorMsg){showUploadKeyError(errorMsg);});
	
	// On success go to step 2
	if ( sk !== false ) {
		secretKey = sk;
		gotoStep2();
	}
}

/**
 * Shows a message to the user if anything went wrong during uploading and
 * decrypting the secret key.
 * 
 * @param message - The message to display to the user.
 */
function showUploadKeyError( message ) {
	$(elements.uploadKeyError).html(msg[message]).fadeIn(500);
}


/**
 * Goes to step 2: Voting interface.
 */
function gotoStep2(){	
	// Update progress bar
	$(elements.step1).removeClass("active");
	$(elements.step2).addClass("active");

	// Show vote content
	$(elements.step1content).addClass("hidden");
	$(elements.step2content).removeClass("hidden");
	
	// Scroll to top
	window.scrollTo(0, 0);
	
	// Open video dialog
	if ( listsAreSelectable ) {
		$(dialogs.video).dialog('open');
	}
}

/**
 * Goes to step 3: Confirmation
 */
function gotoStep3() {
	// Update proress bar
	$(elements.step2).removeClass("active");
	$(elements.step3).addClass("active");

	// Show confirmation content
	$(elements.step2content).addClass("hidden");
	$(elements.step3content).removeClass("hidden");
	
	// Scroll to top
	window.scrollTo(0, 0);
}

/**
 * Processes a fatal error. A fatal error is an error if occuring it is impossible
 * to continue (eg. voting service not available, corrupted election data, etc.).
 * An error message is displayed to the user for about 5s, afterwards the site is 
 * redirected to home. 
 * 
 * @param errorMsg - The error message to display.
 */
function processFatalError( errorMsg ) {
	$.unblockUI();
	// Show error message
	$.blockUI({ message: '<p>'+errorMsg+'</p>' });
	// Redirect to home after 5s
	setTimeout(function(){location.href = HOME_SITE}, 5000);
}



//===========================================================================
// Get and process data from election board service

/**
 * Retrieves election data from ElectionBoardSerivce (asynchronously).
 */
function retrieveElectionData() {

	// Error callback
	var retrieveElectionDataErrorCb = function(httpStatus, httpStatusText) {
		processFatalError(msg.retreiveElectionDataError);
	}
	
	// Success callback
	var retrieveElectionDataSuccessCb = function(responseObject) {
		// Save election data
		electionData = responseObject.getElectionData();
		// Check signature of election data
		uvCrypto.verifySignatureOfElectionData(electionData, verifySignatureCb);
	}
	
	// Retrieve election data from voting service asynchronously
	var serviceElection;
	serviceElection = new univote_bfh_ch_election_ElectionBoard();
	serviceElection.url = URL_VOTING_SERVICE+'ElectionBoardService';
	serviceElection.synchronous = false;
	serviceElection.getElectionData(retrieveElectionDataSuccessCb, retrieveElectionDataErrorCb, electionId);
}

/**
 * The callback for the verification of the election data signature. If the 
 * signature is correct then the election data are processed, otherwise a
 * fatal error. 
 * 
 * @param success - true if the signature is correct otherwise false.
 */
function verifySignatureCb(success) {
	
	if (!success) {
		processFatalError(msg.signatureError);
		return;
	}
	
	// 
	// The signature is correct, so process election data.
	// Doing all in once is too much for IE < 9!! 
	// So it is done in a few asynchronous steps.
	//
	var i, j, item, list;
	var choicesList, rulesList, lists;
	
	// Step 1: Process cryptographic parameters
	var step1 = function() {
		// Set Elgamal parameters, election generator and encryption key
		uvCrypto.setElgamalParameters(electionData.getPrime(), electionData.getGroupOrder(), electionData.getGenerator(), 10);
		electionGenerator = leemon.str2bigInt(electionData.getElectionGenerator(), 10, 1);
		encryptionKey = leemon.str2bigInt(electionData.getEncryptionKey(), 10, 1);
		setTimeout(step2, 10);
	};
	
	// Step 2: Process election details like title, choices and rules
	var step2 = function() {
		// Set title
		$(elements.electionTitle).html(electionData.getTitle());
		
		// Initilize arrays for choices and rules
		choiceIds = new Array();
		sumRules = new Array();
		forAllRules = new Array();

		// Get the choices and rules
		choicesList = electionData.getChoice();
		rulesList = electionData.getRule();

		// Get the lists from the choices and create PoliticalList objects
		lists = new Array();
		for(i = 0; i < choicesList.length; i++){
			item = choicesList[i];
			choiceIds.push(item.getChoiceId());
			if(item instanceof univote_bfh_ch_common_politicalList){
				list = new PoliticalList(item);
				lists.push(list);
			}
		}

		// If no list exists, create one and put afterwards every candidate into it
		if(lists.length == 0){
			noList = true;
			list = new PoliticalList(new univote_bfh_ch_common_politicalList());
			lists.push(list);
		}

		// Add candidates to the coresponding PoliticalList
		for(i = 0; i < choicesList.length; i++){
			item = choicesList[i];
			if(item instanceof univote_bfh_ch_common_candidate){
				if(noList){
					lists[0].addCandidate(item);
				}
				else{
					var listId = item.getListId();
					for(j = 0; j < lists.length; j++){
						list = lists[j];
						if(list.getOriginalList().getChoiceId() == listId){
							list.addCandidate(item);
						}
					}
				}
			}
		}
		
		setTimeout(step3, 10);
	};
	
	// Step 3: Process rules
	var step3 = function() {
		
		// Split different rules
		for(i = 0; i < rulesList.length; i++){
			var rule = rulesList[i];
			if(rule instanceof univote_bfh_ch_common_summationRule){
				sumRules.push(rule);
			}
			else if(rule instanceof univote_bfh_ch_common_forallRule){
				forAllRules.push(rule);
			}
		}
		
		// Figure out whether the voter can vote for candidates and a list or
		// only for candidates
		listsAreSelectable = rulesContainLists(sumRules, lists);
		
		// Render the vote view: Add lists and candidates to the view
		renderVoteView(lists);
		
		// Finally unblock the GUI
		$.unblockUI();
	};
	
	// Start with step 1
	setTimeout(step1, 10);
}


function rulesContainLists( sRules, lists ) {
	// Loop through the rules
	for( var j = 0; j < sRules.length; j++ ){
		if( sRules[j].getUpperBound() > 0 ) {
			var ids = sRules[j].getChoiceId();
			// Loop through the choice ids
			for( var i = 0; i < ids.length; i++ ){
				var id = ids[i];
				// Loop through the lists
				for( var l = 0; l < lists.length; l++ ) {
					if ( id == lists[l].getOriginalList().getChoiceId()) {
						// Yes, at least one rule contains list; so true is 
						// returned immediately. 
						return true;
					}
				}
			}
		}
	}
	return false;
}

/**
 * Renders the vote view; lists and candidates are added to the view.
 * 
 * @param lists - Array of PoliticalList.
 */
function renderVoteView(lists){
	
	// Replace vote text if only candidates and no lists are selectable
	if ( !listsAreSelectable ){
		$(elements.voteText).html(msg.voteTextCandidatesOnly);
	}
	
	// For each list
	for(var i = 1; i <= lists.length; i++){
		var list = lists[i-1];
		
		// Get list information
		var choiceId = list.getOriginalList().getChoiceId();
		var number = list.getOriginalList().getNumber();
		var title = getLocalizedText(list.getOriginalList().getTitle(), lang);		
		var partyName = getLocalizedText(list.getOriginalList().getPartyName(), lang);;
		var partyShortName = getLocalizedText(list.getOriginalList().getPartyShortName(), lang);
		
		// Tab creation
		var dragListIcon = listsAreSelectable ? '<img class="drag_list icon" src="img/plus.png" alt="'+msg.add+'" title="'+msg.add+'"/>' : '';
		var contentToAppend = '<li><a href="#list-'+i+'">'+msg.list+' '+number+'</a><input type="hidden" class="choiceid" value="'+choiceId+'"/>'+dragListIcon+'</li>';
		$(elements.lists).append(contentToAppend);

		// Creation of the list of candidates in HTML
		var contentToAppend2 = '<div id="list-'+i+'">';
		var partyShortNameStr = title === partyShortName || partyShortName === '' ? '' : partyShortName+' - ';
		contentToAppend2 += '<p>'+title+'<br/><span class="small">'+partyShortNameStr+partyName+'</span></p>';
		contentToAppend2 += '<ul class="list">';

		// For each candidate in the list
		for(var j= 0; j < list.getCandidates().length; j++){
			var candidate = list.getCandidates()[j];
			
			// Get candidate information
			var cNumber = candidate.getNumber();
			var cLastName = candidate.getLastName();
			var cFirstName = candidate.getFirstName();
			var cChoiceId = candidate.getChoiceId();
			var cStatus = candidate.getStatus();
			var cSemesterCount = candidate.getSemesterCount();
			var cStudyBranch = getLocalizedText(candidate.getStudyBranch(), lang);
			var cStudyDegree = getLocalizedText(candidate.getStudyDegree(), lang);
			
			// Create candidate's list element (currently cNumber is not displayed to the voter)
			var tooltiptext = [];
			//tooltiptext.push( cNumber );
			tooltiptext.push( cLastName + '&nbsp;' + cFirstName + (cStatus == 'PREVIOUS' ? ' <i>('+msg.previous+')</i>' : '') );
			if ( cStudyDegree != '' && cStudyDegree != '-' ) tooltiptext.push( cStudyDegree );
			if ( cStudyBranch != '' && cStudyBranch != '-' ) tooltiptext.push( cStudyBranch );
			if ( cSemesterCount > 0 ) tooltiptext.push( msg.semester + ': '+cSemesterCount);
			
			for(var h=0; h<candidate.getCumulation(); h++){
				contentToAppend2 += '<li class="ui-state-default">' +
						//'<span>' + cNumber + ' ' + cLastName + ' ' + cFirstName + 
						'<span>&nbsp;' + cLastName + ' ' + cFirstName + 
						(cStatus == 'PREVIOUS' ? ' <i>(' + msg.previous+')</i>' : '') + 
						'</span><input type="hidden" class="choiceid" value="' + cChoiceId + '"/>' +
						'<img class="drag_candidate icon" src="img/plus.png" alt="'+msg.add+'" title="'+msg.add+'"/>' +
						'<img class="tooltip_candidate icon" src="img/info_small.png" alt="" tooltip="'+tooltiptext.join('<br/>')+'"/>'+
						'</li>';
			}
		}
		contentToAppend2 += '</ul></div>';
		$(elements.listsContent).append(contentToAppend2);

	}

	// Generate jquery user interface 
	jquery_generate({ 'listsAreSelectable' : listsAreSelectable } );
}

/**
 * Helper for localized text elements of lists and candidates.
 * 
 * @param localizedText - Array of univote_bfh_ch_common_localizedText.
 * @param lang - Current language.
 */
function getLocalizedText(localizedText, lang) {
	
	var text = '';
	for(var o = 0; o < localizedText.length; o++){
		if(localizedText[o].getLanguage().toLowerCase() == lang){
			text = localizedText[o].getText();
			break;
		}
	}
	if(text == '' && localizedText.length > 0){
		text = localizedText[0].getText();
	}
	return text;
}

//===========================================================================


