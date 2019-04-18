'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorStirng = String(separator);
    const arr = [];
    if (this.length === 0) {
      return '';
    };
    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        arr.push('');
      } else {
        arr.push(this[i]);
      }
    };

    let res = '';
    for (let i = 0; i <= this.length - 1; i++) {
      if (i === 0) {
        res = res + arr[i];
      } else {
        res = res + separatorStirng + arr[i];
      }
    }
    return res;
  };
}

module.exports = applyCustomJoin;
