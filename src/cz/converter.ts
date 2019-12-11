import { breakNumber } from '../utils';

const unity = {
  0: '',
  1: 'jedna',
  2: 'dva',
  3: 'tři',
  4: 'čtyři',
  5: 'pět',
  6: 'šest',
  7: 'sedm',
  8: 'osm',
  9: 'devět',
};

const teens = {
  11: 'jedenáct',
  12: 'dvanáct',
  13: 'třináct',
  14: 'čtrnáct',
  15: 'patnáct',
  16: 'šestnáct',
  17: 'sedmnáct',
  18: 'osmnáct',
  19: 'devatenáct',
};

const dozens = {
  10: 'deset',
  20: 'dvacet',
  30: 'třicet',
  40: 'čtyřicet',
  50: 'padesát',
  60: 'šedesát',
  70: 'sedmdesát',
  80: 'osmdesát',
  90: 'devadesát',
};

const hundreds = {
  100: 'sto',
  200: 'dvě stě',
  300: 'tři sta',
  400: 'čtyři sta',
  500: 'pět set',
  600: 'šest set',
  700: 'sedm set',
  800: 'osm set',
  900: 'devět set',
};

const thousands = [
  [],
  ['tisíc', 'tisíc', 'tisíc'],
  ['milion', 'miliony', 'milionů'],
  ['miliarda', 'miliardy', 'miliard'],
  ['biliony', 'biliony', 'biliony'],
];

const combined = {
  ...unity,
  ...teens,
  ...dozens,
  ...hundreds,
};

export const convert = (value: number): string => {
  return breakNumber(value)
    .reverse()
    .reduce(
      (list, val, index) => [...list, getDecimalName(val, index), toWords(val)],
      [],
    )
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

const getDecimalName = (value: number, index: number): string => {
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
