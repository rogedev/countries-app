import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { Country } from '../types/Country';

const initialState: { countries: Array<Country> } = { countries: [] };

const countriesSlice = createSlice({
  name: 'localStorageCountries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Array<Country>>) => {
      state.countries = action.payload;
    },
  },
});

export const persistCountriesConfig = {
  key: 'countriesPersist',
  storage,
  whiteList: ['countries'],
};

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
