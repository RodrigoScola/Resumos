type ListNode<T> = {
	value: T
	next?: ListNode<T>
}
class Q<T> {
	length: number
	head?: ListNode<T>
	tail?: ListNode<T>
	maxLen: number
	constructor(maxLen: number = 10) {
		this.head = this.tail = undefined
		this.length = 0
		this.maxLen = maxLen
	}
	enque(item: T): void {
		if (!this.canAdd) {
			throw new Error("max len")
		}
		const node = { value: item } as ListNode<T>
		this.length++
		if (!this.head) {
			this.head = this.tail = node
		}
		node.next = this.tail
		this.tail = node
	}
	dequeue(): T | undefined {
		if (!this.head) {
			return
		}
		this.length--
		const out = this.head as ListNode<T>
		this.head = this.head.next
		return out.value
	}
	peek() {
		return this.head?.value
	}
	private canAdd(): boolean {
		return this.length < this.maxLen
	}
}
