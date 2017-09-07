import DateHelper from './DateHelper';
import config from '../config';

/**
 * @static
 * @class
 * @classdesc Responsável 'converter' os dados de temperaturas no formato que o componente de gráfico espera.
 */
class ForecastsToBarChartHelper {
  constructor() {
    throw new Error('You cannot instantiate ForecastsToBarChartHelper');
  }

  /**
   * Filtra uma lista de temperaturas para agrupar por dia.
   *
   * @param {array} array - Uma lista com todas as temperaturas extraídas da api do Open Weather (ForecastArrayHelper).
   * @return {array} Uma lista com as temperaturas de todas as cidades 'agrupadas' por dia.
   */
  static extract(array) {
    const days = DateHelper.getNextFiveDaysFrom(new Date());
    const nDays = days.length;
    const temps = [];

    for (let i = 0; i < nDays; i++) {
      temps.push(array.map((obj) => {
        return obj.data.find((ob) => {
          return DateHelper.matchToApiDate(ob.date, days[i]);
        });
      }));
    }

    return temps;
  }

  /**
   * Filtra uma lista de temperaturas para agrupar por dia.
   *
   * @param {array} temps - Uma lista com as temperaturas agrupadas por dia.
   * @return {array} Uma lista de objetos no formato correto para ser consumida pelo gráfico de barras.
   */
  static prepareDataForChart(temps) {
    const dataForChart = [];
    let newObj = {};

    temps.forEach((temp) => {
      temp.forEach((obj, i) => {
        Object.assign(newObj, {
          day: DateHelper.formatDateTxt(obj.date),
          [config.CITIES[i]]: obj.temp
        });
      });

      dataForChart.push(newObj);
      newObj = {};
    });

    return dataForChart;
  }
}

export default ForecastsToBarChartHelper;
