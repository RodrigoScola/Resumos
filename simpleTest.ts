interface IdLabel {
	id: number /* some fields */
}
interface NameLabel extends IdLabel {
	name: string /* other fields */
}
type NameOrId<T extends true | false> = T extends true ? IdLabel : NameLabel
function createLabel<T extends true | false>(idOrName: T): NameOrId<T> {
	if (idOrName == true) {
		return { name: idOrName } as unknown as NameOrId<T>
	} else {
		return { id: idOrName } as unknown as NameOrId<T>
	}
}

const label = createLabel(true)
