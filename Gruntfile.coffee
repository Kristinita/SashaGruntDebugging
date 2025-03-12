module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		shell:
			commitlint:
				command: "git log -1 --pretty=%B | npx commitlint --verbose"
