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

		shell:
			commitizen:
				command: 'git commit -m "%SASHAMESSAGE%"'

		gta:
			options:
				stdout: true
				stderr: true
			# git add -A
			# https://stackoverflow.com/a/572660/5951529
			# https://pranavprakash.net/2014/09/21/automate-git-workflow-with-grunt/
			add:
				command: 'add -A'
			# Multiline commit:
			# https://stackoverflow.com/a/5070502/5951529
			commit:
				# SET — command for temporary change variable in current session:
				# https://superuser.com/a/976956/572069
				# First configure your SASHASHORTCOMMITDESCRIPTION and SASHALONGCOMMITDESCRIPTION variables:
				# SET SASHASHORTCOMMITDESCRIPTION=<your short commit description>
				# SET SASHALONGCOMMITDESCRIPTION=<your long commit description>
				if process.platform == "win32"
					command: 'commit -m "%SASHASHORTCOMMITDESCRIPTION%" -m "%SASHALONGCOMMITDESCRIPTION%"'
				# Set variable only for current shell:
				# https://askubuntu.com/a/58828/582218
				# First configure your SASHASHORTCOMMITDESCRIPTION and SASHALONGCOMMITDESCRIPTION variables:
				# SASHASHORTCOMMITDESCRIPTION="<your short commit description>"
				# SASHALONGCOMMITDESCRIPTION="<your long commit description>"
				else
					command: 'git commit -m "$SASHASHORTCOMMITDESCRIPTION" -m "$SASHALONGCOMMITDESCRIPTION"'
			push:
				command: 'push'

		hello_world:
		    world:
		        name: "world!"

	grunt.registerTask 'hello', [
		'hello_world'
	]

	grunt.registerTask 'git', [
		'gta:add'
		'gta:commit'
		'gta:push'
	]

	return
