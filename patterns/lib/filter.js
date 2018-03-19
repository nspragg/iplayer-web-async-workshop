'use strict';

module.exports = async (arr, fn) => {
  const results = [];
  for (const e of arr) {
    if (await fn(e)) {
      results.push(e);
    }
  }
  return results;
};
