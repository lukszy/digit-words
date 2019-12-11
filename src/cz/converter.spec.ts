import { convert } from './converter';

describe('CZ', () => {
  describe('convert', () => {
    it('0', () => {
      expect(convert(0)).toEqual('');
    });

    it('123', () => {
      expect(convert(123)).toEqual('sto dvacet tři');
    });

    it('4232', () => {
      expect(convert(4232)).toEqual('čtyři tisíc dvě stě třicet dva');
    });

    it('77777', () => {
      expect(convert(77777)).toEqual(
        'sedmdesát sedm tisíc sedm set sedmdesát sedm',
      );
    });

    it('123323', () => {
      expect(convert(123323)).toEqual(
        'sto dvacet tři tisíc tři sta dvacet tři',
      );
    });

    it('4567531', () => {
      expect(convert(4567531)).toEqual(
        'čtyři miliony pět set šedesát sedm tisíc pět set třicet jedna',
      );
    });

    it('45675312', () => {
      expect(convert(45675312)).toEqual(
        'čtyřicet pět milionů šest set sedmdesát pět tisíc tři sta dvanáct',
      );
    });

    it('456753122', () => {
      expect(convert(456753122)).toEqual(
        'čtyři sta padesát šest milionů sedm set padesát tři tisíc sto dvacet dva',
      );
    });

    it('4567531221', () => {
      expect(convert(4567531221)).toEqual(
        'čtyři miliardy pět set šedesát sedm milionů pět set třicet jedna tisíc dvě stě dvacet jedna',
      );
    });

    it('45675312218', () => {
      expect(convert(45675312218)).toEqual(
        'čtyřicet pět miliard šest set sedmdesát pět milionů tři sta dvanáct tisíc dvě stě osmnáct',
      );
    });

    it('456753122184', () => {
      expect(convert(456753122184)).toEqual(
        'čtyři sta padesát šest miliard sedm set padesát tři miliony sto dvacet dva tisíc sto osmdesát čtyři',
      );
    });

    it('4567531221843', () => {
      expect(convert(4567531221843)).toEqual(
        'čtyři biliony pět set šedesát sedm miliard pět set třicet jedna milion dvě stě dvacet jedna tisíc osm set čtyřicet tři',
      );
    });
  });
});
