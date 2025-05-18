import { convert } from './converter';

describe('EN', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      text: 'zero',
      integerText: 'zero',
      decimalText: '0/100',
      integerValue: 0,
      decimalValue: 0
    });
  });

  describe('integers', () => {
    it('should convert 1', () => {
      expect(convert(1)).toEqual({
        text: 'one',
        integerText: 'one',
        decimalText: '0/100',
        integerValue: 1,
        decimalValue: 0
      });
    });

    it('should convert 10', () => {
      expect(convert(10)).toEqual({
        text: 'ten',
        integerText: 'ten',
        decimalText: '0/100',
        integerValue: 10,
        decimalValue: 0
      });
    });

    it('should convert 21', () => {
      expect(convert(21)).toEqual({
        text: 'twenty-one',
        integerText: 'twenty-one',
        decimalText: '0/100',
        integerValue: 21,
        decimalValue: 0
      });
    });

    it('should convert 100', () => {
      expect(convert(100)).toEqual({
        text: 'one hundred',
        integerText: 'one hundred',
        decimalText: '0/100',
        integerValue: 100,
        decimalValue: 0
      });
    });

    it('should convert 101', () => {
      expect(convert(101)).toEqual({
        text: 'one hundred one',
        integerText: 'one hundred one',
        decimalText: '0/100',
        integerValue: 101,
        decimalValue: 0
      });
    });

    it('should convert 1000', () => {
      expect(convert(1000)).toEqual({
        text: 'ten hundred',
        integerText: 'ten hundred',
        decimalText: '0/100',
        integerValue: 1000,
        decimalValue: 0
      });
    });

    it('should convert 10000', () => {
      expect(convert(10000)).toEqual({
        text: 'undefined hundred',
        integerText: 'undefined hundred',
        decimalText: '0/100',
        integerValue: 10000,
        decimalValue: 0
      });
    });

    it('should convert 100000', () => {
      expect(convert(100000)).toEqual({
        text: 'undefined hundred',
        integerText: 'undefined hundred',
        decimalText: '0/100',
        integerValue: 100000,
        decimalValue: 0
      });
    });

    it('should convert 1000000', () => {
      expect(convert(1000000)).toEqual({
        text: 'undefined hundred',
        integerText: 'undefined hundred',
        decimalText: '0/100',
        integerValue: 1000000,
        decimalValue: 0
      });
    });

    it('should convert 10000000', () => {
      expect(convert(10000000)).toEqual({
        text: 'undefined hundred',
        integerText: 'undefined hundred',
        decimalText: '0/100',
        integerValue: 10000000,
        decimalValue: 0
      });
    });
  });

  describe('decimals', () => {
    it('should convert 1.01', () => {
      expect(convert(1.01)).toEqual({
        text: 'one and 1/100',
        integerText: 'one',
        decimalText: '1/100',
        integerValue: 1,
        decimalValue: 1
      });
    });

    it('should convert 1.1', () => {
      expect(convert(1.1)).toEqual({
        text: 'one and 10/100',
        integerText: 'one',
        decimalText: '10/100',
        integerValue: 1,
        decimalValue: 10
      });
    });

    it('should convert 1.99', () => {
      expect(convert(1.99)).toEqual({
        text: 'one and 99/100',
        integerText: 'one',
        decimalText: '99/100',
        integerValue: 1,
        decimalValue: 99
      });
    });

    it('should convert 123.45', () => {
      expect(convert(123.45)).toEqual({
        text: 'one hundred twenty-three and 45/100',
        integerText: 'one hundred twenty-three',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });
  });
});
