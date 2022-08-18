const { Agent } = require("./Agent")
class AllAgents {
	#_allData
	constructor() {
		this.#_allData = jobList.data
		this.roles = ["Controller", "Sentinel", "Initiator", "Duelist"]
	}
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
		return jobList.data.map((v) => v.info.id)
	},
	isInId: (id) => {
		return jobList.getIds().indexOf(id) !== -1
	},
	getById: (id) => {
		if (!jobList.isInId(id)) throw new Error("has to be in the id")
		console.log(jobList.data.filter((item) => item.info.id == id))
		return jobList.data.filter((item) => item.info.id == id)[0]
	},
}

module.exports = {
	jobList,
	AllAgents,
}
