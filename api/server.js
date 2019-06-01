const express = require('express');

const server = express();

const middleware = require('./config/middleware');

// import routers
const {
  projectsRouter,
  actionsRouter
} = require('./routes');

middleware(server); // third-party middleware

server.use(express.json());

// routers
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get('/', (req, res) => {
  res.send(`<p>Database Project Notes</p>`)
});

module.exports = server;
