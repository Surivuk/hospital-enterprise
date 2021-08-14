"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooleanValue_1 = __importDefault(require("../../domain/types/BooleanValue"));
describe('BooleanValue', () => {
    test('Creation', () => {
        expect(() => new BooleanValue_1.default(true)).not.toThrowError();
        expect(() => new BooleanValue_1.default(false)).not.toThrowError();
        expect(() => new BooleanValue_1.default("true")).not.toThrowError();
        expect(() => new BooleanValue_1.default("false")).not.toThrowError();
        expect(() => new BooleanValue_1.default("SomeWord")).toThrowError();
        let value = undefined;
        expect(() => new BooleanValue_1.default(value)).toThrowError();
        let value2 = null;
        expect(() => new BooleanValue_1.default(value2)).toThrowError();
    });
    test('equality', () => {
        expect(new BooleanValue_1.default(true).equals(new BooleanValue_1.default(true))).toBe(true);
        expect(new BooleanValue_1.default(true).equals(new BooleanValue_1.default("true"))).toBe(true);
        expect(new BooleanValue_1.default(true).equals(new BooleanValue_1.default(false))).toBe(false);
    });
});
//# sourceMappingURL=BooleanValue.test.js.map