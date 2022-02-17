import express from 'express';
import File from '../../fileSystem';

interface Query {
  filename?: string;
  width?: string;
  height?: string;
}

const pics: express.Router = express.Router();

pics.get('/',async (req: express.Request,res: express.Response): Promise<void> => {

    let error: null | string = '';

    if (!(await File.isThumbAvailable(req.query))) {
      error = await File.createThumb(req.query);
    }

    if (error) {
      res.send(error);
      return;
    }

    const path: null | string = await File.getImagePath(req.query);
    if (path) {
      res.sendFile(path);
    } else {
      res.send('Coud not retrieve the image');
    }

  }
);


export default pics;