gulp = require('gulp')
htmltidy = require('gulp-htmltidy')

module.exports = (grunt) ->

	require('load-grunt-tasks')(grunt)

	grunt.initConfig

		devUpdate:
			main:
				options:
					updateType: 'force'

		gulp:
			gulptidy:
				gulp.src('output/SashaGruntGulp/SashaGruntGulpExample.html', base: ".")
				.pipe(htmltidy(
					wrap: 0)).pipe gulp.dest('.')

		imagemin:
			dynamic:
				files: [
					expand: true
					cwd: '.'
					src: ['output/SashaGruntGulp/*.jpg']
					dest: '.'
					]


	grunt.registerTask 'update', [
		'devUpdate'
	]
	return