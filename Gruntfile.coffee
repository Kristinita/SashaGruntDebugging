module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-real-favicon'
	grunt.initConfig
		realFavicon:
			favicons:
				src: "kristinita-favicon.png"
				dest: "."
				options:
					iconsPath: "."
					html: ["index.html"]
					design:
						ios:
							pictureAspect: "noChange"
							assets:
								ios6AndPriorIcons: false
								ios7AndLaterIcons: false
								precomposedIcons: false
								declareOnlyDefaultIcon: true
							appName: "Kristinita\'s Search"
						desktopBrowser: {}
						windows:
							pictureAspect: "noChange"
							backgroundColor: "#ffc40d"
							onConflict: "override"
							assets:
								windows80Ie10Tile: false
								windows10Ie11EdgeTiles:
									small: false
									medium: true
									big: false
									rectangle: false
							appName: "Kristinita\'s Search"
						androidChrome:
							pictureAspect: "noChange"
							themeColor: "#ffffff"
							manifest:
								name: "Kristinita\'s Search"
								startUrl: "https://kristinita.github.io"
								display: "standalone"
								orientation: "notSet"
								onConflict: "override"
								declared: true
							assets:
								legacyIcon: false
								lowResolutionIcons: false
						safariPinnedTab:
							pictureAspect: "blackAndWhite"
							threshold: 50
							themeColor: "#d55b9a"
					settings:
						scalingAlgorithm: "Mitchell"
						errorOnImageTooSmall: false
						readmeFile: false
						htmlCodeFile: false
						usePathAsIs: false

	return
