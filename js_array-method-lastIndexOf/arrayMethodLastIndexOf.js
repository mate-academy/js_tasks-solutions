'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function (searchElement, fromIndex) {
    let searchIndex = fromIndex;
    if (fromIndex === undefined) {
      searchIndex = this.length - 1;
    } else if (fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }
    for (let i = searchIndex; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
