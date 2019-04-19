'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').map(cssRule => cssRule.split(':'))
    .reduce((res, ruleArr) => {
      if (ruleArr[1] !== undefined) {
        res[ruleArr[0].trim()] = ruleArr[1].trim();
      };
      return res;
    }, {});
}

module.exports = convertToObject;
