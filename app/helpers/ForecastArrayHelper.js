import DateHelper from './DateHelper';

/**
 * @static
 * @class
 * @classdesc Responsável por extrair os dados retornados pela api do Open Weather.
 */
class ForecastArrayHelper {
  constructor() {
    throw new Error('You cannot instantiate ForecastArrayHelper');
  }

  /**
   * Filtra uma lista para apenas conter uma temperatura para cada dia.
   *
   * @param {array} array - Uma lista com todas as temperaturas obtidas da api do Open Weather.
   * @return {array} Uma lista filtrada com uma temperatura para cada dia.
   */
  static extract(array) {
    let days = DateHelper.getNextFiveDaysFrom(new Date());
    let nDays = days.length;
    let temps = [];

    for (let i = 0; i < nDays; i++) {
      temps.push(array.find((obj) => {
        return DateHelper.matchToApiDate(obj.dt_txt, days[i]);
      }));
    }

    return temps;
  }
}

export default ForecastArrayHelper;
