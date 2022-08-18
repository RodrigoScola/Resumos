const { isNumber, isString, clamp, max, get, filter } = require("lodash")
const maxLevel = 10
/**
 *
 *
 * @class Agent
 */
class Agent {
	#_info
	/**
	 * Creates an instance of Agent.
	 * @param {*} { id = 0, name = "chamber", level = 1, role = "sentinel" }
	 * @memberof Agent
	 */
	constructor({ id = 0, name = "chamber", level = 1, role = "sentinel" }) {
		this.#_info = {
			id,
			name,
			level,
			role,
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

const jobList = {
	data: [
		new Agent({
			id: 0,
			level: 0,
			name: "Brimstone",
			role: "Controller",
		}),
		new Agent({
			id: 1,
			level: 1,
			name: "Phoenix",
			role: "Duelist",
		}),
		new Agent({
			id: 2,
			name: "Sage",
			role: "Sentinel",
		}),
		new Agent({
			id: 3,
			name: "Sova",
			role: "initiator",
		}),
		new Agent({
			id: 4,
			name: "Viper",
			role: "Controller",
		}),
		new Agent({
			id: 5,
			name: "Chamber",
			role: "Sentinel",
		}),
	],
	getIds: () => {
		return jobList.data.reduce((curr, next) => {
			return curr.push(next.info.id)
		}, [])
	},
	isInId: (id) => {
		return jobList.getIds().indexOf(id) == -1
	},
	getById: (id) => {
		if (!jobList.isInId(id)) throw new Error("has to be in the id")
		return jobList.data.filter((item) => item.info.id == id)[0]
	},
}

class AllAgents {
	#_allData
	constructor() {
		this.#_allData = jobList.data
		this.roles = ["Controller", "Sentinel", "Initiator", "Duelist"]
	}

	/**
	 *
	 *
	 * @param {string} [role=""]
	 * @return {*}
	 * @memberof AllAgents
	 */
	checkRole(role = "") {
		if (roles.indexOf(role) !== -1) return true
		return false
	}

	getByRole(role = "") {
		if (this.checkRole(role)) {
			return this.#_allData.filter((agent) => agent.info.role == role)
		}
		throw new Error("has to be a valid role, one of these" + this.roles.join(", "))
	}
}
/**
 *
 *
 * @class Player
 */
class Player {
	#_info

	/**
	 * Creates an instance of Player.
	 * @param {number} [id=0]
	 * @memberof Player
	 */
	constructor(id = 0) {
		this.#_info = {
			id: id,
			firstName: "rodrigo",
			lastName: "scola",
		}
		this._currentAgentId = 5
	}
	/**
	 *
	 *
	 * @readonly
	 * @memberof Player
	 */
	get currentAgent() {
		return getByName(this._currentAgentId)
	}
	setCurrentAgent(id) {}
	get info() {
		return this.#_info
	}

	/**
	 *
	 *
	 * @memberof Player
	 */
	set info(newInfo) {
		return (this.#_info = {
			id: this.#_info.id,
			...this.#_info,
			...newInfo,
		})
	}
}
const char = new Player()
const chamber = getByName("Chamber")
console.log(chamber)

const brim = new Agent()
