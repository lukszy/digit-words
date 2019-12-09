import { convert } from './converter';

describe('EN', () => {
  describe('convert', () => {
    it('0', () => {
      expect(convert(0)).toEqual('');
    });

    it('123', () => {
      expect(convert(123)).toEqual('one hundred twenty-three');
    });

    it('4232', () => {
      expect(convert(4232)).toEqual('four thousand two hundred thirty-two');
    });

    it('77777', () => {
      expect(convert(77777)).toEqual(
        'seventy-seven thousand seven hundred seventy-seven',
      );
    });

    it('123323', () => {
      expect(convert(123323)).toEqual(
        'one hundred twenty-three thousand three hundred twenty-three',
      );
    });

    it('4567531', () => {
      expect(convert(4567531)).toEqual(
        'four million five hundred sixty-seven thousand five hundred thirty-one',
      );
    });

    it('45675312', () => {
      expect(convert(45675312)).toEqual(
        'forty-five million six hundred seventy-five thousand three hundred twelve',
      );
    });

    it('456753122', () => {
      expect(convert(456753122)).toEqual(
        'four hundred fifty-six million seven hundred fifty-three thousand one hundred twenty-two',
      );
    });

    it('4567531221', () => {
      expect(convert(4567531221)).toEqual(
        'four billion five hundred sixty-seven million five hundred thirty-one thousand two hundred twenty-one',
      );
    });

    it('45675312218', () => {
      expect(convert(45675312218)).toEqual(
        'forty-five billion six hundred seventy-five million three hundred twelve thousand two hundred eighteen',
      );
    });

    it('456753122184', () => {
      expect(convert(456753122184)).toEqual(
        'four hundred fifty-six billion seven hundred fifty-three million one hundred twenty-two thousand one hundred eighty-four',
      );
    });

    it('4567531221843', () => {
      expect(convert(4567531221843)).toEqual(
        'four trillion five hundred sixty-seven billion five hundred thirty-one million two hundred twenty-one thousand eight hundred forty-three',
      );
    });
  });
});
