import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CountriesPage } from '../pages/CountriesPage';
import { CountryPage } from '../pages/CountryPage';
import { Error404Page } from '../pages/Error404Page';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' Component={CountriesPage} />
      <Route path='/country/:countryCode' Component={CountryPage} />
      <Route path='*' Component={Error404Page} />
    </Routes>
  );
}
