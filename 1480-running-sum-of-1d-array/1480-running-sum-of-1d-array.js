/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  var resultArray = [nums[0], ];
  for (var i = 1; i < nums.length; i++) {
      resultArray.push(nums[i] += nums[i -1]);
  }
  return resultArray;
};

console.log(runningSum([1,2,3,4]));