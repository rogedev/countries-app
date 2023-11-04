import React from 'react';
import { Country } from '../types/Country';
import { CountryCard } from './CountryCard';
import { Grid } from '@mui/material';

export function CountriesList({ countries }: Params): JSX.Element {
  return (
    <Grid container spacing={4}>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </Grid>
  );
}

type Params = {
  countries: Array<Country>;
};
