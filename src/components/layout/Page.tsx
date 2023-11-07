import React from 'react';
import { Container } from '@mui/material';
import { NavBar } from './NavBar';

export function Page({ children }: Props): JSX.Element {
  return (
    <main>
      <NavBar />
      <Container sx={{ py: 8 }} maxWidth='xl'>
        {children}
      </Container>
    </main>
  );
}

interface Props {
  children: React.ReactNode;
}
