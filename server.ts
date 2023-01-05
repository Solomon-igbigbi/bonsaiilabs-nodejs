import * as dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';

const server: Express = express();

import App from './src/app';
App(server);

import config from './server.config';

server.listen(config.port, () => {
  console.log(`api server started on ${config.port}`);
});

export default server;
