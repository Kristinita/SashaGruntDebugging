module.exports = (grunt) ->

	require('google-closure-compiler').grunt grunt,
		platform: [
			'native'
			'java'
			'javascript'
		]
		max_parallel_compilations: require('os').cpus().length

	grunt.initConfig

		'closure-compiler':
			options:
				jscomp_off: ['undefinedVars']
				jscomp_warning: "*"
				language_out: "ECMASCRIPT_NEXT"
				warning_level: "VERBOSE"
			kira_target:
				files: [
					src: 'KiraChocolat.js'
					dest: 'KiraDest.js'
				]
