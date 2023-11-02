import axios from 'axios';
import { CountryFromApi } from '../types/CountryFromApi';

export async function getCountryFromApi(name: string): Promise<CountryFromApi> {
  const response = await axios.get<CountryFromApi>(
    `https://restcountries.com/v3.1/name/${name}/?fullText=true`,
  );
  return response.data;
}
