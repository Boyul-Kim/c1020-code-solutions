/* eslint-disable no-console */
const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/api/notes', function (req, res) {
  const dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }
  res.send(dataArray);
});

app.get('/api/notes/:id', function (req, res) {
  const dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }

  if (isNaN(Number(req.params.id))) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).send({ error: 'cannot find note with id ' + req.params.id });
  } else if (data.notes[req.params.id] !== undefined) {
    res.status(200).send(data.notes[req.params.id]);
  }

});

app.post('/api/notes', function (req, res) {

  if (req.body.content === undefined) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
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
  if (isNaN(Number(req.params.id))) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).send({ error: 'cannot find note with id ' + req.params.id });
  } else if (data.notes[req.params.id] !== undefined) {
    delete data.notes[req.params.id];
    const dataJson = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJson, 'utf8', err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).send();
      }
    });
  }
});

app.put('/api/notes/:id', function (req, res) {

  if (isNaN(Number(req.params.id))) {
    res.status(400).send({ error: 'id must be a positive integer' });

  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).send({ error: 'cannot find note with id ' + req.params.id });
  } else if (req.body.content === undefined) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (data.notes[req.params.id] !== undefined) {
    const note = req.body;
    data.notes[req.params.id].content = note.content;
    const dataJson = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJson, 'utf8', err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).send(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
