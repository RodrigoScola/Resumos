const { LargestPrimeFactor } = require("../LargestPrimeFactor")

describe("Largest Prime Factor", () => {
  it("should return a number", () => {
    expect(typeof LargestPrimeFactor(3)).toEqual("number")
  })
  it("should return 2 when the input is 2", () => {
    expect(LargestPrimeFactor(2)).toBe(2)
  })
  it("should return 3 when the input is 3", () => {
    expect(LargestPrimeFactor(3)).toBe(3)
  })
  it("should return 5 when the input is 5", () => {
    expect(LargestPrimeFactor(5)).toBe(5)
  })
  it("should return 7 when the input is 7", () => {
    expect(LargestPrimeFactor(7)).toBe(7)
  })
  it("should return 8 when the input is 8", () => {
    expect(LargestPrimeFactor(8)).toBe(8)
  })
  it("should return 29 when the input is 29", () => {
    expect(LargestPrimeFactor(13195)).toBe(29)
  })
  it("should return 6857 when the input is 600851475143", () => {
    expect(LargestPrimeFactor(600851475143)).toBe(6857)
  })
})
