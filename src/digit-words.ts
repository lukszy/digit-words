import * as pl from './pl';

type Language = 'pl';
const converters = {
  pl,
};

export class DigitWords {
  constructor(private lang: Language = 'pl') {
    if (!(lang in converters)) {
      const supported = Object.keys(converters).join(', ');
      throw new Error(
        `Language is NOT yet supported. Supported languages: ${supported}`,
      );
    }
  }

  toWords(value: number): string {
    if (!(typeof value === 'number')) {
      throw new Error('Value must be type number.');
    }

    if (value < 0) {
      throw new Error('Value must be greater than 0.');
    }

    return converters[this.lang].convert(value);
  }
}
