/*
	@Author: Kristinita
	@Date: 2025-02-20 17:25:48
	@Last Modified by: SashaChernykh
	@Last Modified time: 2025-03-05 09:22:29
*/

/* [NOTE] Configuration Pa11y CI file for Linux completely repeats the contents of “.pa11yci.js”
except that it contains the “chromeLaunchConfig” option.

[NOTE] Path for the Chrome executable file must be defined
in Pa11y CI config for using it on Linux:
https://github.com/pa11y/pa11y-ci#pa11y-ci-3-and-ubuntu
https://github.com/pa11y/pa11y-ci/issues/198#issuecomment-1418343240

[COMPARE]
https://app.travis-ci.com/github/Kristinita/SashaTravisDebugging/builds/267887436
https://app.travis-ci.com/github/Kristinita/SashaTravisDebugging/builds/267887387

[INFO] See all comments except those specifically for Linux in the file “.pa11yci.js”
*/

/* eslint-disable unicorn/prefer-module */

module.exports = {

	/* eslint-enable unicorn/prefer-module */

	defaults: {
		chromeLaunchConfig: {
			args: [
				"--ignore-certificate-errors"
			],
			/* [REQUIRED] Path to Chrome executable file on Linux:
			https://github.com/pa11y/pa11y-ci#pa11y-ci-3-and-ubuntu
			https://github.com/pa11y/pa11y-ci/issues/198#issuecomment-1418343240 */
			executablePath: "/usr/bin/google-chrome"
		},
		hideElements: [

			".SashaKristinitaHeader", ".SashaKristinitaMotto",

			".Sasha404Description",

			".SashaAsideBottomText",

			".footnote-backref",

			"a[href='#GitHub-token']",

			".KiraPDFLink",

			".progress-60plus"

		],

		ignore: [
			"frame-tested"
		],

		includeNotices: false,

		includeWarnings: false,

		runners: ["axe", "htmlcs"],

		standard: "WCAG2AA",

		timeout: 140_000
	}
};
