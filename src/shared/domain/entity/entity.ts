import UniqueEntityId from "../unique-entity-id"

export default abstract class Entity<Props> {
    public readonly uniqueEntityId: UniqueEntityId

    constructor(public readonly props: Props, id?: UniqueEntityId) {
        this.uniqueEntityId = id || new UniqueEntityId()
    }

    get id(): string {
        return this.uniqueEntityId.value
    }

    toJson(): Required<{id: string} & Props> {
        return {
            id: this.id,
            ...this.props
        } as Required<{id: string} & Props>
    }
}