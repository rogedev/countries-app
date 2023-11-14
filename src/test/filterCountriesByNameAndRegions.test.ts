import { Regions } from '../constants/Regions';
import { filterCountriesByNameAndRegions } from '../services/filterCountriesByNameAndRegions';
import { Country } from '../types/Country';
import { CountryCode } from '../types/CountryCode';
import { countriesFromAmerica } from './data/countriesFromAmerica';
import { countriesFromAsia } from './data/countriesFromAsia';
import { countriesFromOceania } from './data/countriesFromOceania';

test('filterCountriesByNameAndRegions test', () => {
  const givenCountries = new Array<Country>(
    ...countriesFromAmerica,
    ...countriesFromOceania,
    ...countriesFromAsia,
  );

  expect(
    filterCountriesByNameAndRegions({
      name: 'uni',
      regions: [Regions.AMERICA, Regions.ASIA],
      countries: givenCountries,
    }),
  ).toMatchObject([
    {
      name: 'United States Minor Outlying Islands',
      nativeName: 'United States Minor Outlying Islands',
      population: 300,
      region: 'Americas',
      subRegion: 'North America',
      capital: 'Washington DC',
      tld: '.us',
      currencies: ['United States dollar'],
      languages: ['English'],
      flag: {
        img: 'https://flagcdn.com/w320/um.png',
        alt: 'United States Minor Outlying Islands Flag',
      },
      code: 'UM' as CountryCode,
    },
    {
      name: 'United States Virgin Islands',
      nativeName: 'Virgin Islands of the United States',
      population: 106290,
      region: 'Americas',
      subRegion: 'Caribbean',
      capital: 'Charlotte Amalie',
      tld: '.vi',
      currencies: ['United States dollar'],
      languages: ['English'],
      flag: { img: 'https://flagcdn.com/w320/vi.png', alt: 'United States Virgin Islands Flag' },
      code: 'VI' as CountryCode,
    },
    {
      name: 'United States',
      nativeName: 'United States of America',
      population: 329484123,
      region: 'Americas',
      subRegion: 'North America',
      capital: 'Washington, D.C.',
      tld: '.us',
      currencies: ['United States dollar'],
      languages: ['English'],
      borders: ['CAN', 'MEX'] as Array<CountryCode>,
      flag: {
        img: 'https://flagcdn.com/w320/us.png',
        alt: 'The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton.',
      },
      code: 'US' as CountryCode,
    },
    {
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
    },
  ]);
});
