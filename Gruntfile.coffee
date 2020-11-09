module.exports = (grunt) ->

	# grunt.loadNpmTasks '@lodder/grunt-postcss'
	grunt.loadNpmTasks 'grunt-purgecss'

	grunt.initConfig

		purgecss:
			kiratarget:
				options:
					content: ["KiraGoddess.html"]
				files:
					"KiraGoddess.css": ["KiraGoddess.css"]
