const DEFAULT_PORT = 9000;

require('dotenv').config();

const express = require('express');

const pullsRoute = require('./pulls');

process.stdout.write('GitHub PR Dashboard\n');

const app = express();

app.get('/api/pulls', pullsRoute);

const port = process.env.port || DEFAULT_PORT;

app.listen(port, () => {
  process.stdout.write(`Listening on port ${port}\n`);
});
