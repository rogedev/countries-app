import React from 'react';
import { Country } from '../types/Country';
import { Card, CardContent, CardHeader } from '@mui/material';

export function CountryCard({ country }: Params): JSX.Element {
  return (
    <>
      <Card>
        <CardHeader>
          <img src={country.flag.img} alt={country.flag.alt} />
        </CardHeader>
        <CardContent>
          <p>{country.name}</p>
          <p>{country.region}</p>
        </CardContent>
      </Card>
    </>
  );
}

type Params = {
  country: Country;
};
