import { ConverterResult } from '../types';

const units = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

const convertLessThanThousand = (n: number): string => {
  if (n === 0) return '';
  if (n < 20) return units[n];
  if (n < 100) {
    const unit = n % 10;
    const ten = Math.floor(n / 10);
    return unit === 0 ? tens[ten] : `${tens[ten]}-${units[unit]}`;
  }
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;
  return remainder === 0 ? `${units[hundred]} hundred` : `${units[hundred]} hundred ${convertLessThanThousand(remainder)}`;
};

const convertIntegerToWords = (n: number): string => {
  if (n === 0) return 'zero';

  const parts: string[] = [];
  let remainder = n;
  let scaleIndex = 0;

  while (remainder > 0) {
    const chunk = remainder % 1000;
    if (chunk !== 0) {
      const chunkWords = convertLessThanThousand(chunk);
      const scale = scales[scaleIndex];
      parts.unshift(scale ? `${chunkWords} ${scale}` : chunkWords);
    }
    remainder = Math.floor(remainder / 1000);
    scaleIndex++;
  }

  return parts.join(' ');
};

export const convert = (n: number): ConverterResult => {
  if (n === 0) {
    return {
      text: 'zero',
      integerText: 'zero',
      decimalText: '0/100',
      integerValue: 0,
      decimalValue: 0
    };
  }

  const integerPart = Math.floor(n);
  const decimalPart = Math.floor((n - integerPart) * 100);

  const integerWords = convertIntegerToWords(integerPart);
  const decimalWords = decimalPart === 0 ? '0/100' : `${decimalPart}/100`;

  return {
    text: decimalPart === 0 ? integerWords : `${integerWords} and ${decimalWords}`,
    integerText: integerWords,
    decimalText: decimalWords,
    integerValue: integerPart,
    decimalValue: decimalPart
  };
};
