module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-htmllint')
	grunt.initConfig
		templates:
			yamlconfig: grunt.file.readYAML("pelicanvariables.yaml")
			paths:
				output_path: "<%= templates.yamlconfig.output_path %>"
		htmllint:
			options:
				force: false
				htmllintrc: true
			src: ["<%= templates.paths.output_path %>/**/*.html"]
