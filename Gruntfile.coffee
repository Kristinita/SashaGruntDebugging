module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-real-favicon'
	grunt.initConfig
		realFavicon:
			favicons:
				src: "kristinita-favicon.png"
				dest: "."
	return
