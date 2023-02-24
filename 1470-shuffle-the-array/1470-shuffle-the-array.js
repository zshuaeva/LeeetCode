var shuffle = function(nums, n) {
  var newArr = nums.splice(0, n)
  var result = [];

  for (var i = 0; i < n; i++) {
    result.push(newArr[i]);
    result.push(nums[i]);
  }
  return result;
}