import ValueObject from "../ValueObject";
export declare class BooleanValueError extends Error {
    constructor(message: string);
}
interface BooleanValueProps {
    value: boolean;
}
export default class BooleanValue extends ValueObject<BooleanValueProps> {
    constructor(value: string | boolean, tag?: string);
    private static isValid;
    get value(): boolean;
    equals(vo?: ValueObject<BooleanValueProps>): boolean;
}
export {};
