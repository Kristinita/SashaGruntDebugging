/*
@Author: Kristinita
@Date: 2023-12-07 10:46:44
@Last Modified by: Kristinita
@Last Modified time: 2025-02-20 19:35:24
*/
/* eslint-disable camelcase, id-length --

[INFO] Variable must be in camelCase, not under_score naming convention:
https://eslint.org/docs/latest/rules/camelcase

[NOTE] Third-party browser-update variables in under_score style;
I can’t overwrite them in camelCase

[INFO] ESLint doesn’t allow to create names of one or two characters.
This makes it difficult to understand the purpose of the elementsю
https://eslint.org/docs/latest/rules/id-length

[NOTE] Third-party browser-update variables contain keys of one or two characters;
I can’t overwrite them.

[NOTE] Place “eslint-enable id-length” after “kiraBrowserUpdateScript”.
Otherwise, CoffeeScript move “eslint-enable id-length” to the top of the file
before declaring variables.
*/
var $buo_f, $buoop, alternative, argumentsEn, argumentsRu, lifewire, quora1, quora2, slant;

//#################
// Browser-Update #
//#################
/*
[OVERVIEW] Show message, if user use bad or outdated browser:
https://browser-update.org/

[CONFIGURATION]
https://browser-update.org/customize.html

[WIKI]
https://github.com/browser-update/browser-update/wiki

[NOTE] Browser Update is on blocklists of adblockers as uBlockOrigin and Disconnect.
Adblocker users don’t see Browser Update notifications.
https://github.com/uBlockOrigin/uAssets/issues/7084#issuecomment-1958963012
https://github.com/disconnectme/disconnect-tracking-protection/issues/160

[INFO] If we add “#test-bu” to the end of any URL with browser-update, browser-update message will always show.
It always shows debug information:
https://bit.ly/browser-update-test-bu

[INFO] If “#test-bu”, test message will always show as if “test:true”

[INFO] If we add “#ignorecookie-bu” to the end of any URL with browser-update,
browser-update will ignore cookies:
https://github.com/browser-update/browser-update/wiki/Test-the-notification#ignore-the-cookie

[NOTE] Browser Update don’t support Browserslist:
https://github.com/browser-update/browser-update/issues/389
*/
// [INFO] Links for outdated browsers:
argumentsEn = "arguments";

argumentsRu = "аргументы";

// [INFO] Links for Internet Explorer:
alternative = "Alternative.to";

lifewire = "Lifewire";

quora1 = "Quora";

quora2 = "Quora";

slant = "Slant";

