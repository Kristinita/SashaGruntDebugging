/*
	@Author: SashaChernykh
	@Date: 2025-03-05 08:23:07
	@Last Modified by: SashaChernykh
	@Last Modified time: 2025-03-05 08:32:36
*/
/*
@Author: Kristinita
@Date: 2023-12-19 12:42:25
@Last Modified by: Kristinita
@Last Modified time: 2025-02-20 19:34:55
*/
/*
[OVERVIEW] Wait for HTML elements to appear on the page
and then make modifications to them:
https://stackoverflow.com/a/61511955/5951529

I use this library to fix errors in third-party JavaScript libraries.

[INFO] It uses “MutationObserver” interface provides the ability
to watch for changes being made to the DOM tree:
https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

[EXAMPLES] Pages where I use this function:
“AddToAny/addtoany.coffee”
“Gemini/gemini-scrollbar.coffee”
“google-translate-custom-widget/gtcw-accessibility.coffee”
“hes-gallery/hes-gallery.coffee”
“programmable-search-engine-kristinitas-search.coffee”

[LEARN][ACCESSIBILITY] Get active (focused) element in any browser:
https://agileadam.com/2020/03/monitoring-which-element-has-focus-in-web-browser/

[REQUIRED] 2 “return” in CoffeeScript version of Yong Wang script
for resolving ESLint “consistent-return” and “no-promise-executor-return” rules:
https://eslint.org/docs/latest/rules/consistent-return
https://eslint.org/docs/latest/rules/no-promise-executor-return
*/
var waitForElm;

waitForElm = (kiraSelector) => new Promise((kiraResolve) => {
	var kiraObserver;
	if (document.querySelector(kiraSelector)) {
		kiraResolve(document.querySelector(kiraSelector));
	}
	kiraObserver = new MutationObserver((mutations) => {
		if (document.querySelector(kiraSelector)) {
			kiraObserver.disconnect();
			kiraResolve(document.querySelector(kiraSelector));
		}
	});
	kiraObserver.observe(document.body, {
		childList: true,
		subtree: true
	});
});

//# sourceMappingURL=wait-elements.js.map
