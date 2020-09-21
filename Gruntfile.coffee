module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-crawl'
	grunt.loadNpmTasks 'grunt-http-server'
	grunt.initConfig
		# [INFO] PhantomJS preinstalled on Travis:
		# https://docs.travis-ci.com/user/gui-and-headless-browsers/#using-phantomjs
		crawl:
			myapp:
				options:
					baseUrl: "http://localhost:4147/"
					contentDir: "."
		"http-server":
			"crawl-server":
				# [INFO] “Specify "0.0.0.0" to be available everywhere”:
				# https://divhide.com/node-grunt-http-server-1-x/#configuration
				host: "0.0.0.0"
				https: false
				port: 4147
				# [INFO] If true, run parallel with other tasks
				runInBackground: true
				root: "."

	return
