import express from 'express';

interface Query {
  filename?: string;
  width?: string;
  height?: string;
}

const pics: express.Router = express.Router();

pics.get('/',(req: express.Request,res: express.Response)=>{
    
  }
);

export default pics;