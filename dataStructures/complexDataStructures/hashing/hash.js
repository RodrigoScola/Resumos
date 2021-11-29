class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
	changeData(newData) {
		this.data = newData
	}
	setNext(node) {
		this.next = node
		return node
	}

	getNextNode() {
		return this.next
	}
}
class LinkedList {
	constructor(size = Infinity) {
		this.size = size
		this.head = null
		this.tail = null
	}
	addHead(data) {
		const newHead = new Node(data)
		const currenthead = this.head
		this.head = newHead
		if (currenthead) {
			this.head.setNext(currenthead)
		}
	}
	addTail(data) {
		let tail = this.head
		const nodeTail = new Node(data)
		if (!tail) {
			this.head = nodeTail
		} else {
			while (tail.getNextNode() !== null) {
				tail = tail.getNextNode()
			}
			tail.setNext(nodeTail)
		}
	}
	removehead() {
		const removedHead = this.head
		if (!removedHead) return
		this.head = removedHead.getNextNode()
		return this.head.data
	}
	printList() {
		let head = this.head
		while (head.next != null) {
			console.log(head)
			head = head.setNext(head.next)
		}
	}
}
class HashMap {
	constructor(size = 0) {
		this.HashMap = new Array(size).fill(null).map(() => new LinkedList())
	}
	hash(key = "asdfasdf") {
		let hashCode = 0
		for (let i = 0; i < key.length; i++) {
			hashCode += hashCode + key.charCodeAt(i)
		}
		return hashCode % this.HashMap.length
	}
	arrMap(key) {
		const hashedKey = this.hash(key)
		const arrayIdx = this.HashMap[hashedKey]
		return arrayIdx
	}
	assign(key, value) {
		const arrayIndex = this.hash(key)
		const linkedList = this.HashMap[arrayIndex]
		if (linkedList.head === null) {
			linkedList.addHead({ key, value })
			return
		}
		let current = linkedList.head
		while (current) {
			if (current.data.key == key) {
				current.data = { key, value }
			}
			if (!current.next) {
				current.next = new Node({ key, value })
				break
			}
			current = current.next
		}
	}
	retrieve(key) {
		let current = this.arrMap(key).head
		while (current) {
			if (current.data.key === key) {
				return current.data.value
			}
			current = current.getNextNode()
		}
		return null
	}
	delete(key) {
		const arrIndex = this.hash(key)
		const linkedList = this.HashMap[arrIndex]

		while (linkedList.next != null) {
			if (linkedList.data.key == key) {
				//&& linkedList.data.value == value) {
				linkedList = linkedList.removehead()
				break
			}
			linkedList.removehead()
		}
		console.log(linkedList)
	}
}
const had = new HashMap(6)
had.assign("this has value", "this is the value")
console.log(had.delete("this has value", "this is the value"))
console.log(had.delete("this has value", "this is the value"))
console.log(had.delete("this has value", "this is the value"))
