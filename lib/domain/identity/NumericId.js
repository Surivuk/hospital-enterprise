"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumericIdError = void 0;
const NumberValue_1 = __importDefault(require("@domain/types/NumberValue"));
const UniqueEntityID_1 = __importDefault(require("./UniqueEntityID"));
class NumericIdError extends Error {
    constructor(message) {
        super(`[NumericId] Error - ${message}`);
    }
}
exports.NumericIdError = NumericIdError;
class NumericId extends UniqueEntityID_1.default {
    constructor(id) {
        const newId = typeof id === "number" ? new NumberValue_1.default(id) : id;
        if (newId.value < 1)
            throw new NumericIdError(`NumericId must be positive value. Id: ${newId.value}`);
        super(newId.value);
    }
}
exports.default = NumericId;
//# sourceMappingURL=NumericId.js.map