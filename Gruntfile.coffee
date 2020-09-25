module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-contrib-stylus'

	postcss = ->
		require('poststylus') [
			'autoprefixer'
		]

	grunt.initConfig

		stylus:
			options:
				compress: false
				linenos: false
				use: [postcss]
			themecompile:
				files: [
					src: 'KiraPostStylus.styl'
					dest: 'KiraPostStylus.css'
				]

	return
