import { ConverterResult } from '../types';

const units = [
  '',
  'uno',
  'dos',
  'tres',
  'cuatro',
  'cinco',
  'seis',
  'siete',
  'ocho',
  'nueve',
  'diez',
  'once',
  'doce',
  'trece',
  'catorce',
  'quince',
  'dieciséis',
  'diecisiete',
  'dieciocho',
  'diecinueve',
];

const tens = [
  '',
  '',
  'veinte',
  'treinta',
  'cuarenta',
  'cincuenta',
  'sesenta',
  'setenta',
  'ochenta',
  'noventa',
];

const scales = ['', 'mil', 'millón', 'mil millones', 'billón'];

const convertLessThanThousand = (n: number): string => {
  if (n === 0) return '';
  if (n < 20) return units[n];
  if (n < 100) {
    const unit = n % 10;
    const ten = Math.floor(n / 10);
    if (ten === 2 && unit > 0) {
      if (unit === 1) return 'veintiuno';
      if (unit === 3) return 'veintitrés';
      return `veinti${units[unit]}`;
    }
    return unit === 0 ? tens[ten] : `${tens[ten]} y ${units[unit]}`;
  }
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;
  if (hundred === 1) {
    return remainder === 0 ? 'ciento' : `ciento ${convertLessThanThousand(remainder)}`;
  }
  return remainder === 0 ? `${units[hundred]}cientos` : `${units[hundred]}cientos ${convertLessThanThousand(remainder)}`;
};

const convertLessThanThousandToWords = (n: number): string => {
  if (n === 0) return 'cero';
  return convertLessThanThousand(n);
};

const convertToWords = (n: number): string => {
  if (n === 0) return 'cero';
  
  let words = '';
  let scaleIndex = 0;
  
  while (n > 0) {
    const chunk = n % 1000;
    if (chunk !== 0) {
      let chunkWords = convertLessThanThousand(chunk);
      if (scaleIndex > 0) {
        if (chunk === 1 && scaleIndex === 1) {
          chunkWords = 'un';
        }
        chunkWords += ` ${scales[scaleIndex]}`;
        if (chunk !== 1 && scaleIndex > 1) {
          chunkWords += 'es';
        }
      }
      words = chunkWords + (words ? ' ' + words : '');
    }
    n = Math.floor(n / 1000);
    scaleIndex++;
  }
  
  return words;
};

export const convert = (n: number): ConverterResult => {
  if (n === 0) {
    return {
      text: 'cero',
      integerText: 'cero',
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
    text: decimalPart === 0 ? integerWords : `${integerWords} y ${decimalWords}`,
    integerText: integerWords,
    decimalText: decimalWords,
    integerValue: integerPart,
    decimalValue: decimalPart
  };
}; 