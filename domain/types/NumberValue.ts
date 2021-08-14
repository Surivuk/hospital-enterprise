import ValueObject from "@domain/ValueObject";

export class NumberValueError extends Error {
    constructor(message: string) {
        super(`[NumberValue] Error - ${message}`);
    }
}

interface NumberValueProps {
    value: number;
}

export default class NumberValue extends ValueObject<NumberValueProps> {

    constructor(value: number, tag?: string) {
        if (!NumberValue.isValid(value))
            throw new NumberValueError(`Provided number is not valid. ${tag ? `<TAG ${tag}>` : ""}`);
        super({ value });
    }

    private static isValid(value: number): boolean {
        return value !== undefined && value !== null && !isNaN(value);
    }

    get value(): number {
        return this.props.value;
    }

    public equals(vo?: ValueObject<NumberValueProps>): boolean {
        if (!(vo instanceof NumberValue)) return false;
        const obj = vo as NumberValue;
        return this.value === obj.value;
    }
}