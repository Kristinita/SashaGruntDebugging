module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		templates:
			paths:
				theme: "themes/nelican"

		shell:
			djlint:
				command: "djlint '<%= templates.paths.theme %>/templates' --lint"
