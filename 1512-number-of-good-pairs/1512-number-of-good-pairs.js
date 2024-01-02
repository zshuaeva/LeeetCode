/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairsCount = 0;
    
    const numCountMap = new Map();
    
    for (const num of nums) {
        if (numCountMap.has(num)) {
            goodPairsCount += numCountMap.get(num);
            numCountMap.set(num, numCountMap.get(num) + 1);
        } else {
            numCountMap.set(num, 1);
        }
    }
    
    return goodPairsCount;
};