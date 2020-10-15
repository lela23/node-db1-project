const express = require('express');

const helloRouter = require('./api/hello/hello-router');
const accountsRouter = require('./api/accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/', helloRouter);
server.use('/api/accounts', accountsRouter);

module.exports = server;
