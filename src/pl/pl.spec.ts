import { convert, getSuffix } from './pl';

describe('PL', () => {
  describe('convert', () => {
    it('0', () => {
      expect(convert(0)).toEqual('');
    });

    it('123', () => {
      expect(convert(123)).toEqual('sto dwadzieścia trzy');
    });

    it('4232', () => {
      expect(convert(4232)).toEqual('cztery tysiące dwieście trzydzieści dwa');
    });

    it('77777', () => {
      expect(convert(77777)).toEqual(
        'siedemdziesiąt siedem tysięcy siedemset siedemdziesiąt siedem',
      );
    });
  });

  describe('getSuffix', () => {
    it('should render nothing for 23321', () => {
      const result = getSuffix(2, 10000);
      expect(result).toBe(null);
    });

    it('should render "tysiące" for 3232', () => {
      const result = getSuffix(3, 1000);
      expect(result).toBe('tysiące');
    });

    it('should render "milionów" for 6123123', () => {
      const result = getSuffix(6, 1000000);
      expect(result).toBe('milionów');
    });
  });
});
