import { ConverterResult } from '../types';

const units = [
  '',
  'jedan',
  'dva',
  'tri',
  'četiri',
  'pet',
  'šest',
  'sedam',
  'osam',
  'devet',
  'deset',
  'jedanaest',
  'dvanaest',
  'trinaest',
  'četrnaest',
  'petnaest',
  'šesnaest',
  'sedamnaest',
  'osamnaest',
  'devetnaest',
];

const tens = [
  '',
  '',
  'dvadeset',
  'trideset',
  'četrdeset',
  'pedeset',
  'šezdeset',
  'sedamdeset',
  'osamdeset',
  'devedeset',
];

const scales = ['', 'tisuću', 'milijun', 'milijarda', 'bilijun'];

const convertLessThanThousand = (n: number): string => {
  if (n === 0) return '';
  if (n < 20) return units[n];
  if (n < 100) {
    const unit = n % 10;
    const ten = Math.floor(n / 10);
    return unit === 0 ? tens[ten] : `${tens[ten]} ${units[unit]}`;
  }
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;
  if (hundred === 1) {
    return remainder === 0 ? 'sto' : `sto ${convertLessThanThousand(remainder)}`;
  }
  return remainder === 0 ? `${units[hundred]}sto` : `${units[hundred]}sto ${convertLessThanThousand(remainder)}`;
};

const convertLessThanThousandToWords = (n: number): string => {
  if (n === 0) return 'nula';
  return convertLessThanThousand(n);
};

export const convert = (n: number): ConverterResult => {
  if (n === 0) {
    return {
      text: 'nula',
      integer: 0,
      decimal: 0,
      fractionValue: 'nula',
      numberValue: 'nula'
    };
  }

  const integerPart = Math.floor(n);
  const decimalPart = Math.round((n - integerPart) * 100);

  const integerWords = convertLessThanThousandToWords(integerPart);
  const decimalWords = decimalPart === 0 ? '0/100' : `${decimalPart}/100`;

  return {
    text: decimalPart === 0 ? integerWords : `${integerWords} i ${decimalWords}`,
    integer: integerPart,
    decimal: decimalPart,
    fractionValue: decimalWords,
    numberValue: integerWords
  };
}; 