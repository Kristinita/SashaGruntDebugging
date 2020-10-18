module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-posthtml'

	grunt.initConfig

		posthtml:
			options:
				use: [
					require('posthtml-img-autosize')(
							root: 'output',
							processEmptySize: true
							)
				]
			target:
				files: [
					expand: true
					cwd: '.'
					src: 'output/**/*.html'
					dest: '.'
					ext: '.output.html'
				]
