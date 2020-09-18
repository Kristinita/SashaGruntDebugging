module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-prettier'
	grunt.initConfig
		cwebp:
			dynamic:
				options:
					# [NOTE] If “true”:
					# 1. src file will overwrite
					# 2. extension will the former, not “.webp”
					# Not recommend it.
					sameExt: false
				# [NOTE] Don't use "<%= templates.paths.images %>", because it include svg and gif, that
				# not convert to webp
				files: [
					expand: true
					cwd: '.'
					# [LEARN][GLOB] Use “/**/”, that include “output/images/**” and “output/theme/images/**”
					src: "NeliaAutumnLeaves.jpg"
					dest: '.'
				]

	return
