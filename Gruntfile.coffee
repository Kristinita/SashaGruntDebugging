module.exports = (grunt) ->

	grunt.loadNpmTasks("grunt-http-server")
	grunt.loadNpmTasks("grunt-pageres")
	grunt.initConfig
		"http-server":
			server:
				host: "0.0.0.0"
				https: true
				port: 8282
				runInBackground: true
				root: "."
		pageres:
			screenshots:
				options:
					dest: "screenshots/"
					sizes: [
							"1024x768"
							]
					urls: "https://127.0.0.1:8282/output/index.html"

	grunt.registerTask("default", ["http-server", "pageres"])
