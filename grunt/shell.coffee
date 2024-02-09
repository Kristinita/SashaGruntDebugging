module.exports = (grunt) ->

	"git-upload":
		command: "npx gitu <%= templates.CommitMessage %>"
