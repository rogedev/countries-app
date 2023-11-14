import { Country } from '../../types/Country';
import { CountryCode } from '../../types/CountryCode';

export const countriesFromOceania = new Array<Country>({
  name: 'Australia',
  nativeName: 'Commonwealth of Australia',
  population: 25687041,
  region: 'Oceania',
  subRegion: 'Australia and New Zealand',
  capital: 'Canberra',
  tld: '.au',
  currencies: ['Australian dollar'],
  languages: ['English'],
  flag: {
    img: 'https://flagcdn.com/w320/au.png',
    alt: 'The flag of Australia has a dark blue field. It features the flag of the United Kingdom — the Union Jack — in the canton, beneath which is a large white seven-pointed star. A representation of the Southern Cross constellation, made up of one small five-pointed and four larger seven-pointed white stars, is situated on the fly side of the field.',
  },
  code: '' as CountryCode,
});
