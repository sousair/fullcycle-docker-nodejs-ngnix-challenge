const express = require('express');
const { router } = require('./router');
const { APP_PORT } = require('./config');

const server = express();

server.use(express.json());
server.use(router); 

server.listen(APP_PORT, () => {
  console.log(`Server listen on port ${APP_PORT}`)
})

module.exports = server;