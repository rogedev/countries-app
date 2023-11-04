import { Region } from '../constants/Regions';
import { Country } from '../types/Country';

export function filterCountriesByRegion({ countries, region }: Params): Array<Country> {
  const filteredCountries = [];

  for (const country of countries) {
    const countryMatchRegion = country.region.toLowerCase() === region.toLocaleLowerCase();

    if (countryMatchRegion) filteredCountries.push(country);
  }

  return filteredCountries;
}

type Params = {
  countries: Array<Country>;
  region: Region;
};
