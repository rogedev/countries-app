import { Country } from '../types/Country';

export function filterCountriesByName({ countries, name }: Params): Array<Country> {
  const filteredCountries = new Array<Country>();

  for (const country of countries) {
    const countryMatchName = country.name.toLowerCase().includes(name.toLowerCase());

    if (countryMatchName) filteredCountries.push(country);
  }

  return filteredCountries;
}

type Params = {
  countries: Array<Country>;
  name: string;
};
