import { ConverterResult } from '../types';

const units = [
  '',
  'un',
  'deux',
  'trois',
  'quatre',
  'cinq',
  'six',
  'sept',
  'huit',
  'neuf',
  'dix',
  'onze',
  'douze',
  'treize',
  'quatorze',
  'quinze',
  'seize',
  'dix-sept',
  'dix-huit',
  'dix-neuf',
];

const tens = [
  '',
  '',
  'vingt',
  'trente',
  'quarante',
  'cinquante',
  'soixante',
  'soixante-dix',
  'quatre-vingts',
  'quatre-vingt-dix',
];

const teens = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];

const convertLessThanThousand = (n: number): string => {
  if (n === 0) return '';
  if (n < 10) return units[n];
  if (n < 20) {
    return teens[n - 10];
  }
  if (n < 100) {
    const unit = n % 10;
    const ten = Math.floor(n / 10);
    if (ten === 7) {
      // Special case for 70-79
      return unit === 0 ? 'soixante-dix' : `soixante-${teens[unit - 10]}`;
    }
    if (ten === 8) {
      // Special case for 80-89
      return unit === 0 ? 'quatre-vingts' : `quatre-vingt-${units[unit]}`;
    }
    if (ten === 9) {
      // Special case for 90-99
      return unit === 0 ? 'quatre-vingt-dix' : `quatre-vingt-${teens[unit - 10]}`;
    }
    // Special case for 21, 31, 41, etc.
    if (unit === 1 && ten !== 8) {
      return `${tens[ten]} et un`;
    }
    return unit === 0 ? tens[ten] : `${tens[ten]}-${units[unit]}`;
  }
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;
  if (hundred === 1) {
    return remainder === 0 ? 'cent' : `cent ${convertLessThanThousand(remainder)}`;
  }
  return remainder === 0 ? `${units[hundred]} cents` : `${units[hundred]} cent ${convertLessThanThousand(remainder)}`;
};

const convertToWords = (n: number): string => {
  if (n === 0) return 'zéro';
  if (n < 1000) return convertLessThanThousand(n);
  
  if (n < 1000000) {
    const thousands = Math.floor(n / 1000);
    const remainder = n % 1000;
    const thousandsText = thousands === 1 ? 'mille' : `${convertLessThanThousand(thousands)} mille`;
    return remainder === 0 ? thousandsText : `${thousandsText} ${convertLessThanThousand(remainder)}`;
  }
  
  if (n < 1000000000) {
    const millions = Math.floor(n / 1000000);
    const remainder = n % 1000000;
    const millionsText = millions === 1 ? 'un million' : `${convertLessThanThousand(millions)} millions`;
    return remainder === 0 ? millionsText : `${millionsText} ${convertToWords(remainder)}`;
  }
  
  return convertLessThanThousand(n);
};

export const convert = (n: number): ConverterResult => {
  if (n === 0) {
    return {
      text: 'zéro',
      integerText: 'zéro',
      decimalText: '0/100',
      integerValue: 0,
      decimalValue: 0
    };
  }

  const integerPart = Math.floor(n);
  const decimalPart = Math.round((n - integerPart) * 100);

  const integerWords = convertToWords(integerPart);
  const decimalWords = decimalPart === 0 ? '0/100' : `${decimalPart}/100`;

  return {
    text: decimalPart === 0 ? integerWords : `${integerWords} et ${decimalWords}`,
    integerText: integerWords,
    decimalText: decimalWords,
    integerValue: integerPart,
    decimalValue: decimalPart
  };
}; 