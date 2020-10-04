module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-juwain-posthtml'

	grunt.initConfig

		posthtml:
			options:
				use: [
					require('posthtml-img-autosize')(processEmptySize: true)
				]
			single:
				files: [
					src: 'KiraPostHTML.html'
					dest: 'KiraPostHTMLGrunt.html'
				]
