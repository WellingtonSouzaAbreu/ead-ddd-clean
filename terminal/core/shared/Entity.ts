import { Id } from "./Id"

export interface EntityProps {
    id?: string
}

export abstract class Entity<Type, Props extends EntityProps> {
    readonly id: Id
    readonly props: Props

    constructor(props: Props) {
        this.id = new Id(props.id)
        this.props = { ...props, id: this.id }
    }

    isEqual(entity: Entity<Type, Props>): boolean {
        return entity.id.isEqual(this.id)
    }

    isDifferent(entity: Entity<Type, Props>): boolean {
        return !this.isEqual(entity)
    }

    clone(newProps: Props, ...args: any[]): Entity<Type, Props> {
        return new (
            this.constructor as any
        )(
            { ...this.props, ...newProps },
            ...args
        )
    }
}