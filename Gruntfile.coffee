module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-contrib-coffee'
	# grunt.loadNpmTasks 'grunt-google-closure-tools-compiler'
	# grunt.loadNpmTasks 'google-closure-compiler'

	require('google-closure-compiler').grunt grunt,
		platform: [
			'native'
			'java'
			'javascript'
		]
		max_parallel_compilations: require('os').cpus().length

	grunt.initConfig

		coffee:
			options:
				bare: true
				sourceMap: false
			kira_target:
				files: [
					src: 'KiraSrc.coffee'
					dest: 'KiraSrc.js'
				]

		'closure-compiler':
			options:
				compilation_level: "SIMPLE"
				create_source_map: true
				language_in: "ECMASCRIPT_NEXT"
				language_out: "ECMASCRIPT_NEXT"
			kira_target:
				files: [
					src: 'KiraSrc.js'
					dest: 'KiraDest.js'
				]

		closurecompiler:
			options:
				java_path: "D:\\Chocolatey\\bin\\java.exe"
				create_source_map: true
			kira_target:
				files: [
					src: 'KiraSrc.js'
					dest: 'KiraDest.js'
				]

		terser:
			options:
				sourceMap: true
			kira_target:
				files: [
					src: 'KiraSrc.js'
					dest: 'KiraDest.js'
				]

		uglify:
			options:
				sourceMap: true
			kira_target:
				files: [
					src: 'KiraSrc.js'
					dest: 'KiraDest.js'
				]
