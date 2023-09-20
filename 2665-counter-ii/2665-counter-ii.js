/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;
    

    const increment = function() {
        counter++;
        return counter;
    };

    const decrement = function() {
        counter--;
        return counter;
    };

    const reset = function() {
        counter = init;
        return counter;
    };


    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};

