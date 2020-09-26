module.exports = (grunt) ->

	require('time-grunt') grunt

	grunt.loadNpmTasks 'grunt-critical'

	grunt.initConfig

		critical:
			dist:
				options:
					# [INFO] Removing the critical CSS per page results in a unique async loaded CSS file for every page:
					# https://www.npmjs.com/package/critical#options
					extract: false
				files: [
					expand: true
					cwd: "."
					src: ["output/**/*.html"]
					dest: "."
					]
	return
