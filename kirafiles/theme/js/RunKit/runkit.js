/*
@Author: Kristinita
@Date: 2023-12-07 10:46:45
@Last Modified by: Kristinita
@Last Modified time: 2025-02-20 19:37:35
*/
var notebook;

//#########
// RunKit #
//#########
/*
[OVERVIEW] Run npm code online in browser:
https://runkit.com

[REQUIRED] theme-maker for changing styles:
https://stackoverflow.com/a/56545110/5951529
https://runkit.com/docs/theme-maker

[NOTE] It not documented:
https://github.com/runkitdev/runkit-demo/issues/4#issuecomment-359939358
*/
notebook = RunKit.createNotebook({
  // [NOTE] Id required, class will not work
  element: document.querySelector("#SashaRunkit"),
  // [NOTE] You need paste here content of your RunKit notebook even if it long:
  source: "var stringSimilarity = require('string-similarity')\n\nvar similarity = stringSimilarity.compareTwoStrings('Кира', 'Кирк');",
  // [INFO] https://runkit.com/docs/theme-maker/untilted-2jxk2crve1p7 theme
  theme: "untilted-028u85ijnoyr"
});

//# sourceMappingURL=runkit.js.map
