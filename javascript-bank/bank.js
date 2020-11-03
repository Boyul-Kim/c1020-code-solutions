/* exported Bank */

// contructor produces Bank objets
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

// mehotd that infds the account object stored in this.accounts and matches number
Bank.prototype.getAccount = function (number) {

  for (var i = 0; i <= this.accounts.length - 1; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;

};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;

  if (this.accounts.length === 0) {
    return 0;
  }

  for (var i = 0; i <= this.accounts.length - 1; i++) {
    totalAssets += this.accounts[i].getBalance();
  }
  return totalAssets;
};
