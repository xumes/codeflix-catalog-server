import { UUIDAdapter } from "../infra/uuid-adapter"

export interface IUniqueId {
    generateId: () => string
    validate: (id: string) => boolean
}

export class UniqueId {
    static id(): string {
        const adapter = new UUIDAdapter()
        const newId = adapter.generateId()
        return newId
    }

    static validate(id: string): boolean {
        const adapter = new UUIDAdapter()
        return adapter.validate(id)
    }
}