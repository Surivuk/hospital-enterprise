import StringId from "@domain/identity/base/StringId";
import NotEmptyString from "@domain/types/NotEmptyString";
import StringValue from "@domain/types/StringValue";

describe('StringId', () => {
    test('Creation', () => {
        expect(() => new StringId("SOME ID")).not.toThrowError();
        expect(() => new StringId(new StringValue("SOME ID"))).not.toThrowError();
        expect(() => new StringId(new NotEmptyString("SOME ID"))).not.toThrowError();

        expect(() => new StringId(new StringValue(""))).toThrowError();
        expect(() => new StringId("")).toThrowError();
    });
    test('equality', () => {
        expect(new StringId("SomeID").equals(new StringId("SomeID"))).toBe(true);
        expect(new StringId("SomeID").equals(new StringId("SomeId"))).toBe(false);
    });
});