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

    it('Should convert values to string.', () => {
        const listOfValues = [
            "",
            0,
            5,
            true,
            false,
            new Date(),
            { prop1: 'value1'}
        ]

        listOfValues.forEach(item => {
            let valueObjectStub = new ValueObjectStub(item)
            let result = valueObjectStub.toString()
            expect(typeof result).toBe("string")
        })
    })

    it('should ensure our value object is immutable', () => {
        const obj = {
            prop1: 'value1',
            deep: { prop2: 'value2', prop3: new Date()}
        }
        const stub = new ValueObjectStub(obj)

        expect(() => {
            (stub as any).value.prop1 = 'another_value'
        }).toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'")

        expect( () => {
            (stub as any).value.deep.prop2 = 'other_value'
        }).toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'")

        expect(stub.value.deep.prop3).toBeInstanceOf(Date)
    })
})