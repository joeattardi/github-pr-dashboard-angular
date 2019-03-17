require('dotenv').config();

const express = require('express');

const pullsRoute = require('./pulls');

process.stdout.write('GitHub PR Dashboard\n');

const app = express();

app.get('/api/pulls', pullsRoute);

app.listen(process.env.PORT, () => {
  process.stdout.write(`Listening on port ${process.env.PORT}\n`);
});
