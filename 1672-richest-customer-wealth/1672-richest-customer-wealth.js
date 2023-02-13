/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  var richestCustomer = 0;
  for (var i = 0; i < accounts.length; i++) {
    var customerBalance = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      customerBalance += accounts[i][j];
    }
        if (customerBalance >= richestCustomer) {
        richestCustomer = customerBalance
        }
    }
    return richestCustomer;
  }

