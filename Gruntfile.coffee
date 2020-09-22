module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-juwain-posthtml'

	grunt.initConfig

		posthtml:
			options:
				use: [
					require('posthtml-doctype')(doctype: 'HTML 5')
				]
			single:
				files: [
					src: 'KiraPostHTML.html'
					dest: 'KiraPostHTMLGrunt.html'
				]

	return
