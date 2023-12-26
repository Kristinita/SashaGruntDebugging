module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		templates:
			tokens:
				api_key_appveyor: process.env.API_KEY_APPVEYOR

		shell:
			appveyorlintvalidconfig:
				command: "curl --no-progress-meter \
							--header \"Authorization: Bearer <%= templates.tokens.api_key_appveyor %>\" \
							--header \"Content-Type: application/json\" \
							--data-binary @appveyor.yml \
							https://ci.appveyor.com/api/projects/validate-yaml | \
							python -c \"import sys, json; \
							kira_appveyor_json_response = json.load(sys.stdin); \
							print(json.dumps(kira_appveyor_json_response, indent=2)); \
							kira_message_after_validation, kira_exit_code = \
							(print('Your AppVeyor configuration file has an error. Please, fix it.'), exit(1)) \
							if kira_appveyor_json_response['isValid'] is False \
							else (print('Congratulations! Your AppVeyor configuration file is valid!'), exit(0)) \"
							"

			appveyorlintnonvalidconfig:
				command: "curl --no-progress-meter \
							--header \"Authorization: Bearer <%= templates.tokens.api_key_appveyor %>\" \
							--header \"Content-Type: application/json\" \
							--data-binary @appveyornonvalid.yml \
							https://ci.appveyor.com/api/projects/validate-yaml | \
							python -c \"import sys, json; \
							kira_appveyor_json_response = json.load(sys.stdin); \
							print(json.dumps(kira_appveyor_json_response, indent=2)); \
							kira_message_after_validation, kira_exit_code = \
							(print('Your AppVeyor configuration file has an error. Please, fix it.'), exit(1)) \
							if kira_appveyor_json_response['isValid'] is False \
							else (print('Congratulations! Your AppVeyor configuration file is valid!'), exit(0)) \"
							"
