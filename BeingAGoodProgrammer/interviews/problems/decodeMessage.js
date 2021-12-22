// you receive a mapping where each letter is a number
// a == 1, b == 2, ... z == 26
// if you are given a message, and return how many messages could have been the original one
// data = 12, could be a,b | l;

const numWays = (num = "1") => {
	num = num.split("")
	if (num[0] == "0") return 0
	let count = 0

	for (let i = 0; i < num.length; i++) {
		const currNum = num[i]
		const prevNum = num[i - 1]
		if (currNum == "0") {
			count++
			continue
		}
		if (prevNum == "1") {
			count++
		} else if (prevNum == "2") {
			if (Number(currNum) <= 6) {
				count++
			}
		}
		count++
	}

	return count
}
console.log(numWays("4"))
