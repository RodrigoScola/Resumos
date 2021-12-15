class QuestLine {
	constructor() {
		this.quests = new LinkedList()
	}
}
class LinkedList {
	constructors() {
		this.head = null
		this.tail = null
	}
	addHead(data) {
		const newHead = new Node(data)
		const currentHead = this.head
		this.head = newHead
		if (currentHead) {
			this.head.setNextNode(currentHead)
		}
	}
	removeHead() {
		const removedHead = this.head
		if (!removedHead) return
		this.head = removedHead.next
		return this.head.data
	}
}
class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
	getNextNode() {
		return this.next
	}
	setNextNode(node) {
		if (node instanceof Node) {
			return (this.next = node)
		}
		throw new Error("must be an instance of node")
	}
}
const tower = new QuestLine()
const quest = new LinkedList()

for (let i = 0; i < 12; i++) {
	quest.addHead(i)
}
console.log(quest)
