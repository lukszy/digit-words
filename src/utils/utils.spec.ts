import { breakNumber } from './utils';

describe('Utils', () => {
  describe('breakNumber', () => {
    it('should break number', () => {
      expect(breakNumber(123)).toEqual({ integerText: [123], decimalText: [] });
      expect(breakNumber(123456)).toEqual({ integerText: [123, 456], decimalText: [] });
      expect(breakNumber(123456789)).toEqual({ integerText: [123, 456, 789], decimalText: [] });
      expect(breakNumber(123456789119)).toEqual({ integerText: [123, 456, 789, 119], decimalText: [] });
    });

    it('should handle decimal numbers', () => {
      expect(breakNumber(123.45)).toEqual({ integerText: [123], decimalText: [4, 5] });
      expect(breakNumber(123456.789)).toEqual({ integerText: [123, 456], decimalText: [7, 8, 9] });
    });
  });
});
