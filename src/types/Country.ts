import { Region } from '../constants/Regions';
import { CountryCode } from './CountryCode';

export type Country = {
  name: string;
  nativeName: string;
  population: number;
  region: Region;
  subRegion: string;
  capital: string;
  tld: string;
  currencies: Array<string>;
  languages: Array<string>;
  borders?: Array<CountryCode>;
  flag: {
    img: string;
    alt: string;
  };
  code: CountryCode;
};
