import React from 'react';
import { Country } from '../types/Country';
import { Paper, Button, Typography, Box, Stack } from '@mui/material';
import { CountryCode } from '../types/CountryCode';
import { formatPopulation } from '../utils/formatPopulation';
import { Border } from '../types/Border';
import { isEmptyArray } from '../utils/isEmptyArray';
import { Link } from 'react-router-dom';

export function CountryDetails({ country, borders, onClickBorder }: Props): JSX.Element {
  return (
    <Stack
      direction={{
        md: 'row',
        xs: 'column',
      }}
      alignItems={{
        md: 'center',
        xs: 'start',
      }}
      justifyContent='start'
      gap={{
        md: '7.75rem',
      }}
    >
      <img src={country.flag.img} alt={country.flag.alt} className='country-detail' />
      <Box sx={{ flex: '1' }}>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '1.25rem',
            letterSpacing: '-0.065em',
          }}
          variant='subtitle1'
        >
          {country.name}
        </Typography>
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          justifyContent={{
            md: 'space-between',
            xs: 'start',
          }}
          sx={{ marginBlock: '2rem' }}
        >
          <Box>
            <Typography variant='subtitle2'>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: '-0.065em',
                  fontWeight: '600',
                }}
              >
                {'Native Name: '}
              </span>
              {country.nativeName}
            </Typography>

            <Typography variant='subtitle2'>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: '-0.065em',
                  fontWeight: '600',
                }}
              >
                {'Population: '}
              </span>
              {formatPopulation(country.population)}
            </Typography>

            <Typography>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: '-0.065em',
                  fontWeight: '600',
                }}
              >
                {'Region: '}
              </span>
              {country.region}
            </Typography>

            <Typography>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: '-0.065em',
                  fontWeight: '600',
                }}
              >
                {'Sub Region: '}
              </span>
              {country.subRegion}
            </Typography>

            <Typography>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: '-0.065em',
                  fontWeight: '600',
                }}
              >
                {'Capital: '}
              </span>
              {country.capital}
            </Typography>
          </Box>

          <Box
            sx={{
              marginBlock: {
                md: 0,
                xs: '2.5rem',
              },
            }}
          >
            <Typography>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: '-0.065em',
                  fontWeight: '600',
                }}
              >
                {'Top Level Domain: '}
              </span>
              {country.tld}
            </Typography>
            <Typography>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: '-0.065em',
                  fontWeight: '600',
                }}
              >
                {'Currencies: '}
              </span>
              {country.currencies.map((currency) => `${currency} `)}
            </Typography>
            <Typography>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: '-0.065em',
                  fontWeight: '600',
                }}
              >
                {'Languages: '}
              </span>
              {country.languages.toString()}
            </Typography>
          </Box>
        </Stack>

        <Typography
          sx={{
            mb: {
              xs: '3rem',
              md: 0,
            },
          }}
        >
          <span
            style={{
              fontSize: '1rem',
              letterSpacing: '-0.065em',
              fontWeight: '700',
            }}
          >
            {'Border Countries: '}
          </span>
          {!isEmptyArray(borders)
            ? borders.map((border, id) => (
                <Link key={id} to={`/country/${border.code.toLowerCase()}`}>
                  <Button key={id} onClick={() => onClickBorder(border.code)}>
                    <Paper
                      elevation={2}
                      key={id}
                      sx={{
                        display: 'box',
                        px: '1rem',
                        textDecoration: 'none',
                      }}
                    >
                      {border.name}
                    </Paper>
                  </Button>
                </Link>
              ))
            : 'No border'}
        </Typography>
      </Box>
    </Stack>
  );
}

type Props = {
  country: Country;
  borders: Array<Border>;
  onClickBorder: (countryCode: CountryCode) => void;
};
