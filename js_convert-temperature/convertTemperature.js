'use strict';

/**
 * Implement convertTemperature function:
 *
 * Function takes a string which contains temperature (integer) and one of the
 * measurement units (Celsius, Kelvin or Fahrenheit): '21C', '299K', '79F' and
 * returns an object containing temperature converted to all allowed units and
 * rounded with Math.round(). Return null if input is wrong.
 *
 * convertTemperature('0C') === { C: 0, F: 32, К: 273 }
 * convertTemperature('451F') === { C: 233, F: 451, К: 506 }
 * convertTemperature('0') === null
 * convertTemperature('zero') === null
 * convertTemperature('0M') === null
 * convertTemperature('0.00C') === null
 *
 * https://www.convert-me.com/ru/convert/temperature/?u=dfahrenheit&v=451
 *
 * @param {string} temperature
 *
 * @return {object} - converted temperatures
 */
const celToKel = (cel) => cel + 273.1;
const kelToCel = (kel) => kel - 273.1;
const celToFar = (cel) => (cel * 5 / 9) + 32;
const farToCel = (far) => (far - 32) * 5 / 9;

function convertTemperature(temperature) {
  const inputTemperatureType = temperature.slice(-1).toUpperCase();
  const temperatureStr = temperature.slice(0, -1);

  if (temperatureStr.includes('.') || !Number.isInteger(+temperatureStr)) {
    return null;
  }

  const temperatureNum = +temperatureStr;
  let cel;

  switch(inputTemperatureType) {
    case 'C':
      cel = temperatureNum;
      break;

    case 'F':
      cel = Math.round(farToCel(temperatureNum))
      break;

    case 'K':
      cel = Math.round(kelToCel(temperatureNum));
      break;

    default: return null;
  }

  return {
    C: cel,
    F: Math.round(celToFar(cel)),
    K: Math.round(celToKel(cel)),
  };
}

module.exports = convertTemperature;
