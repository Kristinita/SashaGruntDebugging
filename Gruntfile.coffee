module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-pagespeed'

	grunt.initConfig

		pagespeed:
			options:
				key: process.env.API_KEY_PAGESPEED_INSIGHTS_V5
				url: "https://kristinita.netlify.app/"


			prod:
				options:
					paths: ["Programs/KristinitaLuckyLink"]
					locale: "en_US"
					strategy: "desktop"

	return
