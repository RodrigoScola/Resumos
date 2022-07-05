const fs = require("fs")
const lineReader = require("line-reader")

var count = 0

const passDir = (path = "") => {
	if (path.endsWith(".txt")) {
		lineReader.eachLine(path, function (line) {
			console.log(line, count++)
		})
	} else {
		fs.readdir(path, (err, data) => {
			if (data) {
				data.map((item) => {
					passDir(`${path}/${item}`)
				})
			}
		})
	}
}
const getDir = () => {
	return fs.readdirSync("./")
}
const dirs = getDir()
	.slice(3)
	.filter((item) => item !== "node_modules")
dirs.forEach((dir) => passDir(`./${dir}`))
console.log(count)
// fs.readFile("./tasks.txt", "utf-8", readDataCallback)
