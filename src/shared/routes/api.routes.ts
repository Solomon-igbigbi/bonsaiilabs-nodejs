import {
  registerAccountController,
  getUsersController,
} from '../../modules/accounts/account.routes';
import { Express } from 'express';

async function routes(app: Express) {
  app.get('/users', getUsersController);
  app.post('/users', registerAccountController);
}

export default routes;
