import ValueObject from "@domain/ValueObject";

export class NotEmptyStringError extends Error {
    constructor(message: string) {
        super(`[NotEmptyString] Error - ${message}`);
    }
}

interface NotEmptyStringProps {
    value: string;
}

export default class NotEmptyString extends ValueObject<NotEmptyStringProps> {

    constructor(value: string, tag?: string) {
        if (!NotEmptyString.isValid(value))
            throw new NotEmptyStringError(`Provided string is not valid. ${tag ? `<TAG ${tag}>` : ""}`);
        super({ value });
    }

    private static isValid(value: string): boolean {
        return value !== undefined && value !== null && value.length > 0;
    }

    get value(): string {
        return this.props.value;
    }

    public equals(vo?: ValueObject<NotEmptyStringProps>): boolean {
        if (!(vo instanceof NotEmptyString)) return false;
        const obj = vo as NotEmptyString;
        return this.value === obj.value;
    }
}