$buoop = {
  /*
  [REQUIRED] browser-update API version, get the latest version from home page:
  https://browser-update.org/

  [NOTE] Browser Update user must manually set the version. No option like “api: latest”:
  https://github.com/browser-update/browser-update/issues/582
  */
  api: 2025.02,
  /*
  [INFO] Notify all insecure browsers:
  https://github.com/browser-update/browser-update/wiki/Details-on-configuration#notifying-insecure-browsers
  https://browser-update.org/browsers-marked-as-insecure.html
  */
  insecure: true,
  /*
  [INFO] Always use specific language for messages, English by default.
  I don’t want it; it would be nice, if users get messages on their native languages
  */
  l: false,
  /*
  [INFO] Open link in new window/tab.

  [NOTE] Setting for default text.
  It doesn’t affect custom text in any way.
  */
  newwindow: false,
  /*
  [INFO] Don’t give an opportunity to close browser-update notification;
  it would be nice, if users will update browsers
  */
  no_permanent_hide: true,
  /*
  [INFO] No close button on browser-update notification;
  it would be nice, if users will update browsers
  */
  noclose: true,
  /*
  [INFO] Disable tracking:
  https://github.com/browser-update/browser-update/wiki/Privacy
  */
  nostatistics: true,
  /*
  [INFO] I don’t want notify Firefox ESR.

  [LEARN][FIREFOX] Firefox ESR — version for large organizations
  for security and stability fixes:
  https://support.mozilla.org/en-US/kb/switch-to-firefox-extended-support-release-esr
  */
  notify_esr: false,
  // [INFO] Show browser-update messsage always
  reminder: 0,
  /*
  [INFO] List of browser-update browser codes:
  https://github.com/browser-update/browser-update/wiki/Details-on-configuration#browsers

  [INFO] Whitelist of ignored browsers:
  https://github.com/browser-update/browser-update/wiki/Ignore-Browser-List
  https://github.com/browser-update/browser-update/blob/master/scripts/update.js#L16
  */
  required: {
    /*
    [INFO] “-1” — 2 latest browser versions required for user:
    https://github.com/browser-update/browser-update/wiki/Details-on-configuration#configure-browser-versions-to-notify

    [NOTE] We need add each browser separately, Browserslist doesn’t supported:
    https://github.com/browser-update/browser-update/issues/389
    */
    c: -1,
    e: -1,
    f: -1,
    /*
    [INFO] Supported browsers:
    https://github.com/browser-update/browser-update/wiki/Details-on-configuration#browsers

    [NOTE] Use “4147” or another big number for disable all browser versions:
    https://github.com/browser-update/browser-update/pull/324
    */
    i: 4147,
    ios: -1,
    o: -1,
    o_a: -1,
    s: -1,
    samsung: -1,
    uc: -1,
    v: -1,
    y: -1
  },
  /*
  [INFO] Make web page content after notification bar,
  that notification not overlap content
  */
  shift_page_down: true,
  // [INFO] Place for browser-update notification
  style: "top",
  /*
  [INFO] Debug mode:
  https://github.com/browser-update/browser-update/wiki/Test-the-notification
  https://i.imgur.com/truAzm6.png
  */
  test: false,
  /*
  [INFO] Custom text and parts of the text message:
  https://github.com/browser-update/browser-update/wiki/Details-on-configuration#custom-text

  [INFO] “{brow_name} — browser name from user-agent string”
  “{up_but}” — update button
  “{ignore_but}” — ignore button
  */
  text: `Please, update your browser. {brow_name} is outdated version. See the ${argumentsEn.link("https://browser-update.org/update-browser.html")}, why this is primarily beneficial for yourself as a user.`,
  /*
  [INFO] Custom message for browsers:
  https://github.com/browser-update/browser-update/wiki/Details-on-configuration#different-messages-depening-on-browser
  https://github.com/browser-update/browser-update/issues/388

  [NOTE] Browser-update doesn’t work for any BrowserStack Internet Explorer version in 2024.
  */
  text_for_i: `{brow_name} and any another Internet Explorer versions not supported for this site. Page can be displayed very incorrect. Please, use another browser. Arguments, why all Internet Explorer versions is a bad choice — ${lifewire.link("https://www.lifewire.com/why-do-people-hate-internet-explorer-3485786")}, ${quora1.link("https://www.quora.com/Is-Internet-Explorer-really-as-bad-as-everyone-tries-to-make-out")}. Recommendations at the choice of the browser for Windows: ${alternative.link("https://alternativeto.net/software/internet-explorer/?platform=windows")}, ${slant.link("https://www.slant.co/topics/11157/~web-browsers-for-windows")}, ${quora2.link("https://www.quora.com/Which-is-the-best-browser-for-windows-10")}.`,
  /*
  [INFO] Text for specific browsers on specific languages:
  http://browser-update.org/customize.html

  [NOTE] The most specific setting “text_for_e_in_ru” has the lowest priority
  among the notification texts shown to users:
  https://github.com/browser-update/browser-update/issues/388#issuecomment-693508020
  */
  text_for_i_in_ru: `{brow_name} как и любая другая версия браузера Internet Explorer не поддерживается на этом сайте. Веб-страницы могут отображаться некорректно. Пожалуйста, используйте другой браузер. Аргументы, почему Internet Explorer — это плохой выбор — ${lifewire.link("https://www.lifewire.com/why-do-people-hate-internet-explorer-3485786")}, ${quora1.link("https://www.quora.com/Is-Internet-Explorer-really-as-bad-as-everyone-tries-to-make-out")}. Рекомендации по выбору браузера для Windows: ${alternative.link("https://alternativeto.net/software/internet-explorer/?platform=windows")}, ${slant.link("https://www.slant.co/topics/11157/~web-browsers-for-windows")}, ${quora2.link("https://www.quora.com/Which-is-the-best-browser-for-windows-10")}.`,
  // [INFO] Custom text for Russian-language users (by user-agent string data):
  text_in_ru: `Пожалуйста, обновите Ваш браузер. {brow_name} — устаревшая версия. Смотрите ${argumentsRu.link("https://browser-update.org/update-browser.html")}, почему это выгодно прежде всего Вам как пользователю.`,
  /*
  [INFO] Notify all browser versions that not supported by browser vendors:
  https://github.com/browser-update/browser-update/wiki/Details-on-configuration#notifying-unsupported-browsers
  */
  unsupported: true
};

$buo_f = () => {
  var kiraBrowserUpdateScript;
  kiraBrowserUpdateScript = document.createElement("script");
  /* eslint-enable id-length */
  /*
  [INFO] I use JSDelivr link instead of default “https://browser-update.org/update.min.js”.
  JSDelivr is fast and stable.

  [REQUIRED] “@master” branch name in the URL
  */
  kiraBrowserUpdateScript.src = "https://cdn.jsdelivr.net/gh/browser-update/browser-update@master/scripts/update.min.js";
  /*
  [INFO] In default code browser-update append script inside “body”.
  I append all my scripts inside “head”.
  */
  return document.head.append(kiraBrowserUpdateScript);
};

/*
[LEARN][JAVASCRIPT] “addEventListener()” syntax:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#syntax

[NOTE] If I use “try…catch” as in default example:
1. JavaScript compiled from CoffeeScript twice declare 1 variable: “var kiraBrowserUpdateScript;”
2. It uses obsolete “onload” event:
https://stackoverflow.com/a/48256189/5951529
*/
document.addEventListener("DOMContentLoaded", $buo_f);

/* eslint-enable camelcase */

//# sourceMappingURL=browser-update.js.map
