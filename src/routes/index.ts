import express, { application } from 'express';
import pics from './api/pics';

const routes: express.Router = express.Router();

routes.use('/', pics);

routes.get('/',(req: express.Request, res: express.Response): void => {
    res.send('Start processing');
  }
);

export default routes;