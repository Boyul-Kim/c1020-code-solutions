const express = require('express');
const path = require('path');
const app = express();

const publicDir = path.join(__dirname, 'public');
console.log(publicDir);

const expressStatic = express.static(publicDir);

app.use(expressStatic);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
