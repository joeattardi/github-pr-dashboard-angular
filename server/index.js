const DEFAULT_PORT = 9000;

require('dotenv').config();

const express = require('express');

const pullsRoute = require('./pulls');

process.stdout.write('GitHub PR Dashboard\n');

if (!process.env.GITHUB_TOKEN) {
  process.stderr.write("Couldn't start server: No GITHUB_TOKEN environment variable defined!");
  process.exit(1);
}

const app = express();

app.get('/api/pulls', pullsRoute);

const port = process.env.port || DEFAULT_PORT;

app.listen(port, () => {
  process.stdout.write(`Listening on port ${port}\n`);
});
