type Language = 'pl' | 'en' | 'cz';

interface Converter {
  convert: (value: number) => string;
}

export class DigitWords {
  private converter: Converter;

  constructor(private lang: Language = 'pl') {
    try {
      this.converter = require(`./${lang}`);
    } catch (e) {
      throw new Error(`Language is NOT yet supported`);
    }
  }

  toWords(value: number): string {
    if (!(typeof value === 'number')) {
      throw new Error('Value must be type number.');
    }

    if (value < 0) {
      throw new Error('Value must be greater than 0.');
    }

    return this.converter.convert(value);
  }
}
