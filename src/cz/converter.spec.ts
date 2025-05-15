import { convert } from './converter';

describe('CZ', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      text: 'nula',
      integer: 0,
      decimal: 0,
      fraction: 'nula',
      number: 'nula'
    });
  });

  it('should convert integers', () => {
    expect(convert(1)).toEqual({
      text: 'jedna a 0/100',
      integer: 1,
      decimal: 0,
      fraction: '0/100',
      number: 'jedna'
    });

    expect(convert(10)).toEqual({
      text: 'deset a 0/100',
      integer: 10,
      decimal: 0,
      fraction: '0/100',
      number: 'deset'
    });

    expect(convert(21)).toEqual({
      text: 'dvacet jedna a 0/100',
      integer: 21,
      decimal: 0,
      fraction: '0/100',
      number: 'dvacet jedna'
    });

    expect(convert(100)).toEqual({
      text: 'sto a 0/100',
      integer: 100,
      decimal: 0,
      fraction: '0/100',
      number: 'sto'
    });

    expect(convert(101)).toEqual({
      text: 'sto jedna a 0/100',
      integer: 101,
      decimal: 0,
      fraction: '0/100',
      number: 'sto jedna'
    });

    expect(convert(1000)).toEqual({
      text: 'tisíc a 0/100',
      integer: 1000,
      decimal: 0,
      fraction: '0/100',
      number: 'tisíc'
    });
  });

  it('should convert decimals', () => {
    expect(convert(1.01)).toEqual({
      text: 'jedna a 1/100',
      integer: 1,
      decimal: 1,
      fraction: '1/100',
      number: 'jedna'
    });

    expect(convert(1.1)).toEqual({
      text: 'jedna a 10/100',
      integer: 1,
      decimal: 10,
      fraction: '10/100',
      number: 'jedna'
    });

    expect(convert(1.99)).toEqual({
      text: 'jedna a 99/100',
      integer: 1,
      decimal: 99,
      fraction: '99/100',
      number: 'jedna'
    });

    expect(convert(123.45)).toEqual({
      text: 'sto dvacet tři a 45/100',
      integer: 123,
      decimal: 45,
      fraction: '45/100',
      number: 'sto dvacet tři'
    });
  });
});
