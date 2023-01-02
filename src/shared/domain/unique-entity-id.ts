import { UniqueId } from "../data/unique-id";
import InvalidUniqueIdError from "../errors/invalid-unique-id.error";

export default class UniqueEntityId {
    constructor(public readonly id? :string) {
        this.id = this.id || UniqueId.id()
        this.validate()
    }

    private validate() {
        const isValid = UniqueId.validate(this.id)
        if (!isValid) {
            throw new InvalidUniqueIdError()
        }
    }
}