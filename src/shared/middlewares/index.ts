import bodyParser from 'body-parser';
import cors from 'cors';
import { Express } from 'express';

const middleWare = (app: Express) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
  app.use(bodyParser.json({ limit: '20mb' }));
};

export default middleWare;
