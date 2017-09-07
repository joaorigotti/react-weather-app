'use strict';

import ForecastArrayHelper from '../app/helpers/ForecastArrayHelper';
const assert = require('chai').assert;

describe('ForecastArrayHelper', function() {

  it('método extract() deve retornar um array com 5 itens', function() {
    const parametroSimulado = [
      { dt_txt: "2016-11-19 00:00:00" },
      { dt_txt: "2016-11-19 03:00:00" },

      { dt_txt: "2016-11-20 00:00:00" },
      { dt_txt: "2016-11-20 03:00:00" },

      { dt_txt: "2016-11-21 00:00:00" },
      { dt_txt: "2016-11-21 03:00:00" },

      { dt_txt: "2016-11-22 00:00:00" },
      { dt_txt: "2016-11-22 03:00:00" },

      { dt_txt: "2016-11-23 00:00:00" },
      { dt_txt: "2016-11-23 03:00:00" }
    ];
    const resultado = ForecastArrayHelper.extract(parametroSimulado);
    const nItens = resultado.length;

    assert.isArray(resultado, 'Não é um Array');
    assert(nItens === 5, 'Não possui 5 itens');
  });

});
