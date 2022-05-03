const getSum = (a, b) => {
	let lowest = a < b ? a : b
	let highest = a < b ? b : a
	let sum = 0

	for (let i = lowest; i <= highest; i++) {
		sum += i
	}

	return sum
}
console.log(getSum(-1, 5))
