import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Country } from '../../types/Country';
import { Region } from '../../constants/Regions';
import { filterCountriesByName } from '../../services/filterCountriesByName';
import { filterCountriesByRegions } from '../../services/filterCountriesByRegions';
import { CountryNameTextField } from '../form/CountryNameTextField';
import { RegionSelect } from '../form/RegionSelect';
import { isEmptyArray } from '../../utils/isEmptyArray';
import { filterCountriesByNameAndRegions } from '../../services/filterCountriesByNameAndRegions';

export function FiltersSection({ countries, onFilter }: Props): JSX.Element {
  const [name, setName] = useState<string>();
  const [regions, setRegions] = useState<Array<Region>>([]);

  useEffect(() => {
    onFilter(filterCountries());
  }, [name, regions]);

  const filterCountries = (): Array<Country> => {
    let filteredCountries = countries;

    if (name && !isEmptyArray(regions)) {
      filteredCountries = filterCountriesByNameAndRegions({
        countries,
        name,
        regions,
      });
    }

    if (!name && !isEmptyArray(regions)) {
      filteredCountries = filterCountriesByRegions({
        countries,
        regions,
      });
    }

    if (name && isEmptyArray(regions)) {
      filteredCountries = filterCountriesByName({
        countries,
        name,
      });
    }

    return filteredCountries;
  };

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
      <CountryNameTextField onChange={(name: string) => setName(name)} />
      <RegionSelect onChange={(regions: Array<Region>) => setRegions(regions)} />
    </Grid>
  );
}

type Props = {
  countries: Array<Country>;
  onFilter: (countries: Array<Country>) => void;
};
