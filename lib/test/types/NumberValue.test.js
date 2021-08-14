"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumberValue_1 = __importDefault(require("../../domain/types/NumberValue"));
describe('NumberValue', () => {
    test('Creation', () => {
        expect(() => new NumberValue_1.default(123)).not.toThrowError();
        expect(() => new NumberValue_1.default(parseInt("1234"))).not.toThrowError();
        expect(() => new NumberValue_1.default(parseInt("SomeWord"))).toThrowError();
        let value = undefined;
        expect(() => new NumberValue_1.default(value)).toThrowError();
        let value2 = null;
        expect(() => new NumberValue_1.default(value2)).toThrowError();
    });
    test('equality', () => {
        expect(new NumberValue_1.default(1).equals(new NumberValue_1.default(1))).toBe(true);
        expect(new NumberValue_1.default(1).equals(new NumberValue_1.default(12))).toBe(false);
    });
});
//# sourceMappingURL=NumberValue.test.js.map