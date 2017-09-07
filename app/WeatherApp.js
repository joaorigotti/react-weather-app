import React, { Component } from 'react';
import { Link } from 'react-router';
import ForecastsService from './services/ForecastsService';
import DateHelper from './helpers/DateHelper';
import ForecastArrayHelper from './helpers/ForecastArrayHelper';
import HeaderAppComponent from './components/HeaderAppComponent';
import SearchComponent from './components/SearchComponent';
import TableComponent from './components/TableComponent';
import LoadingComponent from './components/LoadingComponent';
import config from './config';

/**
 * @class
 * @classdesc WeatherApp é responsável pelo gerenciamento do app.
 */
class WeatherApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: config.CITIES,
      forecasts: [],
      serviceError: ''
    }

    this.filterCities = this.filterCities.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.getForecasts = this.getForecasts.bind(this);;
  }

  componentDidMount() {
    this.getForecasts();
  }

  getForecasts() {
    const forecasts = ForecastsService.get(this.state.cities);

    forecasts.then((forecast) => {
      const nCities = forecast.length;
      let data = [];
      let allForecasts = [];

      for (let i = 0; i < nCities; i++) {
        let nextForecasts = ForecastArrayHelper.extract(forecast[i].data.list);

        nextForecasts.forEach((obj) => {
          if (obj) {
            data.push({ date: obj.dt_txt, temp: Math.round(obj.main.temp) });
          }
          else {
            data.push({ date: '', temp: '' });
          }
        });

        allForecasts.push({
          city: forecast[i].data.city.name,
          cityId: forecast[i].data.city.id,
          data: data
        });

        data = [];
      }

      this.setState({ forecasts: allForecasts });
    });

    forecasts.catch((error) => {
      console.log('Server error:', error);
      this.setState({ serviceError: 'Ops, não foi possível obter os dados do servidor.' });
    });
  }

  filterCities(city) {
    this.setState({ cities: [city] });
  }

  resetFilter() {
    this.setState({ cities: config.CITIES });
  }

  render() {
    return (
      <div>
        <HeaderAppComponent />
        <SearchComponent filterCities={this.filterCities} resetFilter={this.resetFilter} cities={config.CITIES} />
        { React.cloneElement(this.props.children, this.state) }
        <LoadingComponent hasData={this.state.forecasts} hasError={this.state.serviceError} />
      </div>
    );
  }

}

export default WeatherApp;
