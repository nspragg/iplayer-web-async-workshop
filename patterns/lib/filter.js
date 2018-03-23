'use strict';

// async functions return promises so array.filter always evaluates true.
// Therefore using simple `for of`
module.exports = async (arr, fn) => {
  const results = [];
  for (const e of arr) {
    if (await fn(e)) {
      results.push(e);
    }
  }
  return results;
};

