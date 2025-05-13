import { convert as pl } from './pl';
import { convert as cz } from './cz';
import { convert as en } from './en';

const langMap = {
  pl,
  cz,
  en
}

export const toText = (value: number | string, lang: string = 'pl'): string => {
  const numberValue = Number(value);

  if (isNaN(numberValue)) {
    throw new Error('Invalid number value.');
  }

  if (numberValue < 0) {
    throw new Error('Value must be greater than 0.');
  }

  const converter = langMap[lang];

  if (!converter) {
    throw new Error('Invalid language.');
  }

  return converter(numberValue);
}
