import express from 'express';
import routes from './routes/index';
import File from './fileSystem';

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, async (): Promise<void> => {
    await File.createThumbPath();

    console.log(`Server run on: http://localhost:${port}`);
});

export default app;
