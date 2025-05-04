module.exports = (grunt) ->

	kiraDotenvxObject = require "@dotenvx/dotenvx"

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		# [INFO] Get the value of encrypted variable “KIRA” via Dotenvx:
		# https://dotenvx.com/docs/advanced/config-get-key
		kiraStatus: kiraDotenvxObject.get "KIRA"

		shell:
			whoiskira:
				command: "<%= kiraStatus %>"
				options:
					hideCommand: true
