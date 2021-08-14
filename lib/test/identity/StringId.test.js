"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringId_1 = __importDefault(require("../../domain/identity/StringId"));
const NotEmptyString_1 = __importDefault(require("../../domain/types/NotEmptyString"));
const StringValue_1 = __importDefault(require("../../domain/types/StringValue"));
class TestId extends StringId_1.default {
}
describe('StringId', () => {
    test('Creation', () => {
        expect(() => new TestId("SOME ID")).not.toThrowError();
        expect(() => new TestId(new StringValue_1.default("SOME ID"))).not.toThrowError();
        expect(() => new TestId(new NotEmptyString_1.default("SOME ID"))).not.toThrowError();
        expect(() => new TestId(new StringValue_1.default(""))).toThrowError();
        expect(() => new TestId("")).toThrowError();
    });
    test('equality', () => {
        expect(new TestId("SomeID").equals(new TestId("SomeID"))).toBe(true);
        expect(new TestId("SomeID").equals(new TestId("SomeId"))).toBe(false);
    });
});
//# sourceMappingURL=StringId.test.js.map