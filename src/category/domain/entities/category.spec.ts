import { UniqueId } from "../../../shared/data/unique-id"
import { Category } from "./category"

describe('Category', () => { 
    it('should create an instance of Category when all props are informed', () => {
        const createdAt = new Date()
        const props = {
            name: 'Movie',
            description: 'this is a movie',
            isActive: true,
            createdAt
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

    it('should update category when data changes', () => {
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

        category['name'] = 'new movie'
        expect(category.name).toBe('new movie')

        category['description'] = 'new description'
        expect(category.description).toBe('new description')

        category['description'] = null
        expect(category.description).toBeNull()

        category['isActive'] = true
        expect(category.isActive).toBeTruthy()

        category['isActive'] = null
        expect(category.isActive).toBeTruthy()
    })

    it('should use my id when I inform it', () => {
        const validId = UniqueId.id()
        const category = new Category({name: 'Movie'}, validId as any)
        
        expect(category.uniqueEntityId).toBe(validId)
    })

    it('should create an id on success', () => {
        const category = new Category({name: 'Movie'})
        
        expect(category.id).toBeDefined()
    })

    it('should create an id when I do not provide an id', () => {
        const category = new Category({name: 'Movie'}, null)
        
        expect(category.id).toBeDefined()
    })
 })