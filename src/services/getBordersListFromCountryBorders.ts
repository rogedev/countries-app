import { Border } from '../types/Border';
import { CountryCode } from '../types/CountryCode';
import { mapCountryToBorder } from '../utils/mapCountryToBorder';
import { getCountry } from './getCountry';

export async function getBordersListFromCountryBorders(
  borders?: Array<CountryCode>,
): Promise<Array<Border>> {
  if (!borders) return [];
  const borderCountries = await Promise.all(borders.map(getCountry));
  return borderCountries.map(mapCountryToBorder);
}
