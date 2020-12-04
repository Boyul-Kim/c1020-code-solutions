/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');
const takeAChanceFinal = takeAChance('Boyul');

takeAChanceFinal.then(value => {
  console.log(value);
});

takeAChanceFinal.catch(error => {
  console.log(error.message);
});
