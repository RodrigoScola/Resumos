const fs = require("fs")
const path = require("path")
let output = {}

const walk = dir => {
	return new Promise((resolve, reject) => {
		output[dir] = {
			files: 0,
			lines: 0,
			path: "",
		}

		fs.readdir(dir, (err, list) => {
			let pending = list.length
			if (!pending) {
				return resolve(output)
			}
			list.forEach(file => {
				file = path.resolve(dir, file)

				fs.stat(file, (err, stat) => {
					if (stat && stat.isDirectory()) {
						walk(file).then(res => {
							if (!--pending) {
								resolve(output)
							}
						})
					} else {
						let lc = 0

						fs.createReadStream(file)
							.on("data", buffer => {
								buffer.forEach(chunk => {
									if (chunk === 10) {
										lc++
									}
								})
							})
							.on("end", () => {
								output[dir].files++
								output[dir].lines += lc
								output[dir].path = dir

								if (!--pending) {
									resolve(output)
								}
							})
					}
				})
			})
		})
	})
}

walk(".").then(console.log)
