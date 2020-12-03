/* eslint-disable no-console */
const fs = require('fs');
let note = '';

for (let i = 2; i <= process.argv.length - 1; i++) {
  note += process.argv[i];
}

note += '\n';

fs.writeFile('note.txt', note, 'utf8', err => {
  if (err) throw err;
});
