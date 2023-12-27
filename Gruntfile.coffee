module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		templates:
			paths:
				cwd: process.cwd()
				theme: "themes/nelican"

		shell:
			djlint:
				command: "djlint <%= templates.paths.theme %>/templates/*.html --lint"
