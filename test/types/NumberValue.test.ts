import NumberValue from "@domain/types/NumberValue";


describe('NumberValue', () => {
    test('Creation', () => {
        expect(() => new NumberValue(123)).not.toThrowError();
        expect(() => new NumberValue(parseInt("1234"))).not.toThrowError();

        expect(() => new NumberValue(parseInt("SomeWord"))).toThrowError();

        let value: number | undefined = undefined;
        expect(() => new NumberValue(value as number)).toThrowError();

        let value2: number | null = null;
        expect(() => new NumberValue(value2 as number)).toThrowError();
    });
    test('equality', () => {
        expect(new NumberValue(1).equals(new NumberValue(1))).toBe(true);
        expect(new NumberValue(1).equals(new NumberValue(12))).toBe(false);
    });
});