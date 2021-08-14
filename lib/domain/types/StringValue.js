"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringValueError = void 0;
const ValueObject_1 = __importDefault(require("@domain/ValueObject"));
class StringValueError extends Error {
    constructor(message) {
        super(`[StringValue] Error - ${message}`);
    }
}
exports.StringValueError = StringValueError;
class StringValue extends ValueObject_1.default {
    constructor(value, tag) {
        if (!StringValue.isValid(value))
            throw new StringValueError(`Provided string is not valid. ${tag ? `<TAG ${tag}>` : ""}`);
        super({ value });
    }
    static isValid(value) {
        return value !== undefined && value !== null;
    }
    get value() {
        return this.props.value;
    }
    equals(vo) {
        if (!(vo instanceof StringValue))
            return false;
        const obj = vo;
        return this.value === obj.value;
    }
}
exports.default = StringValue;
//# sourceMappingURL=StringValue.js.map