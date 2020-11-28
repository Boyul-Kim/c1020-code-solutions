/* eslint-disable no-console */
const fs = require('fs');

fs.writeFile('random.txt', '', 'utf8', err => {
  if (err) throw err;
  console.log(Math.random());
});
