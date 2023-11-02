import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import settingsReducer, { persistSettingsConfig } from './settings';
import countriesReducer, { persistCountriesConfig } from './countriesRedux';

export const store = configureStore({
  reducer: {
    userSettings: persistReducer<ReturnType<typeof settingsReducer>>(
      persistSettingsConfig,
      settingsReducer,
    ),
    countryList: persistReducer<ReturnType<typeof countriesReducer>>(
      persistCountriesConfig,
      countriesReducer,
    ),
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
