const fiboEvenSum = (n) => {
  let res = 0
  const walk = (first, second, total) => {
    if (second > n) return
    res += second % 2 === 0 ? second : 0
    total++
    walk(second, second + first, total)
  }
  walk(0, 1, 2)
  return res
}
console.log(fiboEvenSum(60))
module.exports = {
  evenFib: fiboEvenSum,
}
