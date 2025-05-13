import { toText } from './digit-words';

describe('toText', () => {
  it('should be defined', () => {
    expect(toText).toBeDefined();
  });

  it('should throw if using not supported language', () => {
    expect(() => toText(123, 'de')).toThrow('Invalid language');
  });

  describe('pl', () => {
    it('should return text for integer', () => {
      const result = toText(123);

      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual('sto dwadzieścia trzy');
    });

    it('should return text for decimal number', () => {
      const result = toText(123.45);

      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual('sto dwadzieścia trzy i 45/100');
    });

    it('should throw error if value is not a number or lower than 0', () => {
      expect(() => toText(-123)).toThrow('Value must be greater than 0.');
    });
  });

  describe('en', () => {
    it('should return text for integer', () => {
      const result = toText(123, 'en');

      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual('one hundred twenty-three');
    });

    it('should return text for decimal number', () => {
      const result = toText(123.45, 'en');

      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual('one hundred twenty-three and 45/100');
    });

    it('should throw error if value is lower than 0', () => {
      expect(() => toText(-123, 'en')).toThrow('Value must be greater than 0.');
    });
  });

  describe('cz', () => {
    it('should return text for integer', () => {
      const result = toText(123, 'cz');

      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual('sto dvacet tři');
    });

    it('should return text for decimal number', () => {
      const result = toText(123.45, 'cz');

      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual('sto dvacet tři a 45/100');
    });

    it('should throw error if value is lower than 0', () => {
      expect(() => toText(-123, 'cz')).toThrow('Value must be greater than 0.');
    });
  });
});

