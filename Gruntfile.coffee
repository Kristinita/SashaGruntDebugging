module.exports = (grunt) ->

	require('@dotenvx/dotenvx').config()

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		shell:
			appveyorlint:
				command: "https ci.appveyor.com/api/projects/validate-yaml @appveyornonvalid.yml
							--auth-type bearer --auth <%= process.env.KEY_APPVEYOR %> --body --ignore-stdin"
				# command: "npx dotenvx run --env-file .env.ci --debug --
				# 			https ci.appveyor.com/api/projects/validate-yaml @appveyornonvalid.yml
				# 			--auth-type bearer --auth <%= process.env.KEY_APPVEYOR %> --body --ignore-stdin"
