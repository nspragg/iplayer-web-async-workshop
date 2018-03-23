'use strict';

module.exports.withError = (message, cb) => {
  cb(new Error(message));
};
