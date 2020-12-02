/* eslint-disable no-console */
const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

app.use(express.json());

let dataArray = [];

readData();

app.get('/api/notes', function (req, res) {
  readData();
  res.send(dataArray);
});

app.get('/api/notes/:id', function (req, res) {
  readData();
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
      }
    }
  }
  if (!marker) {
    res.status(404).send({ error: 'cannot find note with id ' + req.params.id });
  }
});

app.post('/api/notes', function (req, res) {

  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (Object.keys(req.body).length > 0) {
    const note = req.body;
    note.id = data.nextId;
    const placeholder = data.nextId + '';
    data.notes[placeholder] = note;
    const dataJson = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJson, 'utf8', err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).send(note);
        data.nextId++;
      }
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  let notStatus404 = false;

  if (isNaN(Number(req.params.id))) {
    res.status(400).send({ error: 'id must be a positive integer' });
    notStatus404 = true;
  }

  for (const key in data.notes) {
    if (Number(key) === Number(req.params.id)) {
      delete data.notes[key];
      const dataJson = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', dataJson, 'utf8', err => {
        if (err) {
          res.status(500).send({ error: 'An unexpected error occurred.' });
        }
      });
      res.status(204).send();
      notStatus404 = true;
    }
  }

  if (!notStatus404) {
    res.status(404).send({ error: 'cannot find note with id ' + req.params.id });
  }
});

app.put('/api/notes/:id', function (req, res) {
  let notStatus404 = false;

  if (isNaN(Number(req.params.id))) {
    res.status(400).send({ error: 'id must be a positive integer' });
    notStatus404 = true;
  } else if (Object.keys(req.body).length === 0) {
    res.status(400).send({ error: 'content is a required field' });
    notStatus404 = true;
  }

  for (const key in data.notes) {
    if (Number(key) === Number(req.params.id)) {
      const note = req.body;
      data.notes[key].content = note.content;
      const dataJson = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', dataJson, 'utf8', err => {
        if (err) {
          res.status(500).send({ error: 'An unexpected error occurred.' });
        }
      });
      res.status(200).send(data.notes[key]);
      notStatus404 = true;
    }
  }

  if (!notStatus404) {
    res.status(404).send({ error: 'cannot find note with id ' + req.params.id });
  }

});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

function readData() {
  dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }
}
