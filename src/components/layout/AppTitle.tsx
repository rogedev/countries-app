import React from 'react';
import { Typography } from '@mui/material';

export function AppTitle(): JSX.Element {
  return (
    <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
      Where in the world?
    </Typography>
  );
}
