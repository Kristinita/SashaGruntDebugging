module.exports = (grunt) ->

	grunt.loadNpmTasks("@lodder/grunt-postcss")

	grunt.initConfig

		postcss:

			fixinlinecssinhtml:
				files: [
					cwd: "KiraInput"
					dest: "KiraOutput"
					expand: true
					src: ["*.html"]
				]

				options:
					failOnError: true
					processors: [
						require("postcss-combine-media-query")
					]
					syntax: require("postcss-html")

