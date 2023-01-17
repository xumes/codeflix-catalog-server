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
            undefined,
            null,
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

    it('Should convert a number to string', () => {
        const valueObjectStub = new ValueObjectStub(123)
        const result = valueObjectStub.toString()
        expect(typeof result).toBe("string")
    })

    it('Should convert a date to string', () => {
        const valueObjectStub = new ValueObjectStub(new Date())
        const result = valueObjectStub.toString()
        expect(typeof result).toBe("string")
    })

    it('Should convert an object to string', () => {
        const valueObjectStub = new ValueObjectStub({ prop1: 'value1' })
        const result = valueObjectStub.toString()
        expect(typeof result).toBe("string")
    })

    it('Should convert null to string', () => {
        const valueObjectStub = new ValueObjectStub(null)
        const result = valueObjectStub.toString()
        expect(typeof result).toBe("string")
    })

    it('Should convert boolean to string', () => {
        const valueObjectStub = new ValueObjectStub(true)
        const result = valueObjectStub.toString()
        expect(typeof result).toBe("string")
    })

    it('Should undefined boolean to string', () => {
        const valueObjectStub = new ValueObjectStub(undefined)
        const result = valueObjectStub.toString()
        expect(typeof result).toBe("string")
    })
})