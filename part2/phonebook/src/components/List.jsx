import { useEffect, useState } from "react";
import personService from "../services/persons";
const List = (props) => {
  const { persons, setPersons, nameFilter } = props;
  const [filteredPersons, setFilteredPersons] = useState([]);

  const removePerson = (person) => {
    const { id, name, number } = person;
    if (window.confirm(`Do you want to delete ${name, number}?`)) {
      personService.remove(id)
        .then(() => setPersons(persons.filter(el => el.id !== id)))
        .catch((err) => {
          alert(err)
        });
    }
  }
  useEffect(() => {
    setFilteredPersons(nameFilter === '' ?
      persons :
      persons.filter(el => el.name.toLowerCase().includes(nameFilter.toLowerCase())))
  }, [nameFilter, persons]);


  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(el => {
          return (<li key={el.id}>{el.name} {el.number} <button onClick={() => removePerson(el)}> delete </button></li>)
        })}
      </ul>
    </>
  )
}

export default List