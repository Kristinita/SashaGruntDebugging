###
@Author: SashaChernykh
@Date: 2024-02-08 19:55:11
@Last Modified by: SashaChernykh
@Last Modified time: 2025-03-05 08:35:55
###
module.exports =

	eslintfix:
		command: "npx eslint output/**/*.{js,html} --fix --debug"

	eslintlint:
		command: "npx eslint *.{js,mjs} output/**/*.{js,html} --debug"
