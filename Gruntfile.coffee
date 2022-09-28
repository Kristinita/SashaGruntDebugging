module.exports = (grunt) ->

	grunt.loadNpmTasks("grunt-shell")

	grunt.initConfig

		shell:
			remark:
				command: "npx remark **/*.md --silently-ignore --frail"
