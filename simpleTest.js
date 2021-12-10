const recursPushArr = arr => {
	if (arr.length >= 5) {
		return arr
	}
	arr.push(1)
	return recursPushArr([...arr, arr])
}
console.log(recursPushArr([]))
