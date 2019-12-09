import {
  isInteger,
  addCommas,
  isBetween,
  getLowestValue,
  breakValue,
} from '../utils';

const unity = {
  0: '',
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
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const hundreds = {
  100: 'one hundred',
  200: 'two hundred',
  300: 'three hundred',
  400: 'four hundred',
  500: 'five hundred',
  600: 'six hundred',
  700: 'seven hundred',
  800: 'eight hundred',
  900: 'nine hundred',
};

const thousands = [null, 'thousand', 'milion', 'miliard', 'bilion'];

const combined = {
  ...unity,
  ...teens,
  ...dozens,
  ...hundreds,
};

export const convert = (value: number): string => {
  return breakValue(value)
    .reduce((list, val, index) => {
      return [...list, getDecimalName(index), toWords(val)];
    }, [])
    .reverse()
    .join(' ')
    .trim();
};

const toWords = (value: number): string => {
  let current = value;
  let result = [];
  let size = value.toString().length;

  while (current) {
    const rest = current % Math.pow(10, size - 1);
    const dozen = current - rest;

    if (current in combined) {
      result = [...result, combined[current]];
      break;
    }

    if (dozen in combined) {
      result = [...result, combined[dozen]];
    }

    current = rest;
    size = rest.toString().length;
  }

  return result.join(' ');
};

const getDecimalName = (index: number): string => {
  return thousands[index];
};
