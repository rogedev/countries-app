import { filterCountriesByName } from '../services/filterCountriesByName';
import { Country } from '../types/Country';
import { CountryCode } from '../types/CountryCode';
import { countriesFromAmerica } from './data/countriesFromAmerica';
import { countriesFromOceania } from './data/countriesFromOceania';

test('filterCountriesByName Test', () => {
  const givenCountries = new Array<Country>(...countriesFromAmerica, ...countriesFromOceania);

  expect(
    filterCountriesByName({
      countries: givenCountries,
      name: '1313bbad',
    }),
  ).toMatchObject([]);

  expect(
    filterCountriesByName({
      countries: givenCountries,
      name: 'mex',
    }),
  ).toMatchObject([
    {
      name: 'Mexico',
      nativeName: 'Estados Unidos Mexicanos',
      population: 128932753,
      region: 'Americas',
      subRegion: 'North America',
      capital: 'Mexico City',
      tld: '.mx',
      currencies: ['Mexican peso'],
      languages: ['Spanish'],
      borders: ['BLZ', 'GTM', 'USA'],
      flag: {
        img: 'https://flagcdn.com/w320/mx.png',
        alt: 'The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band.',
      },
      code: '' as CountryCode,
    },
  ]);
});
