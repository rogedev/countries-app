import React from 'react';
import { Country } from '../types/Country';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { formatPopulation } from '../utils/formatPopulation';
import { Link } from 'react-router-dom';

export function CountryCard({ country }: Params): JSX.Element {
  const handleClick = () => console.log(country);

  return (
    <Grid item key={country.name} xs={6} sm={3} md={3}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={handleClick}
      >
        <Link to={`/country/${country.code}`}>
          <CardMedia
            component='div'
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={country.flag.img}
          />
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h5' component='h2'>
            {country.name}
          </Typography>
          <Typography>Population: {formatPopulation(country.population)}</Typography>
          <Typography>Region: {country.region}</Typography>
          <Typography>Capital: {country.capital}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

type Params = {
  country: Country;
};
