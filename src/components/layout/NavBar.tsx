import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { ThemeToggle } from './ThemeToggle';
import { AppTitle } from './AppTitle';

export function NavBar(): JSX.Element {
  return (
    <AppBar position='static' color='default' elevation={0}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <AppTitle />
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
