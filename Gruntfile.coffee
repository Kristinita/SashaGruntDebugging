module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-posthtml'

	grunt.initConfig

		posthtml:
			options:
				use: [
					require('posthtml-img-autosize')(processEmptySize: true, root: process.cwd())
				]
			single:
				files: [
					src: 'KiraPostHTML.html'
					dest: 'KiraPostHTMLAsync.html'
				]
