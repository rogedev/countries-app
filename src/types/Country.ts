import { Region } from '../constants/Regions';

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
  borders: Array<string>;
  flag: {
    img: string;
    alt: string;
  };
};
