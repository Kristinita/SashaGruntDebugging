module.exports = (grunt) ->
	grunt.initConfig
		purgecss:
			options:
				content: ["KiraGoddess.html"]
				whitelist: [".KiraSecond"]
				whitelistPatterns: [/\.KiraSecond/g]
				whitelistPatternsChildren: [/\.KiraSecond/g]
			main:
				files:
					"KiraGoddess.css": ["KiraGoddess.css"]

	grunt.loadNpmTasks 'grunt-purgecss'
	return
