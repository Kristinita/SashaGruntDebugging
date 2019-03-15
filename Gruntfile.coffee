module.exports = (grunt) ->
	grunt.initConfig
		flake8:
			dist:
				src: "grunt_flake8.py"

	grunt.loadNpmTasks 'grunt-flake8'
	return
