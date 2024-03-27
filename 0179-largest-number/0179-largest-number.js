/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        const num1 = '' + a + b;
        const num2 = '' + b + a;
        return parseInt(num2) - parseInt(num1);
    });
    
    if (nums[0] === 0) {
        return '0';
    }
    
    return nums.join('');
};
