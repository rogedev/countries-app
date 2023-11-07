import axios from 'axios';
import { CountryFromApi } from '../types/CountryFromApi';

export async function getCountriesFromApi(): Promise<Array<CountryFromApi>> {
  return await axios
    .get<Array<CountryFromApi>>('https://restcountries.com/v3.1/all')
    .then((res) => res.data);
}
