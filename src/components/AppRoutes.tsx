import React from 'react';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<p>hello world</p>} />
    </Routes>
  );
}
