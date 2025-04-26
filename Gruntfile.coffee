module.exports = (grunt) ->

	kiraDotenvxObject = require "@dotenvx/dotenvx"

	kiraDotenvxObject.config
		path: [
			".env"
			".env.credentials"
		]
		strict: true

	console.log kiraDotenvxObject

	grunt.loadNpmTasks "grunt-shell-spawn"

	grunt.initConfig

		templates:
			arguments:
				kiraTemplate: kiraDotenvxObject.get "KIRA"

		shell:
			whoiskira:
				command: "<%= templates.arguments.kiraTemplate %>"
				options:
					stderr: true
					stdout: true
