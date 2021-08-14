interface ValueObjectProps {
    [index: string]: any;
}

export default abstract class ValueObject<T extends ValueObjectProps> {
    protected readonly props: T;

    constructor(props: T) {
        this.props = Object.freeze(props);
    }

    public abstract equals(vo?: ValueObject<T>): boolean;
}