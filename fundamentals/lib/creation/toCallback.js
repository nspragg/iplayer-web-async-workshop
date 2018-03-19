'use strict';

// TODO: delete
const util = require('util');

module.exports.toCallback = (fn) => {
  // TODO: delete
  return util.callbackify(fn);
  // return '';
};
