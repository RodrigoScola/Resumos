const { isNumber, isString, clamp, max, get } = require("lodash")
const maxLevel = 10
class Agent {
	#_info
	constructor(curr = { id: 0, name: "chamber", level: 1, role: "sentinel" }) {
		this.#_info = {
			...curr,
		}
	}
	get info() {
		return this.#_info
	}
	get level() {
		return this.#_info.level
	}
	set level(newLevel) {
		const clamped = clamp(newLevel, 0, maxLevel)
		return (this.#_info.level = clamped)
	}
	changelevel(amount = 1) {
		const clamped = clamp(this.#_info.level - amount, 0, maxLevel)
		return (this.#_info.level = clamped)
	}
	set info(newInfo) {
		this.#_info = {
			...this.#_info,
			...newInfo,
			id: this.#_info.id,
		}
	}
}
module.exports = {
	Agent,
}
