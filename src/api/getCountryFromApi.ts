import axios from 'axios';
import { CountryFromApi } from '../types/CountryFromApi';

export async function getCountryFromApi(name: string): Promise<CountryFromApi> {
  return await axios
    .get<CountryFromApi>(`https://restcountries.com/v3.1/name/${name}/?fullText=true`)
    .then((res) => res.data);
}
