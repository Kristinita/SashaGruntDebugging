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
					cwd: "."
					src: [
							"output/IT-Articles/*.html"
							"output/Sublime-Text/*.html"
							"output/Programs/*.html"
						]
					dest: "."
					]
	return
