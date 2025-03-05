/*
@Author: Kristinita
@Date: 2017-05-02 11:44:00
@Last Modified by: Kristinita
@Last Modified time: 2025-03-02 13:40:29
*/
/*
[PATCH] Add missing “aria-label” attribute to Gemini Scrollbar object:
https://github.com/noeldelgado/gemini-scrollbar/pull/67#issuecomment-1853502637

It’s required for Lighthouse testing:
“Add alternative text to all embedded “<object>” elements using either
“aria-label”, “aria-labelledby”, or “title” attributes.”
https://dequeuniversity.com/rules/axe/4.8/object-alt
*/
var internals, kiraAddAriaLabelToObject;

//###################
// gemini-scrollbar #
//###################
/*
[PURPOSE] Custom scrollbar instead of native body scrollbar:
https://noeldelgado.github.io/gemini-scrollbar/

[INFO] Usage — post of plugin author:
https://github.com/noeldelgado/gemini-scrollbar/issues/46
*/
// [REQUIRED] Don’t delete this line! Scrolling will be incorrect.
internals = {};

internals.initialize = () => {
  internals.scrollbar = new GeminiScrollbar({
    autoshow: true,
    /*
    [NOTE][REQUIRED] That Gemini scrollbar don’t prevent
    native iframes lazy loading:
    https://github.com/noeldelgado/gemini-scrollbar/issues/69
    */
    createElements: false,
    /*
    [INFO] “querySelector” method:
    https://www.w3schools.com/jsref/met_document_queryselector.asp
    */
    element: document.querySelector("body"),
    /*
    [NOTE][REQUIRED] Without “forceGemini” Gemini Scrollbar scrollbar isn’t showing
    in new versions of Firefox, Safari and in all modern mobile browsers:
    https://github.com/noeldelgado/gemini-scrollbar/issues/70

    [INFO] Force Gemini for correct scrollbar displaying in mobile devices
    https://github.com/noeldelgado/gemini-scrollbar#options

    [INFO] I use gemini-scrollbar to replace the ugly default scrollbars
    of desktop browsers. Mobile browsers haven’t ugly scrollbars
    and I don’t need gemini-scrollbar for them.

    [INFO] In my opinion, the site looks prettier without gemini-scrollbar
    on mobile browsers

    [COMPARE]
    https://i.imgur.com/1dAPPY0.png
    https://i.imgur.com/DCGDJg5.png
    */
    forceGemini: true
  }).create();
  internals.scrollingElement = internals.scrollbar.getViewElement();
  return internals.scrollToHash();
};

/*
[DECLINED] I migrated to Defer.js

[INFO] JQuery Lazy support:
https://github.com/eisbehr-/jquery.lazy/issues/88#issuecomment-299138103

$('.SashaLazy').Lazy
	appendScroll: $(internals.scrollbar.getViewElement())

	[INFO] Run Gemini “update” method:
	https://github.com/noeldelgado/gemini-scrollbar#basic-methods
	http://jquery.eisbehr.de/lazy/example_callback-functions
	https://github.com/eisbehr-/jquery.lazy/issues/88#issuecomment-299196388

	afterLoad: ->
		internals.scrollbar.update()
		return
*/
/*
[DEPRECATED] Wildfire no longer functioning more

[INFO] Wildfire comments lazy loading:
https://stackoverflow.com/a/63869810/5951529
[LEARN][JQUERY_LAZY] Create custom loader:
https://github.com/dkern/jquery.lazy#custom-content-loaders

$('.wildfire_thread').Lazy
	KiraComments: (element, response) ->
		$.getScript 'https://cdn.jsdelivr.net/npm/wildfire/dist/wildfire.auto.js', ->
			response true
			return
		return
 * [FIXME] Duplicate code
	appendScroll: $(internals.scrollbar.getViewElement())
	afterLoad: ->
		internals.scrollbar.update()
		return
return
 */
internals.handleOrientationChange = () => {
  internals.scrollbar.update();
  internals.scrollToHash();
};

internals.scrollToHash = () => {
  /*
  [INFO] Get hash — part of URL after “#” symbol:
  https://javascript.ru/window-location

  [INFO] Decode URL hash, example:
  “#%D0%9A%D0%B8%D1%80%D0%B0” → “#Кира”
  https://www.w3schools.com/jsref/jsref_decodeuri.asp

  [NOTE][COMPATIBILITY] Decoding required for some browsers as Chrome and Opera;
  without decoding links with anchors will not open;
  scrollbar will move to top of page:
  https://stackoverflow.com/a/48218282/5951529
  */
  /*
  [INFO] Replacing to id, example:
  “#Кира” → “<a id="Кира">”
  */
  /* eslint-disable no-magic-numbers --

  [INFO] Scroll to specific id

  [LEARN][JAVASCRIPT] “scrollTo()” method:
  https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo

  */
  var kiraDechash, kiraHash, kiraHeader, kiraScrollingXCoordinate;
  kiraHash = location.hash;
  kiraDechash = decodeURI(kiraHash);
  if (kiraDechash) {
    kiraHeader = document.querySelector(kiraDechash);
    if (kiraHeader) {
      kiraScrollingXCoordinate = 0;
      internals.scrollingElement.scrollTo(kiraScrollingXCoordinate, kiraHeader.offsetTop);
    }
  }
};

// [INFO] Listeners
/* eslint-enable no-magic-numbers */
/*
[REQUIRED] “return” here.
ESLint “consistent-return” rule:
https://eslint.org/docs/latest/rules/consistent-return
*/
window.addEventListener("load", internals.initialize);

globalThis.addEventListener("orientationchange", internals.handleOrientationChange);

kiraAddAriaLabelToObject = async (kiraNoLabeledObject) => {
  var kiraObjectNoLabeledObject;
  kiraObjectNoLabeledObject = (await waitForElm(kiraNoLabeledObject));
  if (kiraObjectNoLabeledObject.hasAttribute("aria-label")) {
    /* eslint-disable no-console --

    [NOTE] Plugin doesn’t support ESLint 9, so I temporary disable lines
    “eslint-disable xss/no-mixed-html” and “eslint-disable xss/no-mixed-html”
    [FIXME] Restore “eslint-disable xss/no-mixed-html” and “eslint-disable xss/no-mixed-html”
    if the development of the xss plugin will continue, or delete this comment
    if the plugin will not longer developed.

    [INFO] I think it is acceptable to leave “console.error” in the console in this case
    so that the error can be tracked when the developers fix the problem
    */
    return console.error("“aria-label” attribute already exists for gemini-scrollbar <object> element!");
  } 
    /* eslint-enable no-console */
    return kiraObjectNoLabeledObject.setAttribute("aria-label", "Resize trigger of Gemini scollbar");
  
};

kiraAddAriaLabelToObject(".gm-resize-trigger");

//# sourceMappingURL=gemini-scrollbar.js.map
