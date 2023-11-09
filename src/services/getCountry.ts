import { Country } from '../types/Country';
import { getCountryFromApi } from '../api/getCountryFromApi';
import { mapCountryFromApiToCountry } from '../utils/mapCountryFromApiToCountry';
import { CountryCode } from '../types/CountryCode';

export async function getCountry(countryCode: CountryCode): Promise<Country> {
  const country = await getCountryFromApi(countryCode);
  return mapCountryFromApiToCountry(country);
}
