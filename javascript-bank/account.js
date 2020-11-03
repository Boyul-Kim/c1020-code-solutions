/* exported Account */

// returns an Account object with number, holder and transaction properties
function Account(number, holder) {
  this.number = number; // unique identifier
  this.holder = holder; // name of the person
  this.transactions = []; // holds tranactions objects when a deposit or withdrawal is made on the account
}

// causes Acccount object to create a new transaction object of type deposit
Account.prototype.deposit = function (amount) {
  var depositTransaction = new Transaction('deposit', amount); // 'deposit' becomes transaction.deposit and amount becomes transaction.amount
  if (depositTransaction.amount > 0) {
    this.transactions.push(depositTransaction);
    return true;
  } else {
    return false;
  }
};

// causes Account object to create a new transaction object of type withdrawal
Account.prototype.withdraw = function (amount) {
  var withdrawTransaction = new Transaction('withdrawal', amount);
  if (withdrawTransaction.amount > 0) {
    this.transactions.push(withdrawTransaction);
    return true;
  } else {
    return false;
  }
};

// calculates the current available funds in the account object - adds deposits and withdrawals
Account.prototype.getBalance = function () {
  var availableFunds = 0;

  if (this.transactions.length === 0) {
    return 0;
  }

  for (var i = 0; i <= this.transactions.length - 1; i++) {
    if (this.transactions[i].type === 'deposit') {
      availableFunds += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      availableFunds -= this.transactions[i].amount;
    }
  }
  return availableFunds;
};
