import { UUIDAdapter } from "../infra/uuid-adapter"

export interface UniqueId {
    generateId: () => string
}

export class MyId {
    static id(): string {
        const adapter = new UUIDAdapter()
        const newId = adapter.generateId()
        return newId
    }
}