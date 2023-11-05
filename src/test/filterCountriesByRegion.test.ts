import { Country } from '../types/Country';
import { filterCountriesByRegion } from '../services/filterCountriesByRegion';
import { Regions } from '../constants/Regions';

test('filterCountriesByRegion Test', () => {
  const countriesFromAmerica: Array<Country> = [
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
      code: '',
    },
    {
      name: 'Cuba',
      nativeName: 'República de Cuba',
      population: 11326616,
      region: 'Americas',
      subRegion: 'Caribbean',
      capital: 'Havana',
      tld: '.cu',
      currencies: ['Cuban convertible peso', 'Cuban peso'],
      languages: ['Spanish'],
      flag: {
        img: 'https://flagcdn.com/w320/cu.png',
        alt: 'The flag of Cuba is composed of five equal horizontal bands of blue alternating with white and a red equilateral triangle superimposed on the hoist side of the field. The triangle has its base on the hoist end, spans about two-fifth the width of the field and bears a white five-pointed star at its center.',
      },
      code: '',
    },
  ];

  const countriesFromOceania: Array<Country> = [
    {
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
      code: '',
    },
  ];

  const givenCountries: Array<Country> = [...countriesFromAmerica, ...countriesFromOceania];

  expect(
    filterCountriesByRegion({
      countries: givenCountries,
      regions: [Regions.OCEANIA],
    }),
  ).toMatchObject(countriesFromOceania);

  expect(
    filterCountriesByRegion({
      countries: givenCountries,
      regions: [Regions.AMERICA],
    }),
  ).toMatchObject(countriesFromAmerica);

  expect(
    filterCountriesByRegion({
      countries: givenCountries,
      regions: [Regions.AMERICA, Regions.OCEANIA],
    }),
  ).toMatchObject([...countriesFromAmerica, ...countriesFromOceania]);

  expect(
    filterCountriesByRegion({
      countries: givenCountries,
      regions: [],
    }),
  ).toMatchObject([...countriesFromAmerica, ...countriesFromOceania]);

  expect(
    filterCountriesByRegion({
      countries: givenCountries,
    }),
  ).toMatchObject([...countriesFromAmerica, ...countriesFromOceania]);

  expect(
    filterCountriesByRegion({
      countries: givenCountries,
      regions: [Regions.ASIA],
    }),
  ).toMatchObject([]);
});
