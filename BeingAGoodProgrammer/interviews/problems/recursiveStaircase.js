// youre given an staircase with n steps
// you can only take 1 or 2 steps at a time
// you can also receive an obj with the numbers of steps that you can take
const staircase = (totalSteps, allowedSteps = [1, 2]) => {
	// if the first element of allowedSteps is 1
	let totalPos = 0

	// if the person just wants to go one or 2 steps
	allowedSteps.forEach(stepsAllowed => {
		totalPos += Math.round(totalSteps / stepsAllowed)
	})

	return totalPos
}

console.log(staircase(10))
