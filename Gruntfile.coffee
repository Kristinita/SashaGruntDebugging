module.exports = (grunt) ->

	grunt.initConfig

		hello_world:
			world:
				name: "world!"

		notify_hooks:
			options:
				enabled: true
				success: true
				duration: 7

	grunt.loadNpmTasks('grunt-hello-world')
	grunt.loadNpmTasks('grunt-notify')

	grunt.task.run('notify_hooks')
