import { convert } from './converter';

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
});
