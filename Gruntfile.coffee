module.exports = (grunt) ->

	require("@dotenvx/dotenvx").config()

	grunt.loadNpmTasks "grunt-shell-spawn"

	grunt.initConfig

		shell:
			whoiskira:
				command: "npx dotenvx run -- <%= process.env.KIRA %>"
				options:
					stderr: false
					stdout: false
