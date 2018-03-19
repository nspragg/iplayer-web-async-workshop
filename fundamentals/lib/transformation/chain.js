'use strict';

// DONT MODIFY THIS FUNCTION
// Helper fn - returns a fn that creates a different char per call, starting with 'a'
// NOTE - does not rotate.
function generateChar() {
  let code = 'a'.charCodeAt(0) - 1;
  return async () => {
    return String.fromCharCode(++code);
  };
}

// DONT MODIFY THIS FUNCTION
function chain() {
  const next = generateChar();
  return next()
    .then((a) => {
      return next().then((b) => {
        return a + b;
      });
    })
    .then((ab) => {
      return next().then((c) => {
        return ab + c;
      });
    })
    .then((abc) => {
      return next().then((d) => {
        return abc + d;
      });
    });
}

async function chainWithAsync() {
  // Write async/await version of `.chain` here
  const next = generateChar();
  const a = await next();
  const b = await next();
  const c = await next();
  const d = await next();
  return a + b + c + d;
}

module.exports.chain = chain;
module.exports.chainWithAsync = chainWithAsync;
