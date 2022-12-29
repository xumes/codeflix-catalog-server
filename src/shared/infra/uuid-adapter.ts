import {v4 as uuidv4} from 'uuid'
import {UniqueId} from '../data/unique-id'

export class UUIDAdapter implements UniqueId {
    generateId(): string {
        return uuidv4()
    }
} 