Performance and recursion
=========================

On this implementation of the Fibonacci sequence we're using recursion to
reproduce some of the common pitfalls of performance on JavaScript.

Please complete any of the following tasks.

- Document the code on `./fib.js` and `./memoize.js` to describe the usage of:
  `closure`, `recursion`, `memoization` and `cache`.
- Optimize `./memoize.js` to accept any number of parameters.
- As you can see on `./index.js`, only the second execution of `fibMemoized`
  has an improved time. Optimize the cache usage where needed to be able to run
  tests with large numbers, such as 100 or 500, and document your changes.

Plus
----

- Change the format of the code from Node.js to ES6.

How to run
----------

```
node index.js
```

