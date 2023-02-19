import { convert as pl } from './pl';
import { convert as cz } from './cz';
import { convert as en } from './en';

const langMap = {
  pl,
  cz,
  en
}

export class DigitWords {
  private converter: (value: number) => string;;

  constructor(lang: string = 'pl') {
    this.converter = langMap[lang];
  }

  toWords(value: number): string {
    if (!(typeof value === 'number')) {
      throw new Error('Value must be type number.');
    }

    if (value < 0) {
      throw new Error('Value must be greater than 0.');
    }

    return this.converter(value);
  }
}
