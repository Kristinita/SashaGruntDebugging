module.exports = (grunt) ->

	require('load-grunt-tasks')(grunt)

	grunt.initConfig

		gitadd:
			task:
				options:
					all: true
					verbose: true

		gitcommit:
			task:
				options:
					verbose: true

		gitpush:
			task:
				options:
					branch: 'SashaGruntCommit'
					verbose: true

	grunt.registerTask 'git', [
		'gitadd'
		'gitcommit'
		'gitpush'
	]
	return
