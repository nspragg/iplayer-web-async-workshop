'use strict';

const generateChar = require('./generateChar');

module.exports.multple = async () => {
  const next = generateChar();
  const allChars = [];
  for (let i = 0; i < 26; i++) {
    allChars.push(await next());
  }
  return allChars.join('');
};
