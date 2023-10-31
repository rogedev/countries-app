import React from 'react';
import { Country } from '../types/Country';
import { CountryCard } from './CountryCard';

export function CountriesList({ countries }: Params): JSX.Element {
  return (
    <>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </>
  );
}

type Params = {
  countries: Array<Country>;
};
