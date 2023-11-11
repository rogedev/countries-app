import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Page } from '../components/layout/Page';
import { getCountry } from '../services/getCountry';
import { Country } from '../types/Country';
import { CountryCode } from '../types/CountryCode';
import { formatPopulation } from '../utils/formatPopulation';
import { Border } from '../types/Border';
import { getBordersListFromCountryBorders } from '../services/getBordersListFromCountryBorders';
import { Error404Page } from './Error404Page';
import { LoadingProgress } from '../components/layout/LoadingProgress';

export function CountryPage() {
  const params = useParams<Params>();
  const [country, setCountry] = useState<Country>();
  const [borders, setBorders] = useState<Array<Border>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadCountryDetails(params.countryCode as CountryCode).then;
  }, []);

  const loadCountryDetails = async (countryCode: CountryCode) => {
    setIsLoading(true);

    getCountry(countryCode)
      .then((country) => {
        setCountry(country);
        getBordersListFromCountryBorders(country.borders ?? []).then((borders) =>
          setBorders(borders),
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  if (isLoading) return <LoadingProgress />;

  if (!country) return <Error404Page />;

  return (
    <Page>
      <Link to={'/'}>
        <Button variant='contained' color='inherit'>
          back
        </Button>
      </Link>
      <Grid>
        <Card>
          <CardMedia
            component='div'
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={country.flag.img}
          />
        </Card>
        <Card>
          <CardContent
            sx={{
              flexGrow: 1,
            }}
          >
            <h1>{country.name}</h1>
            <Typography>Native Name: {country.nativeName}</Typography>
            <Typography>Population: {formatPopulation(country.population)}</Typography>
            <Typography>Region: {country.region}</Typography>
            <Typography>Subregion: {country.subRegion}</Typography>
            <Typography>Capital: {country.capital}</Typography>
            <Typography>Top level domain: {country.tld}</Typography>
            <Typography>Currencies: {country.currencies.join(', ')}</Typography>
            <Typography>Languages: {country.languages.join(', ')}</Typography>
          </CardContent>
          <CardActions>
            {borders?.map((border) => (
              <Link key={border.code} to={`/country/${border.code.toLowerCase()}`}>
                <Button
                  variant='contained'
                  color='inherit'
                  sx={{
                    textTransform: 'none',
                  }}
                  onClick={() => loadCountryDetails(border.code)}
                >
                  {border.name}
                </Button>
              </Link>
            ))}
          </CardActions>
        </Card>
      </Grid>
    </Page>
  );
}

type Params = {
  countryCode: CountryCode;
};
