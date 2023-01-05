import {
  registerAccountController,
  getUsersController,
  createPostController,
  getPostController,
} from '../../modules/accounts/account.routes';
import { Express } from 'express';

async function routes(app: Express) {
  app.get('/users', getUsersController);
  app.post('/users', registerAccountController);
  app.post('/users/:userId/posts', createPostController);
  app.get('/users/:userId/posts', getPostController);
}

export default routes;
