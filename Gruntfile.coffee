# [INFO] Passing plugins arguments:
# https://www.npmjs.com/package/poststylus#passing-arguments-to-plugins
doiuse = require('doiuse')

# [INFO] PostStylus Grunt usage:
# https://www.npmjs.com/package/poststylus#grunt
postcss = ->
	require('poststylus') [
		doiuse(browsers: ['last 1 version'])
	]

module.exports = (grunt) ->
	grunt.initConfig
		stylus:
			compile:
				options:
					use: [postcss]
				files: 'KiraGoddess.css': 'KiraGoddess.styl'
		postcss:
			compile:
				options:
					map: false
					processors: [
						require('doiuse')(browsers: ['last 1 version'])
					]
				files: 'KiraGoddess.css': 'KiraGoddess.css'

	grunt.loadNpmTasks 'grunt-contrib-stylus'
	grunt.loadNpmTasks 'grunt-postcss'
	return
