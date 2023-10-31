import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from '../constants/RoutePaths';
import { CountriesPage } from '../pages/CountriesPage';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path={RoutePaths.BASE} element={<CountriesPage />} />
    </Routes>
  );
}
