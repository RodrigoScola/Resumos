const { AllAgents, jobList } = require("../agents/Agents")

class Player {
	#_info
	#_currentAgentId
	#_availableAgents
	constructor(id = 0) {
		this.#_info = {
			id: id,
			firstName: "rodrigo",
			lastName: "scola",
		}
		this.#_availableAgents = []
		this._currentAgentId = 5
	}
	get currentAgent() {
		return jobList.getById(this.#_currentAgentId).info
	}
	set currentAgent(id) {
		if (jobList.isInId(id)) this.#_currentAgentId = id
		const agent = jobList.getById(id)

		this.addNewAgent()

		return agent
	}
	get info() {
		return this.#_info
	}
	set info(newInfo) {
		return (this.#_info = {
			id: this.#_info.id,
			...this.#_info,
			...newInfo,
		})
	}
	addNewAgent(id) {}
}

module.exports = Player
