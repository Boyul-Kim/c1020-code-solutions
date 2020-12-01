const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const grades = [];
let nextId = 1;

app.get('/api/grades', function (req, res) {
  res.json(grades);
});

app.post('/api/grades', function (req, res) {
  // eslint-disable-next-line no-console
  const newGrade = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    grade: req.body.grade
  };
  nextId++;

  grades.push(newGrade);
  res.sendStatus(201);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
