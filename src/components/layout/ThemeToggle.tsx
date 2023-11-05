import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setThemeMode } from '../../redux/settings';
import { ThemeIcon } from './ThemeIcon';

export function ThemeToggle(): JSX.Element {
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector((state) => state.userSettings);
  const [toggleIsActive, setToggleIsActive] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <ThemeIcon
        themeMode={themeMode}
        onClick={() => {
          setToggleIsActive(!toggleIsActive);
          dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
        }}
      />
    </Box>
  );
}
