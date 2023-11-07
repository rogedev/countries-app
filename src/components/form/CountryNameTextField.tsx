import * as React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export function CountryNameTextField({ onChange }: Params): JSX.Element {
  return (
    <FormControl
      sx={{
        m: 1,
        width: 300,
      }}
    >
      <TextField
        label='Search for a country...'
        variant='outlined'
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
}

type Params = {
  onChange: (value: string) => void;
};
