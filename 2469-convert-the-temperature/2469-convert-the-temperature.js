/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelv = celsius + 273.15
    let fahr = celsius * 1.80 + 32.00
    return([kelv, fahr])
};