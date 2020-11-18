module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-contrib-uglify'

	grunt.initConfig

		uglify:
			options:
				sourceMap: true
			kira_target:
				files: [
					src: 'KiraSrc.js'
					dest: 'KiraDest.js'
				]
