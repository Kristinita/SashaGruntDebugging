module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-markdownlint')
	grunt.loadNpmTasks('grunt-purgecss')
	grunt.loadNpmTasks('merge-source-maps')

	grunt.initConfig

		markdownlint:
			src: ["KiraGoddess.md"]
