import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function AppTitle(): JSX.Element {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Link to='/'>
        <Typography variant='h6' color='inherit' noWrap>
          Where in the world?
        </Typography>
      </Link>
    </Box>
  );
}
