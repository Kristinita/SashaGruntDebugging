module.exports =

	"git-upload":
		command: "npx gitu <%= templates.CommitMessage %>"

	xmllint:
		command: "fd \"(chocolatey.config|xml)$\" . output --exec xmllint --noout --pedantic"
