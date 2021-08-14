import NumberValue from "@domain/types/NumberValue";
import UniqueEntityID from "./UniqueEntityID";
export declare class NumericIdError extends Error {
    constructor(message: string);
}
export default abstract class NumericId extends UniqueEntityID<number> {
    constructor(id: number | NumberValue);
}
