const allWords = require("an-array-of-english-words")
class Word {
	constructor(size) {
		this.size = size
		this.currentWords = allWords
		this.checkLength()
	}
	checkLength() {
		this.currentWords = this.currentWords.filter(word => {
			return word.length == this.size
		})
	}
	log() {
		console.log(this.currentWords)
		return this.currentWords
	}
	logAll() {
		this.currentWords.map(value => {
			console.log(value)
		})
	}
	hasLetter(letter = "a") {
		this.currentWords.map(value => {
			if (value.includes(letter)) {
				console.log(value)
				return value
			}
			return value
		})
	}
	filterOut(letter, num = -1) {
		this.currentWords = this.currentWords.filter(word => {
			return word.split("").indexOf(letter) == num
		})
	}
	addLetter(letter, type = "gray", position) {
		if (type == "gray") {
			this.filterOut(letter)
		} else if (type == "green") {
			this.filterOut(letter, position)
		} else if (type == "yellow") {
			this.currentWords = this.currentWords.filter(word => {
				return word.split("").indexOf(letter) !== position
			})
		}
		// this.log()
	}
}
const word = new Word(5)
word.addLetter("m")
word.addLetter("u")
word.addLetter("s")
word.addLetter("i")
word.addLetter("c")
word.addLetter("a", "yellow", 0)
word.addLetter("g")
word.addLetter("e")
word.addLetter("n")
word.addLetter("t")
word.addLetter("f", "green", 0)
word.addLetter("l")
word.addLetter("o", "yellow", 2)
word.addLetter("r", "yellow", 3)
word.addLetter("a", "yellow", 4)
word.logAll()
