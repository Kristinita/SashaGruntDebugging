module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-prettier'
	grunt.initConfig
		prettier:
			files:
				src: ["KiraArchitecture.html"]

	return
