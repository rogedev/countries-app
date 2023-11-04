import React from 'react';
import { useState, useEffect } from 'react';
import { Country } from '../types/Country';
import { getCountries } from '../services/getCountries';
import { CountriesList } from '../components/CountriesList';
import { Container } from '@mui/material';
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

  return (
    <main>
      <NavBar />
      <Container sx={{ py: 8 }} maxWidth='xl'>
        <CountriesList countries={filteredCountries} />
      </Container>
    </main>
  );
}

type Countries = Array<Country>;
