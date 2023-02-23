
var finalValueAfterOperations = function(arr) {
  result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "++X" || arr[i] === "X++") {
      result += 1
    } else {
      if (arr[i] == "--X" || arr[i] === "X--") {
        result -= 1
      }
    }
  }
  return result;
};