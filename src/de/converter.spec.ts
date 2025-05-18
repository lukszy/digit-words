import { convert } from './converter';

describe('DE', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      text: 'null',
      integerText: 'null',
      decimalText: '0/100',
      integerValue: 0,
      decimalValue: 0
    });
  });

  describe('integers', () => {
    it('should convert 1', () => {
      expect(convert(1)).toEqual({
        text: 'ein',
        integerText: 'ein',
        decimalText: '0/100',
        integerValue: 1,
        decimalValue: 0
      });
    });

    it('should convert 10', () => {
      expect(convert(10)).toEqual({
        text: 'zehn',
        integerText: 'zehn',
        decimalText: '0/100',
        integerValue: 10,
        decimalValue: 0
      });
    });

    it('should convert 21', () => {
      expect(convert(21)).toEqual({
        text: 'einundzwanzig',
        integerText: 'einundzwanzig',
        decimalText: '0/100',
        integerValue: 21,
        decimalValue: 0
      });
    });

    it('should convert 100', () => {
      expect(convert(100)).toEqual({
        text: 'einhundert',
        integerText: 'einhundert',
        decimalText: '0/100',
        integerValue: 100,
        decimalValue: 0
      });
    });

    it('should convert 101', () => {
      expect(convert(101)).toEqual({
        text: 'einhundert ein',
        integerText: 'einhundert ein',
        decimalText: '0/100',
        integerValue: 101,
        decimalValue: 0
      });
    });

    it('should convert 1000', () => {
      expect(convert(1000)).toEqual({
        text: 'eintausend',
        integerText: 'eintausend',
        decimalText: '0/100',
        integerValue: 1000,
        decimalValue: 0
      });
    });

    it('should convert 10000', () => {
      expect(convert(10000)).toEqual({
        text: 'zehntausend',
        integerText: 'zehntausend',
        decimalText: '0/100',
        integerValue: 10000,
        decimalValue: 0
      });
    });

    it('should convert 100000', () => {
      expect(convert(100000)).toEqual({
        text: 'einhunderttausend',
        integerText: 'einhunderttausend',
        decimalText: '0/100',
        integerValue: 100000,
        decimalValue: 0
      });
    });

    it('should convert 1000000', () => {
      expect(convert(1000000)).toEqual({
        text: 'eine Million',
        integerText: 'eine Million',
        decimalText: '0/100',
        integerValue: 1000000,
        decimalValue: 0
      });
    });

    it('should convert 10000000', () => {
      expect(convert(10000000)).toEqual({
        text: 'zehn Millionen',
        integerText: 'zehn Millionen',
        decimalText: '0/100',
        integerValue: 10000000,
        decimalValue: 0
      });
    });
  });

  describe('decimals', () => {
    it('should convert 1.01', () => {
      expect(convert(1.01)).toEqual({
        text: 'ein und 1/100',
        integerText: 'ein',
        decimalText: '1/100',
        integerValue: 1,
        decimalValue: 1
      });
    });

    it('should convert 1.1', () => {
      expect(convert(1.1)).toEqual({
        text: 'ein und 10/100',
        integerText: 'ein',
        decimalText: '10/100',
        integerValue: 1,
        decimalValue: 10
      });
    });

    it('should convert 1.99', () => {
      expect(convert(1.99)).toEqual({
        text: 'ein und 99/100',
        integerText: 'ein',
        decimalText: '99/100',
        integerValue: 1,
        decimalValue: 99
      });
    });

    it('should convert 123.45', () => {
      expect(convert(123.45)).toEqual({
        text: 'einhundert dreiundzwanzig und 45/100',
        integerText: 'einhundert dreiundzwanzig',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });
  });
}); 