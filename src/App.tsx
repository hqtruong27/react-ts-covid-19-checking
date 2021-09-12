import React, { ChangeEvent, ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import Country from './components/countries';
import Highlight from './components/highlight';
import Summary from './components/summary';
import CovidApi from './components/api/index';

function App() {

  const [countries, setCountries] = useState<[]>([])

  useEffect(() => {
    CovidApi.countries().then(response => {
      setCountries(response.data)
    }).catch(error => console.log(error))
  }, [])

  const handleOnChange = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>): void => {

  }

  return (
    <>
      <Country value={''} countries={countries} onChange={handleOnChange} />
      <Summary />
      <Highlight />
    </>
  );
}

export default App;
