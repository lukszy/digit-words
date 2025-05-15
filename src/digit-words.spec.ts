import { toText } from './digit-words';
import type { Language } from './types';

describe('toText', () => {
  it('should be defined', () => {
    expect(toText).toBeDefined();
  });

  it('should throw if using not supported language', async () => {
    await expect(toText(123, 'it' as Language)).rejects.toThrow('Invalid language');
  });

  describe('options', () => {
    describe('decimal option', () => {
      it('should return only integer part when decimal is false', async () => {
        const result = await toText(123.45, 'en');
        expect(result.numberValue).toEqual('one hundred twenty-three');
      });
    });

    describe('splitted option', () => {
      it('should return parts separately when splitted is true', async () => {
        const result = await toText(123.45, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three and 45/100',
          integer: 123,
          decimal: 45,
          fractionValue: '45/100',
          numberValue: 'one hundred twenty-three'
        });
      });

      it('should return empty decimal part when number has no decimal', async () => {
        const result = await toText(123, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three',
          integer: 123,
          decimal: 0,
          fractionValue: '0/100',
          numberValue: 'one hundred twenty-three'
        });
      });

      it('should handle zero decimal part', async () => {
        const result = await toText(123.0, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three',
          integer: 123,
          decimal: 0,
          fractionValue: '0/100',
          numberValue: 'one hundred twenty-three'
        });
      });
    });

    describe('hundredthsAsWords option', () => {
      it('should return decimal part as words when hundredthsAsWords is true', async () => {
        const result = await toText(123.45, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three and 45/100',
          integer: 123,
          decimal: 45,
          fractionValue: '45/100',
          numberValue: 'one hundred twenty-three'
        });
      });

      it('should return decimal part as number when hundredthsAsWords is false', async () => {
        const result = await toText(123.45, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three and 45/100',
          integer: 123,
          decimal: 45,
          fractionValue: '45/100',
          numberValue: 'one hundred twenty-three'
        });
      });

      it('should pad single digit decimal part with zero when hundredthsAsWords is false', async () => {
        const result = await toText(123.5, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three and 50/100',
          integer: 123,
          decimal: 50,
          fractionValue: '50/100',
          numberValue: 'one hundred twenty-three'
        });
      });

      it('should handle numbers with no decimal part', async () => {
        const result = await toText(123, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three',
          integer: 123,
          decimal: 0,
          fractionValue: '0/100',
          numberValue: 'one hundred twenty-three'
        });
      });

      it('should handle numbers with zero decimal part', async () => {
        const result = await toText(123.0, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three',
          integer: 123,
          decimal: 0,
          fractionValue: '0/100',
          numberValue: 'one hundred twenty-three'
        });
      });

      it('should truncate decimal places beyond hundredths', async () => {
        const result = await toText(123.456, 'en');
        expect(result).toEqual({
          text: 'one hundred twenty-three and 45/100',
          integer: 123,
          decimal: 45,
          fractionValue: '45/100',
          numberValue: 'one hundred twenty-three'
        });
      });
    });
  });

  describe('pl', () => {
    it('should return text for integer', async () => {
      const result = await toText(123);
      expect(result).toEqual({
        text: 'sto dwadzieścia trzy',
        integer: 123,
        decimal: 0,
        fractionValue: '0/100',
        numberValue: 'sto dwadzieścia trzy'
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45);
      expect(result).toEqual({
        text: 'sto dwadzieścia trzy i 45/100',
        integer: 123,
        decimal: 45,
        fractionValue: '45/100',
        numberValue: 'sto dwadzieścia trzy'
      });
    });

    it('should throw error if value is not a number or lower than 0', async () => {
      await expect(toText(-123)).rejects.toThrow('Value must be greater than 0.');
    });
  });

  describe('en', () => {
    it('should return text for integer', async () => {
      const result = await toText(123, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three',
        integer: 123,
        decimal: 0,
        fractionValue: '0/100',
        numberValue: 'one hundred twenty-three'
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three and 45/100',
        integer: 123,
        decimal: 45,
        fractionValue: '45/100',
        numberValue: 'one hundred twenty-three'
      });
    });
  });

  describe('cz', () => {
    it('should return text for integer', async () => {
      const result = await toText(123, 'cz');
      expect(result).toEqual({
        text: 'sto dvacet tři',
        integer: 123,
        decimal: 0,
        fractionValue: '0/100',
        numberValue: 'sto dvacet tři'
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'cz');
      expect(result).toEqual({
        text: 'sto dvacet tři a 45/100',
        integer: 123,
        decimal: 45,
        fractionValue: '45/100',
        numberValue: 'sto dvacet tři'
      });
    });

    it('should throw error if value is lower than 0', async () => {
      await expect(toText(-123, 'cz')).rejects.toThrow('Value must be greater than 0.');
    });
  });

  describe('de', () => {
    it('should return text for integer', async () => {
      const result = await toText(123, 'de');
      expect(result).toEqual({
        text: 'einhundert dreiundzwanzig',
        integer: 123,
        decimal: 0,
        fractionValue: '0/100',
        numberValue: 'einhundert dreiundzwanzig'
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'de');
      expect(result).toEqual({
        text: 'einhundert dreiundzwanzig und 45/100',
        integer: 123,
        decimal: 45,
        fractionValue: '45/100',
        numberValue: 'einhundert dreiundzwanzig'
      });
    });

    it('should throw error if value is lower than 0', async () => {
      await expect(toText(-123, 'de')).rejects.toThrow('Value must be greater than 0.');
    });
  });

  describe('es', () => {
    it('should return text for integer', async () => {
      const result = await toText(123, 'es');
      expect(result).toEqual({
        text: 'ciento veintitrés',
        integer: 123,
        decimal: 0,
        fractionValue: '0/100',
        numberValue: 'ciento veintitrés'
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'es');
      expect(result).toEqual({
        text: 'ciento veintitrés y 45/100',
        integer: 123,
        decimal: 45,
        fractionValue: '45/100',
        numberValue: 'ciento veintitrés'
      });
    });

    it('should throw error if value is lower than 0', async () => {
      await expect(toText(-123, 'es')).rejects.toThrow('Value must be greater than 0.');
    });
  });

  describe('hr', () => {
    it('should return text for integer', async () => {
      const result = await toText(123, 'hr');
      expect(result).toEqual({
        text: 'sto dvadeset tri',
        integer: 123,
        decimal: 0,
        fractionValue: '0/100',
        numberValue: 'sto dvadeset tri'
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'hr');
      expect(result).toEqual({
        text: 'sto dvadeset tri i 45/100',
        integer: 123,
        decimal: 45,
        fractionValue: '45/100',
        numberValue: 'sto dvadeset tri'
      });
    });

    it('should throw error if value is lower than 0', async () => {
      await expect(toText(-123, 'hr')).rejects.toThrow('Value must be greater than 0.');
    });
  });
});

