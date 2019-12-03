import { addCommas, isInteger } from '../utils';

const unity = {
  0: '',
  1: 'jeden',
  2: 'dwa',
  3: 'trzy',
  4: 'cztery',
  5: 'pięć',
  6: 'sześć',
  7: 'siedem',
  8: 'osiem',
  9: 'dziewięć',
};

const teens = {
  11: 'jedenaście',
  12: 'dwanaście',
  13: 'trzynaście',
  14: 'czternaście',
  15: 'piętnaście',
  16: 'szesnaście',
  17: 'siedemnaście',
  18: 'osiemnaście',
  19: 'dziewiętnaście',
};

const dozens = {
  10: 'dziesięć',
  20: 'dwadzieścia',
  30: 'trzydzieści',
  40: 'czterdzieści',
  50: 'pięćdziesiąt',
  60: 'sześćdziesiąt',
  70: 'siedemdziesiąt',
  80: 'osiemdziesiąt',
  90: 'dziewięćdziesiąt',
};

const hundreds = {
  100: 'sto',
  200: 'dwieście',
  300: 'trzysta',
  400: 'czterysta',
  500: 'piećset',
  600: 'sześćset',
  700: 'siedemset',
  800: 'osiemset',
  900: 'dziewięćset',
};

const thousands = {
  1000: ['tysiąc', 'tysiące', 'tysięcy'],
  1000000: ['milion', 'miliony', 'milionów'],
  1000000000: ['miliard', 'miliardy', 'miliardów'],
  1000000000000: ['trylion', 'tryliony', 'trylionów'],
};

export const convert = (value: number) => {
  let size = value.toString().length;

  let currentValue = value;
  let decimal = null;

  if (!isInteger(value)) {
    decimal = value % 1;
    currentValue = value - decimal;
    size = currentValue.toString().length;
  }

  let results = toWords(currentValue, size);

  if (decimal) {
    const [, leftover] = decimal.toFixed(2).split('.');
    results = [...results, 'i', `${leftover}/100`];
  }

  return results.join(' ');
};

const toWords = (current: number, size: number): string[] => {
  let result = [];

  while (size) {
    const multiplier = current >= 20 ? Math.pow(10, size - 1) : 1;
    const rest = current % multiplier;
    const dozen = current - rest;
    const firstDigit = dozen / multiplier;
    const humanized = addCommas(dozen);
    const [firstPart] = humanized.split(',');

    if (firstPart in unity) {
      result = [...result, unity[firstPart]];
    } else if (firstPart in teens) {
      result = [...result, teens[firstPart]];
    } else if (firstPart in dozens) {
      result = [...result, dozens[firstPart]];
    } else if (firstPart in hundreds) {
      result = [...result, hundreds[firstPart]];
    }

    result = [...result, getSuffix(firstDigit, multiplier)];
    size = size - 1;
    current = rest;
  }

  return result.filter(Boolean);
};

const getSuffix = (value: number, multiplier: number): string | null => {
  if (multiplier in thousands) {
    const [single, plural, multiple] = thousands[multiplier];
    if (value === 1) {
      return single;
    }

    if ([2, 3, 4].indexOf(value) > -1) {
      return plural;
    }

    return multiple;
  }

  return null;
};
