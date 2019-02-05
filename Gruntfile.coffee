module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-clean-console'

	grunt.initConfig
		# [INFO] Using templates:
		# https://quickleft.com/blog/grunt-js-tips-tricks/
		paths:
			# [INFO] Get current working directory of Gruntfile:
			# https://gruntjs.com/creating-plugins#avoid-changing-the-current-working-directory:-process.cwd
			# https://stackoverflow.com/q/28755625/5951529
			cwd: process.cwd()
		'clean-console':
			all:
				options:
					url: [
							# Working example
							"KiraCleanConsole.html"
							# Non-ASCII symbols in URL
							"Русскоязычное-имя-файла.html"
							# Decode previous file name
							"%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%BE%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D0%BE%D0%B5-%D0%B8%D0%BC%D1%8F-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0.html"
							# [INFO] Full file URI:
							# https://stackoverflow.com/a/19971732/5951529
							"file:///<%= paths.cwd %>/KiraCleanConsole.html"
							# [INFO] For ASCII filenames I get errors too:
							# https://travis-ci.org/Kristinita/KristinitaPelican/jobs/488512131#L1681
							"output/IT-Articles/How-to-publish-your-package-to-PyPI-2018.html"
						]

	return
