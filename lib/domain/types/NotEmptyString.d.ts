import ValueObject from "../ValueObject";
export declare class NotEmptyStringError extends Error {
    constructor(message: string);
}
interface NotEmptyStringProps {
    value: string;
}
export default class NotEmptyString extends ValueObject<NotEmptyStringProps> {
    constructor(value: string, tag?: string);
    private static isValid;
    get value(): string;
    equals(vo?: ValueObject<NotEmptyStringProps>): boolean;
}
export {};
