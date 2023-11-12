import React, { useEffect, useState } from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Page } from '../components/layout/Page';
import { getCountry } from '../services/getCountry';
import { Country } from '../types/Country';
import { CountryCode } from '../types/CountryCode';
import { Error404Page } from './Error404Page';
import { LoadingProgress } from '../components/layout/LoadingProgress';
import { CountryDetails } from '../components/CountryDetails';
import { ArrowBack } from '@mui/icons-material';
import { getBordersListFromCountryBorders } from '../services/getBordersListFromCountryBorders';
import { Border } from '../types/Border';

export function CountryPage() {
  const params = useParams<Params>();
  const [country, setCountry] = useState<Country>();
  const [borders, setBorders] = useState<Array<Border>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadCountryDetails(params.countryCode as CountryCode);
  }, []);

  const loadCountryDetails = async (countryCode: CountryCode) => {
    setIsLoading(true);
    getCountry(countryCode)
      .then((country) => {
        setCountry(country);
        getBordersListFromCountryBorders(country.borders).then((borders) => {
          setBorders(borders);
          setIsLoading(false);
        });
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
      <Box
        sx={{
          marginInline: {
            md: '3rem',
            lg: '5rem',
            xs: '1rem',
          },
        }}
      >
        <Link to='/' aria-label='home page'>
          <Paper
            sx={{
              display: 'inline-block',
              gap: '8px',
              marginBlock: {
                md: '3rem',
                xs: '1.5rem',
              },
              paddingInline: '1.5rem',
            }}
            elevation={2}
          >
            <IconButton>
              <ArrowBack />
            </IconButton>
            <Typography
              sx={{
                textDecoration: 'none',
                display: 'inline',
                fontFamily: 'Nunito Sans',
              }}
            >
              Back
            </Typography>
          </Paper>
        </Link>
        <CountryDetails country={country} borders={borders} onClickBorder={loadCountryDetails} />
      </Box>
    </Page>
  );
}

type Params = {
  countryCode: CountryCode;
};
