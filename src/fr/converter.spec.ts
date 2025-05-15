import { convert } from './converter';

describe('FR', () => {
  describe('convert', () => {
    it('should have at least one test', () => {
      expect(true).toBe(true);
    });

    describe('options', () => {
      it('should return only integer part when integerOnly is true', () => {
        expect(convert(123.45, { integerOnly: true })).toBe('cent vingt-trois');
        expect(convert(1000.01, { integerOnly: true })).toBe('mille');
      });

      it('should return splitted result when splitted is true', () => {
        expect(convert(123.45, { splitted: true })).toEqual({
          integer: 'cent vingt-trois',
          decimal: '45'
        });
      });

      it('should convert decimal to words when decimalAsWords is true', () => {
        expect(convert(123.45, { splitted: true, decimalAsWords: true })).toEqual({
          integer: 'cent vingt-trois',
          decimal: 'quarante-cinq'
        });
      });

      it('should return decimal as fraction when decimalAsFraction is true', () => {
        expect(convert(123.45, { splitted: true, decimalAsFraction: true })).toEqual({
          integer: 'cent vingt-trois',
          decimal: '45/100'
        });
      });

      it('should combine multiple options', () => {
        expect(convert(123.45, { 
          splitted: true, 
          decimalAsWords: true,
          decimalAsFraction: true 
        })).toEqual({
          integer: 'cent vingt-trois',
          decimal: 'quarante-cinq/100'
        });
      });
    });
  });
}); 