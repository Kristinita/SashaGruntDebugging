###
@Author: SashaChernykh
@Date: 2024-02-08 19:55:11
@Last Modified by: SashaChernykh
@Last Modified time: 2025-03-05 09:14:09
###
module.exports =

	eslintfix:
		command: "npx eslint kirafiles/**/*.{js,html} --fix --debug"

	eslintlint:
		command: "npx eslint *.{js,mjs} kirafiles/**/*.{js,html} --debug"
