import { convert } from './converter';

describe('DE', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      value: 'null',
      integer: 0,
      hundredths: 0,
      decimal: 'null'
    });
  });

  it('should convert integers', () => {
    expect(convert(1)).toEqual({
      value: 'ein und 0/100',
      integer: 1,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(10)).toEqual({
      value: 'zehn und 0/100',
      integer: 10,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(21)).toEqual({
      value: 'einundzwanzig und 0/100',
      integer: 21,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(100)).toEqual({
      value: 'einhundert und 0/100',
      integer: 100,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(101)).toEqual({
      value: 'einhundert ein und 0/100',
      integer: 101,
      hundredths: 0,
      decimal: '0/100'
    });

    expect(convert(1000)).toEqual({
      value: 'eintausend und 0/100',
      integer: 1000,
      hundredths: 0,
      decimal: '0/100'
    });
  });

  it('should convert decimals', () => {
    expect(convert(1.01)).toEqual({
      value: 'ein und 1/100',
      integer: 1,
      hundredths: 1,
      decimal: '1/100'
    });

    expect(convert(1.1)).toEqual({
      value: 'ein und 10/100',
      integer: 1,
      hundredths: 10,
      decimal: '10/100'
    });

    expect(convert(1.99)).toEqual({
      value: 'ein und 99/100',
      integer: 1,
      hundredths: 99,
      decimal: '99/100'
    });

    expect(convert(123.45)).toEqual({
      value: 'einhundert dreiundzwanzig und 45/100',
      integer: 123,
      hundredths: 45,
      decimal: '45/100'
    });
  });
}); 