const express = require('express');

const server = express();

const middleware = require('./config/middleware');

middleware(server); // third-party middleware

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<p>Database Project Notes</p>`)
});

module.exports = server;
