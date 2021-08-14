import NumericId from "@domain/identity/NumericId";
import NumberValue from "@domain/types/NumberValue";

class TestId extends NumericId {};

describe('NumericId', () => {
    test('Creation', () => {
        expect(() => new TestId(123)).not.toThrowError();
        expect(() => new TestId(new NumberValue(123))).not.toThrowError();

        expect(() => new TestId(new NumberValue(parseInt("Some")))).toThrowError();
        expect(() => new TestId(-1)).toThrowError();
    });
    test('equality', () => {
        expect(new TestId(1).equals(new TestId(1))).toBe(true);
        expect(new TestId(1).equals(new TestId(12))).toBe(false);
    });
});