'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function (valueToFind, fromIndex = 0) {
    return this.slice(fromIndex).some(el => Object.is(el, valueToFind));
  };
}

module.exports = applyCustomIncludes;
