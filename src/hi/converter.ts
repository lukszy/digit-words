import { ConverterResult } from '../types';

const units = [
  '',
  'एक',
  'दो',
  'तीन',
  'चार',
  'पांच',
  'छह',
  'सात',
  'आठ',
  'नौ',
  'दस',
  'ग्यारह',
  'बारह',
  'तेरह',
  'चौदह',
  'पंद्रह',
  'सोलह',
  'सत्रह',
  'अठारह',
  'उन्नीस',
];

const dozens = [
  '',
  '',
  'बीस',
  'तीस',
  'चालीस',
  'पचास',
  'साठ',
  'सत्तर',
  'अस्सी',
  'नब्बे',
];

const hundreds = [
  '',
  'एक सौ',
  'दो सौ',
  'तीन सौ',
  'चार सौ',
  'पांच सौ',
  'छह सौ',
  'सात सौ',
  'आठ सौ',
  'नौ सौ',
];

const thousands = [
  '',
  'एक हजार',
  'दो हजार',
  'तीन हजार',
  'चार हजार',
  'पांच हजार',
  'छह हजार',
  'सात हजार',
  'आठ हजार',
  'नौ हजार',
];

const scales = ['', 'हजार', 'लाख', 'करोड़', 'अरब', 'खरब', 'नील', 'पद्म', 'शंख'];

const convertLessThanThousand = (n: number): string => {
  if (n === 0) return '';
  if (n < 20) return units[n];
  if (n < 100) {
    const unit = n % 10;
    const ten = Math.floor(n / 10);
    return unit ? `${dozens[ten]} ${units[unit]}` : dozens[ten];
  }
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;
  const prefix = hundred === 1 ? 'एक सौ' : `${hundreds[hundred]} सौ`;
  return remainder ? `${prefix} ${convertLessThanThousand(remainder)}` : prefix;
};

const convertLessThanThousandToWords = (n: number): string => {
  if (n === 0) return 'शून्य';
  return convertLessThanThousand(n);
};

export const convert = (n: number): ConverterResult => {
  if (n === 0) {
    return {
      text: 'शून्य',
      integer: 0,
      decimal: 0,
      fractionValue: 'शून्य',
      numberValue: 'शून्य'
    };
  }

  const integerPart = Math.floor(n);
  const decimalPart = Math.round((n - integerPart) * 100);

  const integerWords = convertLessThanThousandToWords(integerPart);
  const decimalWords = decimalPart === 0 ? '0/100' : `${decimalPart}/100`;

  return {
    text: `${integerWords} और ${decimalWords}`,
    integer: integerPart,
    decimal: decimalPart,
    fractionValue: decimalWords,
    numberValue: integerWords
  };
}; 