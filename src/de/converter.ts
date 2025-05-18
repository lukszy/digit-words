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
  if (hundred === 1) {
    return remainder === 0 ? 'einhundert' : `einhundert ${convertLessThanThousand(remainder)}`;
  }
  return remainder === 0 ? `${units[hundred]}hundert` : `${units[hundred]}hundert ${convertLessThanThousand(remainder)}`;
};

const convertToWords = (n: number): string => {
  if (n === 0) return 'null';
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
          if (scale === 'tausend') {
            words = 'eintausend' + (words ? ' ' + words : '');
          } else {
            words = `eine ${scale}` + (words ? ' ' + words : '');
          }
        } else {
          let plural;
          if (scale === 'tausend') {
            plural = 'tausend';
            if (chunk === 10) {
              words = 'zehntausend' + (words ? ' ' + words : '');
            } else if (chunk === 100) {
              words = 'einhunderttausend' + (words ? ' ' + words : '');
            } else {
              words = chunkWords + ' ' + plural + (words ? ' ' + words : '');
            }
          } else if (scale === 'Million') {
            plural = chunk > 1 ? 'Millionen' : 'Million';
            words = chunkWords + ' ' + plural + (words ? ' ' + words : '');
          } else {
            plural = chunk > 1 ? scale + 'en' : scale;
            words = chunkWords + ' ' + plural + (words ? ' ' + words : '');
          }
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
      text: 'null',
      integerText: 'null',
      decimalText: '0/100',
      integerValue: 0,
      decimalValue: 0
    };
  }

  const integerPart = Math.floor(n);
  const decimalPart = Math.round((n - integerPart) * 100);

  const integerWords = convertToWords(integerPart);
  const decimalWords = `${decimalPart}/100`;

  return {
    text: decimalPart === 0 ? integerWords : `${integerWords} und ${decimalWords}`,
    integerText: integerWords,
    decimalText: decimalWords,
    integerValue: integerPart,
    decimalValue: decimalPart
  };
}; 