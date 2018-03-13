module.exports = (grunt) ->

	require('load-grunt-tasks')(grunt)

	grunt.initConfig

		# git add -A
		# https://stackoverflow.com/a/572660/5951529
		# https://pranavprakash.net/2014/09/21/automate-git-workflow-with-grunt/
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

		shell:
			commitizen:
				command: 'git commit -m "%SASHAMESSAGE%"'

	grunt.registerTask 'git', [
		'gitadd'
		'shell:commitizen'
		'gitpush'
	]
	return
