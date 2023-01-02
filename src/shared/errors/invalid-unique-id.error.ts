export default class InvalidUniqueIdError extends Error {
    constructor(message?: string){
        super(message || 'ID must be valid')
        this.name = 'InvalidUniqueIdError'
    }
}