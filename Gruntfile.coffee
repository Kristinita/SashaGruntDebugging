module.exports = (grunt) ->

	grunt.initConfig

		hello_world:
			world:
				name: "world!"
		options:
			enabled: true
			success: true
			duration: 7
			message: "Sasha Goddess!"

	grunt.loadNpmTasks('grunt-hello-world')

	grunt.registerTask("goddess", ["checkbranch:master", "hello_world"])