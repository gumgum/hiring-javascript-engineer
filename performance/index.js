var fib = require('./fib'),
    memoize = require('./memoize'),
    fibMemoized = memoize(fib),
    benchmark = function (name, fn) {
        console.time(name);
        console.log(fn());
        console.timeEnd(name);
        console.log('----------------');
    };

benchmark('fib(40)', function () {
    return fib(40);
});

benchmark('1st fibMemoized(40) execution', function () {
    return fibMemoized(40);
});

benchmark('2nd fibMemoized(40) execution', function () {
    return fibMemoized(40);
});

/*
// Warning:
// Without an optimization on `fib` or `memoize` any fibonacci operation above 40
// could hog your CPU
*/
