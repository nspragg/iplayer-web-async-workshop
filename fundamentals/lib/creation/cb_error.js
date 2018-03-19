'use strict';

module.exports.withError = (message, cb) => {
  // TODO: remove
  cb(new Error(message));
};
