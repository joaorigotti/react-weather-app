import React, { Component } from 'react';
import HeaderTableComponent from './HeaderTableComponent';
import RowComponent from './RowComponent';

/**
 * @class
 * @classdesc TableComponent é responsável por criar a tabela de temperaturas.
 */
class TableComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="weather-table">
        <HeaderTableComponent />
        <tbody>
          {
            this.props.forecasts.map((forecast, i) => {
              return <RowComponent key={i} id={i} city={forecast.city} cities={this.props.cities} forecasts={forecast.data} />
            })
          }
        </tbody>
      </table>
    );
  }
}

export default TableComponent;
