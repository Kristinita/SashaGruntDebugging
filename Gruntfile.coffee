module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-shell'

	grunt.initConfig

		shell:
			travislint:
				command: 'travis lint -x'
