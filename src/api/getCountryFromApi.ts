import axios from 'axios';
import { CountryFromApi } from '../types/CountryFromApi';
import { CountryCode } from '../types/CountryCode';

export async function getCountryFromApi(countryCode?: CountryCode): Promise<CountryFromApi> {
  return await axios
    .get<Array<CountryFromApi>>(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then((res) => res.data[0]);
}
