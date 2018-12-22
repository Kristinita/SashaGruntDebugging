module.exports = (grunt) ->

	grunt.loadNpmTasks("grunt-http-server")
	grunt.loadNpmTasks("grunt-hello-world")
	grunt.initConfig
		"http-server":
			server:
				# “Specify "0.0.0.0" to be available everywhere”
				host: "0.0.0.0"
				https: true
				port: 8282
				# If true, run parallel with other tasks
				runInBackground: true
				root: "."
		hello_world:
			world:
				name: "world!"

	grunt.registerTask("default", ["http-server", "hello_world"])
