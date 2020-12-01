const express = require('express');
const app = express();

const arrayObjects = [
  {
    id: 1,
    name: 'Saitama',
    course: 'Hero 101',
    grade: 0
  },
  {
    id: 2,
    name: 'Batman',
    course: 'Detective 101',
    grade: 1
  }
];

app.get('/api/grades', function (req, res) {
  res.json(arrayObjects);
});

app.delete('/api/grades/:grade', function (req, res) {
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
