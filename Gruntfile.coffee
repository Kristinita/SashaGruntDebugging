module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		templates:
			paths:
				cwd: process.cwd()
				theme: "themes/nelican"

		shell:
			djlint:
				command: "djlint <%= templates.paths.cwd %>/<%= templates.paths.theme %>/templates --lint"
