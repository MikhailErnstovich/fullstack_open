import { useState } from 'react';
import Card from './Card';

const ListItem = (props) => {
  const {
    country: {
      name: {
        common: name
      }
    }
  } = props;
  const [cardVisible, setCardVisible] = useState(false);
  return (
    <li>
      <div style={{ display: 'inline-flex', gap: '1em' }}>
        <span>{name}</span>
        <button onClick={() => setCardVisible(!cardVisible)}>
          {cardVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      {cardVisible && <Card country={props.country} />}
    </li>
  )
}

const List = (props) => {
  const { filteredCountries, filterValue } = props;
  return (
    <>
      <ul>
        {
          filteredCountries.length < 11 ?
            filteredCountries.map(el => (<ListItem country={el} key={el.name.common} />)) :
            filterValue ?
              <li>Too many matches, specify another filter</li> :
              null
        }
      </ul>
    </>
  )
}

export default List
