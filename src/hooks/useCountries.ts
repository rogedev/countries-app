import { Country } from '../types/Country';
import { useAppDispatch, useAppSelector } from './redux';
import { getCountries } from '../services/getCountries';
import { useEffect } from 'react';
import { setCountries } from '../redux/countriesRedux';

export function useCountries(): Array<Country> {
  const { countries } = useAppSelector((state) => state.countryList);

  if (Array.isArray(countries) && countries.length > 0) return countries;

  const dispatch = useAppDispatch();

  useEffect(() => {
    getCountries().then((countries) => dispatch(setCountries(countries)));
  }, []);

  return useAppSelector((state) => state.countryList.countries);
}
