module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-markdownlint')
	# [INFO] Or any another working Grunt plugins instead of “grunt-contrib-stylus”,
	# “grunt-purgecss” and “merge-source-maps”
	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-purgecss')
	grunt.loadNpmTasks('merge-source-maps')

	grunt.initConfig

		markdownlint:
			# [INFO] Or any another valid Markdown file
			src: ["KiraGoddess.md"]
