import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export function Error404Page(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: purple[500],
      }}
    >
      <Typography
        variant='h1'
        style={{
          color: 'white',
        }}
      >
        404
      </Typography>

      <Typography
        variant='h6'
        style={{
          color: 'white',
        }}
      >
        {"The page youre looking for doesn't exist."}
      </Typography>

      <Link to='/'>
        <Button
          sx={{
            margin: 10,
          }}
          variant='contained'
        >
          Back Home
        </Button>
      </Link>
    </Box>
  );
}
