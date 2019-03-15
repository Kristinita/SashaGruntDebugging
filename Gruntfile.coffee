module.exports = (grunt) ->
	grunt.initConfig
		pylint:
			options:
				externalPylint: true
			dist:
				src: ["kira_grunt_pylint.py"]

	grunt.loadNpmTasks 'grunt-pylint'
	return
