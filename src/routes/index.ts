import express from 'express';

const routes: express.Router = express.Router();

routes.get('/',(req: express.Request, res: express.Response): void => {
    res.send('Start processing');
  }
);

export default routes;