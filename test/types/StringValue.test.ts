import NotEmptyString from "@domain/types/NotEmptyString";
import StringValue from "@domain/types/StringValue";

describe('StringValue', () => {
    test('Creation', () => {
        expect(() => new StringValue("Some string")).not.toThrowError();
        expect(() => new StringValue("")).not.toThrowError();

        let value: string | undefined = undefined;
        expect(() => new StringValue(value as string)).toThrowError();

        let value2: string | null = null;
        expect(() => new StringValue(value2 as string)).toThrowError();
    });
    test('equality', () => {
        expect(new StringValue("Value").equals(new StringValue("Value"))).toBe(true);
        expect(new StringValue("Value").equals(new NotEmptyString("Value"))).toBe(false);
        expect(new StringValue("Value").equals(new StringValue("Value2"))).toBe(false);
    });
});