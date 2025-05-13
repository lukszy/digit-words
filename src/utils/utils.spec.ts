import { breakNumber } from './utils';

describe('Utils', () => {
  describe('breakNumber', () => {
    it('should break number', () => {
      expect(breakNumber(123)).toEqual({ integer: [123], decimal: [] });
      expect(breakNumber(123456)).toEqual({ integer: [123, 456], decimal: [] });
      expect(breakNumber(123456789)).toEqual({ integer: [123, 456, 789], decimal: [] });
      expect(breakNumber(123456789119)).toEqual({ integer: [123, 456, 789, 119], decimal: [] });
    });

    it('should handle decimal numbers', () => {
      expect(breakNumber(123.45)).toEqual({ integer: [123], decimal: [4, 5] });
      expect(breakNumber(123456.789)).toEqual({ integer: [123, 456], decimal: [7, 8, 9] });
    });
  });
});
