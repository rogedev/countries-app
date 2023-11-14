import { Region } from '../constants/Regions';
import { Country } from '../types/Country';
import { isEmptyArray } from '../utils/isEmptyArray';
import { filterCountriesByName } from './filterCountriesByName';
import { filterCountriesByRegions } from './filterCountriesByRegions';

export function filterCountriesByNameAndRegions({
  countries,
  name,
  regions,
}: Params): Array<Country> {
  const filteredCountries = filterCountriesByName({ countries, name });
  if (isEmptyArray(regions)) return filteredCountries;
  return filterCountriesByRegions({ countries: filteredCountries, regions });
}

type Params = {
  countries: Array<Country>;
  name: string;
  regions: Array<Region>;
};
