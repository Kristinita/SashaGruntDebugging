module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-pagespeed'

	grunt.initConfig

		pagespeed:
			options:
				nokey: true
				url: "https://kristinita.netlify.app/"


			prod:
				options:
					paths: ["Programs/KristinitaLuckyLink"]
					locale: "en_US"
					strategy: "desktop"

	return
