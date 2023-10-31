import React, { useState } from 'react';
import { ToggleButton, Typography, AppBar, Toolbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setThemeMode } from '../../redux/settings';

export function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector((state) => state.userSettings);
  const [toggleIsActive, setToggleIsActive] = useState(false);

  const handleToggleTheme = () => {
    setToggleIsActive(!toggleIsActive);
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          {'Where in the world?'}
        </Typography>
        <ToggleButton
          value={toggleIsActive}
          selected={themeMode === 'dark'}
          onChange={handleToggleTheme}
        />
      </Toolbar>
    </AppBar>
  );
}
