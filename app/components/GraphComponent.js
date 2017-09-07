import React, { Component } from 'react';
import ForecastsToBarChartHelper from '../helpers/ForecastsToBarChartHelper';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import config from '../config';

/**
 * @class
 * @classdesc GraphComponent é responsável por renderizar o gráfico de barras.
 * @extends Component
 */
class GraphComponent extends Component {
  constructor(props) {
    super(props);

    this.forecasts = ForecastsToBarChartHelper.extract(this.props.forecasts);

    this.state = {
      cities: this.props.cities,
      data: ForecastsToBarChartHelper.prepareDataForChart(this.forecasts, this.props.cities)
    };

    this.formatCelsius = this.formatCelsius.bind(this);
    this.updateChart = this.updateChart.bind(this);
    this.renderBars = this.renderBars.bind(this);
  }

  formatCelsius(val) {
    return `${val}°`;
  }

  componentWillReceiveProps(nextProps) {
    this.updateChart(nextProps);
  }

  updateChart(props) {
    const data = ForecastsToBarChartHelper.prepareDataForChart(ForecastsToBarChartHelper.extract(props.forecasts), props.cities);
    const justOneCity = props.cities.length === 1;
    let newData = [];

    if (justOneCity) {
      props.cities.forEach((city) => {
        data.forEach((obj) => {
          if (obj.hasOwnProperty(city)) {
            newData.push({ day: obj.day, [city]: obj[city] });
          }
        });
      });
    }
    else {
      newData = data;
    }

    this.setState({
      cities: props.cities,
      data: newData
    });
  }

  // Renderiza as barras do gráfico de acordo com o número de cidades.
  renderBars() {
    const keys = this.props.cities;
    const colors = ['#5dbb4b', '#95c1e6', '#2190c8'].sort((a, b) => 0.5 - Math.random()); // Reordena o array aleatoriamente.

    return (keys.map((key, i) => <Bar key={i} dataKey={key} fill={colors[i]} />));
  }

  render() {
    let validCities = [];

    // Verifica se a cidade existe na configuração inicial.
    config.CITIES.forEach((configCity) => {
      this.state.cities.forEach((stateCity) => {
        if (configCity === stateCity) {
          validCities.push(true);
        }
      });
    });

    if (validCities.includes(true)) {
      return (
        <ResponsiveContainer minHeight={500}>
          <BarChart data={this.state.data}>
            <XAxis dataKey="day"/>
            <YAxis />
            <CartesianGrid vertical={false} strokeDasharray="6" />
            <Tooltip formatter={this.formatCelsius} />
            {this.renderBars()}
          </BarChart>
        </ResponsiveContainer>
      );
    }
    else {
      return null;
    }
  }
}

export default GraphComponent;
