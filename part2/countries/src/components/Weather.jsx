import { useState, useEffect } from 'react';
import services from '../services';

const Weather = (props) => {
  const { location } = props;
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    services.weatherService.getCurrentWeather(location)
      .then(d => setWeather(d))
      .catch(err => console.log(err))
  }, [location])
  return (
    <article>
      {
        weather && <>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Region: {weather.location.region}</p>
          <p>Location: {weather.location.lat}, {weather.location.lon}</p>
          <figure>
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
            <figcaption>{weather.current.condition.text}</figcaption>
          </figure>

        </>
      }
    </article>
  )
}


export default Weather
