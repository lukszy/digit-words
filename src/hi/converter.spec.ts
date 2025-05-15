import { convert } from './converter';

describe('HI', () => {
  it('should convert zero', () => {
    expect(convert(0)).toEqual({
      text: 'शून्य',
      integer: 0,
      decimal: 0,
      fraction: 'शून्य',
      number: 'शून्य'
    });
  });

  it('should convert integers', () => {
    expect(convert(1)).toEqual({
      text: 'एक और 0/100',
      integer: 1,
      decimal: 0,
      fraction: '0/100',
      number: 'एक'
    });

    expect(convert(10)).toEqual({
      text: 'दस और 0/100',
      integer: 10,
      decimal: 0,
      fraction: '0/100',
      number: 'दस'
    });

    expect(convert(21)).toEqual({
      text: 'इक्कीस और 0/100',
      integer: 21,
      decimal: 0,
      fraction: '0/100',
      number: 'इक्कीस'
    });

    expect(convert(100)).toEqual({
      text: 'एक सौ और 0/100',
      integer: 100,
      decimal: 0,
      fraction: '0/100',
      number: 'एक सौ'
    });

    expect(convert(101)).toEqual({
      text: 'एक सौ एक और 0/100',
      integer: 101,
      decimal: 0,
      fraction: '0/100',
      number: 'एक सौ एक'
    });

    expect(convert(1000)).toEqual({
      text: 'एक हजार और 0/100',
      integer: 1000,
      decimal: 0,
      fraction: '0/100',
      number: 'एक हजार'
    });
  });

  it('should convert decimals', () => {
    expect(convert(1.01)).toEqual({
      text: 'एक और 1/100',
      integer: 1,
      decimal: 1,
      fraction: '1/100',
      number: 'एक'
    });

    expect(convert(1.1)).toEqual({
      text: 'एक और 10/100',
      integer: 1,
      decimal: 10,
      fraction: '10/100',
      number: 'एक'
    });

    expect(convert(1.99)).toEqual({
      text: 'एक और 99/100',
      integer: 1,
      decimal: 99,
      fraction: '99/100',
      number: 'एक'
    });

    expect(convert(123.45)).toEqual({
      text: 'एक सौ तेईस और 45/100',
      integer: 123,
      decimal: 45,
      fraction: '45/100',
      number: 'एक सौ तेईस'
    });
  });
}); 