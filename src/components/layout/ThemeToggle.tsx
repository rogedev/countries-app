import React, { useState } from 'react';
import { ToggleButton, Box, IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { setThemeMode } from '../../redux/settings';

export function ThemeToggle() {
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector((state) => state.userSettings);
  const [toggleIsActive, setToggleIsActive] = useState(false);

  const handleToggleTheme = () => {
    setToggleIsActive(!toggleIsActive);
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <ToggleButton
        sx={{ my: 1, mx: 1.5 }}
        value={toggleIsActive}
        selected={themeMode === 'dark'}
        onChange={handleToggleTheme}
      />

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={handleToggleTheme} color='inherit'>
          {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </>
  );
}
