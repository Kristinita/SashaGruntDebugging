module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-purgecss')
	grunt.loadNpmTasks('merge-source-maps')

	grunt.initConfig

		stylus:
			options:
				sourcemap:
					comment: true
					inline: true
			compile:
				files:
					"css/KiraStyles.css": "stylus/KiraStyles.styl"

		purgecss:
			options:
				content: ["KiraHTML.html"]
				sourceMap: true
			target:
				files:
					"css/KiraStyles.css": ["css/KiraStyles.css"]

		'merge-source-maps':
			target:
				files:
					"css/KiraStyles.css": ["css/KiraStyles.css"]
