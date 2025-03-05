/*
	@Author: Kristinita
	@Date: 2023-12-29 17:33:31
	@Last Modified by: Kristinita
	@Last Modified time: 2025-03-02 21:08:35
*/
/*
@Author: Kristinita
@Date: 2023-12-07 10:46:44
@Last Modified by: Kristinita
@Last Modified time: 2025-03-02 13:56:00
*/
/*
[INFO] Use balloon.css for class:
https://github.com/kazzkiq/balloon.css/issues/150#issuecomment-706774970
*/
/*
[LEARN][COFFEESCRIPT] CoffeeScript no needed specific syntax for multiline stings:
https://riptutorial.com/coffeescript/example/19672/multiline-strings
*/
/*
[LEARN][JAVASCRIPT] Set attribute value for all elements with specific class:
https://stackoverflow.com/a/78021790/5951529
*/
/*
[INFO] Activate Clipboard.js for all elements with “.SashaClipboardButton” class:
https://stackoverflow.com/a/33758435/5951529
https://github.com/twbs/bootstrap/blob/c396a2a444b504de50a4d3b0a4f70dd7cd595333/site/assets/js/code-examples.js#L55

[FIXME][SO] Add to Stack Overflow solution without jQuery:
https://stackoverflow.com/q/33757518/5951529

[LEARN][JAVASCRIPT] “trimEnd()” remove white space characters and line terminators in the end of the string:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd#return_value

[LEARN][JAVASCRIPT] Get lang attribute of “<html>” tag:
https://stackoverflow.com/a/33656976/5951529

[INFO] “Clipboard” is a reserved name of Clipboard.js constructor function,
“text” — reserved name of the method. Don’t change these names.

[LEARN][COFFEESCRIPT] JSDoc in CoffeeScript:
https://stackoverflow.com/a/24348892/5951529

[LEARN][CLOSURE] Any function with the keyword “new” must have “@constructor” tag:
https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#constructor
https://stackoverflow.com/a/5301591/5951529
*/
/** @constructor */
var kiraAriaLabelAttribute, kiraBalloon, kiraBalloonCopied, kiraBalloonCopyIt, kiraBalloonErrorMessage, kiraClassAttribute, kiraClipboardButton, kiraClipboardButtons, kiraCodeBlockClipboard, kiraWebPageLanguage;

//###############
// Clipboard.js #
//###############
/*
[OVERVIEW] Copy text by click without Flash:
https://clipboardjs.com/
*/
//##############
// balloon.css #
//##############
/*
[OVERVIEW] Tooltips without JavaScript:
https://kazzkiq.github.io/balloon.css/

[NOTE] Sticky hover problem:
https://github.com/kazzkiq/balloon.css/issues/152
*/
/*
[INFO] Repeated strings — attribute names
*/
kiraAriaLabelAttribute = "aria-label";

kiraClassAttribute = "class";

kiraCodeBlockClipboard = new Clipboard(".SashaClipboardButton", {
	text: (trigger) => trigger.closest(".SashaBlockHighlight").querySelector("pre").textContent.trimEnd()
});

kiraWebPageLanguage = document.documentElement.lang;

/*
[LEARN][JAVASCRIPT] “if/else”:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
https://www.w3schools.com/jsref/jsref_if.asp

[LEARN][COFFEESCRIPT] “if/else”:
https://riptutorial.com/coffeescript/example/15079/if--if---then--if---else--unless--ternary-operator
*/
if (kiraWebPageLanguage === "ru") {
	kiraBalloonCopyIt = "Кликните, чтобы скопировать код";
	kiraBalloonCopied = "Скопировано!";
	kiraBalloonErrorMessage = "Произошла ошибка при копировании. Пожалуйста, сообщите о ней разработчикам сайта. «OK» — написать сообщение об ошибке, «Cancel» — продолжить пользоваться сайтом.";
} else {
	kiraBalloonCopyIt = "Click to copy code to the clipboard";
	kiraBalloonCopied = "Copied!";
	kiraBalloonErrorMessage = "An error occurred while copying. Please, if possible, inform the site developers about it. “OK” — write an error message, “Cancel” — continue using the site.";
}

kiraClipboardButtons = document.querySelectorAll(".SashaClipboardButton");

for (kiraClipboardButton of kiraClipboardButtons) {
	kiraClipboardButton.setAttribute(kiraAriaLabelAttribute, kiraBalloonCopyIt);
}

kiraBalloon = (kiraTooltip) => {
	/* eslint-disable no-magic-numbers */
	var kiraTooltipDisplayTime;
	kiraTooltip.removeAttribute(kiraClassAttribute);
	kiraTooltip.setAttribute(kiraAriaLabelAttribute, kiraBalloonCopied);
	kiraTooltip.setAttribute(kiraClassAttribute, "SashaBalloonAfterClick");
	kiraTooltipDisplayTime = 2000;
	return setTimeout((() => {
		kiraTooltip.removeAttribute(kiraClassAttribute);
		kiraTooltip.removeAttribute(kiraAriaLabelAttribute);
		kiraTooltip.setAttribute(kiraClassAttribute, "SashaClipboardButton");
		return kiraTooltip.setAttribute(kiraAriaLabelAttribute, kiraBalloonCopyIt);
	}), kiraTooltipDisplayTime);
};

/* eslint-enable no-magic-numbers */
/* eslint-disable no-console --

[INFO] I think that messages about successful and unsuccessful copying aren’t debugging information,
and it can be send to the browser users:
https://eslint.org/docs/latest/rules/no-console#when-not-to-use-it
*/
/*
[INFO] Run function after success and error Clipboard.js copy action:
https://clipboardjs.com/#events
*/
kiraCodeBlockClipboard.on("success", (kiraElement) => {
	console.info("Action:", kiraElement.action);
	console.info("Text:", kiraElement.text);
	console.info("Trigger:", kiraElement.trigger);
	/*
	[EXAMPLE] Clipboard.js events:
	http://bit.ly/clipboardjs-events
	*/
	kiraBalloon(kiraElement.trigger);
	/*
	[INFO] “clearSelection()” method of Clipboard.js:
	https://clipboardjs.com/#events
	*/
	return kiraElement.clearSelection();
});

kiraCodeBlockClipboard.on("error", (kiraElement) => {
	console.error("Action:", kiraElement.action);
	console.error("Trigger:", kiraElement.trigger);
	/* eslint-disable no-alert --

	[INFO] When there is an error with Clipboard.js I prompt the user to submit an error message.
	In my opinion, this is a valid use case for the “confirm” function.
	*/
	/*
	[INFO] Default “alert” doesn’t support links, use “window.confirm” instead:
	https://stackoverflow.com/a/26746479/5951529

	[REQUIRED] “if” statement

	[INFO] Open link in the new window:
	https://stackoverflow.com/a/62119507/5951529
	*/
	if (globalThis.confirm(kiraBalloonErrorMessage)) {
		window.open("https://github.com/Kristinita/KristinitaPelican/issues/new", "_blank", "noopener");
	}
	return kiraElement.clearSelection();
});

/* eslint-enable no-console, no-alert */

//# sourceMappingURL=clipboard.js.map
