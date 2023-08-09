/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  current = []
  for (let i = s.length; i-->0;) {
      current.push(s[i])
  }
  for (let i = 0; i < s.length; i++){
    s[i] = current[i]
  }
  console.log(s)
};