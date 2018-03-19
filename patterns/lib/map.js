'use strict';

const fixedExecutor = require('./private/executor');

async function map(iterable, fn) {
  if (!iterable) return [];
  return fixedExecutor(iterable, fn);
}

module.exports = map;
