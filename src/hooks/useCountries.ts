import { Country } from '../types/Country';
import { useAppSelector } from './redux';
import { isEmptyArray } from '../utils/isEmptyArray';
import { reloadCountries } from './reloadCountries';

export function useCountries(): Array<Country> {
  const countries = useAppSelector((state) => state.countryList.countries);
  if (isEmptyArray(countries)) return reloadCountries();
  return countries;
}
