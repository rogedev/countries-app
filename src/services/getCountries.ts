import { Country } from '../types/Country';
import { getCountriesFromApi } from '../api/getCountriesFromApi';
import { mapCountryFromApiToCountry } from './mapCountryFromApiToCountry';

export async function getCountries(): Promise<Array<Country>> {
  const countriesFromApi = await getCountriesFromApi();
  return countriesFromApi.map(mapCountryFromApiToCountry);
}
