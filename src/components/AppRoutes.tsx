import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CountriesPage } from '../pages/CountriesPage';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<CountriesPage />} />
    </Routes>
  );
}
