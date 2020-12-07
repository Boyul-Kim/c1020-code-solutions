/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(product);

const balanceReducer = (accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    return accumulator + currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    return accumulator - currentValue.amount;
  }
};
const balance = account.reduce(balanceReducer, 0);
console.log(balance);

const compositeReducer = (accumulator, currentValue) => {
  const target = Object.assign(accumulator, currentValue);
  return target;
};
const composite = traits.reduce(compositeReducer);
console.log(composite);
