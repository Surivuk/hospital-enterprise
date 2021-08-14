"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanValueError = void 0;
const ValueObject_1 = __importDefault(require("@domain/ValueObject"));
class BooleanValueError extends Error {
    constructor(message) {
        super(`[BooleanValue] Error - ${message}`);
    }
}
exports.BooleanValueError = BooleanValueError;
class BooleanValue extends ValueObject_1.default {
    constructor(value, tag) {
        if (!BooleanValue.isValid(value))
            throw new BooleanValueError(`Provided value is not valid. ${tag ? `<TAG ${tag}>` : ""}`);
        let newValue;
        if (typeof value === "string")
            newValue = value === "true" ? true : false;
        else
            newValue = value;
        super({ value: newValue });
    }
    static isValid(value) {
        if (value === undefined || value === null)
            return false;
        if (typeof value === "string" && ["true", "false"].indexOf(value) === -1)
            return false;
        return true;
    }
    get value() {
        return this.props.value;
    }
    equals(vo) {
        if (!(vo instanceof BooleanValue))
            return false;
        const obj = vo;
        return this.value === obj.value;
    }
}
exports.default = BooleanValue;
//# sourceMappingURL=BooleanValue.js.map