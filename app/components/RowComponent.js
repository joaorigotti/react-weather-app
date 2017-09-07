import React, { Component } from 'react';

/**
 * @class
 * @classdesc RowComponent é responsável por renderizar uma linha para tabela html.
 */
class RowComponent extends Component {
  constructor(props) {
    super(props);

    this.hideCityIfFiltered = this.hideCityIfFiltered.bind(this);
    this.getTemperatureClassName = this.getTemperatureClassName.bind(this);
  }

  hideCityIfFiltered() {
    let style = { display: 'none' };

    this.props.cities.forEach((city) => {
      if (this.props.city.includes(city)) {
        style = { display: 'table-row' };
      }
    });

    return style;
  }

  // Responsável por escolher uma classe CSS de acordo com a temperatura.
  getTemperatureClassName(temp) {
    const under16 = temp < 16;
    let className = 'temp -hot';

    if (under16) {
      className = 'temp -cool';
    }

    return className;
  }

  render() {
    return (
      <tr className="row-table" key={this.props.id} style={this.hideCityIfFiltered()}>
        <td className="cel -title" scope="row">
          <span className="super-badge">{this.props.city}</span>
        </td>

        {
          this.props.forecasts.map((el, i) => {
            let cel = '';

            if (el.temp) {
              cel = (
                <td className="cel -center" key={i}>
                  <span className={this.getTemperatureClassName(el.temp)}>
                    {el.temp}°
                  </span>
                </td>
              );
            }
            else {
              cel = (<td className="cel -center" key={i}></td>);
            }

            return cel;
          })
        }
      </tr>
    );
  }
}

RowComponent.propTypes = {
  id: React.PropTypes.number.isRequired,
  city: React.PropTypes.string.isRequired,
  cities: React.PropTypes.array.isRequired,
  forecasts: React.PropTypes.array.isRequired
}

export default RowComponent;
