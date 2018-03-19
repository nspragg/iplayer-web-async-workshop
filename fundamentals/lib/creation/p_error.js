'use strict';

module.exports.withError = (message) => {
  // TODO: remove
  return new Promise((resolve, reject) => {
    reject(new Error(message));
  });
};
