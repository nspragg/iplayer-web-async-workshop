# Installation and setup 

⚠️ Before preceding, `cd` to the `fundamentals` directory and run `npm it`. All tests should fail. ⚠️<br>

# Task 
Implement solutions for all questions. **Objective**: all tests should pass.

# Construction

* _Complete the implementation of [reverse](./lib/creation/cb_rev.js) to reverse a given string using a callback._

* _Complete the implementation of [reverse](./lib/creation/p_rev.js) to reverse a given string and return the result as a promise. The promise **must** be created using a `Promise` constructor._

* _Complete the implementation of [withError](./lib/creation/cb_error.js) to yield an instance of `Error` with a given error message._

* _Complete the implementation of [withError](./lib/creation/p_error.js) to return a rejected promise with an instance of `Error` with a given error message._

* _Complete the implementation of [now](./lib/creation/now.js) immediately return a promise with a given value **without using a promise constrcutor**._

* _Complete the implementation of [isUnique](./lib/creation/unique.js) to determine if a given string contains unique characters (boolean return type). **This function must be implemented as an async function**. DO NOT directly use a `Promise`. Optional: to make the exercise more difficult, only use arrays._

* [Harmonic](./lib/creation/harmonic.js) calculates the sum of haronmic numbers up to a given integer `n`. However, there is an unexpected error. Fix the implementation. Before preceding you'll need to uncomment the implementation and the [test](./test/tests.js) 

* _Complete the implementation of [convert](./lib/creation/convertWithNative.js) to convert a third party promise to a native JS promise._

* _Complete the implementation of [convert](./lib/creation/convertWithoutPromise.js) to convert a third party promise to a native JS promise **without using a promise directly**._

* _Complete the implementation of [toPromise](./lib/creation/toPromise.js) to convert legacy callback function to return a promise._

* _Complete the implementation of [toCallback](./lib/creation/toCallback.js) that converts a given function (that returns a Promise) to a `callback` based function._

# Transformation (chaining)

* _Write an alternative implementation of [chain](./lib/transformation/chain.js) in a new function called `chainWithAsync` to use async/await. **Dont use promises**._

# Error handling

# Aggregating results
