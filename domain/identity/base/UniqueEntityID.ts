export default abstract class UniqueEntityID<T> {
    constructor(private _value: T) {}

    get value(): T {
        return this._value;
    }

    public equals(id: UniqueEntityID<T>): boolean {
        return this._value === id._value;
    }
}