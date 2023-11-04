import { useEffect } from 'react';
import { getCountries } from '../services/getCountries';
import { setCountries } from '../redux/countriesRedux';
import { useAppDispatch, useAppSelector } from './redux';
import { Country } from '../types/Country';

export function reloadCountries(): Array<Country> {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCountries().then((countries) => dispatch(setCountries(countries)));
  }, []);

  return useAppSelector((state) => state.countryList.countries);
}
