import ValueObject from "@domain/ValueObject";
export declare class StringValueError extends Error {
    constructor(message: string);
}
interface StringValueProps {
    value: string;
}
export default class StringValue extends ValueObject<StringValueProps> {
    constructor(value: string, tag?: string);
    private static isValid;
    get value(): string;
    equals(vo?: ValueObject<StringValueProps>): boolean;
}
export {};
