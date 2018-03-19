'use strict';

const ExecutorError = require('./ExecutorError');

const CONCURRENCY_LEVEL = Infinity;

async function parallelExecutor(arr, fn, limit = CONCURRENCY_LEVEL) {
  if (!Array.isArray(arr)) throw new TypeError(`Expecting array but got ${typeof arr}`);

  let active = 0;
  const results = [];
  return new Promise((resolve, reject) => {
    function executeTask() {
      while (active < limit && arr.length > 0) {
        active++;
        const pending = fn(arr.shift());
        pending
          .then((res) => {
            results.push(res);
            if (--active <= 0 && arr.length === 0) return resolve(results);
            executeTask();
          })
          .catch((e) => reject(new ExecutorError(e.message)));
      }
    }
    executeTask();
  });
}

module.exports = parallelExecutor;
