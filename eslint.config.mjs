/*
	@Author: Kristinita
	@Date: 2025-02-20 22:31:31
	@Last Modified by: Kristinita
	@Last Modified time: 2025-03-04 18:39:32
*/

/* #######
# ESLint #
##########
[OVERVIEW] ESLint — powerful JavaScript linter and problems fixer:
https://eslint.org/
Plugins may lint and fix not solely JavaScript files:
https://github.com/dustinspecker/awesome-eslint#languages-and-environments


[AWESOME] The list of ESLint plugins, configs and so on:
https://github.com/dustinspecker/awesome-eslint


[REPL] Playground:
https://eslint.org/play/


[CONFIGURATION]
https://eslint.org/docs/latest/use/configure/

[CONFIGURATION] Configuration structure:
https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects

[CONFIGURATION] Shareable configurations:
https://github.com/dustinspecker/awesome-eslint#configs
https://eslint.org/docs/latest/extend/shareable-configs

[CONFIGURATION] Debugging configuration use “--debug”, “--print-config” and “--inspect-config” CLI arguments:
https://eslint.org/docs/latest/use/configure/debug


[PLUGINS]
https://github.com/dustinspecker/awesome-eslint#plugins
[FIXME] Try plugins that I haven’t tried yet


[RULES]
https://eslint.org/docs/latest/rules/


[CLI]
https://eslint.org/docs/latest/use/command-line-interface

[CLI] “--flag” — command-line argument for enabling experimental and future features:
https://eslint.org/docs/latest/flags/


[API] Node.js API Reference:
https://eslint.org/docs/latest/integrate/integration-tutorial
https://eslint.org/docs/latest/integrate/nodejs-api


[TROUBLESHOOTING]
https://eslint.org/docs/latest/use/troubleshooting/

[TROUBLESHOOTING] Check ESLint rules performance use “--stats” command-line argument:
https://eslint.org/docs/latest/extend/stats


[INFO] For including patterns from “.gitignore” use “includeIgnoreFile” utility:
https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files
https://github.com/eslint/rewrite/tree/main/packages/compat#including-ignore-files */


import pluginJs from "@eslint/js";
import compat from "eslint-plugin-compat";
import eslintPluginHtml from "eslint-plugin-html";
import nounsanitized from "eslint-plugin-no-unsanitized";
import perfectionist from "eslint-plugin-perfectionist";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import sonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";


