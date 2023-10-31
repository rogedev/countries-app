import type { Region } from '../constants/Regions';
import axios from 'axios';

export async function getCountriesFromApi() {
  const { data } = await axios.get<Response>('https://restcountries.com/v3.1/all');
  return data;
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
