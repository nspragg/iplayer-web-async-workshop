'use strict';

const toAsync = require('./private/toAsync');
const fixedExecutor = require('./private/executor');

async function each(arr, fn) {
  fn = toAsync(fn);
  return fixedExecutor(arr, fn);
}

module.exports = each;
