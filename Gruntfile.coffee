module.exports = (grunt) ->

	grunt.loadNpmTasks("grunt-shell")

	grunt.initConfig

		shell:
			remark:
				command: "npx remark . --silently-ignore --frail"
