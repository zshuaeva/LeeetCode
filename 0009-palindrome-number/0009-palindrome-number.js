
var isPalindrome = function(num) {
  var result;
  var stringNum = num.toString();
  var splitNum = stringNum.split('');
  var reversedNum = splitNum.reverse();
  var joinedReversedNum = reversedNum.join('');
  if (num === Number(joinedReversedNum)) {
    result = true;
  } else {
    result = false;
  }
  return result;

};