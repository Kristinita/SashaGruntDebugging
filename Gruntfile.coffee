module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-htmllint')
	grunt.loadNpmTasks('grunt-jsbeautifier')
	grunt.initConfig
		templates:
			yamlconfig: grunt.file.readYAML("pelicanvariables.yaml")
			paths:
				output_path: "<%= templates.yamlconfig.output_path %>"
		jsbeautifier:
			options:
				config: ".jsbeautifyrc"
			files: [
					"<%= templates.yamlconfig.output_path %>/**/*.{html,css,js,json}"
					"!<%= templates.yamlconfig.output_path %>/**/*.min.{css,js}"
					]
		htmllint:
			options:
				force: false
				htmllintrc: true
			src: ["<%= templates.paths.output_path %>/**/*.html"]
