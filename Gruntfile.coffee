module.exports = (grunt) ->

	grunt.loadNpmTasks "@lodder/grunt-postcss"

	grunt.initConfig

		postcss:
			lintcss:
				options:

					map: true
					writeDest: false

					processors: [
						# require('stylelint')
						require('doiuse')([])
					]

				src: "KiraExampleFile.css"
				dest: "KiraExampleFile.css"
