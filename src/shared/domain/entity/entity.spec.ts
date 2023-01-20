import UniqueEntityId from "../unique-entity-id";
import Entity from "./entity";

class EntityStub extends Entity<{prop1: string, prop2: number}>{}

describe('Entity', () => {
    it('should set props and id on success', () => {
        const myProps = {prop1: "any", prop2: 2}
        const entity = new EntityStub(myProps)

        expect(entity.props).toStrictEqual(myProps)
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        expect(entity.id).not.toBeNull()
    })

    it('should accept a valid id', () => {
        const myProps = {prop1: "any", prop2: 2}
        const uniqueEntityId = new UniqueEntityId()
        
        const entity = new EntityStub(myProps, uniqueEntityId)

        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        expect(entity.id).toBe(uniqueEntityId.value)
    })

    it('should convert the Entity to a Json', () => {
        const myProps = {prop1: "any", prop2: 2}
        const uniqueEntityId = new UniqueEntityId()
        
        const entity = new EntityStub(myProps, uniqueEntityId)

        expect(entity.toJson()).toStrictEqual({
            id: uniqueEntityId.value,
            ...myProps
        })
    })
 })