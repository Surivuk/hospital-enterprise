"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotEmptyStringError = void 0;
const ValueObject_1 = __importDefault(require("@domain/ValueObject"));
class NotEmptyStringError extends Error {
    constructor(message) {
        super(`[NotEmptyString] Error - ${message}`);
    }
}
exports.NotEmptyStringError = NotEmptyStringError;
class NotEmptyString extends ValueObject_1.default {
    constructor(value, tag) {
        if (!NotEmptyString.isValid(value))
            throw new NotEmptyStringError(`Provided string is not valid. ${tag ? `<TAG ${tag}>` : ""}`);
        super({ value });
    }
    static isValid(value) {
        return value !== undefined && value !== null && value.length > 0;
    }
    get value() {
        return this.props.value;
    }
    equals(vo) {
        if (!(vo instanceof NotEmptyString))
            return false;
        const obj = vo;
        return this.value === obj.value;
    }
}
exports.default = NotEmptyString;
//# sourceMappingURL=NotEmptyString.js.map