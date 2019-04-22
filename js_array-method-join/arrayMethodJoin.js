'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatorStr = String(separator);
    let res = '';
    res += (this[0] === undefined || this[0] === null ? '' : this[0]);
    for (let i = 1; i <= this.length - 1; i++) {
      let element = (this[i] === undefined || this[i] === null ? '' : this[i]);
      res += separatorStr + element;
    };
    return res;
  };
}

module.exports = applyCustomJoin;
