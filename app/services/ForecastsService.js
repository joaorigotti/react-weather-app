import axios from 'axios';
import config from '../config';

const ForecastsService = {

  get(cities) {
    let promises = [];

    cities.forEach((city) => {
      promises.push(axios.get('http://api.openweathermap.org/data/2.5/forecast/', {
        params: {
          appid: config.APP_ID,
          q: `${city},br`,
          units: 'metric',
        }
      }));
    });

    return Promise.all(promises);
  }

}

export default ForecastsService;
