import {v4 as uuidv4, validate as uuidValidate} from 'uuid'
import {IUniqueId} from '../data/unique-id'

export class UUIDAdapter implements IUniqueId {
    generateId(): string {
        return uuidv4()
    }

    validate(id: string) {
        return uuidValidate(id)
    }
} 