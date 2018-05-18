module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-htmllint')
	grunt.initConfig
		htmllint:
			options:
				force: false
				htmllintrc: true
			src: ['*.html']
