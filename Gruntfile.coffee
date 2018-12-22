module.exports = (grunt) ->

	grunt.loadNpmTasks("grunt-http-server")
	grunt.loadNpmTasks("grunt-pageres")
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
		# hello_world:
		# 	world:
		# 		name: "world!"
		pageres:
			screenshots:
				options:
					delay: 4,
					dest: "screenshots/"
					sizes: [
							"1024x768"
							]
					urls: ["https://127.0.0.1:8282/output/index.html"]

	grunt.registerTask("default", ["http-server", "pageres"])
