/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (numIndices.has(num) && i - numIndices.get(num) <= k) {
            return true;
        }

        numIndices.set(num, i);
    }

    return false;
};
