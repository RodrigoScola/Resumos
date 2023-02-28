type position = {
	x?: number
	y?: number
	z?: number
}
interface MovementOptions {
	speed: number
}
interface newPosition extends position {
	z: number
	x: number
	y: number
}

const newPosition = (position?: position): newPosition => {
	return {
		x: position?.x || 0,
		y: position?.y || 0,
		z: position?.z || 0,
	}
}

class MovementController {
	private position: newPosition
	private options?: MovementOptions

	constructor(position?: position, options?: MovementOptions) {
		this.position = newPosition({ x: 0, y: 0, z: 0, ...position })
	}
	moveTo(position: position, positionOptions?: MovementOptions): position {
		this.position = newPosition({ ...this.position, ...position })
		return this.position
	}
	moveBy(position: position, positionOptions?: MovementOptions): position {
		const npos = newPosition(position)
		const oldPos = newPosition(this.position)
		this.position = newPosition({
			x: oldPos.x + npos.x,
			y: oldPos.y + npos.y,
			z: oldPos.z + npos.z,
		})
		return this.position
	}
	getPosition() {
		const x = this.position.x || 0
		const y = this.position.y || 0
		const z = this.position.z || 0
		return { x, y, z }
	}
}
class CharMovement {
	controller: MovementController

	constructor() {
		this.controller = new MovementController({ x: 0, y: 0, z: 0 })
	}
}
class Character {
	movement: CharMovement
}
class NPC {
	movement: MovementController
}

const snuffy = new Character()
const npc = new NPC()
