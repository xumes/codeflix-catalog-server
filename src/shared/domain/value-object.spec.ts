import ValueObject from "./value-object";

class ValueObjectStub extends ValueObject{

}

describe('Value Object', () => {
    it('Should set value on success', () => {
        let valueObjectStub = new ValueObjectStub('string value')
        expect(valueObjectStub.value).toBe('string value')

        valueObjectStub = new ValueObjectStub({ prop1: 'value1' })
        expect(valueObjectStub.value).toStrictEqual({prop1: 'value1'})
    })
})