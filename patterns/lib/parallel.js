'use strict';

const _ = require('lodash');

async function handleArray(iterable) {
  return await Promise.all(iterable.map((fn) => fn()));
}

async function handleObject(iterable) {
  const obj = {};
  for (const k of Object.keys(iterable)) {
    const fn = iterable[k];
    obj[k] = fn();
  }
  await Promise.all(Object.values(obj));

  return resolveAll(obj);
}

async function resolveAll(obj) {
  for (const [k, v] of Object.entries(obj)) {
    obj[k] = await v;
  }
  return obj;
}

module.exports = async (iterable) => {
  if (_.isArray(iterable)) return handleArray(iterable);
  return handleObject(iterable);
};
