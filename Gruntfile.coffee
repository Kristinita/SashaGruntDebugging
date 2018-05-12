module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-stylint')
	grunt.initConfig
		stylint:
			options:
				# [WARNING] If true, grunt-stylint will not show any errors/warnings:
				quiet: false
			src: ["Stylint/*.styl"]
