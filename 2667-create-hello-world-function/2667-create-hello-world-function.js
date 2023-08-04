/**
 * @return {Function}
 */
var createHelloWorld = function(str) {
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */