module.exports = (grunt) ->

	require('google-closure-compiler').grunt grunt

	grunt.initConfig

		'closure-compiler':
			target:
				files: [
					expand: true
					cwd: "js/"
					src: ['**/*.js']
					dest: "js/"
					ext: '.min.js'
					]
