import { Country } from '../types/Country';

export function filterCountriesByName({ countries, name }: Params): Array<Country> {
  const filteredCountries = [];
  for (const country of countries) {
    if (country.name.toLowerCase().includes(name.toLowerCase())) {
      filteredCountries.push(country);
    }
  }
  return filteredCountries;
}

type Params = {
  countries: Array<Country>;
  name: string;
};
