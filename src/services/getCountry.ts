import { Country } from '../types/Country';
import { getCountryFromApi } from '../api/getCountryFromApi';
import { mapCountryFromApiToCountry } from './mapCountryFromApiToCountry';

export async function getCountry(name: string): Promise<Country> {
  const country = await getCountryFromApi(name);
  return mapCountryFromApiToCountry(country);
}
