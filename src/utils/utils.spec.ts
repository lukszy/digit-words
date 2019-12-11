import { breakNumber } from './utils';

describe('Utils', () => {
  describe('breakNumber', () => {
    it('should break number', () => {
      expect(breakNumber(123)).toEqual([123]);
      expect(breakNumber(123456)).toEqual([123, 456]);
      expect(breakNumber(123456789)).toEqual([123, 456, 789]);
      expect(breakNumber(123456789119)).toEqual([123, 456, 789, 119]);
    });
  });
});
