module.exports = (grunt) ->

    grunt.loadNpmTasks('grunt-jsbeautifier')
    grunt.initConfig
        jsbeautifier:
            options:
                html:
                    indentWithTabs: true
                    endWithNewline: true
            files: ['SashaJsBeautifyTabs.html']
