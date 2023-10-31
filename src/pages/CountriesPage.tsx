import React from 'react';
import { useState, useEffect } from 'react';
import { Country } from '../types/Country';
import { getCountries } from '../services/getCountries';
import { CountriesList } from '../components/CountriesList';
import { filterCountriesByName } from '../services/filterCountriesByName';
import { Typography } from '@mui/material';
import { NavBar } from '../components/layout/NavBar';

export function CountriesPage(): JSX.Element {
  const [allCountries, setAllCountries] = useState<Countries>([]);
  const [filteredCountries, setFilteredCountries] = useState<Countries>(allCountries);

  useEffect(() => {
    getCountries().then((countries) => {
      setAllCountries(countries);
      setFilteredCountries(countries);
      console.log(JSON.stringify(countries));
    });
  }, []);

  const handleFilterByName = (name: string) => {
    setFilteredCountries(
      filterCountriesByName({
        countries: allCountries,
        name: name,
      }),
    );
  };

  return (
    <>
      <NavBar />
      <Typography>{'Testing'}</Typography>
      <input type='text' onChange={(e) => handleFilterByName(e.target.value)} />
      <CountriesList countries={filteredCountries} />
    </>
  );
}

type Countries = Array<Country>;
