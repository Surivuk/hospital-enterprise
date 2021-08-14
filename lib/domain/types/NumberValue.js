"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValueError = void 0;
const ValueObject_1 = __importDefault(require("../ValueObject"));
class NumberValueError extends Error {
    constructor(message) {
        super(`[NumberValue] Error - ${message}`);
    }
}
exports.NumberValueError = NumberValueError;
class NumberValue extends ValueObject_1.default {
    constructor(value, tag) {
        if (!NumberValue.isValid(value))
            throw new NumberValueError(`Provided number is not valid. ${tag ? `<TAG ${tag}>` : ""}`);
        super({ value });
    }
    static isValid(value) {
        return value !== undefined && value !== null && !isNaN(value);
    }
    get value() {
        return this.props.value;
    }
    equals(vo) {
        if (!(vo instanceof NumberValue))
            return false;
        const obj = vo;
        return this.value === obj.value;
    }
}
exports.default = NumberValue;
//# sourceMappingURL=NumberValue.js.map