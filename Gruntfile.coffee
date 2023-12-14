module.exports = (grunt) ->

	grunt.loadNpmTasks("@lodder/grunt-postcss")

	grunt.initConfig

		postcss:

			fixinlinecssinhtml:
				options:
					failOnError: true
					processors: [
						require('postcss-combine-media-query')
					]

					syntax: require('postcss-html')

				files: [
					expand: true
					cwd: "KiraInput"
					src: ['*.html']
					dest: "KiraOutput"
					]
