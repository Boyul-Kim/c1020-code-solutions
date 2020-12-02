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

app.get('/api/notes/:id', function (req, res) {
  let marker = false;
  if (isNaN(Number(req.params.id))) {
    res.status(400).send({ error: 'id must be a positive integer' });
    marker = true;
  }
  for (let i = 0; i <= dataArray.length - 1; i++) {
    for (const key in dataArray[i]) {
      if (dataArray[i][key] === Number(req.params.id)) {
        res.status(200).send(dataArray[i]);
        marker = true;
        break;
      }
    }
  }
  if (!marker) {
    res.send({ error: 'cannot find note with id ' + req.params.id });
  }
});

// app.post('/api/notes', function(req, res) {

// })

app.listen(3000, () => {
  console.log('listening on port 3000');
});
