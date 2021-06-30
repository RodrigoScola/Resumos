// Write your function here:

function howOld(currage, year) {
  const currYear = 2021;

  if (year > currYear) {
    //future
    return `You will be ${year - currYear + currage} in the year ${year}`;
  } else if (year < currYear - currage) {
    //if the year was before the person was born
    return `The year ${year} was ${
      currYear - currage - year
    } years before you were born`;
  } else if (year >= currYear - currage) {
    // if the year was was between the curryear and year
    return `You were ${currage - (currYear - year)} in the year ${year}`;
  }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(22, 2000));
