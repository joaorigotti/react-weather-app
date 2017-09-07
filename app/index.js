import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import WeatherApp from './WeatherApp';
import TableComponent from './components/TableComponent';
import GraphComponent from './components/GraphComponent';

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={WeatherApp}>
      <IndexRoute component={TableComponent} />
      <Route path="/grafico" component={GraphComponent} />
    </Route>
  </Router>), document.querySelector('#weather-app')
);
