Performance and recursion
=========================

On this implementation of the Fibonacci sequence we're using recursion to
reproduce some of the common pitfalls on performance + recursion on
JavaScript.

Please complete any of the following tasks.

- Document the code on `./fib.js` and `./memoize.js` to describe the usage of:
  `closure`, `recursion`, `memoization` and `cache`.
- Optimize `./memoize.js` to accept any number of parameters, and create a new
  function to test it.
- As you can see on `./index.js`, only the second execution of `fibMemoized`
  has an improved time. Optimize the cache usage on `fib.js` to be able to drop
  the memoize function and run tests with large numbers, such as 100 or 500.
- Document your changes.

Plus
----

- Change the format of the code from Node.js to ES6.

How to run
----------

```
node index.js
```

