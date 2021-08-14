import NotEmptyString from "@domain/types/NotEmptyString";
import StringValue from "@domain/types/StringValue";

describe('NotEmptyString', () => {
    test('Creation', () => {
        expect(() => new NotEmptyString("Some string")).not.toThrowError();

        expect(() => new NotEmptyString("")).toThrowError();

        let value: string | undefined = undefined;
        expect(() => new NotEmptyString(value as string)).toThrowError();

        let value2: string | null = null;
        expect(() => new NotEmptyString(value2 as string)).toThrowError();
    });
    test('equality', () => {
        expect(new NotEmptyString("Value").equals(new NotEmptyString("Value"))).toBe(true);
        expect(new NotEmptyString("Value").equals(new StringValue("Value"))).toBe(false);
        expect(new NotEmptyString("Value").equals(new NotEmptyString("Value2"))).toBe(false);
    });
});