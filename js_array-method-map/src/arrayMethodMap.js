'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];
    this.forEach((el, i) => {
      result.push(callback(el, i, this));
    });
    return result;
  };
}

module.exports = applyCustomMap;
