import { Region } from '../constants/Regions';
import { CountryCode } from './CountryCode';

export type CountryFromApi = {
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
  borders: Array<CountryCode>;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  cca2: CountryCode;
};
