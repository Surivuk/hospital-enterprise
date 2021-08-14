import BooleanValue from "../../src/types/BooleanValue";


describe('BooleanValue', () => {
    test('Creation', () => {
        expect(() => new BooleanValue(true)).not.toThrowError();
        expect(() => new BooleanValue(false)).not.toThrowError();
        expect(() => new BooleanValue("true")).not.toThrowError();
        expect(() => new BooleanValue("false")).not.toThrowError();

        expect(() => new BooleanValue("SomeWord")).toThrowError();

        let value: boolean | undefined = undefined;
        expect(() => new BooleanValue(value as boolean)).toThrowError();

        let value2: boolean | null = null;
        expect(() => new BooleanValue(value2 as boolean)).toThrowError();
    });
    test('equality', () => {
        expect(new BooleanValue(true).equals(new BooleanValue(true))).toBe(true);
        expect(new BooleanValue(true).equals(new BooleanValue("true"))).toBe(true);
        expect(new BooleanValue(true).equals(new BooleanValue(false))).toBe(false);
    });
});