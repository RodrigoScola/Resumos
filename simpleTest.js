const range = (start, end, step = 1) => {
	return {
		[Symbol.iterator]() {
			return this
		},
		next() {
			if (start < end) {
				start += step
				return {
					value: start,
					done: false,
				}
			}
			return {
				done: true,
				value: end,
			}
		},
	}
}

for (const i of range(0, 20)) {
	console.log(i)
}
