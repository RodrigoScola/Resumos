const m = new Map()

type NodeT<T> = {
	value: T
	next?: NodeT<T>
}

class StackS<T> {
	public length: number
	head?: NodeT<T>
	constructor() {
		this.head = undefined
		this.length = 0
	}
	push(item: T) {
		const node = { value: item } as NodeT<T>
		this.length++
		if (!this.head) {
			this.head = node
		}
		this.head.next = this.head
		this.head = node
	}
	pop(): T | undefined {
		if (!this.head) {
			return undefined
		}
		this.length--
		const out = this.head
		this.head = this.head.next
		return out.value
	}
	get isEmpty() {
		return this.length == 0
	}
	peek(): T | undefined {
		return this.head?.value
	}
}

const n = new StackS()

m.set("hello there", n)

// console.log(m)

const nh = m.get("hello there") as StackS<number>

nh.push(32)

console.log(m)

// console.log(m)
