module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-posthtml'

	grunt.initConfig

		posthtml:
			options:
				use: [
					require('posthtml-img-autosize')(
							root: 'KiraFolder',
							processEmptySize: true
							)
				]
			target:
				files: [
					expand: true
					cwd: '.'
					src: 'KiraFolder/*.html'
					dest: '.'
					ext: '.output.html'
				]
