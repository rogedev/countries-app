import axios from 'axios';
import { CountryFromApi } from '../types/CountryFromApi';

export async function getCountriesFromApi() {
  const { data } = await axios.get<Response>('https://restcountries.com/v3.1/all');
  return data;
}

type Response = Array<CountryFromApi>;
