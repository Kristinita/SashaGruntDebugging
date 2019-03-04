module.exports = (grunt) ->
	grunt.initConfig
		modernizr:
			target:
				# [INFO] Full options list:
				# https://github.com/modernizr/customizr#config-file
				dest: "modernizr-custom.min.js"
				# Doesn't crawl project
				crawl: false
				# [INFO] I use Modernizr for Webp support:
				# https://css-tricks.com/using-webp-images/#article-header-id-4
				tests: ["webp"]
				# Uglify JavaScript
				uglify: true

	grunt.loadNpmTasks 'grunt-modernizr'
	return
