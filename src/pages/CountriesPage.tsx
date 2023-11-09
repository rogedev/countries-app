import React from 'react';
import { useState, useEffect } from 'react';
import { Country } from '../types/Country';
import { getCountries } from '../services/getCountries';
import { CountriesList } from '../components/CountriesList';
import { FiltersSection } from '../components/layout/FiltersSection';
import { Page } from '../components/layout/Page';

export function CountriesPage() {
  const [allCountries, setAllCountries] = useState<Countries>([]);
  const [filteredCountries, setFilteredCountries] = useState<Countries>(allCountries);

  useEffect(() => {
    getCountries().then((countries) => {
      setAllCountries(countries);
      setFilteredCountries(countries);
    });
  }, []);

  return (
    <Page>
      <FiltersSection
        countries={allCountries}
        onFilter={(countries) => setFilteredCountries(countries)}
      />
      <CountriesList countries={filteredCountries} />
    </Page>
  );
}

type Countries = Array<Country>;
