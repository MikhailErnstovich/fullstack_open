import { useState, useEffect } from 'react'
import List from './components/List';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(res => setPersons(res.data));
  }, []);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <PersonForm  persons={persons} setPersons={setPersons} />
      <List nameFilter={nameFilter} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App