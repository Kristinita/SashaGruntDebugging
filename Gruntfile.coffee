module.exports = (grunt) ->

	# [INFO] Initialize Dotenvx:
	# https://dotenvx.com/docs/advanced/config
	require("@dotenvx/dotenvx").config()

	grunt.loadNpmTasks "grunt-shell-spawn"

	grunt.initConfig

		shell:
			whoiskira:
				command: "<%= process.env.KIRA %>"
				options:
					stderr: false
					stdout: false
