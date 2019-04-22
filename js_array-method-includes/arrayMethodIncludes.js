'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function (valueToFind, fromIndex = 0) {
    let index = fromIndex < 0 ? this.length + fromIndex : fromIndex;
    for (let i = index; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
