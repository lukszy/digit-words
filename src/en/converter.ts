import { breakNumber } from '../utils';

const unity = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const teens = {
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const dozens = {
  10: 'ten',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const thousands = [null, 'thousand', 'million', 'billion', 'trillion'];

const combined = {
  ...unity,
  ...teens,
  ...dozens,
};

export const convert = (value: number): string => {
  const { integer, decimal } = breakNumber(value);
  
  const integerPart = integer
    .reverse()
    .reduce(
      (list, val, index) => [...list, getDecimalName(index), toWords(val)],
      [],
    )
    .reverse()
    .join(' ')
    .trim();

  if (!decimal.length) {
    return integerPart;
  }

  // Convert decimal part to fraction
  const decimalValue = Number(decimal.join(''));
  const denominator = Math.pow(10, decimal.length);
  
  return `${integerPart} and ${decimalValue}/${denominator}`;
};

const toWords = (value: number): string => {
  let current = value;
  let result = [];
  let size = value.toString().length;

  while (current) {
    const rest = current % Math.pow(10, size - 1);
    const dozen = current - rest;

    if (size === 3 && dozen % 100 === 0) {
      const firstDigit = current.toString().charAt(0);
      result = [...result, unity[firstDigit], 'hundred'];
    } else if (current in combined) {
      result = [...result, combined[current]];
      break;
    } else if (dozen in combined) {
      result = [...result, combined[dozen]];
    }

    current = rest;
    size = rest.toString().length;
  }

  if (result.length === 1) {
    return result.join(' ');
  }

  if (result.length === 2) {
    return result.join('-');
  }

  return [
    result.slice(0, 1),
    result.slice(1, 2),
    result.slice(2).join('-'),
  ].join(' ');
};

const getDecimalName = (index: number): string => {
  return thousands[index];
};
