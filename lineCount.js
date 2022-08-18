const fs = require("fs")
const lineReader = require("line-reader")
const util = require("util")
var count = 0
var chars = 0

const passDir = (path = "") => {
	if (path.split("/").slice(-1)[0].includes(".")) {
		lineReader.eachLine(path, function (line) {
			const char = line.split(" ").length
			console.log(
				line,
				`This resume has ${count++} lines and ${(chars += char)} words, it would take ${Math.ceil(
					chars / 60
				)} minutes or ${Math.ceil(chars / 60 / 60)} hours or ${Math.ceil(
					chars / 60 / 60 / 24
				)} days to rewrite it all`
			)
			if (line) {
				// fs.appendFile("total.txt", line + "\n", (err) => console.log(err))
			}
			return null
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
	return fs
		.readdirSync("./")
		.slice(3)
		.filter((item) => item !== "node_modules")
}
const dirs = getDir()
// dirs.map((dir) => passDir(`./${dir}`))
for (let i = 0; i < dirs.length; i++) {
	passDir(`./${dirs[i]}`)
}
console.log(`This resume has ${count} and ${chars} words, it would take ${chars / 60} minutes to rewrite`)
// fs.readFile("./tasks.txt", "utf-8", readDataCallback)
