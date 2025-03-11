import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import List from './components/List';
import Card from './components/Card';
import services from './services/index';

function App() {
  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    services.countryService.getAll()
      .then(data => setCountries(data))
      .catch(err => console.log(err));
  }, [])


  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(countries.filter(el => el.name.common.toLowerCase().includes(filterValue.toLocaleLowerCase())));
  }, [countries, filterValue]);

  return (
    <>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      {
        filteredCountries.length !== 1 ?
          <List filteredCountries={filteredCountries} filterValue={filterValue} /> :
          <Card country={filteredCountries[0]} />
      }
    </>
  )
}

export default App
