module.exports = (grunt) ->


	kiraLatestCommitHash = require("node:child_process").execSync("git rev-parse --short HEAD").toString().trim()

	console.log kiraLatestCommitHash

	grunt.loadNpmTasks "grunt-shell-spawn"

	grunt.initConfig

		templates:
			github:
				commithash: kiraLatestCommitHash
				outputRepository: "KristinitaTests.github.io"
				sourcesRepository: "SashaGruntDebugging"
				username: "Kristinita"

		shell:

			"gh-pages":
				command: "npx gh-pages --branch main --dist output --dotfiles
							--message
							\"Changes added with the commit
							<%= templates.github.username %>/<%= templates.github.sourcesRepository %>@<%= templates.github.commithash %>
							successfully built, checked and tested on Travis CI and deployed to this repository.\"
							--nojekyll
							--repo https://github.com/<%= templates.github.username %>/<%= templates.github.outputRepository %>"
