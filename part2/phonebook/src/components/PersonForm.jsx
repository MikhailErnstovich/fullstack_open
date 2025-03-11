import { useState } from 'react'
import personService from '../services/persons';
import Message from './Message';

const PersonForm = (props) => {
  const { persons, setPersons } = props;
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const [messageVisible, setMessageVisible] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messageType, setMessageType] = useState('');
  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewNumber = (e) => setNewNumber(e.target.value);

  const updateNumber = (existedPerson, newNumber) =>
    personService.update(existedPerson.id, { name: existedPerson.name, number: newNumber })
      .then(() => setPersons(persons.map(el => el.id === existedPerson.id ? { ...el, number: newNumber } : el)))



  const addPerson = () => personService.create({ name: newName, number: newNumber })
    .then(res => setPersons([...persons, res]))

  const handlePerson = (e) => {
    e.preventDefault();
    const existedPerson = persons.find(el => el.name === newName);
    if (existedPerson) {
      if (window.confirm(`Do you want to change number of ${existedPerson.name} with ${newNumber} ?`)) {
        updateNumber(existedPerson, newNumber)
          .then(() => {
            setMessageType('success');
            setMessageText(`Person's number was changed to ${newNumber}`);
            setMessageVisible(true);
            setTimeout(() => setMessageVisible(false), 5000);
          })
          .catch(err => {
            setMessageType('error');
            setMessageText(err.message);
            setMessageVisible(true);
            setTimeout(() => setMessageVisible(false), 5000);
          });
      }
    } else {
      addPerson()
        .then(() => {
          setMessageType('success');
          setMessageText(`Person ${newName} ${newNumber} was added to the phonebook`);
          setMessageVisible(true);
          setTimeout(() => setMessageVisible(false), 5000);
        })
        .catch(err => {
          setMessageType('error');
          setMessageText(err.message);
          setMessageVisible(true);
          setTimeout(() => setMessageVisible(false), 5000);
        })
    }
    setNewName('');
    setNewNumber('');
  }


  return (
    <form>
      {messageVisible && <Message text={messageText} type={messageType} />}
      <fieldset style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <legend>Add person</legend>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit" onClick={handlePerson}>add</button>
        </div>
      </fieldset>
    </form>

  )
}

export default PersonForm;