import Weather from './Weather';

const Card = (props) => {
  const {
    country: {
      name: {
        common: name
      },
      capital,
      area,
      population,
      languages,
      flags: {
        svg: flagSvgUrl,
        alt: flagAlt
      },
      latlng
    }
  } = props;

  const styles = {
    marginBottom: '2em'
  }
  const imgStyles = {
    maxWidth: '300px',
    height: 'max-content',
    border: '1px solid black'
  }
  const langStyles = {
    marginBottom: '1em'
  }
  return (
    <article style={styles}>
      <h1>{name}</h1>
      <p>Capital: {capital[0]}</p>
      <p>Area: {area} km<sup>2</sup></p>
      <p>Population: {population}</p>
      <h2>Languages</h2>
      <ul style={langStyles}>
        {Object.values(languages).map(el => (<li key={el}>{el}</li>))}
      </ul>
      <Weather location={`${latlng[0]},${latlng[1]}`} />
      <img src={flagSvgUrl} alt={flagAlt} style={imgStyles}/>
    </article>
  )
};

export default Card;