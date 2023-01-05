import middlewares from './shared/middlewares';
import apiRoutes from './shared/routes/api.routes';
import { Express } from 'express';

const App = (server: Express) => {
  middlewares(server);
  apiRoutes(server);
};

export default App;
