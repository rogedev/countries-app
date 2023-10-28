import { Country } from '../types/Country';
import { getCountriesFromApi } from '../api/getCountriesFromApi';

export async function getCountries(): Promise<Array<Country>> {
  const countries = await getCountriesFromApi();
  return countries.map((country) => ({
    name: country.name.common,
    nativeName: Object.values(country.name.nativeName ?? {})[0]?.official,
    population: country.population,
    region: country.region,
    subRegion: country.subregion,
    capital: (country.capital ?? [])[0],
    tld: (country.tld ?? [])[0],
    currencies: Object.values(country.currencies ?? {}).map((currency) => currency.name),
    languages: Object.values(country.languages ?? {}),
    borders: country.borders,
    flag: {
      img: country.flags.png ?? country.flags.svg,
      alt: country.flags.alt ?? `${country.name.common} Flag`,
    },
  }));
}
