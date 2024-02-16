/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let i = 1; i < n; i++) {
        if (!hasZero(i) && !hasZero(n - i)) {
            return [i, n - i];
        }
    }
};

function hasZero(num) {
    return num.toString().includes('0');
}
