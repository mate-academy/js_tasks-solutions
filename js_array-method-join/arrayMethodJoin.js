'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ',') {
    let res = '';
    if (this.length === 0) {
      return '';
    };
    for (let i = 0; i <= this.length - 1; i++) {
      let element = (this[i] === undefined || this[i] === null ? '' : this[i]);
      if (i === 0) {
        res = res + element;
      } else {
        res = res + separator + element;
      }
    };
    return res;
  };
}

module.exports = applyCustomJoin;
