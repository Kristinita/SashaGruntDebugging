/*
@Author: Kristinita
@Date: 2023-12-12 07:49:58
@Last Modified by: Kristinita
@Last Modified time: 2025-02-20 19:36:56
*/
/*
[INFO] google-custom-translate widget — translating web pages by click, using Google Translate:
https://get-web.site/blog/29-kastomnyj-vidzhet-googletranslate-dlja-sajta.html
*/
var googleTranslateConfig;

googleTranslateConfig = {
  lang: "ru"
};

/*
[INFO] “FinishTranslate” event — the event is triggered when the page translation is finished:

document.addEventListener("FinishTranslate", function (e) {
	// some code
});

https://github.com/get-web/google-translate-custom-widget#events

[INFO] If you want to subscribe to the "FinishTranslate" event
(The moment when the script finished translating),
uncomment and add any test word in the original language
testWord: "Язык"

[INFO] The language we translate into on the first visit:
langFirstVisit: "en"

[INFO] If the script does not work or does not work correctly,
uncomment and specify the main domain in the domain property:
domain: "kristinita.netlify.app"
*/

//# sourceMappingURL=gtcw-ru.js.map
