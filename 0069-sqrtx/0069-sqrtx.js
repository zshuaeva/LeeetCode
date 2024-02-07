/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) {
        return x;
    }
    
    let guess = x;
    while (true) {
        let newGuess = (guess + x / guess) / 2;
        if (Math.floor(newGuess) === Math.floor(guess)) {
            return Math.floor(newGuess);
        }
        guess = newGuess;
    }
};
