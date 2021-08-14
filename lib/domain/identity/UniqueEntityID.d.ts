export default abstract class UniqueEntityID<T> {
    private _value;
    constructor(_value: T);
    get value(): T;
    equals(id: UniqueEntityID<T>): boolean;
}
