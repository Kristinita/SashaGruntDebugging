module.exports = function (grunt) {
    grunt.initConfig({
        htmllint: {
            options: {
                force: false,
                maxerr: 5
            },
            src: [
                'SashaHtmllintDebugging.html'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-htmllint');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['htmllint']);
};
