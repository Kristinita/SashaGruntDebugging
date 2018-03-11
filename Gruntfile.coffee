module.exports = (grunt) ->

	require('load-grunt-tasks')(grunt)

	grunt.initConfig

		purifycss:
			sashapurify:
				src: ['SashaPurify.html']
				css: ['SashaPurify.css']
				dest: 'SashaPurify.css'
