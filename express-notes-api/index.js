/* eslint-disable no-console */
const express = require('express');
const data = require('./data.json');
const app = express();

app.use(express.json());
const dataArray = [];

for (const key in data.notes) {
  dataArray.push(data.notes[key]);
}

app.get('/api/notes', function (req, res) {
  res.send(dataArray);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
