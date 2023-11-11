import axios from 'axios';
import { CountryFromApi } from '../types/CountryFromApi';
import { CountryCode } from '../types/CountryCode';

export async function getCountriesFromApiByCountryCodes(
  countryCodes: Array<CountryCode>,
): Promise<Array<CountryFromApi>> {
  return await axios
    .get<Array<CountryFromApi>>(
      `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(',')}`,
    )
    .then((res) => res.data);
}
