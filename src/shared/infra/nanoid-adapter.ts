import Nanoid from 'nanoid'
import UniqueEntityId from 'shared/domain/unique-entity-id'
import {IUniqueId} from '../data/unique-id'

export class UUIDAdapter implements IUniqueId {
    generateId(): string {
        return Nanoid.nanoid()
    }

    validate(id: UniqueEntityId) {
        return true // there is no validate method on this library
    }
} 