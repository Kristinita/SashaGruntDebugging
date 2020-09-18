module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-cwebp'
	grunt.initConfig
		cwebp:
			dynamic:
				options:
					###
					[NOTE] If “true”:
					1. src files will overwrite
					2. extension will the former, not “.webp”
					I don’t recommend this.
					###
					sameExt: false
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
