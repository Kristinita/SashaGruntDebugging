module.exports = function (grunt) {
    grunt.initConfig({
        htmllint: {
            options: {
                force: true,
                opts: {
                maxerr: 5
            }
            },
            src: [
                'SashaHtmllintDebugging.html'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-htmllint');

    grunt.registerTask('default', ['htmllint']);
};
