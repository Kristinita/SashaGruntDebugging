module.exports = (grunt) ->

	require('load-grunt-tasks')(grunt)

	grunt.initConfig

		devUpdate:
			main:
				options:
					updateType: 'force'

		posthtml:
			options:
				use: [
					require('posthtml-aria-tabs')()
					require('posthtml-doctype')(doctype : 'HTML 4.01 Frameset')
					require('posthtml-alt-always')()
				]
			single:
				files: [
					src: 'output/SashaPosthtml/SashaPosthtmlExample.html'
					dest: 'output/SashaPosthtml/SashaPosthtmlExample.html'
				]

		postcss:
			options:
				map: false
				processors: [
					require('autoprefixer')()
				]
			dist:
				src: ['output/SashaPosthtml/SashaPosthtmlExample.css']

	grunt.registerTask 'update', [
		'devUpdate'
	]
	return