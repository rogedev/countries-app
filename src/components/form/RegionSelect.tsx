import React, { useState } from 'react';
import {
  Select,
  FormControl,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Box,
  Chip,
  SelectChangeEvent,
} from '@mui/material';
import { Regions, Region } from '../../constants/Regions';

export function RegionSelect({ onChange }: Params): JSX.Element {
  const [selectedRegions, setSelectedRegions] = useState<Array<Region>>([]);
  const regions = Object.values(Regions);

  const handleChange = (event: SelectChangeEvent<Array<Region>>) => {
    setSelectedRegions(event.target.value as Array<Region>);
    onChange(event.target.value as Array<Region>);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Filter By Region</InputLabel>
        <Select
          multiple
          value={selectedRegions}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {regions.map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

type Params = {
  onChange: (regions: Array<Region>) => void;
};
