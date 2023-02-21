let defangIPaddr = function(address) {
  let splitArr = address.split('');
  for (let i = 0; i < splitArr.length; i++) {
    console.log(address[i]);
      if (splitArr[i] === ".") {
        splitArr[i] = "[.]"
      }
  }
  return splitArr.join('');
};