import React, { Component } from 'react';

/**
 * @class
 * @classdesc SearchComponent é responsável por renderizar o formulário de filtro.
 */
class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.filterCities = this.filterCities.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  filterCities(e) {
    e.preventDefault();

    if (this.refs.search.value.trim() !== '') {
      this.props.filterCities(this.refs.search.value);
    }
  }

  resetFilter() {
    this.props.resetFilter();
    this.refs.search.selectedIndex = 0;
  }

  renderCitiesOptions() {
    return this.props.cities.map(citie => (<option key={citie} value={citie}>{citie}</option>));
  }

  render() {
    return (
      <div className="filter-box">
        <form className="search-component" onSubmit={this.filterCities}>
          <select className="field" name="search" ref="search">
            {this.renderCitiesOptions()}
          </select>
          <button className="action" type="submit">Filtrar</button>
          <button className="action -secondary" type="button" onClick={this.resetFilter}>Resetar</button>
        </form>
      </div>
    )
  }
}

SearchComponent.propTypes = {
  cities: React.PropTypes.array.isRequired,
  filterCities: React.PropTypes.func.isRequired,
  resetFilter: React.PropTypes.func.isRequired
}

export default SearchComponent;
