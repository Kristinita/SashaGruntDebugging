/*
@Author: Kristinita
@Date: 2023-12-19 13:07:24
@Last Modified by: Kristinita
@Last Modified time: 2025-03-02 13:56:38
*/
/*
[PATCH] Add “aria-label” attribute for unlabeled forms.
This allows pages with Google Translate to pass accessibility tools tests.
*/
/*
[PATCH] Add submit button for “form” elements without it.

[INFO] CodeSniffer example of valid code:
https://github.com/fuzzbomb/HTML_CodeSniffer/commit/57a28d810de0c4dc67f98b5225bb7656c1655df5
*/
/*
[PATCH] Add “title” attribute for untitled iframes.

[INFO] Iframe titles important for accessibility:
https://www.boia.org/blog/why-are-iframe-titles-important-for-accessibility
https://dequeuniversity.com/tips/provide-iframe-titles

[REQUIRED] Attribute “title” if attribute “name” exists.
*/
/*
[OVERVIEW] Make google-custom-translate widget accessible for people use solely keyboard without mouse.
We start translation into the language corresponding to the flag
when the user focuses on the flag and presses “Enter”

[REQUIRED] “tabindex="0"” for each “img” tag with gctw flag.

[INFO] Recommended method on Stack Overflow with “addEventListener”:
https://stackoverflow.com/a/45650898/5951529

[NOTE][LEARN][COFFEESCRIPT] CoffeeScript doesn’t support “let” and “const”:
https://coffeescript.org/#unsupported-let-const
*/
var kiraAddAriaLabelToInput, kiraAddSubmitButtonToForm, kiraAddTitleToIframe, kiraFlag, kiraFlags;

kiraFlags = document.querySelectorAll(".language__img");

/*
[INFO] Listen each element of the class “.language__img”:
https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class

[LEARN][COFFEESCRIPT] “for-from” compiled to “for-of” in CoffeeScript:
https://coffeescript.org/#generators
https://stackoverflow.com/a/57637660/5951529
*/
for (kiraFlag of kiraFlags) {
  /*
  [INFO] “keyup” event — listen keyboard keystrokes:
  https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
  */
  kiraFlag.addEventListener("keyup", (kiraEvent) => {
    /*
    [INFO] Get the active (i.e. that currently has focus) HTML element:
    https://stackoverflow.com/a/497108/5951529
    */
    var kiraFocusedFlag;
    if (kiraEvent.key !== "Enter") {
      return;
    }
    kiraFocusedFlag = document.activeElement;
    kiraFocusedFlag.click();
    /* eslint-disable no-console --

    [INFO] I think that the messages about pressing “Enter” on the flag,
    which include ISO 639-1 Alpha-2 language codes, the language into which the translation is being performed,
    aren’t debugging information and can be send to the browser users:
    https://eslint.org/docs/latest/rules/no-console#when-not-to-use-it
    */
    console.log(`The “Enter” button is pressed on the flag of a country with “${kiraFocusedFlag.dataset.googleLang}” language`);
    /* eslint-enable no-console */
    /*
    [REQUIRED][INFO] Prevent default browser behavior when pressing the “Enter” key:
    https://htmlacademy.ru/blog/js/prevent-default
    */
    kiraEvent.preventDefault();
  });
}

kiraAddAriaLabelToInput = async (kiraNoLabeledFormID, kiraAriaLabelText) => {
  var kiraObjectForModifications;
  kiraObjectForModifications = (await waitForElm(kiraNoLabeledFormID));
  /*
  [INFO] Check, does the tag have “aria-label” attribute:
  https://www.javascripttutorial.net/javascript-dom/javascript-hasattribute/
  */
  if (kiraObjectForModifications.hasAttribute("aria-label")) {
    /* eslint-disable no-console --

    [INFO] I think it’s acceptable to leave “console.error” in the console in this case
    so that the error can be tracked when the developers fix the problem
    */
    return console.error(`“aria-label” attribute already exists for ${kiraObjectForModifications.id} element!`);
  } 
    // [INFO] Add “aria-label” property
    /* eslint-enable no-console */
    return kiraObjectForModifications.setAttribute("aria-label", kiraAriaLabelText);
  
};

// [INFO] Get unlabeled form ids from reports of Pa11y, axe, WAVE or another accessibility tools
kiraAddAriaLabelToInput("#goog-gt-votingInputSrcLang", "Google Translate form for source language");

kiraAddAriaLabelToInput("#goog-gt-votingInputSrcText", "Google Translate form for source text");

