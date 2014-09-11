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
 * This file contains the index-page specific JS. 
 * 
 */


/**
 * Check cookie support and browser version on document ready.
 */
$(document).ready(function() {

    // 1. Check cookie support
    if (!ucUtilCookie.areSupported()) {
        $.blockUI({
            message: '<div id="browser-check">' +
                    '<h2>' + msg.cookieSupport + '</h2>' +
                    '<p>' + msg.cookieSupportText + '</p>' +
                    '</div>',
            overlayCSS: {opacity: '0.3'}
        });
        return;
    }


    // 2. Check browser version
    // In the current version, the js file api is not needed. But for checking
    // for an actual version of FF, Safari and Chrome the file api can be used.
    // IE is checked by version as IE9 is fine but does not support the file api. 
    if (
            (!$.browser.msie && !(window.File && window.FileReader && window.FileList && window.Blob)) ||
            ($.browser.msie && $.browser.version < 9)
            ) {

        $.blockUI({
            message: '<div id="browser-check">' +
                    '<h2>' + msg.browsercheck1 + '</h2>' +
                    '<p>' + msg.browsercheck2 + '</p><p>' + msg.browsercheck3 + '</p>' +
                    '<p style="padding-top: 20px;"><button class="button" onclick="$.unblockUI();">' + msg.close + '</button></p></div>',
            overlayCSS: {opacity: '0.2'}
        });
    }

});

/**
 * Shows the brief instruction as overlay.
 */
function showBriefInstruction() {

    $.blockUI({
        message: '<div id="brief-instruction">' +
                '<h2>' + msg.instructionTitle + '</h2>' +
                msg.instructionText + '</div>' +
                '<p><button class="button" onclick="$.unblockUI();">' + msg.close + '</button></p>',
        css: {top: '20%', left: '20%', width: '60%'}

    });

}

/**
 * Shows the support/help box as overlay
 */
function showHelp() {

    $.blockUI({
        message: '<div id="help-box">' +
                '<h2>' + msg.helpBoxTitle + '</h2>' +
                '<p>' + msg.helpBoxText + '</p>' +
                '<form action="" name="help"><div><span>' + msg.helpBoxEmail + '</span><input type="text" name="email" id="email"/>' +
                '<span>' + msg.helpBoxMessage + '</span><textarea name="message" id="message"></textarea>' +
                '<span class="tiny">' + msg.helpBoxMessageAdds + '</span>' +
                '<button class="button" onclick="return submitHelpForm($(\'#email\').val(),$(\'#message\').val());">' + msg.helpBoxSubmit + '</button>' +
                '<button class="button" onclick="$.unblockUI(); return false;">' + msg.close + '</button>' + '</div></form>' +
                '</div>',
        css: {top: '20%', left: '20%', width: '60%'}
    });
}

/**
 * Submits the help form.
 */
function submitHelpForm(email, message) {
    var dataString = 'email=' + email + '&message=' + message + '&useragent=' + navigator.userAgent;
    $.unblockUI();
    $.blockUI({
        message: '<p>' + msg.helpBoxWait + '</p>'
    });

    $.ajax({
        type: "POST",
        url: "supportRequest.jsp",
        data: dataString,
        dataType: "text",
        success: function() {
            $.unblockUI();
            $.blockUI({
                message: '<p>' + msg.helpBoxSuccess + '</p>',
                timeout: 3000
            });
        },
        error: function() {
            $.unblockUI();
            $.blockUI({
                message: '<p>' + msg.helpBoxError + '</p>',
                timeout: 3000
            });
        }
    });
    return false;
}
