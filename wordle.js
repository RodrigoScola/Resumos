const allWords = require("an-array-of-english-words")

class Word {
	constructor(size) {
		this.size = size
		this.currentWords = allWords
		this.checkLength()
	}
	guessWord() {
		const words = this.currentWords.filter(word => {
			return word.match(/[a,e,i,o,u]+/) && !word.match(/[z,x,w,y]/)
		})
		console.log(words[Math.floor(Math.random() * words.length)])
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
word.guessWord()
// word.addLetter("m")
// word.addLetter("u")
// word.addLetter("c")
// word.addLetter("t")
// word.addLetter("a")
// word.addLetter("i", "green", 2)
// word.addLetter("e", "green", 4)
// word.addLetter("r", "yellow", 0)
// word.addLetter("s", "green", 0)
// word.addLetter("n")
// word.addLetter("p")

// word.logAll()
