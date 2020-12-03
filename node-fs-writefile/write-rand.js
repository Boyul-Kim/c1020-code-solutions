/* eslint-disable no-console */
const fs = require('fs');

fs.writeFile('random.txt', Math.random() + '\n', 'utf8', err => {
  if (err) throw err;
});
