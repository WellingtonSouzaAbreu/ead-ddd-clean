import { v4 as uuid, validate } from 'uuid'

export class Id {
    readonly value: string

    constructor(value?: string) {
        this.value = value ?? uuid()

        if (!validate(this.value)) throw new Error('Invalid ID')
    }

    isEqual(id: Id): boolean {
        return this.value === id.value
    }

    different(id: Id): boolean {
        return !this.isEqual(id)
    }
}