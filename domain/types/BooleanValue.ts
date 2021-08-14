import ValueObject from "@domain/ValueObject";

export class BooleanValueError extends Error {
    constructor(message: string) {
        super(`[BooleanValue] Error - ${message}`);
    }
}

interface BooleanValueProps {
    value: boolean;
}

export default class BooleanValue extends ValueObject<BooleanValueProps> {

    constructor(value: string | boolean, tag?: string) {
        if (!BooleanValue.isValid(value))
            throw new BooleanValueError(`Provided value is not valid. ${tag ? `<TAG ${tag}>` : ""}`);
        let newValue: boolean;
        if (typeof value === "string")
            newValue = value === "true" ? true : false;
        else
            newValue = value;
        super({ value: newValue });
    }

    private static isValid(value: string | boolean): boolean {
        if (value === undefined || value === null) return false;
        if (typeof value === "string" && ["true", "false"].indexOf(value) === -1) return false;
        return true;
    }

    get value(): boolean {
        return this.props.value;
    }

    public equals(vo?: ValueObject<BooleanValueProps>): boolean {
        if (!(vo instanceof BooleanValue)) return false;
        const obj = vo as BooleanValue;
        return this.value === obj.value;
    }
}