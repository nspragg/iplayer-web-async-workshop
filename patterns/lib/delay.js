'use strict';

module.exports = async (delayMs) => {
  // throw new Error('Not implemented');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });

};
