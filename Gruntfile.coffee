module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-jsbeautifier')
	grunt.initConfig
    	jsbeautifier:
    		files: ['SashaJsBeautify.html']

