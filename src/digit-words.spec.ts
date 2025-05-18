import { toText } from './digit-words';
import type { Language } from './types';

describe('toText', () => {
  it('should be defined', () => {
    expect(toText).toBeDefined();
  });

  it('should throw if using not supported language', async () => {
    await expect(toText(123, 'it' as Language)).rejects.toThrow('Invalid language');
  });

  describe('splitted option', () => {
    it('should return parts separately when splitted is true', async () => {
      const result = await toText(123.45, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three and 45/100',
        integerText: 'one hundred twenty-three',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });

    it('should return empty decimal part when number has no decimal', async () => {
      const result = await toText(123, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three',
        integerText: 'one hundred twenty-three',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should handle zero decimal part', async () => {
      const result = await toText(123.0, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three',
        integerText: 'one hundred twenty-three',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });
  });

  describe('hundredthsAsWords option', () => {
    it('should return decimal part as words when hundredthsAsWords is true', async () => {
      const result = await toText(123.45, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three and 45/100',
        integerText: 'one hundred twenty-three',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });

    it('should return decimal part as number when hundredthsAsWords is false', async () => {
      const result = await toText(123.45, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three and 45/100',
        integerText: 'one hundred twenty-three',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });

    it('should pad single digit decimal part with zero when hundredthsAsWords is false', async () => {
      const result = await toText(123.5, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three and 50/100',
        integerText: 'one hundred twenty-three',
        decimalText: '50/100',
        integerValue: 123,
        decimalValue: 50
      });
    });

    it('should handle numbers with no decimal part', async () => {
      const result = await toText(123, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three',
        integerText: 'one hundred twenty-three',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should handle numbers with zero decimal part', async () => {
      const result = await toText(123.0, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three',
        integerText: 'one hundred twenty-three',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should truncate decimal places beyond hundredths', async () => {
      const result = await toText(123.456, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three and 45/100',
        integerText: 'one hundred twenty-three',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });
  });

  describe('pl', () => {
    it('should return text for integer', async () => {
      const result = await toText(123);
      expect(result).toEqual({
        text: 'sto dwadzieścia trzy',
        integerText: 'sto dwadzieścia trzy',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45);
      expect(result).toEqual({
        text: 'sto dwadzieścia trzy i 45/100',
        integerText: 'sto dwadzieścia trzy',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
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
        integerText: 'one hundred twenty-three',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'en');
      expect(result).toEqual({
        text: 'one hundred twenty-three and 45/100',
        integerText: 'one hundred twenty-three',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });
  });

  describe('cz', () => {
    it('should return text for integer', async () => {
      const result = await toText(123, 'cz');
      expect(result).toEqual({
        text: 'sto dvacet tři',
        integerText: 'sto dvacet tři',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'cz');
      expect(result).toEqual({
        text: 'sto dvacet tři a 45/100',
        integerText: 'sto dvacet tři',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
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
        integerText: 'einhundert dreiundzwanzig',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'de');
      expect(result).toEqual({
        text: 'einhundert dreiundzwanzig und 45/100',
        integerText: 'einhundert dreiundzwanzig',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
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
        integerText: 'ciento veintitrés',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'es');
      expect(result).toEqual({
        text: 'ciento veintitrés y 45/100',
        integerText: 'ciento veintitrés',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
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
        integerText: 'sto dvadeset tri',
        decimalText: '0/100',
        integerValue: 123,
        decimalValue: 0
      });
    });

    it('should return text for decimal number', async () => {
      const result = await toText(123.45, 'hr');
      expect(result).toEqual({
        text: 'sto dvadeset tri i 45/100',
        integerText: 'sto dvadeset tri',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });

    it('should throw error if value is lower than 0', async () => {
      await expect(toText(-123, 'hr')).rejects.toThrow('Value must be greater than 0.');
    });
  });
});

