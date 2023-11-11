import React from 'react';
import { PaletteMode } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { IconButton } from '@mui/material';
import { isDarkTheme } from '../../utils/isDarkTheme';

export function ThemeIcon({ themeMode, onClick }: Props): JSX.Element {
  return (
    <IconButton
      sx={{
        my: 1,
        mx: 1.5,
      }}
      onClick={onClick}
      color='inherit'
    >
      {isDarkTheme(themeMode) ? <LightModeIcon /> : <NightlightRoundIcon />}
    </IconButton>
  );
}

type Props = {
  themeMode: PaletteMode;
  onClick: () => void;
};
