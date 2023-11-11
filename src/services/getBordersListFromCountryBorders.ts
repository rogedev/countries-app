import { getCountriesFromApiByCountryCodes } from '../api/getCountriesFromApiByCountryCodes';
import { Border } from '../types/Border';
import { CountryCode } from '../types/CountryCode';
import { mapCountryFromApiToCountry } from '../utils/mapCountryFromApiToCountry';
import { mapCountryToBorder } from '../utils/mapCountryToBorder';

export async function getBordersListFromCountryBorders(
  borders?: Array<CountryCode>,
): Promise<Array<Border>> {
  if (!borders) return [];
  const borderCountries = await getCountriesFromApiByCountryCodes(borders);
  return borderCountries.map(mapCountryFromApiToCountry).map(mapCountryToBorder);
}
