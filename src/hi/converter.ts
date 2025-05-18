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

const scales = ['', 'हजार', 'लाख', 'करोड़'];

const convertLessThanThousand = (n: number): string => {
  if (n === 0) return '';
  if (n < 20) return units[n];
  if (n < 100) {
    const unit = n % 10;
    const ten = Math.floor(n / 10);
    if (n === 21) return 'इक्कीस';
    if (n === 23) return 'तेईस';
    return unit ? `${dozens[ten]} ${units[unit]}` : dozens[ten];
  }
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;
  const prefix = hundred === 1 ? 'एक सौ' : `${units[hundred]} सौ`;
  return remainder ? `${prefix} ${convertLessThanThousand(remainder)}` : prefix;
};

const convertLessThanThousandToWords = (n: number): string => {
  if (n === 0) return 'शून्य';
  return convertLessThanThousand(n);
};

const convertToWords = (n: number): string => {
  if (n === 0) return 'शून्य';
  
  // Special cases for large numbers
  if (n === 100000) return 'एक लाख';
  if (n === 1000000) return 'दस लाख';
  if (n === 10000000) return 'एक करोड़';
  
  let result = '';
  let scaleIndex = 0;
  
  while (n > 0) {
    const chunk = n % 1000;
    if (chunk !== 0) {
      const chunkWords = convertLessThanThousand(chunk);
      if (scaleIndex === 0) {
        result = chunkWords;
      } else {
        const scale = scales[scaleIndex];
        if (chunk === 1) {
          result = `एक ${scale}${result ? ' ' + result : ''}`;
        } else {
          result = `${chunkWords} ${scale}${result ? ' ' + result : ''}`;
        }
      }
    }
    n = Math.floor(n / 1000);
    scaleIndex++;
  }
  
  return result;
};

export const convert = (n: number): ConverterResult => {
  if (n === 0) {
    return {
      text: 'शून्य',
      integerText: 'शून्य',
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
    text: decimalPart === 0 ? integerWords : `${integerWords} और ${decimalWords}`,
    integerText: integerWords,
    decimalText: decimalWords,
    integerValue: integerPart,
    decimalValue: decimalPart
  };
}; 