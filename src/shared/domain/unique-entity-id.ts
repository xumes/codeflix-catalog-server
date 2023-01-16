import { UniqueId } from "../data/unique-id";
import InvalidUniqueIdError from "../errors/invalid-unique-id.error";
import ValueObject from "./value-object";

export default class UniqueEntityId extends ValueObject<string> {
    constructor(readonly id? :string) {
        super(id || UniqueId.id())
        this.validate()
    }

    private validate() {
        const isValid = UniqueId.validate(this.value)
        if (!isValid) {
            throw new InvalidUniqueIdError()
        }
    }
}