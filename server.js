'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
HEAD
  res.send('CPSY 350 Project: Github Actions CI. SAIT ID:000xxxxxx');
1e6faac (test2)
});

const server = app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = server;
