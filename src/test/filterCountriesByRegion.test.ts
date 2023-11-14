import { Country } from '../types/Country';
import { filterCountriesByRegions } from '../services/filterCountriesByRegions';
import { Regions } from '../constants/Regions';
import { countriesFromOceania } from './data/countriesFromOceania';
import { countriesFromAmerica } from './data/countriesFromAmerica';
import { countriesFromAsia } from './data/countriesFromAsia';

test('filterCountriesByRegion Test', () => {
  const givenCountries = new Array<Country>(
    ...countriesFromAmerica,
    ...countriesFromOceania,
    ...countriesFromAsia,
  );

  expect(
    filterCountriesByRegions({
      countries: givenCountries,
      regions: [Regions.OCEANIA],
    }),
  ).toMatchObject(countriesFromOceania);

  expect(
    filterCountriesByRegions({
      countries: givenCountries,
      regions: [Regions.AMERICA],
    }),
  ).toMatchObject(countriesFromAmerica);

  expect(
    filterCountriesByRegions({
      countries: givenCountries,
      regions: [Regions.AMERICA, Regions.OCEANIA],
    }),
  ).toMatchObject([...countriesFromAmerica, ...countriesFromOceania]);

  expect(
    filterCountriesByRegions({
      countries: givenCountries,
      regions: [],
    }),
  ).toMatchObject([...countriesFromAmerica, ...countriesFromOceania, ...countriesFromAsia]);

  expect(
    filterCountriesByRegions({
      countries: givenCountries,
    }),
  ).toMatchObject(givenCountries);

  expect(
    filterCountriesByRegions({
      countries: givenCountries,
      regions: [Regions.ASIA],
    }),
  ).toMatchObject([...countriesFromAsia]);

  expect(
    filterCountriesByRegions({
      countries: givenCountries,
      regions: [Regions.EUROPE],
    }),
  ).toMatchObject([]);
});
