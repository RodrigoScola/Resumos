const { evenFib } = require("../evenFib")

describe("Even Fibonacci", () => {
  const result = evenFib(2)
  it("returns a number", () => {
    expect(typeof result).toEqual("number")
  })

  it("returns An Even Value", () => {
    const isEven = result % 2 == 0
    expect(isEven).toBe(true)
  })
  it("returns 10 when the param is 10", () => {
    expect(evenFib(10)).toEqual(10)
  })
  it("returns 44 when the param is 34", () => {
    expect(evenFib(34)).toEqual(44)
  })
  it("returns 40 when the param is 60", () => {
    expect(evenFib(34)).toEqual(44)
  })
  it("returns 798 when the param is 1000", () => {
    expect(evenFib(1000)).toEqual(798)
  })
  it("returns 60696 when the param is 100000", () => {
    expect(evenFib(100000)).toEqual(60696)
  })
  it("returns 4613732 when the param is 4000000", () => {
    expect(evenFib(4000000)).toEqual(4613732)
  })
})
