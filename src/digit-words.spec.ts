import { DigitWords } from './digit-words';

describe('DigitWords', () => {
  let digitWords: DigitWords;

  it('should be defined', () => {
    digitWords = new DigitWords();

    expect(digitWords).toBeDefined();
  });

  it('should throw if using not supported language', () => {
    expect(() => new DigitWords('de' as any)).toThrow();
  });

  describe('toWords pl', () => {
    beforeEach(() => {
      digitWords = new DigitWords();
    });

    it('should be defined', () => {
      expect(digitWords.toWords).toBeDefined();
    });

    it('should return text', () => {
      const result = digitWords.toWords(123);

      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual('sto dwadzieścia trzy');
    });

    it('should throw error if value is not a number or lower than 0', () => {
      expect(() => digitWords.toWords('1234' as any)).toThrow();
      expect(() => digitWords.toWords(-123)).toThrow();
    });
  });

  describe('toWords en', () => {
    beforeEach(() => {
      digitWords = new DigitWords('en');
    });

    it('should be defined', () => {
      expect(digitWords.toWords).toBeDefined();
    });

    it('should return text', () => {
      const result = digitWords.toWords(123);

      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual('one hundred twenty-three');
    });

    it('should throw error if value is not a number or lower than 0', () => {
      expect(() => digitWords.toWords('1234' as any)).toThrow();
      expect(() => digitWords.toWords(-123)).toThrow();
    });
  });
});
