import { Country } from '../../types/Country';
import { CountryCode } from '../../types/CountryCode';

export const countriesFromAsia = new Array<Country>({
  name: 'United Arab Emirates',
  nativeName: 'الإمارات العربية المتحدة',
  population: 9890400,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Abu Dhabi',
  tld: '.ae',
  currencies: ['United Arab Emirates dirham'],
  languages: ['Arabic'],
  borders: ['OMN', 'SAU'] as Array<CountryCode>,
  flag: {
    img: 'https://flagcdn.com/w320/ae.png',
    alt: 'The flag of United Arab Emirates features a red vertical band on its hoist side that takes up about one-fourth the width of the field and three equal horizontal bands of green, white and black adjoining the vertical band.',
  },
  code: 'AE' as CountryCode,
});
