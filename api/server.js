const express = require('express');

const projectRouter = require('../api/project/router');
const resourceRouter = require('../api/resource/router');
const taskRouter = require('../api/task/router');

const server = express();


server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use((error, req, res, next) => {
  console.log(error.status)
  res.status(error.status || 500).json({
    message: 'Catastrophic error!',
    originalMessage: error.message,
  })
})


module.exports = server;