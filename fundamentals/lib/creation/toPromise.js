'use strict';

// TODO: delete
const util = require('util');

module.exports.toPromise = (fn) => {
  // TODO: delete
  return util.promisify(fn);
};
