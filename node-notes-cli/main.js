/* eslint-disable no-console */
const data = require('./data.json');

if (process.argv[2] === 'read') {
  for (const key in data.notes) {
    console.log(key + ':', data.notes[key]);
  }
}
