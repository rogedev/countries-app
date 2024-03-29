import React from 'react';
import { Grid } from '@mui/material';
import { Country } from '../types/Country';
import { CountryCard } from './CountryCard';

export function CountriesList({ countries }: Props): JSX.Element {
  return (
    <Grid container spacing={4}>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </Grid>
  );
}

type Props = {
  countries: Array<Country>;
};
