import React from 'react';
import { Grid } from '@mui/material';
import { Country } from '../../types/Country';
import { Region } from '../../constants/Regions';
import { filterCountriesByName } from '../../services/filterCountriesByName';
import { filterCountriesByRegions } from '../../services/filterCountriesByRegions';
import { CountryNameTextField } from '../form/CountryNameTextField';
import { RegionSelect } from '../form/RegionSelect';

export function FiltersSection({ countries, onFilter }: Props): JSX.Element {
  return (
    <Grid
      marginBottom={10}
      container
      spacing={4}
      sx={{
        flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CountryNameTextField
        onChange={(name: string) =>
          onFilter(
            filterCountriesByName({
              countries,
              name,
            }),
          )
        }
      />
      <RegionSelect
        onChange={(regions?: Array<Region>) =>
          onFilter(
            filterCountriesByRegions({
              countries,
              regions,
            }),
          )
        }
      />
    </Grid>
  );
}

type Props = {
  countries: Array<Country>;
  onFilter: (countries: Array<Country>) => void;
};
