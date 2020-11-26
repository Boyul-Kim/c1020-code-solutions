/* eslint-disable no-console */
const fs = require('fs');

for (let i = 2; i <= process.argv.length - 1; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
