import { ConverterResult } from '../types';

const units = [
  '',
  'jeden',
  'dwa',
  'trzy',
  'cztery',
  'pięć',
  'sześć',
  'siedem',
  'osiem',
  'dziewięć',
  'dziesięć',
  'jedenaście',
  'dwanaście',
  'trzynaście',
  'czternaście',
  'piętnaście',
  'szesnaście',
  'siedemnaście',
  'osiemnaście',
  'dziewiętnaście',
];

const tens = [
  '',
  '',
  'dwadzieścia',
  'trzydzieści',
  'czterdzieści',
  'pięćdziesiąt',
  'sześćdziesiąt',
  'siedemdziesiąt',
  'osiemdziesiąt',
  'dziewięćdziesiąt',
];

const scales = ['', 'tysiąc', 'milion', 'miliard', 'bilion'];

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
  return remainder === 0 ? `${units[hundred]}set` : `${units[hundred]}set ${convertLessThanThousand(remainder)}`;
};

const convertToWords = (n: number): string => {
  if (n === 0) return 'zero';
  if (n < 1000) return convertLessThanThousand(n);

  let words = '';
  let scaleIndex = 0;
  let remainder = n;

  while (remainder > 0) {
    const chunk = remainder % 1000;
    if (chunk !== 0) {
      const chunkWords = convertLessThanThousand(chunk);
      if (scaleIndex > 0) {
        const scale = scales[scaleIndex];
        if (chunk === 1) {
          words = scale + (words ? ' ' + words : '');
        } else if (chunk > 1 && chunk < 5) {
          const plural = scale === 'tysiąc' ? 'tysiące' : scale + 'y';
          words = chunkWords + ' ' + plural + (words ? ' ' + words : '');
        } else {
          const plural = scale === 'tysiąc' ? 'tysięcy' : scale + 'ów';
          words = chunkWords + ' ' + plural + (words ? ' ' + words : '');
        }
      } else {
        words = chunkWords;
      }
    }
    remainder = Math.floor(remainder / 1000);
    scaleIndex++;
  }

  return words;
};

export const convert = (n: number): ConverterResult => {
  if (n === 0) {
    return {
      text: 'zero',
      integerText: '0',
      decimalText: '0/100',
      integerValue: 0,
      decimalValue: 0
    };
  }

  const integerPart = Math.floor(n);
  const decimalPart = Math.floor((n - integerPart) * 100);

  const integerWords = convertToWords(integerPart);
  const decimalWords = `${decimalPart}/100`;

  return {
    text: decimalPart === 0 ? integerWords : `${integerWords} i ${decimalWords}`,
    integerText: integerWords,
    decimalText: decimalWords,
    integerValue: integerPart,
    decimalValue: decimalPart
  };
};
