import ValueObject from "@domain/ValueObject";
export declare class NumberValueError extends Error {
    constructor(message: string);
}
interface NumberValueProps {
    value: number;
}
export default class NumberValue extends ValueObject<NumberValueProps> {
    constructor(value: number, tag?: string);
    private static isValid;
    get value(): number;
    equals(vo?: ValueObject<NumberValueProps>): boolean;
}
export {};
