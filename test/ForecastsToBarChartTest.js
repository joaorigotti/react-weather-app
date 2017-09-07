'use strict';

import ForecastsToBarChartHelper from '../app/helpers/ForecastsToBarChartHelper';
const assert = require('chai').assert;

describe('ForecastsToBarChartHelper', function() {

  it('método extract() deve retornar um array com 5 itens', function() {
    const parametroSimulado = [
      { data: [ { date: "2016-11-19 03:00:00" } ] },
      { data: [ { date: "2016-11-20 03:00:00" } ] },
      { data: [ { date: "2016-11-21 03:00:00" } ] },
      { data: [ { date: "2016-11-22 03:00:00" } ] },
      { data: [ { date: "2016-11-23 03:00:00" } ] }
    ];
    const resultado = ForecastsToBarChartHelper.extract(parametroSimulado);
    const nItens = resultado.length;

    assert.isArray(resultado, 'Não é um Array');
    assert(nItens === 5, 'Não possui 5 itens');
  });

  it('método prepareDataForChart() deve retornar um array', function() {
    const parametroSimulado = [
      [
        { date: "2016-11-19 03:00:00", temp: 20 },
        { date: "2016-11-19 03:00:00", temp: 22 },
        { date: "2016-11-19 03:00:00", temp: 21 }
      ]
    ];
    const resultado = ForecastsToBarChartHelper.prepareDataForChart(parametroSimulado);
    const nItens = resultado.length;

    assert.isArray(resultado, 'Não é um Array');
  });

});
