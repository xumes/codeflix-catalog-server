import { Category } from "./category"

describe('Category', () => { 
    it('should create an instance of Category when all props are informed', () => {
        const createdAt = new Date()
        const props = {
            name: 'Movie',
            description: 'this is a movie',
            isActive: true,
            created_at: createdAt
        }

        const category = new Category(props)

        expect(category).toBeInstanceOf(Category)
        expect(category.name).toBe('Movie')
        expect(category.description).toBe('this is a movie')
        expect(category.isActive).toBeTruthy()
        expect(category.createdAt).toStrictEqual(createdAt)
        // OR we can test the object
        expect(category.props).toStrictEqual(props)
    })

    it('should create an instance of Category when only the name is informed', () => {
        const category = new Category({name: 'Movie'})

        expect(category).toBeInstanceOf(Category)
        expect(category.name).toBe('Movie')
        expect(category.description).toBeNull()
        expect(category.isActive).toBeTruthy()
        expect(category.createdAt).toBeDefined()
        expect(category.createdAt).toBeInstanceOf(Date)
    })

    it('should create an instance of Category when other props are informed', () => {
        const props = {
            name: 'Movie',
            description: 'another movie',
            isActive: false,
        }

        const category = new Category(props)

        expect(category).toBeInstanceOf(Category)
        expect(category.name).toBe('Movie')
        expect(category.description).toBe(props.description)
        expect(category.isActive).toBeFalsy()
        expect(category.createdAt).toBeDefined()
        expect(category.createdAt).toBeInstanceOf(Date)
    })
 })