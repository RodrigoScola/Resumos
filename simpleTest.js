class Streamer {
	#_name = ""
	constructor(name) {
		this.#_name = name
	}
	get name() {
		return this.#_name
	}
}
class Streamers {
	#_streamers = []

	get streamers() {
		return this.#_streamers
	}
	addStreamer(streamerName = "") {
		const s = new Streamer(streamerName)
		if (!this.#_streamers[s.name]) {
			this.streamers.push({
				[s.name]: s,
			})
		}
	}
	hasStreamer(streamerName) {
		if (this.#_streamers[streamerName] !== undefined) {
			return false
		}
		return true
	}
	removeStreamer(streamerName) {
		if (this.hasStreamer(streamerName)) {
			this.#_streamers = this.streamers.filter((item) => {
				const name = Object.keys(item)

				return name != streamerName
			})
			return true
		}
		return false
	}
	constructor(names = []) {
		names.map((v) => {
			this.addStreamer(v)
		})
	}
}
const s = new Streamers(["alan", "ninja", "mrbeast"])
// console.log(s.streamers)
s.removeStreamer("alan")
console.log(s.streamers)
