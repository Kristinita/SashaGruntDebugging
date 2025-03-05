/*
@Author: Kristinita
@Date: 2023-12-07 10:46:44
@Last Modified by: Kristinita
@Last Modified time: 2025-02-27 20:18:24
*/
/* eslint-disable camelcase --

[INFO] Variable must be in camelCase, not under_score naming convention:
https://eslint.org/docs/latest/rules/camelcase

[NOTE] Third-party AddToAny variables in under_score style;
I can’t overwrite them to camelCase

[NOTE] Place “eslint-disable camelcase” before the “kiraAddAriaLabelToInput” function.
If you places it to the beginning of the file, “var a2a_config, kiraAddAriaLabelToInput;”
will be in the beginning of the your file, before this comments.
If “eslint-disable camelcase” before the “kiraAddAriaLabelToInput” function,
comments will be before “var a2a_config, kiraAddAriaLabelToInput;” in the compiled “.js” file.

[NOTE] Place “eslint-enable camelcase” after “kiraObjectNoLabeledFormID”,
otherwise CoffeeScript move “eslint-enable camelcase” to the top of the file
before declaring variables.
*/
/*
[PATCH] Add “aria-label” instead of “title” for AddToAny forms.

[INFO] If “title” attribute exists, but no “label” attribute for the form,
WAVE (Web Accessibility evaluation tool) issues a warning “Unlabeled form control with title”:
https://app.pope.tech/result-documentation/articles/unlabeled-form-control-with-title
*/
var a2a_config, kiraAddAriaLabelToInput;

//###########
// AddToAny #
//###########
/*
[OVERVIEW] Highly customisable share buttons:
https://www.addtoany.com

[INFO] API:
https://www.addtoany.com/buttons/api/
*/
/*
[REQUIRED] “a2a_config = {}”. Otherwise, “Uncaught ReferenceError: a2a_config is not defined”

[NOTREQUIRED] “a2a_config = a2a_config or {}” instead of “a2a_config = {}”

[REQUIRED] This comment multiline.
Otherwise, CoffeeScript move “eslint-disable camelcase” below “var a2a_config”
*/
a2a_config = {};

/*
[INFO] Disable tracking:
https://blog.futtta.be/2010/01/22/add-to-any-removed-from-here/
*/
a2a_config.no_3p = true;

a2a_config.track_links = false;

/*
[INFO] Icons color:
https://www.addtoany.com/buttons/customize/icon_color
*/
a2a_config.icon_color = "seashell,midnightblue";

/*
[INFO] Number of services:
https://www.addtoany.com/buttons/customize/number_services
*/
a2a_config.num_services = 10;

/*
[INFO] Menu orientation:
https://www.addtoany.com/buttons/customize/orientation
*/
a2a_config.orientation = "down";

/*
[INFO] Prioritize services:
https://www.addtoany.com/buttons/customize/prioritize_services
*/
a2a_config.prioritize = [
  "facebook",
  "vk",
  "x",
  "evernote",
  "livejournal",
  "viber",
  "whatsapp",
  "myspace",
  "odnoklassniki",
  "threads",
  "telegram",
  "pinterest",
  "design_float",
  "diary_ru",
  "linkedin",
  "reddit",
  "dzone",
  "hacker_news",
  "known",
  "refind",
  "blogger",
  "skype",
  "slashdot",
  "tubmlr",
  // [INFO] RSS subscribe buttons:
  // https://www.addtoany.com/subscribe/preferences
  "the_free_library",
  "daily_rotation",
  "newsisfree",
  "protopage_news_feeds",
  "bitty_browser_preview",
  "my_aol",
  "agregator",
  "my_yahoo",
  "feedblitz",
  "outlook"
];

kiraAddAriaLabelToInput = async (kiraNoLabeledFormID, kiraAriaLabelText) => {
  /*
  [LEARN][COFFEESCRIPT] “async/await”, introduced to EcmaScript 2017, for CoffeeScript:
  https://coffeescript.org/#async-functions
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  */
  var kiraObjectNoLabeledFormID;
  kiraObjectNoLabeledFormID = (await waitForElm(kiraNoLabeledFormID));
  /* eslint-enable camelcase */
  /*
  [INFO] Check, does the tag have “aria-label” attribute:
  https://www.javascripttutorial.net/javascript-dom/javascript-hasattribute/
  */
  if (kiraObjectNoLabeledFormID.hasAttribute("aria-label")) {
    /* eslint-disable no-console --

    [INFO] I think it is acceptable to leave “console.error” in the console in this case
    so that the error can be tracked when the developers fix the problem
    */
    return console.error(`“aria-label” attribute already exists for ${kiraObjectNoLabeledFormID.id} element!`);
  } 
    /*
    [NOTE][REQUIRED] If this attribute exists in AddToAny tags,
    it returns the “title” attribute and the sources remains invalid

    [LEARN][COFFEESCRIPT] If property name contain “-” symbol, convert it from kebab-case to lowerCamelCase:
    “a2a-localize” → “a2aLocalize”. Otherwise, CoffeeScript compile property as if it
    had a minus operator — “a2a - localize”.

    [NOTE] Syntax with square brackent described in “CoffeeScript in Action” book doesn’t work.
    CoffeeScript compile “kiraObjectNoLabeledFormID.dataset["a2a-localize"]” to the same syntax
    “kiraObjectNoLabeledFormID.dataset["a2a-localize"]”:
    https://www.digitalo.cz/dokument/qBhi6rSjJ87tFJ6y/plny-text.pdf#page=102
    */
    /* eslint-enable no-console */
    if (kiraObjectNoLabeledFormID.dataset.a2aLocalize) {
      delete kiraObjectNoLabeledFormID.dataset.a2aLocalize;
    }
    /*
    [LEARN][ACCESSIBILITY] “aria-label” attribute is preferrable for accessibility than “title”.

    “Some of the attributes are incredibly unreliable (title) and others can only legally
    — and successfully — be used on certain elements (alt),
    leaving the two dedicated ARIA attributes aria-label and aria-labelledby”:
    https://stackoverflow.com/posts/comments/47613862
    https://dev.opera.com/articles/ux-accessibility-aria-label/#accessible-name-calculation
    https://silktide.com/blog/i-thought-title-text-improved-accessibility-i-was-wrong/

    [NOTE] If both “title” and “aria-label” exists,
    WAVE still shows the error “Unlabeled form control with title”.
    Solely “label” or “aria-labelledby” required for WAVE
    */
    kiraObjectNoLabeledFormID.removeAttribute("title");
    return kiraObjectNoLabeledFormID.setAttribute("aria-label", kiraAriaLabelText);
  
};

kiraAddAriaLabelToInput("#a2a_copy_link_text", "Copy link");

kiraAddAriaLabelToInput("#a2apage_find", "Find any service to add to");

//# sourceMappingURL=addtoany.js.map
