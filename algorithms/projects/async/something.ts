type BinaryNode<T> = {
	value: T
	next?: BinaryNode<T>
	prev?: BinaryNode<T>
}
class Queue<T> {
	head?: BinaryNode<T>
	tail?: BinaryNode<T>
	length: number
	constructor() {
		this.head = this.tail = undefined
		this.length = 0
	}
	enqueue(item: T) {
		const node = { value: item } as BinaryNode<T>
		this.length++
		if (!this.tail) {
			this.tail = this.head = node
		}
		this.tail.next = node
		this.tail = node
	}
	deque(): T | undefined {
		if (!this.head) {
			return undefined
		}
		this.length--
		const head = this.head
		this.head = this.head.next
		head.next = undefined
		if (this.length === 0) {
			this.tail = undefined
		}
		return head.value
	}
}

const walk = (items: number[], path: Queue<number>) => {
	for (let i = 0; i < items.length; i++) {
		const element = items[i]
		if (typeof element == "object") {
			walk(element[i], path)
		}
		path.enqueue(element)
	}
}

const concatAll = (arr: number[][]) => {
	let path: Queue<number> = new Queue<number>()

	for (let i = 0; i < arr.length; i++) {
		walk(arr[i], path)
	}

	return path
}
const i = concatAll([[1], [2, 3], [4, 1]])
i.deque()
console.log(i)
