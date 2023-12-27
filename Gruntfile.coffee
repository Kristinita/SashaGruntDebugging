module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		templates:
			paths:
				cwd: process.cwd()
				theme: "themes/nelican"

		shell:
			djlint:
				cwd: "<%= templates.paths.theme %>/templates"
				command: "djlint . --lint"
