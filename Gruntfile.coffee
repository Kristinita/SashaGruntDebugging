module.exports = (grunt) ->

	kiraDotenvxObject = require "@dotenvx/dotenvx"

	kiraDotenvxObject.config
		path: [
			".env"
			".env.credentials"
		]
		strict: true

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
			tokens:
				kiraTokenGitHubForGhPages: kiraDotenvxObject.get "TOKEN_GITHUB_FOR_GH_PAGES"


		shell:

			"gh-pages":
				command: "npx gh-pages --branch main --dist output --dotfiles
							--message
							\"Changes added with the commit
							<%= templates.github.username %>/<%= templates.github.sourcesRepository %>@<%= templates.github.commithash %>
							successfully built, checked and tested on Travis CI and deployed to this repository.\"
							--nojekyll --repo
							https://git:<%= templates.tokens.kiraTokenGitHubForGhPages
							%>@github.com/<%= templates.github.username %>/<%= templates.github.outputRepository %>.git"
							# --repo https://github.com/<%= templates.github.username %>/<%= templates.github.outputRepository %>"
