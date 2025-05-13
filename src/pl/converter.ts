import { breakNumber } from '../utils';

const unity = {
  0: 'zero',
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

const thousands = [
  [],
  ['tysiąc', 'tysiące', 'tysięcy'],
  ['milion', 'miliony', 'milionów'],
  ['miliard', 'miliardy', 'miliardów'],
  ['trylion', 'tryliony', 'trylionów'],
];

const combined = {
  ...unity,
  ...teens,
  ...dozens,
  ...hundreds,
};

export const convert = (value: number): string => {
  const { integer, decimal } = breakNumber(value);
  
  const integerPart = integer
    .reverse()
    .reduce(
      (list, val, index) => [...list, getDecimalName(val, index), toWords(val)],
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
  
  return `${integerPart} i ${decimalValue}/${denominator}`;
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

const getDecimalName = (value: number, index: number): string => {
  if (!value) return '';
  
  const [single, few, multiple] = thousands[index];
  const last = Number.parseInt(value.toString().slice(-1), 10);

  if (last === 1) {
    return single;
  }

  if ([2, 3, 4].includes(last)) {
    return few;
  }

  return multiple;
};
