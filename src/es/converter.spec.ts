import { convert } from './converter';

describe('ES', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      value: 'cero',
      integer: 0,
      hundredths: 0,
      decimal: 'cero'
    });
  });

  it('should convert integers', () => {
    expect(convert(1)).toEqual({
      value: 'uno y 0/100',
      integer: 1,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(10)).toEqual({
      value: 'diez y 0/100',
      integer: 10,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(21)).toEqual({
      value: 'veinte y uno y 0/100',
      integer: 21,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(100)).toEqual({
      value: 'ciento y 0/100',
      integer: 100,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(101)).toEqual({
      value: 'ciento uno y 0/100',
      integer: 101,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(1000)).toEqual({
      value: 'mil y 0/100',
      integer: 1000,
      hundredths: 0,
      decimal: '0/100'
    });
  });

  it('should convert decimals', () => {
    expect(convert(1.01)).toEqual({
      value: 'uno y 1/100',
      integer: 1,
      hundredths: 1,
      decimal: '1/100'
    });

    expect(convert(1.1)).toEqual({
      value: 'uno y 10/100',
      integer: 1,
      hundredths: 10,
      decimal: '10/100'
    });

    expect(convert(1.99)).toEqual({
      value: 'uno y 99/100',
      integer: 1,
      hundredths: 99,
      decimal: '99/100'
    });

    expect(convert(123.45)).toEqual({
      value: 'ciento veinte y tres y 45/100',
      integer: 123,
      hundredths: 45,
      decimal: '45/100'
    });
  });
}); 