import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const initialState: Settings = {
  themeMode: 'light',
};

const settingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
      state.themeMode = action.payload;
    },
  },
});

export const persistSettingsConfig = {
  key: 'userSettings',
  storage,
  whiteList: ['themeMode'],
};

export const { setThemeMode } = settingsSlice.actions;

export default settingsSlice.reducer;

type Settings = { themeMode: PaletteMode };
