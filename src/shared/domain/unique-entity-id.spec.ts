import {UniqueId} from "../data/unique-id"
import InvalidUniqueIdError from "../errors/invalid-unique-id.error"
import UniqueEntityId from "./unique-entity-id"

describe('Unique Entity Id', () => {
    it('should throw InvalidUniqueIdError when the id is invalid', () => {
        const invalidId = '12345'
        jest.spyOn(UniqueId, 'validate').mockReturnValueOnce(false)

        expect(() => {
            new UniqueEntityId(invalidId)
        }).toThrow( new InvalidUniqueIdError())
    })

    it('should create a valid id on success', () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
        const id = new UniqueEntityId()

        expect(id).toBeDefined()
        expect(validateSpy).toHaveBeenCalled()
    })
})