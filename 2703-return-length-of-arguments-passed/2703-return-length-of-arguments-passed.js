/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    console.log(args)
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */