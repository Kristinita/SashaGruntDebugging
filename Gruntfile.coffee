module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		shell:
			appveyorlint:
				command: "npx dotenvx run -- echo <%= process.env.KIRA %>"
