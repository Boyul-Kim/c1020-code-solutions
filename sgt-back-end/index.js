const pg = require('pg');
const express = require('express');
const app = express();

app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades";
  `;

  db.query(sql).then(result => {
    const grade = result.rows;
    res.json(grade);
  })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });

});

app.post('/api/grades', (req, res, err) => {
  const text = `
    insert into "grades"("name", "course", "score")
    values($1, $2, $3)
    returning *;
  `;

  const values = [req.body.name, req.body.course, req.body.score];
  if (req.body.score > 100 || req.body.score < 1) {
    res.status(400).json({ error: 'score is not between 1-100' });
    return;
  } else if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined) {
    res.status(400).json({ error: 'missing entry' });
    return;
  }

  db.query(text, values)
    .then(result => {
      res.status(201).send(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res, err) => {

  const gradeId = parseInt(req.params.gradeId, 10);

  const text = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *
  `;

  const values = [req.body.name, req.body.course, Number(req.body.score), gradeId];

  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined || isNaN(Number(req.params.gradeId))) {
    res.status(400).json({ error: 'missing entry or invalide gradeId' });
    return;
  }

  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${req.params.gradeId}` });
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });

});

app.delete('/api/grades/:gradeId', (req, res, err) => {
  const text = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;

  const values = [Number(req.params.gradeId)];

  if (isNaN(Number(req.params.gradeId))) {
    res.status(400).json({ error: 'invalid gradeId' });
    return;
  }

  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${req.params.gradeId}` });
      } else {
        res.status(204).send(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
