import axios from 'axios';
import { Country } from '../types/Country';
import { Region } from '../constants/Regions';

export async function getCountries(): Promise<Array<Country>> {
  const response = await axios.get<Response>('https://restcountries.com/v3.1/all');

  return response.data.map((country) => ({
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

type Response = Array<{
  name: {
    common: string;
    official: string;
    nativeName?: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  population: number;
  region: Region;
  subregion: string;
  capital?: Array<string>;
  tld?: Array<string>;
  currencies?: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  languages: Record<string, string>;
  borders: Array<string>;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}>;
