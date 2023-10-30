import { Region } from '../constants/Regions';
import { Country } from '../types/Country';

export function filterCountriesByRegion({ countries, region }: Params): Array<Country> {
  const filteredCountries = [];
  for (const country of countries) {
    if (country.region.toLowerCase() === region.toLocaleLowerCase()) {
      filteredCountries.push(country);
    }
  }
  return filteredCountries;
}

type Params = {
  countries: Array<Country>;
  region: Region;
};
