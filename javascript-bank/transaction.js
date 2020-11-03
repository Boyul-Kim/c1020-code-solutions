/* exported Transaction */

// returns a Transaction object
function Transaction(type, amount) {
  this.type = type; // either deposit or withdrawl
  this.amount = amount; // positive integer
}
