module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-pylint'
	grunt.initConfig
		pylint:
			options:
				externalPylint: true
				virtualenv: ".venv"
			dist:
				src: ["*.py"]

	return
