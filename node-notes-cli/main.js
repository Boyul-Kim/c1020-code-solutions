/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data.json');

if (process.argv[2] === 'read') {
  for (const key in data.notes) {
    console.log(key + ':', data.notes[key]);
  }
} else if (process.argv[2] === 'create') {
  data.notes[data.nextId + ''] = process.argv[3];
  data.nextId++;
  const dataJson = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', dataJson, 'utf8', err => {
    if (err) throw err;
  });
}
