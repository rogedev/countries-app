import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, StyledEngineProvider } from '@mui/material';
import { useAppSelector } from '../hooks/redux';

export const MuiTheme = ({ children }: Props): JSX.Element => {
  const { themeMode } = useAppSelector((state) => state.userSettings);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

interface Props {
  children: React.ReactNode;
}
