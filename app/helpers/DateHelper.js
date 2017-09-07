/**
 * @static
 * @class
 * @classdesc Responsável por manipular as datas e formatos de data do app.
 */
class DateHelper {
  constructor() {
    throw new Error('You cannot instantiate DateHelper');
  }

  /**
   * Retorna os cincos próximos dias.
   *
   * @param {object} date - Um objeto do tipo Date usado para iniciar a contagem dos dias.
   * @return {array} Um array com os próximos cincos dias contados a partir de date.
   */
  static getNextFiveDaysFrom(date) {
    const nDays = 5;
    let days = [];

    for (let i = 0; i < nDays; i++) {
      let dt = new Date();

      dt.setHours(0, 0, 0, 0);
      days.push(new Date((dt.setDate(date.getDate() + i))));
    }

    return days;
  }

  /**
   * Formata uma data no estilo dd/mm.
   *
   * @param {object} date - Um objeto do tipo Date.
   * @return {string} Com a data formatada.
   */
  static dateToDateCaption(date) {
    let day = DateHelper._zeroFill(date.getDate());
    let month = DateHelper._zeroFill(date.getMonth() + 1);

    return `${day}/${month}`;
  }

  /**
   * Formata uma data em texto recebida pela api no estilo dd/mm/yyyy.
   *
   * @param {string} dateTxt - Data
   * @return {string} Com a data formatada.
   */
  static formatDateTxt(dateTxt) {
    const date = new Date(dateTxt);
    return `${DateHelper.dateToDateCaption(date)}/${date.getFullYear()}`;
  }

  /**
   * Compara uma data com a data em texto retornada pela api do Open Weather.
   *
   * @param {string} apiDate - Data retornada pela api.
   * @param {Object} compareDate - Um objeto do tipo Date para comparação.
   * @return {Boolean}
   */
  static matchToApiDate(apiDate, compareDate) {
    let day = DateHelper._zeroFill(compareDate.getDate());
    let month = DateHelper._zeroFill(compareDate.getMonth() + 1);

    return apiDate.match(`${compareDate.getFullYear()}-${month}-${day}`) ? true : false;
  }

  /**
   * Formata com zeros à esquerda deixando mais consistente meses onde getDate retorna apenas um caracter
   *
   * @param {string} value - Dia ou mês.
   * @return {string} Um dia ou mês com zero à esquerda se necessário.
   */
  static _zeroFill(value) {
    return (`00${value}`).slice(-2);
  }
}

export default DateHelper;
