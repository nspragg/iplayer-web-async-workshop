# Fundamentals

## Installation and setup 

⚠️ Before preceding, `cd` to the `fundamentals` directory and run `npm it`. All tests should fail. ⚠️<br>

## Task 
Implement solutions for all exercises. **Objective**: all tests should pass.

## Exercises

### Construction

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

### Transformation (chaining)

* _Write an alternative implementation of [chain](./lib/transformation/chain.js) in a new function called `chainWithAsync` to use async/await. **Dont use promises**._

* _Complete the implementation of [multipleAsyncCalls](./lib/transformation/multiple.js) to create a string containing each letter of the alphabet. Each letter should be created by invoking the `generateNextChar` async function._

### Error handling

* _Complete the implementation of [handlePromiseError](./lib/errors/promise.js) by:_

  * Calling a given service's `makeRequest` method
  * Handling any error thrown by `.makeRequest()` by converting it to an instance of `ServiceError` using the
  promise API.

* _Modify the implementation of [handlePromiseError](./lib/errors/promise.js) to ensure the service's `.shutdown` method is always called, even if an error is thrown. **You must use the Promise API**._

* _Write an alternative implementation of [handlePromiseError](./lib/errors/promise.js) in a new function called [handleAsyncError](./lib/errors/async.js) to use async/await. This should include handling the invocation of `.shutdown`. **Dont use promises**._

### Aggregating results

* _Complete the implementation of [aggregateWithPromises](./lib/aggregate/aggregate.js) by:_

  * making 50 requests to `service.makeRequest`
  * return a promise of all the responses (fulfulment value is an array of responses)
  * **Forget** about error handling for this exercise

* _Complete the implementation of [first](./lib/aggregate/first.js) by:_

  * making 50 requests to `service.makeRequest`
  * return the first promise to resolve
  * **Forget** about error handling for this exercise

* _Write your own implementation of `Promise.all`. Refactor [aggregateWithPromises](./lib/aggregate/aggregate.js) to use your implementation._

* _Write your own implementation of `Promise.race`. Refactor [first](./lib/aggregate/first.js) to use your implementation._
