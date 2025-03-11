import axios from 'axios';

const getCurrentWeather = (location) => 
  axios({
    url: '/current.json',
    baseURL: 'http://api.weatherapi.com/v1',
    method: 'get',
    params: {
      key: '76484c657a6148188cf141553251103',
      q: location
    },
  }).then(d => d.data);

export default {
  getCurrentWeather,
};
