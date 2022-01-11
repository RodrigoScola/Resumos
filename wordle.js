const allWords = require("an-array-of-english-words")

class Word {
	constructor(length) {
		this.wordLength = length
		this.words = allWords
		this.usedLetters = []
		this.checkLength()
	}
	log() {
		console.log(this.words)
	}
	checkLength() {
		this.words = this.words.filter(word => word.length == this.wordLength)
	}
	addLetter(letter, rightSpot = false, position = -1) {}
}
const word = new Word(5)

word.log()
