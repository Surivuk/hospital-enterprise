"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumericId_1 = __importDefault(require("../../domain/identity/NumericId"));
const NumberValue_1 = __importDefault(require("../../domain/types/NumberValue"));
class TestId extends NumericId_1.default {
}
;
describe('NumericId', () => {
    test('Creation', () => {
        expect(() => new TestId(123)).not.toThrowError();
        expect(() => new TestId(new NumberValue_1.default(123))).not.toThrowError();
        expect(() => new TestId(new NumberValue_1.default(parseInt("Some")))).toThrowError();
        expect(() => new TestId(-1)).toThrowError();
    });
    test('equality', () => {
        expect(new TestId(1).equals(new TestId(1))).toBe(true);
        expect(new TestId(1).equals(new TestId(12))).toBe(false);
    });
});
//# sourceMappingURL=NumericId.test.js.map