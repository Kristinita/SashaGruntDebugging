module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		shell:
			commitlint:
				command: "git log -1 --pretty=format:\"%s%n%n%b\" | npx commitlint --verbose"

			"commitlint-codemagic":
				command: "npx commitlint --from=HEAD~1"
