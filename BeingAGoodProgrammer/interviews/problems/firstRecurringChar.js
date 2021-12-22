// takes the string and returns the recurring character
// if theres more than one, return the first
// if theres none, return null

var memo = {}

const recurrChar = str => {
	for (let i = 0; i < str.length; i++) {
		const letter = str[i].toLowerCase()
		if (memo[letter]) {
			return letter
		}
		memo[letter] = letter
	}
	return null
}
console.log(recurrChar("asAdf"))
