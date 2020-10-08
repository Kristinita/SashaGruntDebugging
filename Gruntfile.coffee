module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-posthtml'

	grunt.initConfig

		posthtml:
			options:
				use: [
					require('posthtml-aria-tabs')()
					require('posthtml-doctype')(doctype : 'HTML 4.01 Frameset')
					require('posthtml-alt-always')()
				]
			single:
				files: [
					src: 'KiraPosthtmlInput.html'
					dest: 'KiraPosthtmlOutput.html'
				]
