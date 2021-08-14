"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotEmptyString_1 = __importDefault(require("@domain/types/NotEmptyString"));
const StringValue_1 = __importDefault(require("@domain/types/StringValue"));
describe('StringValue', () => {
    test('Creation', () => {
        expect(() => new StringValue_1.default("Some string")).not.toThrowError();
        expect(() => new StringValue_1.default("")).not.toThrowError();
        let value = undefined;
        expect(() => new StringValue_1.default(value)).toThrowError();
        let value2 = null;
        expect(() => new StringValue_1.default(value2)).toThrowError();
    });
    test('equality', () => {
        expect(new StringValue_1.default("Value").equals(new StringValue_1.default("Value"))).toBe(true);
        expect(new StringValue_1.default("Value").equals(new NotEmptyString_1.default("Value"))).toBe(false);
        expect(new StringValue_1.default("Value").equals(new StringValue_1.default("Value2"))).toBe(false);
    });
});
//# sourceMappingURL=StringValue.test.js.map