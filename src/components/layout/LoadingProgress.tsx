import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export function LoadingProgress(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
