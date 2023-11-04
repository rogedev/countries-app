import { Country } from '../types/Country';
import { CountryFromApi } from '../types/CountryFromApi';

export function mapCountryFromApiToCountry(countryFromApi: CountryFromApi): Country {
  return {
    name: countryFromApi.name.common,
    nativeName: Object.values(countryFromApi.name.nativeName ?? {})[0]?.official,
    population: countryFromApi.population,
    region: countryFromApi.region,
    subRegion: countryFromApi.subregion,
    capital: (countryFromApi.capital ?? [])[0],
    tld: (countryFromApi.tld ?? [])[0],
    currencies: Object.values(countryFromApi.currencies ?? {}).map((currency) => currency.name),
    languages: Object.values(countryFromApi.languages ?? {}),
    borders: countryFromApi.borders,
    flag: {
      img: countryFromApi.flags.png ?? countryFromApi.flags.svg,
      alt: countryFromApi.flags.alt ?? `${countryFromApi.name.common} Flag`,
    },
  };
}
