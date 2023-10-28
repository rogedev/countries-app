import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from '../constants/RoutePaths';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path={RoutePaths.BASE} element={<p>hello world</p>} />
    </Routes>
  );
}
