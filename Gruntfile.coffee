module.exports = (grunt) ->

	require('time-grunt') grunt



	grunt.loadNpmTasks 'grunt-critical'

	grunt.initConfig

		critical:
			dist:
				options:
					extract: false
				files: [
					expand: true
					cwd: "output/"
					src: [
							"IT-articles/*.html"
							"Sublime-Text/*.html"
							"Programs/*.html"]
					dest: "."
					]
	return
