import React from 'react';
import { Grid } from '@mui/material';
import { Country } from '../../types/Country';
import { Region } from '../../constants/Regions';
import { filterCountriesByName } from '../../services/filterCountriesByName';
import { filterCountriesByRegions } from '../../services/filterCountriesByRegions';
import { CountryNameTextField } from '../form/CountryNameTextField';
import { RegionSelect } from '../form/RegionSelect';

export function FiltersSection({ countries, onFilter }: Params): JSX.Element {
  return (
    <Grid marginBottom={10} container spacing={4}>
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

type Params = {
  countries: Array<Country>;
  onFilter: (countries: Array<Country>) => void;
};
