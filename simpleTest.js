function People() {
	this.data = []
	this.pairs = []
	this.push = (item) => {
		this.data.push(item)
	}
	this.filter = (type) => {
		return this.data.filter((value) => value.gender == type)
	}
	this.sortDT = () => {
		return this.data.sort((a, b) => a.dt - b.dt)
	}
	this.pair = () => {
		this.data = this.sortDT()
		for (let i = 0; i < this.data.length; i += 2) {
			this.pairs[i] = [this.data[i], this.data[i + 1]]
		}
		return this.pairs
	}
}
function Person() {
	data = {}
	this.generateData = () => {
		const height = 1 + Math.random()
		data = {
			height,
			gender: Math.random() > 0.9 ? "femeale" : "male",
			dt: height / 2.5,
		}
		return data
	}
}
let people = new People()
for (let i = 0; i <= 5000; i++) {
	people.push(new Person().generateData())
}
people.filter("femeale")
people.sortDT()
console.log(people.data)
people.pair()
