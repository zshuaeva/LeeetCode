/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(str) {

  var openBrackets = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      openBrackets.push(str[i]);
    } else {
      var matches = openBrackets.pop() + str[i];
      console.log(matches);
      if (matches !== '()' && matches !== "[]" && matches !== '{}') {
        return false;
      }
    }
  }
  if (openBrackets.length === 0) {
    return true;
  } else {
    return false;
  }

};