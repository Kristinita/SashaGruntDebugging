module.exports = (grunt) ->
	grunt.initConfig
		coffee_format:
			main:
				options:
					tab: '\t'
				files:
					src: ["KiraCoffeeFormatGrunt.coffee"]

	grunt.loadNpmTasks 'grunt-coffee-format'
	return
