module.exports =

	"git-upload":
		command: "npx gitu <%= templates.CommitMessage %>"

	xmllint:
		command: "fd \"(chocolatey.config|xml)$\" . output --exec echo \\; --exec xmllint --noout --pedantic"
