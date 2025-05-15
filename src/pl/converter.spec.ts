import { convert } from './converter';

describe('PL', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      text: 'zero',
      integer: 0,
      decimal: 0,
      fractionValue: 'zero',
      numberValue: 'zero'
    });
  });

  it('should convert integers', () => {
    expect(convert(1)).toEqual({
      text: 'jeden i 0/100',
      integer: 1,
      decimal: 0,
      fractionValue: '0/100',
      numberValue: 'jeden'
    });

    expect(convert(10)).toEqual({
      text: 'dziesięć i 0/100',
      integer: 10,
      decimal: 0,
      fractionValue: '0/100',
      numberValue: 'dziesięć'
    });

    expect(convert(21)).toEqual({
      text: 'dwadzieścia jeden i 0/100',
      integer: 21,
      decimal: 0,
      fractionValue: '0/100',
      numberValue: 'dwadzieścia jeden'
    });

    expect(convert(100)).toEqual({
      text: 'sto i 0/100',
      integer: 100,
      decimal: 0,
      fractionValue: '0/100',
      numberValue: 'sto'
    });

    expect(convert(101)).toEqual({
      text: 'sto jeden i 0/100',
      integer: 101,
      decimal: 0,
      fractionValue: '0/100',
      numberValue: 'sto jeden'
    });

    expect(convert(1000)).toEqual({
      text: 'tysiąc i 0/100',
      integer: 1000,
      decimal: 0,
      fractionValue: '0/100',
      numberValue: 'tysiąc'
    });
  });

  it('should convert decimals', () => {
    expect(convert(1.01)).toEqual({
      text: 'jeden i 1/100',
      integer: 1,
      decimal: 1,
      fractionValue: '1/100',
      numberValue: 'jeden'
    });

    expect(convert(1.1)).toEqual({
      text: 'jeden i 10/100',
      integer: 1,
      decimal: 10,
      fractionValue: '10/100',
      numberValue: 'jeden'
    });

    expect(convert(1.99)).toEqual({
      text: 'jeden i 99/100',
      integer: 1,
      decimal: 99,
      fractionValue: '99/100',
      numberValue: 'jeden'
    });

    expect(convert(123.45)).toEqual({
      text: 'sto dwadzieścia trzy i 45/100',
      integer: 123,
      decimal: 45,
      fractionValue: '45/100',
      numberValue: 'sto dwadzieścia trzy'
    });
  });
});
