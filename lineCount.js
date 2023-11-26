const fs = require("fs")
const lineReader = require("line-reader")
const util = require("util")
var count = 0
var chars = 0

const wpm = (chars, typeSpeed = 86) => {
  return Math.ceil(chars / typeSpeed)
}
const total = []

const bannedFiles = [
  "package.json",
  ".env.local",
  "next.config.js",
  "node_modules",
  ".vscode",
  "base_data",
  "rs",
  "base_data.json",
  "basedata.json",
  "tsconfig.json",
  "word_count.csv",
  "redundant.txt",
  "package-lock.json",
  ".gitignore",
  "package-lock.json",
  "total.txt",
  "public",
  "image",
  "dist",
  "example_data",
  ".gitconfig",
  ".next",
  "nodemon.json",
]

let paths = []
const passDir = (path = "") => {
  const filename = path.split("/").slice(-1)[0]

  if (
    filename.includes(".") &&
    !filename.endsWith("csv") &&
    !filename.startsWith(".") &&
    !bannedFiles.includes(filename)
  ) {
    console.log(path)
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

const getDir = (dir = "") => {
  return fs
    .readdirSync(dir)
    .slice(3)
    .filter((item) => !bannedFiles.includes(item))
}
const countWords = (dir) => {
  let basePath = dir
  const dirs = getDir(dir)
  console.log(dirs)
  dirs.forEach((folder) => {
    passDir(`${basePath}/${folder}`)
  })
}

countWords(".")
