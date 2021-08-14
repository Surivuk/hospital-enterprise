import NumberValue from "@domain/types/NumberValue";
import UniqueEntityID from "./UniqueEntityID";

export class NumericIdError extends Error {
    constructor(message: string) {
        super(`[NumericId] Error - ${message}`);
    }
}

export default abstract class NumericId extends UniqueEntityID<number> {
    constructor(id: number | NumberValue) {
        const newId = typeof id === "number" ? new NumberValue(id) : id
        if (newId.value < 1)
            throw new NumericIdError(`NumericId must be positive value. Id: ${newId.value}`)
        super(newId.value)
    }
}