kiraAddAriaLabelToInput("#goog-gt-votingInputTrgLang", "Google Translate form for target language");

kiraAddAriaLabelToInput("#goog-gt-votingInputTrgText", "Google Translate form for target text");

kiraAddAriaLabelToInput("#goog-gt-votingInputVote", "Google Translate voting form");

kiraAddTitleToIframe = async (kiraUntitledIframe, kiraTitle) => {
  var kiraObjectForModifications;
  kiraObjectForModifications = (await waitForElm(kiraUntitledIframe));
  if (kiraObjectForModifications.hasAttribute("title")) {
    /* eslint-disable no-console */
    return console.error(`“title” attribute already exists for ${kiraObjectForModifications.name} element!`);
  } 
    /* eslint-enable no-console */
    return kiraObjectForModifications.setAttribute("title", kiraTitle);
  
};

/*
[LEARN][JAVASCRIPT] Get element with custom selector:
https://sabe.io/blog/javascript-query-elements-data-attribute

[REQUIRED] Use “[id=':0.container']”, not “#:0.container” syntax
for iframe with id “:0.container”, otherwise error:
“Uncaught (in promise) DOMException: Document.querySelector: '#:0.container' is not a valid selector”:
https://stackoverflow.com/a/51396346/5951529
https://stackoverflow.com/a/52390114/5951529
*/
kiraAddTitleToIframe("[id=':0.container']", "Google Translate Skiptranslate iframe");

kiraAddTitleToIframe("[name='votingFrame']", "Google Translate voting iframe");

kiraAddTitleToIframe("[sandbox='allow-scripts']", "Google Translate Closure iframe");

kiraAddSubmitButtonToForm = async (kiraUnsubmittedForm, kiraTitle) => {
  /* eslint-disable no-magic-numbers --

  [INFO] Remove “#” symbol for adding value to the “form” attribute.
  For example, the button for “<form id="goog-gt-votingForm"></form>”
  is “<button form="goog-gt-votingForm"></button>”.
  In this case, “kiraUnsubmittedForm” value is “#goog-gt-votingForm”,
  “form” attribute needs “goog-gt-votingForm” — “kiraUnsubmittedForm” without first “#”.

  [LEARN][JAVASCRIPT] “slice(1)” — remove the first string symbol on JavaScript:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  */
  var kiraButtonFormValue, kiraExistingSubmitButton, kiraObjectForModifications, kiraSubmitButton;
  kiraObjectForModifications = (await waitForElm(kiraUnsubmittedForm));
  kiraButtonFormValue = kiraUnsubmittedForm.slice(1);
  kiraExistingSubmitButton = document.querySelector(`[form='${kiraButtonFormValue}']`);
  /* eslint-enable no-magic-numbers --

  [REQUIRED] “eslint-enable no-magic-numbers” after define “KiraExistingSubmitButton”.
  Otherwise, CoffeeScript compile “eslint-enable” before defining all variables.

  */
  if (kiraExistingSubmitButton) {
    /* eslint-disable no-console --

    [REQUIRED] “eslint-enable no-console” after define “KiraSubmitButton”.
    Otherwise, CoffeeScript compile “eslint-enable” before defining all variables:

    ``` js
    /* esint-enable no-console *\/
      		var kiraButtonFormValue, kiraExistingSubmitButton, kiraObjectForModifications, kiraSubmitButton;
    ```

    */
    return console.error(`Element with “form='${kiraButtonFormValue}'” already exists!`);
  } 
    kiraSubmitButton = document.createElement("button");
    /* eslint-enable no-console */
    /*
    [LEARN][JAVASCRIPT] Add “button” element after “form”:
    https://stackoverflow.com/a/59360710/5951529
    https://developer.mozilla.org/en-US/docs/Web/API/Element/after
    */
    kiraObjectForModifications.after(kiraSubmitButton);
    /*
    [REQUIRED] “setattribute()” method after “after()” method.
    “after()” don’t append tag with attributes.
    */
    kiraSubmitButton.setAttribute("form", kiraButtonFormValue);
    /*
    [LEARN][JAVASCRIPT] Safely add text, not HTML to “button” element use “append()” or “prepend()” methods:
    https://developer.mozilla.org/en-US/docs/Web/API/Element/append
    https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
    */
    return kiraSubmitButton.append("Submit");
  
};

kiraAddSubmitButtonToForm("#goog-gt-votingForm", "Google Translate submit button for voting form");

//# sourceMappingURL=gtcw-accessibility.js.map
