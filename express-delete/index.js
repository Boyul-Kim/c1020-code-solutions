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
  for (let i = 0; i <= arrayObjects.length - 1; i++) {
    if (arrayObjects[i].grade === Number(req.params.grade)) {
      arrayObjects.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
