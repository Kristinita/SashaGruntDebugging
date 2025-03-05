/*
@Author: Kristinita
@Date: 2023-12-24 16:19:45
@Last Modified by: Kristinita
@Last Modified time: 2025-02-20 19:38:40
*/
var YETT_BLACKLIST;

//#######
// Yett #
//#######
/*
[OVERVIEW] Yett — block unwanted analytics, tracker and advertising scripts,
called from third-party scripts:
https://github.com/elbywan/yett
https://elbywan.github.io/yett/

[NOTE] Yett works solely for scripts, it doesn’t block unwanted POST requests.
Yett doesn’t block POST requests from Google Translate Custom Widget:
https://github.com/elbywan/yett/issues/51#issuecomment-1868944112

[INFO] Since I don’t need support for older browsers, I use the script for modern browsers:
https://cdn.jsdelivr.net/npm/yett/dist/yett.min.modern.js

[INFO] Add script that calls unwanted scripts, via “document.createElement("script")”.
Firefox, Chrome and Safari prevents loading unwanted scripts in this case:
https://github.com/elbywan/yett#usage
https://github.com/elbywan/yett#browser-compatibility

[NOTE] “application/javascript” MIME type is obsolete:
https://stackoverflow.com/a/21098951/5951529
*/
/*
[INFO] Block ad tracker cookies script of Programmable Search Engine:
https://cse.google.com/adsense/search/async-ads.js
https://support.google.com/programmable-search/thread/15208084?hl=en

[NOTE] I can’t fix via Yett http request “http://clients1.google.com/generate_204” for the Programmable Search Engine.
This http request severely underestimates a web page’s score in Lighthouse.
https://stackoverflow.com/q/1989214/5951529
https://i.imgur.com/lykEySy.png

[INFO] The RegExp “v” flag, introduced in ECMAScript 2024, is a superset of the “u” flag:
https://v8.dev/features/regexp-v-flag

[SOON] In December 2023 when using the “v” flag in CoffeeScript
I get an error “invalid regular expressions flag "v"”.
In the coming years, the “v” flag may be fully valid in CoffeeScript.
*/
YETT_BLACKLIST = [/async-ads\.js$/u];

//# sourceMappingURL=yett-blocklist.js.map
