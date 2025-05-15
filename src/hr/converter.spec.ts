import { convert } from './converter';

describe('HR', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      value: 'nula',
      integer: 0,
      hundredths: 0,
      decimal: 'nula'
    });
  });

  it('should convert integers', () => {
    expect(convert(1)).toEqual({
      value: 'jedan i 0/100',
      integer: 1,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(10)).toEqual({
      value: 'deset i 0/100',
      integer: 10,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(21)).toEqual({
      value: 'dvadeset jedan i 0/100',
      integer: 21,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(100)).toEqual({
      value: 'sto i 0/100',
      integer: 100,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(101)).toEqual({
      value: 'sto jedan i 0/100',
      integer: 101,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(1000)).toEqual({
      value: 'tisuću i 0/100',
      integer: 1000,
      hundredths: 0,
      decimal: '0/100'
    });
  });

  it('should convert decimals', () => {
    expect(convert(1.01)).toEqual({
      value: 'jedan i 1/100',
      integer: 1,
      hundredths: 1,
      decimal: '1/100'
    });

    expect(convert(1.1)).toEqual({
      value: 'jedan i 10/100',
      integer: 1,
      hundredths: 10,
      decimal: '10/100'
    });

    expect(convert(1.99)).toEqual({
      value: 'jedan i 99/100',
      integer: 1,
      hundredths: 99,
      decimal: '99/100'
    });

    expect(convert(123.45)).toEqual({
      value: 'sto dvadeset tri i 45/100',
      integer: 123,
      hundredths: 45,
      decimal: '45/100'
    });
  });
}); 