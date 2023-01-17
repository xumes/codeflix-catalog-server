import { deepFreeze } from "./objects"

describe('Objects', () => {
    it('should not change the type of scalar values', () => {
        const str = deepFreeze('a')
        expect(typeof str).toBe('string')

        let boolean = deepFreeze(true)
        expect(typeof boolean).toBe('boolean')

        boolean = deepFreeze(false)
        expect(typeof boolean).toBe('boolean')

        const num = deepFreeze(5)
        expect(typeof num).toBe('number')
    })

    it('should ensure object is immutable', () => {
        const obj = deepFreeze({
            prop1: 'value1',
            deep: { prop2: 'value2', prop3: new Date()}
        })

        expect( () => {
            (obj as any).prop1 = 'other_value'
        }).toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'")

        expect( () => {
            (obj as any).deep.prop2 = 'other_value'
        }).toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'")

        expect(obj.deep.prop3).toBeInstanceOf(Date)
    })
})