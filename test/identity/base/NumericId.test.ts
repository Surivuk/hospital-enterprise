import NumericId from '../../../src/identity/base/NumericId';
import NumberValue from '../../../src/types/NumberValue';

describe('NumericId', () => {
    test('Creation', () => {
        expect(() => new NumericId(123)).not.toThrowError();
        expect(() => new NumericId(new NumberValue(123))).not.toThrowError();

        expect(() => new NumericId(new NumberValue(parseInt("Some")))).toThrowError();
        expect(() => new NumericId(-1)).toThrowError();
    });
    test('equality', () => {
        expect(new NumericId(1).equals(new NumericId(1))).toBe(true);
        expect(new NumericId(1).equals(new NumericId(12))).toBe(false);
    });
});