import { ConverterResult } from '../types';

const units = [
  '',
  'ein',
  'zwei',
  'drei',
  'vier',
  'fünf',
  'sechs',
  'sieben',
  'acht',
  'neun',
  'zehn',
  'elf',
  'zwölf',
  'dreizehn',
  'vierzehn',
  'fünfzehn',
  'sechzehn',
  'siebzehn',
  'achtzehn',
  'neunzehn',
];

const tens = [
  '',
  '',
  'zwanzig',
  'dreißig',
  'vierzig',
  'fünfzig',
  'sechzig',
  'siebzig',
  'achtzig',
  'neunzig',
];

const scales = ['', 'tausend', 'Million', 'Milliarde', 'Billion'];

const convertLessThanThousand = (n: number): string => {
  if (n === 0) return '';
  if (n < 20) return units[n];
  if (n < 100) {
    const unit = n % 10;
    const ten = Math.floor(n / 10);
    return unit === 0 ? tens[ten] : `${units[unit]}und${tens[ten]}`;
  }
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;
  return remainder === 0 ? `${units[hundred]}hundert` : `${units[hundred]}hundert ${convertLessThanThousand(remainder)}`;
};

const convertLessThanThousandToWords = (n: number): string => {
  if (n === 0) return 'null';
  return convertLessThanThousand(n);
};

export const convert = (n: number): ConverterResult => {
  if (n === 0) {
    return {
      text: 'null',
      integer: 0,
      decimal: 0,
      fractionValue: 'null',
      numberValue: 'null'
    };
  }

  const integerPart = Math.floor(n);
  const decimalPart = Math.round((n - integerPart) * 100);

  const integerWords = convertLessThanThousandToWords(integerPart);
  const decimalWords = decimalPart === 0 ? '0/100' : `${decimalPart}/100`;

  return {
    text: decimalPart === 0 ? integerWords : `${integerWords} und ${decimalWords}`,
    integer: integerPart,
    decimal: decimalPart,
    fractionValue: decimalWords,
    numberValue: integerWords
  };
}; 