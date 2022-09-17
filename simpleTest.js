class TreeNode {
	#_next
	constructor(data) {
		this.data = data
		this.next = null
	}
}
class List {
	#_len

	constructor(
		options = {
			maxLen: null,
		}
	) {
		this.head = null
		this.#_len = 0
		this.maxLen = options.maxLen
	}
	checkLen() {
		if (this.#_len < this.maxLen) return true
		return false
	}
	get len() {
		return this.#_len
	}
	set len(newlen) {
		if (this.maxLen == null || this.#_len < this.maxLen) return (this.#_len = newlen)
	}
	getElements(callabck = null) {
		let arr = []
		let curr = this.head
		while (curr) {
			arr.push(curr.data)

			curr = curr.next
		}
		if (typeof callabck == "function") {
			return callabck(arr)
		}
		return arr
	}

	changeAt(index, newVal) {
		let ind = 0,
			curr = this.head
		if (index >= this.#_len || index < 0) return null
		while (ind !== index) {
			ind++
			curr = curr.next
		}
		curr.data = newVal
	}
	addHead(element) {
		const node = new TreeNode(element)
		if (!this.checkLen()) return null
		if (!this.head) {
			this.#_len++
			return (this.head = node)
		}
		let current = this.head
		while (current.next) {
			current = current.next
		}
		current.next = node
		return (this.len += 1)
	}
	removeHead(element) {
		if (this.head.data == element) {
			this.#_len--
			return (this.head = this.head.next)
		}
		let previous = this.head
		while (previous) {
			let current = previous.next
			if (current) {
				if (current.data == element) {
					previous.next = current.next
				}
			}
			previous = current
		}
		this.#_len--
	}
	indexOf(element) {
		let index = -1,
			found = false,
			current = this.head
		while (!found && current) {
			index++
			if (current.data == element) {
				found = true
			} else {
				current = current.next
			}
		}
		return found == false ? -1 : index
	}
	elementAt(index) {
		let curr = this.head,
			curIn = 0
		if (index > this.#_len || index < 0) return undefined
		while (curIn !== index) {
			curIn++
			curr = curr.next
		}
		return curr.element
	}
	removeAt = function (index) {
		if (index <= 0 || index >= this.len) {
			return null
		}
		let deletedNode = this.head
		if (index == 0) {
			this.head = null
		} else {
			let currentNode = this.head
			let currentIndex = 0
			while (currentIndex < index - 1) {
				currentNode = currentNode.next
				currentIndex++
			}
			deletedNode = currentNode.next
			currentNode.next = deletedNode.next
		}
		this.len--
		return deletedNode.element
	}
	addAt = (index, element) => {
		if (index < 0 || index >= this.#_len || !this.checkLen()) return false
		let node = this.head
		if (index > 0) {
			let i = 0
			while (i + 1 !== index) {
				node = node.next
				i++
			}
		}
		const newNode = new TreeNode(element)
		newNode.next = node.next
		if (index === 0) {
			this.head = newNode
		} else {
			node.next = newNode
		}
		this.#_len++
	}
	log() {
		console.log(this.getElements())
	}
}
const l = new List({
	maxLen: 6,
})
// when the user clicks to add new row
l.addHead("")

// when the user types in one of them
l.changeAt(2, "this is the new compoentn")
// when the user deletes one of them
l.removeAt(1)
// if the user tries to remove the first one
l.removeAt(0) // you cant

// l.log()

console.log(
	l.getElements((arr) => {
		return arr.map((v, i) => {
			return {
				id: i,
				value: v,
			}
		})
	})
)
Array.prototype.toList = function () {
	let list = new List()

	this.map((v) => {
		list.addHead(v)
	})
	return list
}
function combinations(possibleNumbers, total) {
	let combinations = []
	possibleNumbers.map((num) => {
		return num % 2 == 0
			? possibleNumbers.map((num2) => {
					return possibleNumbers.map((num3) => {
						const nset = new Set([num, num2, num3])
						const sums = [...nset].reduce((curr,n) => curr + n) == total
						if (sums) {
							combinations.push([...nset])
						}
						nset
						
					})
			  })
			: null
	})
	console.log(combinations)
	return true
}
console.log(combinations([1, 2, 3, 4, 5, 6, 7], 12))