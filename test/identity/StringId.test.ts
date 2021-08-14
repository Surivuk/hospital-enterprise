import StringId from "@domain/identity/StringId";
import NotEmptyString from "@domain/types/NotEmptyString";
import StringValue from "@domain/types/StringValue";

class TestId extends StringId {}


describe('StringId', () => {
    test('Creation', () => {
        expect(() => new TestId("SOME ID")).not.toThrowError();
        expect(() => new TestId(new StringValue("SOME ID"))).not.toThrowError();
        expect(() => new TestId(new NotEmptyString("SOME ID"))).not.toThrowError();

        expect(() => new TestId(new StringValue(""))).toThrowError();
        expect(() => new TestId("")).toThrowError();
    });
    test('equality', () => {
        expect(new TestId("SomeID").equals(new TestId("SomeID"))).toBe(true);
        expect(new TestId("SomeID").equals(new TestId("SomeId"))).toBe(false);
    });
});