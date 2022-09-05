module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-posthtml'

	grunt.initConfig

		posthtml:
			options:
				use: [
					require('posthtml-img-autosize')(processEmptySize: true)
				]
			target:
				files: [
					expand: true
					cwd: '.'
					src: 'KiraFolder/*.html'
					dest: '.'
					ext: '.outputgrunt.html'
				]
