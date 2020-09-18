module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-cwebp'
	grunt.initConfig
		cwebp:
			dynamic:
				###
				[NOTE] Don’t use "<%= templates.paths.images %>",
				because it include svg and gif files, that not convert to webp
				###
				files: [
					expand: true
					cwd: '.'
					src: "NeliaAutumnLeaves.jpg"
					dest: '.'
				]

	return
