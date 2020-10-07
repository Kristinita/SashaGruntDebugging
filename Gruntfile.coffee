module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-juwain-posthtml'

	grunt.initConfig

		posthtml:
			options:
				use: [
					require('posthtml-lazyload')(loading: 'lazy')
				]
			single:
				files: [
					src: 'KiraPostHTML.html'
					dest: 'KiraPostHTMLLazyload.html'
				]

	return
