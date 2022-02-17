import supertest from 'supertest';
import app from '../index';

const req = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const res = await req.get('/');
        expect(res.status).toBe(200);
    }
)});