/* [INFO] Correct syntax for Flat config: list configurations of all plugins,
then wrote between braces "files", "languageOptions" and another ESLint keys.
“sonarjs.configs.recommended” must be placed before “{ files”, not after all rules. */
export default [

	/*#########
	# Plugins #
	###########

	[NOTE] 3 plugins that I previously used isn’t compatible with ESLint 9:

	coffee — apply ESLint rules for CoffeeScript files:
	https://github.com/helixbass/eslint-plugin-coffee
	https://github.com/helixbass/eslint-plugin-coffee/issues/77

	compat — check compatibility of the ECMAScript features
	with browsers specified in the file “browserslist”:
	eslint-plugin-ecmascript-compat:
	https://github.com/robatwilliams/es-compat
	https://github.com/robatwilliams/es-compat/issues/107

	xss — check vulnerabilities to XSS attacks:
	https://github.com/Rantanen/eslint-plugin-xss
	https://github.com/Rantanen/eslint-plugin-xss/issues/15


	[INFO] eslint-plugin-autofix — autofix to match many ESLint rules:
	https://github.com/aladdin-add/eslint-plugin/tree/master/packages/autofix */


	/* #######
	# compat #
	##########
	[OVERVIEW] “compat” — Lint browser compatibility of JavaScript code depending on user’s “browserslist” file:
	https://github.com/amilajack/eslint-plugin-compat

	[NOTE] The plugin has solely the “recommended” preset:
	https://github.com/amilajack/eslint-plugin-compat/tree/main/src/config

	[NOTE] Not to be confused with the plugin eslint-plugin-ecmascript-compat:
	https://github.com/robatwilliams/es-compat */
	compat.configs["flat/recommended"],


	/* ########
	# Unicorn #
	###########
	[OVERVIEW] Code style checker, enforces to use the latest ECMAScript features:
	https://github.com/sindresorhus/eslint-plugin-unicorn

	[PRESET] “All” preset:
	https://github.com/sindresorhus/eslint-plugin-unicorn#all-config

	[RULES]
	https://github.com/sindresorhus/eslint-plugin-unicorn#rules */
	eslintPluginUnicorn.configs.all,


	/* ###############
	# no-unsanitized #
	##################
	[OVERVIEW] Check unsafe, vulnerable to XSS attacks JavaScript properties like
	“document.write()”, “innerHTML”, “insertAdjacentHTML()” and “outerHTML”:
	https://github.com/mozilla/eslint-plugin-no-unsanitized

	[RULES]
	https://github.com/mozilla/eslint-plugin-no-unsanitized/tree/main/docs/rules

	[NOTE] The plugin has solely “recommended” preset. */
	nounsanitized.configs.recommended,


	/* ##############
	# Perfectionist #
	#################
	[OVERVIEW] Check specific sorting of different JavaScript objects:
	https://perfectionist.dev/

	[PRESET] “recommended-natural” preset for natural sorting:
	https://perfectionist.dev/configs/recommended-natural

	[INFO] Natural sort order, where “2” before “10” despite alphabetically sort order:
	https://en.wikipedia.org/wiki/Natural_sort_order

	[RULES]
	https://perfectionist.dev/rules */
	perfectionist.configs["recommended-natural"],


	/* #########
	# PluginJS #
	############

	[PRESET] Preset for using all ESLint core rules:
	https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations
	https://github.com/eslint/eslint/tree/main/packages/js

	[REQUIRED] Installation of PluginJS:
	“npm install --save-dev @eslint/js” */
	pluginJs.configs.all,


	/* ########
	# SonarJS #
	###########
	[OVERVIEW] Detect bugs, code smells, vulnerabilities, accessibility
	and code quality in JavaScript:
	https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md

	[PRESET] “This plugin provides a single configuration named "recommended".”:
	https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md#for-eslint-9

	[RULES]
	https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md#rules

	[RULES] Rules from SonarJS not available in ESLint plugin:
	https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md#improved-eslint-rules */
	sonarjs.configs.recommended,

	{
		/* [OPTION] Ignoring patterns.
		This pattern added to folders that ESLint ignore by default — “.git” and “node_modules”.
		https://eslint.org/docs/latest/use/configure/ignore#ignoring-files


		[NOTE] “ignores” key must be placed outside “files” and another keys in the “eslint.config.mjs” file:
		https://github.com/eslint/eslint/issues/19247#issuecomment-2547364256


		[INFO] Linters shouldn’t lint minified files:
		“Linting after minification is pointless and even detrimental”:
		https://stackoverflow.com/a/21162508/5951529

		[INFO] I ignore minified files “kiragoddess.min.js” and files after cache busting as
		“kiragoddess.min.rstiresntirn25243.js” */
		ignores: ["**/*.min*js"]
	},

	{

		/* [INFO] Files that the configuration object should apply to:
		https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects

		[INFO] My settings will be applied solely for .js, .html and .mjs files.
		ESLint ignore files with another extensions

		[INFO] Since the version 9 ESLint no longer ignore files starting with “.”.
		The setting “ignorePatterns: - "!.*"” no more required:
		https://stackoverflow.com/posts/comments/140156975
		https://eslint.org/docs/latest/use/configure/ignore#ignoring-files */
		files: ["**/*.{js,html,mjs}"],

		languageOptions: {

			/* [OPTION] ECMAScript version of the code being linted
			https://eslint.org/docs/latest/use/configure/language-options#specifying-javascript-options */
			ecmaVersion: "latest",

			/* ########
			# globals #
			###########

			[OPTION] Preset for variables that used in JavaScript coding for browser.
			If “globals: globals.browser” enabled, ESLint doesn’t return errors for
			“console.log” and “document.createElement”:
			https://eslint.org/docs/latest/use/configure/language-options#specifying-javascript-options
			https://github.com/sindresorhus/globals

			[INFO] List of global variables for every supported environment:
			https://github.com/sindresorhus/globals/blob/main/globals.json

			[REQUIRED] Separate installations of the “globals” package — “npm install --save-dev globals”:
			https://github.com/sindresorhus/globals#install */
			globals: globals.browser
		},

		linterOptions: {

			/* [OPTION] Check validity of “eslint-disable” directives.
			If you place “eslint-disable” to your JavaScript file, but the code doesn’t contain cases for disabling rule,
			ESLint with the rule “reportUnusedDisableDirectives” returns the error:
			https://eslint.org/docs/latest/use/configure/rules#report-unused-eslint-disable-comments */
			reportUnusedDisableDirectives: "error",

			/* [OPTION] Check validity of inline configuration comments.
			If you add inline configuration to your JavaScript file, but the area with inline configuration
			doesn’t contain rules for overwriting, ESLint returns error:
			https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects
			https://eslint.org/docs/latest/use/configure/rules#using-configuration-comments */
			reportUnusedInlineConfigs: "error"
		},

		plugins: {

			/*####################
			# eslint-plugin-html #
			######################
			[OVERVIEW] Apply ESLint rules for JavaScript inside HTML files:
			https://github.com/BenoitZugmeyer/eslint-plugin-html */
			html: eslintPluginHtml,


			/*########################
			# prefer-arrow-functions #
			##########################
			[OVERVIEW] Plugin that replace the “function()” expression to ECMAScript syntax “() =>”:
			https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions */
			"prefer-arrow-functions": preferArrowFunctions
		},

		rules: {

			/* [OPTION] Enforce beginning comments with a capital letter:
			https://eslint.org/docs/latest/rules/capitalized-comments

			[DISABLING_REASON] JavaScript library names can begin with a lowercase letter:
			for example, “hes-gallery”, “typo-reporter”.
			I can start my comments with the names of these libraries, so I disable the rule. */
			"capitalized-comments": 0,

			/* [OPTION] Require “return” statements to either always or never specify values:
			https://eslint.org/docs/latest/rules/consistent-return

			[INFO] When I use async arrow functions, I get this error with a message:
			“Expected to return a value at the end of async arrow function”

			“return” required for the async functions like this:

			```coffee
			kiraRemoveExtraTitleAttribute = (kiraTitledForm) ->

				 kiraObjectTitledForm = await waitForElm(kiraTitledForm)

				 kiraObjectTitledForm.removeAttribute "title"

				 return
			```
			*/
			"consistent-return": 2,

			/* [OPTION] Return errors by default for unnamed functions as “function()”:
			https://eslint.org/docs/latest/rules/func-names

			[NOT_FIXABLE_ON_COFFEESCRIPT] CoffeeScript compiles “.coffee” files to “.js” with “function” words.
			I can’t fix the problem on my CoffeeScript sources.

			[AUTOFIX] The plugin prefer-arrow-functions replace “function()” to ECMAScript expression “() =>” */
			"func-names": 2,

			/* [OPTION] Enforcing variable initializations during declaration:
			https://eslint.org/docs/latest/rules/init-declarations

			[DISABLING_REASON] CoffeeScript eliminate variable initializations during declaration:
			“CoffeeScript compiles to JSLint-conform JavaScript, and puts all variable declarations to the top of the current scope/function”:
			https://stackoverflow.com/a/15044640/5951529 */
			"init-declarations": 0,

			/* [OPTION] Maximum number of lines per file. “300” — is the default value.
			Big number of lines is code smell:
			https://eslint.org/docs/latest/rules/max-lines

			[CHANGING_REASON] I prefer to write detailed comments, and 300 lines may be not enough for me.
			I set the rule for ignoring comments and empty lines, when ESLint counting the number of lines:
			https://eslint.org/docs/latest/rules/max-lines#options */
			"max-lines": [
				"error",
				{
					"skipBlankLines": true,
					"skipComments": true
				}
			],

			/* [OPTION] Maximum number of lines allowed for the function.
			The default value is “50”. Big number of lines is code smell:
			https://eslint.org/docs/latest/rules/max-lines-per-function

			[CHANGING_REASON] I prefer to write detailed comments, and 50 lines may be not enough for me.
			I set the rule for ignoring comments and empty lines, when ESLint counting the number of lines:
			https://eslint.org/docs/latest/rules/max-lines-per-function#options */
			"max-lines-per-function": [
				"error",
				{
					"skipBlankLines": true,
					"skipComments": true
				}
			],

			/* [OPTION] Enforce using multiline comments in JSDoc style:
			https://eslint.org/docs/latest/rules/multiline-comment-style

			[INFO] CoffeeScript JSDoc-compatible comments:
			https://stackoverflow.com/a/24348892/5951529

			[FIXME][SOON] The rule was deprecated in ESLint 9.3.0.
			Check the corresponding rule from ESLint Stylistic:
			https://eslint.style/rules/js/multiline-comment-style

			[DISABLING_REASONS]
			1. Extra work for extra asterisks.
			2. Leading space, incompatible with EditorConfig settings. */
			"multiline-comment-style": 0,

			/* [OPTION] Require constructor names to begin with a capital letter:
			https://eslint.org/docs/latest/rules/new-cap

			[INFO] The “new” operator in JavaScript creates a new instance of a particular type of object.
			That type of object is represented by a constructor function. */
			"new-cap": 2,

			/* [OPTION] Check if no JavaScript functions “alert”, “confirm” and “prompt” in the code:
			https://eslint.org/docs/latest/rules/no-alert

			[INFO] I use these functions if a user gets an error while interacting with a site
			and I prompt them to submit the error message */
			"no-alert": 2,

			/* [OPTION] Check that no console messages as “console.log” and “console.error” in the code:
			https://eslint.org/docs/latest/rules/no-console

			[INFO] I use console messages that users can report me
			additional information. */
			"no-console": 2,

			/* [OPTION] Check unnecessary “else” in “if/else” statements with “return”:
			https://eslint.org/docs/latest/rules/no-else-return

			[NOT_FIXABLE_ON_COFFEESCRIPT] In CoffeeScript I write human-readable “if/else” statements without “return”.
			I can’t fix incorrect compilation in my CoffeeScript.

			[AUTOFIX] ESLint with “no-else-return” fixes the problem. */
			"no-else-return": 2,

			/* [OPTION] Disallow global “var” declarations:
			https://eslint.org/docs/latest/rules/no-implicit-globals

			[DISABLING_REASONS]
			1. CoffeScript intentionally doesn’t support “let” and “const”:
			https://coffeescript.org/#unsupported-let-const
			2. “CoffeeScript compiles to JSLint-conform JavaScript, and puts all variable declarations to the top of the current scope/function”:
			https://stackoverflow.com/a/15044640/5951529 */
			"no-implicit-globals": 0,

			/* [OPTION] Disallow inline comments:
			https://eslint.org/docs/latest/rules/no-inline-comments

			[NOT_FIXABLE_ON_COFFEESCRIPT][DISABLING_REASON] I highly support this rule, but CoffeeScript can compile code to JavaScript with inline comments like this:

			```js
			“(function() {  //##”
			```

			I don’t know how I can change this behavior and I disable the rule.

			[FIXME][SO][ISSUE] Try to ask the question or create the issue, can I make CoffeeScript output without inline comments */
			"no-inline-comments": 0,

			/* [OPTION] Disallow magic numbers. Require variables instead them:
			https://eslint.org/docs/latest/rules/no-magic-numbers

			[NOT_FIXABLE_ON_COFFEESCRIPT][DISABLING_REASON] CoffeeScript initialize variable
			and then assigns a value to it:

			[EXAMPLE]

			```js
			var kiraTooltipDisplayTime;
			…
			kiraTooltipDisplayTime = 2000;
			```

			I disable the rule in cases where I can’t fix the problem in my CoffeeScript files. */
			"no-magic-numbers": 2,

			/* [OPTION] Disallow shadowing variables:
			https://eslint.org/docs/latest/rules/no-shadow

			[INFO] Shadowing is the process by which a local variable shares the same name as a variable in its containing scope.

			[EXAMPLE]
			```js
			var a = 3;
			function b() {
				var a = 10;
			}
			```
			*/
			"no-shadow": 2,

			/* [OPTION] Disallow to use undeclared variables:
			https://eslint.org/docs/latest/rules/no-undef

			[DISABLING_REASON] I add to my project configuration JavaScript files from third-party scripts.
			They use variables that are valid in combination with third-party scripts. */
			"no-undef": 0,

			/* [OPTION] Disallow using the “undefined” word:
			https://eslint.org/docs/latest/rules/no-undefined

			[DISABLING_REASON] Zugzwang.

			If I use “null” (default Defer.js operator), I get “unicorn/no-null” error:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md

			Elif I use “undefined”, I get “no-undefined”

			Else I use “void 0”, I get “no-void” error:
			https://eslint.org/docs/latest/rules/no-void

			I selected disallowing the “no-undefined” rule */
			"no-undefined": 0,

			/* [OPTION] Disallow unused variables:
			https://eslint.org/docs/latest/rules/no-unused-vars

			[DISABLING_REASON] See the reason for “no-undef” rule */
			"no-unused-vars": 0,

			/* [OPTION] Require “let” and “const” instead of “var”:
			https://eslint.org/docs/latest/rules/no-var

			[NOT_FIXABLE_ON_COFFEESCRIPT][DISABLING_REASON] CoffeScript intentionally doesn’t support “let” and “const”:
			https://coffeescript.org/#unsupported-let-const

			CoffeeScript doesn’t compile variables to “let” and “const” */
			"no-var": 0,

			/* [OPTION] Use cleaner ECMAScript 6 syntax without “function()” for defining object literals:
			https://eslint.org/docs/latest/rules/object-shorthand
			[INFO] “text: (trigger)” instead of “text: function(trigger)” required for passing this check.

			[EXAMPLE]
			```coffee
			kiraCodeBlockClipboard = new Clipboard(".SashaClipboardButton"
				text: (trigger) ->
					trigger.closest(".SashaBlockHighlight").querySelector("pre").textContent.trimEnd()
			)

			[AUTOFIX]

			[INPUT]
			```js
			kiraCodeBlockClipboard = new Clipboard(".SashaClipboardButton", {
			text: function(trigger) {
				return trigger.closest(".SashaBlockHighlight").querySelector("pre").textContent.trimEnd();
			}
			});
			```

			[OUTPUT]
			```js
			kiraCodeBlockClipboard = new Clipboard(".SashaClipboardButton", {
				text: (trigger) => trigger.closest(".SashaBlockHighlight").querySelector("pre").textContent.trimEnd()
			});
			```

			[NOT_FIXABLE_ON_COFFEESCRIPT] Compiled JS from CoffeeScript contains “function()” and unneeded “return”.
			I can’t fix it in my CoffeeScript code.

			[AUTOFIX] ESLint and the plugin prefer-arrow-functions replace unneeded “function” and “return”. */
			"object-shorthand": 2,

			/* [OPTION] Require declaring variables via commas:
			https://eslint.org/docs/latest/rules/one-var

			[EXAMPLE]

			Valid:

			```js
			var kiraDeferEarlySecond = 700, kiraDeferEarlyThird = 1000;
			```

			Non-valid:

			```js
			var kiraDeferEarlySecond = 700;
			var kiraDeferEarlyThird = 1000;
			```
			*/
			"one-var": 2,

			/* [OPTION] Check if no arrow functions in callbacks:
			https://eslint.org/docs/latest/rules/prefer-arrow-callback

			[NOT_FIXABLE_ON_COFFEESCRIPT] CoffeeScript compiles “.coffee” files to “.js” with “function” words.
			I can’t fix the problem on my CoffeeScript sources.

			[AUTOFIX] The plugin prefer-arrow-functions replace “function()” to ECMAScript expression “() =>” */
			"prefer-arrow-callback": 2,

			/* [OPTIONS] Despite another ESLint plugins, prefer-arrow-functions hasn’t the predefined configuration.
			Users need manually add plugin rules. Users don’t get new rules automatically:
			https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions/issues/57

			[INFO] I use default options as of February 2025 except “disallowPrototype” and “returnStyle”.

			[NOT_FIXABLE_ON_COFFEESCRIPT] CoffeeScript compiles “.coffee” files to “.js” with “function” words.
			I can’t fix the error “prefer-arrow-functions/prefer-arrow-functions” on my CoffeeScript sources.

			[AUTOFIX] The plugin prefer-arrow-functions replace “function()” to ECMAScript expression “() =>” */
			"prefer-arrow-functions/prefer-arrow-functions": [
				"error",
				{
					"allowedNames": [],
					"allowNamedFunctions": false,
					"allowObjectProperties": false,
					"classPropertiesAllowed": false,

					/* [OPTION] When “true”, functions assigned to a prototype will be converted
					to arrow functions when doing so would not alter or break their behavior:
					https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions#disallowprototype */
					"disallowPrototype": true,

					/* [OPTION] arrow functions such as “x => { return x; }” will be converted to “x => x”:
					https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions#returnstyle */
					"returnStyle": "implicit",
					"singleReturnOnly": false
				}
			],

			/* [OPTION] Require concatenation of objects and arrays without declaring unnecessary variables:
			https://eslint.org/docs/latest/rules/prefer-destructuring

			---

			[INFO] I get error “Use array destructuring”, when I wrote:

			```coffee
			SashaBowserFirefox = document.getElementsByClassName("SashaBowserFirefox")[0]
			SashaBowserFirefox.innerHTML = "<div>Нажмите <kbd>Shift+Alt+K</kbd> и вводите поисковый запрос</div>"
			```

			Valid:

			```coffee
			document.getElementsByClassName("SashaBowserFirefox")[0].innerHTML = \
			"<div>Нажмите <kbd>Shift+Alt+K</kbd> и вводите поисковый запрос</div>"
			```

			---

			“Use object destructuring”:

			```coffee
			$navbarBurgers = Array::slice.call(document.querySelectorAll(".navbar-burger"), 0)
			$navbarBurgers.forEach (kiraElement) ->
			```

			Valid:

			```coffee
			Array::slice.call(document.querySelectorAll(".navbar-burger"), 0).forEach (kiraElement) ->
			```

			---

			“Use array destructuring”:

			```coffee
			kiraTarget = kiraElement.dataset.target
			$target = document.getElementsByClassName(kiraTarget)[0]
			$target.classList.toggle "is-active"
			```

			Valid:

			```coffee
			document.getElementsByClassName(kiraElement.dataset.target)[0].classList.toggle "is-active"
			```
			*/
			"prefer-destructuring": 2,

			/* [OPTION] Enforce using of “u” or “v” flag on regular expressions:
			https://eslint.org/docs/latest/rules/require-unicode-regexp

			[LEARN][JAVASCRIPT] Flag “v”, introduced to ECMAScript 2024, is a superset of the “u” flag:
			https://v8.dev/features/regexp-v-flag

			[SOON][FIXME][ISSUE] In February 2025, when I use the “v” flag in CoffeeScript,
			I get the error “invalid regular expressions flag "v"”.
			In the coming years, the “v” flag may be fully valid in CoffeeScript */
			"require-unicode-regexp": 2,

			/* [OPTION] “if … else if” constructs should end with “else” clauses:
			https://sonarsource.github.io/rspec/#/rspec/S126/javascript */
			"sonarjs/elseif-without-else": 2,

			/* [OPTION] Report if the file contains “FIXME” words:
			https://sonarsource.github.io/rspec/#/rspec/S1134/javascript

			I disable it, because I live in the real world, and it’s problematic for me
			to fix all my own third-party problems */
			"sonarjs/fixme-tag": 0,

			/* [OPTION] Add “noopener” to the method “window.open” with “target="_blank"” in security purposes
			https://sonarsource.github.io/rspec/#/rspec/S5148/javascript

			[LEARN][JAVASCRIPT] “noopener” property disable access from the opened page to the previous page:
			https://dillionmegida.com/p/noopener-noreferrer/ */
			"sonarjs/link-with-target-blank": 2,

			/* [OPTION] Enforce variables instead of strings duplication:
			https://sonarsource.github.io/rspec/#/rspec/S1192/javascript */
			"sonarjs/no-duplicate-string": 2,

			/* [OPTION] Require using the syntax “if variable not value” instead of extra syntax “if not variable is value”:
			https://sonarsource.github.io/rspec/#/rspec/S1940/javascript */
			"sonarjs/no-inverted-boolean-check": 2,

			/* [OPTION] Report if not defined the absolute path to the executable file isn’t defined:
			https://sonarsource.github.io/rspec/#/rspec/S4036/javascript

			[EXAMPLE]

			Incorrect:

			```js
			fn: (event) => {
				execSync("grunt stylus");
			},
			```

			Correct:

			```js
			fn: (event) => {
				execSync("path/to/grunt.exe stylus");
			},
			```

			I disabled this rule, because it’s
			1. extra coding
			2. no cross-platform solution
			3. paths for different users may be different */
			"sonarjs/no-os-command-from-path": 0,

			/* [OPTION] Preferable sorting imports on JavaScript files:
			https://eslint.org/docs/latest/rules/sort-imports

			[INFO] Alphabetically sorting modules — possibly, is more intuitive solution.
			I use “sort-imports” rule from “natural” preset of the Perfectionist plugin:
			https://perfectionist.dev/rules/sort-imports#type
			I can’t find how I can get the similar behavior use default “sort-imports” rule,
			so I disable it:
			https://perfectionist.dev/rules/sort-imports

			[INFO] Possibly, if some generally accepted convention will exist,
			I will change the order of imports in my files. */
			"sort-imports": 0,

			/* [OPTION] Preferable sorting keys:
			https://eslint.org/docs/latest/rules/sort-keys#options */
			"sort-keys": [
				"error",

				/* [OPTION] “asc” — enforce properties to be in ascending order:
				https://eslint.org/docs/latest/rules/sort-keys#options */
				"asc",
				{
					/* [OPTION] Ignore case when case sorting or not:
					https://eslint.org/docs/latest/rules/sort-keys#casesensitive

					[INFO] “true” by default
					If “false”, “allowedNames” must be placed before “allowNamedFunctions”,
					“true” — on the contrary.
					I think, “false” is more intuitive. */
					"caseSensitive": false,

					/* [OPTION] Enforce natural order:
					https://eslint.org/docs/latest/rules/sort-keys#natural

					[INFO] In natural order “2” must be placed before “10”:
					With “natural” as “true”, the ordering would be “1 3 6 8 10”,
					With “natural” as “false”, the ordering would be “1 10 3 6 8”:
					https://eslint.org/docs/latest/rules/sort-keys#options
					I think, natural order is more intuitive. */
					"natural": true
				}
			],

			/* [OPTION] Require “"use strict";” directive in the beginning of “.js” files:
			https://eslint.org/docs/latest/rules/strict

			[DISABLING_REASON] “In ECMAScript modules, which always have strict mode semantics, the directives are unnecessary.” */
			"strict": 0,

			/* [OPTION] Enforce using a specific case style for filenames, kebabCase by default:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md */
			"unicorn/filename-case": [
				"error",
				{
					"case": "kebabCase",

					/* [OPTION] Ignoring by regex:
					https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md#ignore

					[INFO] Ignoring all HTML files:
					https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2292#issuecomment-2690317758 */
					"ignore": [
						/^.*\.html$/u
					]
				}
			],

			/* [OPTION] Require “for-of” loops instead of method “forEach()”:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md

			[INFO] According to the Unicorn developers, this is faster, has better readability
			and adds the ability to exit with “break” and “return”:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md

			[LEARN][COFFEESCRIPT][NOTE] In CoffeeScript use “for-from” loops, that compiled to “for-of” loops:
			https://coffeescript.org/#generators
			https://stackoverflow.com/a/57637660/5951529

			[LEARN][COFFEESCRIPT][NOTE] CoffeeScript compile “for-of” loops to “for-in” loops:
			https://coffeescript.org/#loops */
			"unicorn/no-array-for-each": 2,

			/* [OPTION] Disallow “null” literal. Use “undefined” instead:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md

			[INFO] “null” is a bad idea:
			https://github.com/sindresorhus/meta/discussions/7

			[NOTE] This rule in conflict with “no-undefined” rule.
			See comments for “no-undefined” */
			"unicorn/no-null": 2,

			/* [OPTION] Use numeric separators for integer values greater than 9999 for better readability:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md

			[EXAMPLE] “140_000”, not “140000”

			[NOTE] JSHint doesn’t support numeric separators:
			https://github.com/jshint/jshint/issues/3533 */
			"unicorn/numeric-separators-style": 2,

			/* [OPTION] Require methods “addEventListener()” and “.removeEventListener()”
			over “on”-functions as “onclick” and “onorientationchange”:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md

			[INFO] “addEventListener()” has advantages as registering unlimited event handlers
			and optionally having the event handler invoked solely once:
			https://stackoverflow.com/a/35093997/5951529 */
			"unicorn/prefer-add-event-listener": 2,

			/* [OPTION] Prefer “foo.append(bar);” to “foo.appendChild(bar);”.
			“There are some advantages of using Node#append(), like the ability to append multiple nodes
			and to append both DOMString and DOM node objects.”:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md */
			"unicorn/prefer-dom-node-append": 2,

			/* [OPTION] Prefer the “dataset” property for custom “data-*” attributes to methods
			“.getAttribute()”, “.setAttribute()”, “.removeAttribute()” and “.hasAttribute()”:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md */
			"unicorn/prefer-dom-node-dataset": 2,

			/* [OPTION] Enforce the use of “globalThis” over “window”, “self” and “global”
			except window-specific events and certain window/WebWorker-specific APIs:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md

			Incorrect:

			```js
			if globalThis.confirm(kiraBalloonErrorMessage)
			```

			Correct:

			```js
			if globalThis.confirm(kiraBalloonErrorMessage)
			```

			But also correct:

			```js
			window.addEventListener("load", internals.initialize);
			window.open "https://github.com/Kristinita/KristinitaPelican/issues/new", "_blank", "noopener"
			```


			[INFO] “globalThis” is a unified mechanism for different JavaScript environments
			as browser, Node.js Web Workers. “globalThis” replaced “window”, “self”, “frames” and “global”:
			https://blog.logrocket.com/what-is-globalthis-why-use-it/ */
			"unicorn/prefer-global-this": 2,

			/* [OPTION] Prefer “after()”, “append()”, “before()” and “prepend()” to
			“.insertBefore()”, “.replaceChild()”, “.replaceWith()”, “insertAdjacentElement()” and “insertAdjacentText()”.
			Advantages:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md */
			"unicorn/prefer-modern-dom-apis": 2,

			/* [OPTION] Prefer pure ECMAScript syntax to CommonJS syntax:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md

			[LEARN][JAVASCRIPT] Pure ESM packages:
			https://medium.com/digio-australia/migrating-an-npm-package-to-use-es-modules-d59877963d61
			https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

			[NOTE] Some Node.js packages as Browsersync, Pa11y-CI and simple-git-hooks
			don’t support pure ESM syntax in their config files.
			I need to ignore the “prefer-module” rule for them. */
			"unicorn/prefer-module": 2,

			/* [OPTION] Prefer “node:” protocol when importing Node.js built-in modules.
			It makes it perfectly clear that the package is a Node.js built-in module:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md

			[EXAMPLE]
			Prefer “require("node:child_process")” to “require("child_process")” */
			"unicorn/prefer-node-protocol": 2,

			/* [OPTION] Prefer “.querySelector()” over “.getElementById()” and
			“.querySelectorAll()” over “.getElementsByClassName()” and “.getElementsByTagName()”.
			“This helps keep consistency, and it lends itself to future improvements (e.g. more specific selectors).”:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md */
			"unicorn/prefer-query-selector": 2,

			/* [OPTION] Prefer the spread operator over “Array.from()”,
			“Array#concat()”, “Array#{slice,toSpliced}()” and “String#split("")”:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md

			[INFO] In particular, Unicorn throws this error if the user uses the method “concat()” for string concatenation.
			Use template literals instead of “concat()” for fixing this error:
			https://coderwall.com/p/ocx2ia/template-literals-in-coffeescript
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

			[EXAMPLE] Prefer “kiraQuery = "#{kiraSite}#{kiraURL}"” to “kiraQuery = kiraSite.concat(kiraURL)” */
			"unicorn/prefer-spread": 2,

			/* [OPTION] Prefer the method “slice()” to “substr()” and “substring()”:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md

			[INFO] Unicorn developers says:
			“String#substr()” and “String#substring()” are the two lesser known legacy ways to slice a string.
			It’s better to use “String#slice()” as it’s a more popular option
			with clearer behavior that has a consistent Array counterpart. */
			"unicorn/prefer-string-slice": 2,

			/* [OPTION] Prefer ternary expressions over “if-else” statements.

			1. Using an “if-else” statement typically results in more lines of code than a single-line ternary expression.
			2. Using an “if-else” statement can result in defining variables
			using “let” or “var” solely to be reassigned within the blocks.
			This leads to variables being unnecessarily mutable and prevents “prefer-const” from flagging the variable:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md

			[NOT_FIXABLE_ON_COFFEESCRIPT] CoffeeScript doesn’t support JavaScript ternary operator.
			CoffeeScript has solely human-readable “if-then-else” syntax,
			which isn’t enough to prevent Unicorn from returning an error.
			https://stackoverflow.com/a/39093085/5951529
			https://stackoverflow.com/a/10146123/5951529

			[AUTOFIX] Unicorn automatically replace “if-then-else” to the ternary operator */
			"unicorn/prefer-ternary": 2,

			/* [OPTION] Require full words in names of classes,
			files, functions, imports, properties and variables:
			https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md

			[EXAMPLE] Require “const kiraError = new Error();”, not “const e = new Error();” */
			"unicorn/prevent-abbreviations": 2

			/* [NOTE] Disabled because xss plugin is incompatible with ESLint 9.

			---
			[FIXME] Delete this rule if the development of the plugin will continue
			or delete it if no.

			[OPTION] Rule that check unsafe string concatenations:
			https://github.com/Rantanen/eslint-plugin-xss/blob/master/docs/rules/no-mixed-html.md

			[NOTE] xss plugin returns errors if HTML without any concatenation in the string.
			I need to disable plugin for some lines:
			https://github.com/Rantanen/eslint-plugin-xss/issues/14

			"xss/no-mixed-html": 2 */

		}
	}
];
