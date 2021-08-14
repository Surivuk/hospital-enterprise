import ValueObject from "@domain/ValueObject";

export class StringValueError extends Error {
    constructor(message: string) {
        super(`[StringValue] Error - ${message}`);
    }
}

interface StringValueProps {
    value: string;
}

export default class StringValue extends ValueObject<StringValueProps> {

    constructor(value: string, tag?: string) {
        if (!StringValue.isValid(value))
            throw new StringValueError(`Provided string is not valid. ${tag ? `<TAG ${tag}>` : ""}`);
        super({ value });
    }

    private static isValid(value: string): boolean {
        return value !== undefined && value !== null;
    }

    get value(): string {
        return this.props.value;
    }

    public equals(vo?: ValueObject<StringValueProps>): boolean {
        if (!(vo instanceof StringValue)) return false;
        const obj = vo as StringValue;
        return this.value === obj.value;
    }
}