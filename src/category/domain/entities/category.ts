export type CategoryProps = {
    name: string,
    description?: string,
    isActive?: boolean,
    createdAt?: Date
}

export class Category {
    constructor(public readonly props: CategoryProps) {
        this.description = this.props.description;
        this.props.isActive = this.props.isActive ?? true;
        this.props.createdAt = this.props.createdAt ?? new Date();
    }

    get name() {
        return this.props.name
    }

    private set name(value) {
        this.props.name = value;
      }

    get description() {
        return this.props.description
    }

    private set description(value: string) {
        this.props.description = value ?? null
    }

    get isActive() {
        return this.props.isActive
    }

    private set isActive(value: boolean) {
        this.props.isActive = value ?? true
    }

    get createdAt(){
        return this.props.createdAt
    }
}