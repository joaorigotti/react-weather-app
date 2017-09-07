'use strict';

import DateHelper from '../app/helpers/DateHelper';
const assert = require('chai').assert;

describe('DateHelper', function() {
  const data = {
    objeto: new Date('Fri Jan 01 2016 00:00:00 GMT-0200 (BRST)'),
    api: '2016-01-01 00:00:00'
  };

  it('método getNextFiveDaysFrom() deve retornar um array com 5 itens', function() {
    const resultado = DateHelper.getNextFiveDaysFrom(new Date());
    const nItens = resultado.length;

    assert.isArray(resultado, 'Não é um array');
    assert(nItens === 5, 'Não possui 5 itens');
  });

  it('método dateToDateCaption() deve retornar uma data formatada em dd/mm', function() {
    const resultado = DateHelper.dateToDateCaption(data.objeto);
    assert(resultado === '01/01', 'Não esta no formato esperado dd/mm');
  });

  it('método formatDateTxt() deve retornar uma data formatada em dd/mm/yyyy', function() {
    const resultado = DateHelper.formatDateTxt(data.api);
    assert(resultado === '01/01/2016', 'Não esta no formato esperado dd/mm/yyyy');
  });

  it('método matchToApiDate() deve retornar true se encontrada uma data', function() {
    const resultado = DateHelper.matchToApiDate(data.api, data.objeto);
    assert.isTrue(resultado, 'Data não encontrada');
  });

});
