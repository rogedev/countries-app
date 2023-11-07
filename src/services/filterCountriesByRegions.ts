import { Region } from '../constants/Regions';
import { Country } from '../types/Country';
import { isEmptyArray } from '../utils/isEmptyArray';

export function filterCountriesByRegions({ countries, regions }: Params): Array<Country> {
  if (!regions || isEmptyArray(regions)) return countries;

  const filteredCountries = new Array<Country>();

  for (const country of countries) {
    const countryMatchRegion = regions.includes(country.region);

    if (countryMatchRegion) filteredCountries.push(country);
  }

  return filteredCountries;
}

type Params = {
  countries: Array<Country>;
  regions?: Array<Region>;
};
