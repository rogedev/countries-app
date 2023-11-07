import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export function CountryNameTextField({ onChange }: Params): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <SearchIcon
        sx={{
          color: 'action.active',
          mr: 2,
          my: 2,
        }}
      />
      <TextField
        label='Search for a country...'
        variant='outlined'
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
}

type Params = {
  onChange: (value: string) => void;
};
