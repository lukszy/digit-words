import { convert } from './converter';

describe('PL', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      text: 'zero',
      integerText: '0',
      decimalText: '0/100',
      integerValue: 0,
      decimalValue: 0
    });
  });

  describe('integers', () => {
    it('should convert 1', () => {
      expect(convert(1)).toEqual({
        text: 'jeden',
        integerText: 'jeden',
        decimalText: '0/100',
        integerValue: 1,
        decimalValue: 0
      });
    });

    it('should convert 10', () => {
      expect(convert(10)).toEqual({
        text: 'dziesięć',
        integerText: 'dziesięć',
        decimalText: '0/100',
        integerValue: 10,
        decimalValue: 0
      });
    });

    it('should convert 21', () => {
      expect(convert(21)).toEqual({
        text: 'dwadzieścia jeden',
        integerText: 'dwadzieścia jeden',
        decimalText: '0/100',
        integerValue: 21,
        decimalValue: 0
      });
    });

    it('should convert 100', () => {
      expect(convert(100)).toEqual({
        text: 'sto',
        integerText: 'sto',
        decimalText: '0/100',
        integerValue: 100,
        decimalValue: 0
      });
    });

    it('should convert 101', () => {
      expect(convert(101)).toEqual({
        text: 'sto jeden',
        integerText: 'sto jeden',
        decimalText: '0/100',
        integerValue: 101,
        decimalValue: 0
      });
    });

    it('should convert 1000', () => {
      expect(convert(1000)).toEqual({
        text: 'tysiąc',
        integerText: 'tysiąc',
        decimalText: '0/100',
        integerValue: 1000,
        decimalValue: 0
      });
    });

    it('should convert 10000', () => {
      expect(convert(10000)).toEqual({
        text: 'dziesięć tysięcy',
        integerText: 'dziesięć tysięcy',
        decimalText: '0/100',
        integerValue: 10000,
        decimalValue: 0
      });
    });

    it('should convert 100000', () => {
      expect(convert(100000)).toEqual({
        text: 'sto tysięcy',
        integerText: 'sto tysięcy',
        decimalText: '0/100',
        integerValue: 100000,
        decimalValue: 0
      });
    });

    it('should convert 1000000', () => {
      expect(convert(1000000)).toEqual({
        text: 'milion',
        integerText: 'milion',
        decimalText: '0/100',
        integerValue: 1000000,
        decimalValue: 0
      });
    });

    it('should convert 10000000', () => {
      expect(convert(10000000)).toEqual({
        text: 'dziesięć milionów',
        integerText: 'dziesięć milionów',
        decimalText: '0/100',
        integerValue: 10000000,
        decimalValue: 0
      });
    });

    it('should convert 1123', () => {
      expect(convert(1123)).toEqual({
        text: 'tysiąc sto dwadzieścia trzy',
        integerText: 'tysiąc sto dwadzieścia trzy',
        decimalText: '0/100',
        integerValue: 1123,
        decimalValue: 0
      });
    });
  });

  describe('decimals', () => {
    it('should convert 1.01', () => {
      expect(convert(1.01)).toEqual({
        text: 'jeden i 1/100',
        integerText: 'jeden',
        decimalText: '1/100',
        integerValue: 1,
        decimalValue: 1
      });
    });

    it('should convert 1.1', () => {
      expect(convert(1.1)).toEqual({
        text: 'jeden i 10/100',
        integerText: 'jeden',
        decimalText: '10/100',
        integerValue: 1,
        decimalValue: 10
      });
    });

    it('should convert 1.99', () => {
      expect(convert(1.99)).toEqual({
        text: 'jeden i 99/100',
        integerText: 'jeden',
        decimalText: '99/100',
        integerValue: 1,
        decimalValue: 99
      });
    });

    it('should convert 123.45', () => {
      expect(convert(123.45)).toEqual({
        text: 'sto dwadzieścia trzy i 45/100',
        integerText: 'sto dwadzieścia trzy',
        decimalText: '45/100',
        integerValue: 123,
        decimalValue: 45
      });
    });

    it('should convert 1123.45', () => {
      expect(convert(1123.45)).toEqual({
        text: 'tysiąc sto dwadzieścia trzy i 45/100',
        integerText: 'tysiąc sto dwadzieścia trzy',
        decimalText: '45/100',
        integerValue: 1123,
        decimalValue: 45
      });
    });

    it('should convert 2214', () => {
      expect(convert(2214)).toEqual({
        text: 'dwa tysiące dwieście czternaście',
        integerText: 'dwa tysiące dwieście czternaście',
        decimalText: '0/100',
        integerValue: 2214,
        decimalValue: 0
      });
    });

    it('should convert 0.25', () => {
      expect(convert(0.25)).toEqual({
        text: 'zero i 25/100',
        integerText: 'zero',
        decimalText: '25/100',
        integerValue: 0,
        decimalValue: 25
      });
    });

    it('should convert 19.5', () => {
      expect(convert(19.5)).toEqual({
        text: 'dziewiętnaście i 50/100',
        integerText: 'dziewiętnaście',
        decimalText: '50/100',
        integerValue: 19,
        decimalValue: 50
      });
    });

    it('should convert 1500.75', () => {
      expect(convert(1500.75)).toEqual({
        text: 'tysiąc pięćset i 75/100',
        integerText: 'tysiąc pięćset',
        decimalText: '75/100',
        integerValue: 1500,
        decimalValue: 75
      });
    });

    it('should convert 9778,62', () => {
      expect(convert(9778.62)).toEqual({
        text: 'dziewięć tysięcy siedemset siedemdziesiąt osiem i 62/100',
        integerText: 'dziewięć tysięcy siedemset siedemdziesiąt osiem',
        decimalText: '62/100',
        integerValue: 9778,
        decimalValue: 62
      });
    });
  });
});
