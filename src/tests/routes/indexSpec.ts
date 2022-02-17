import supertest from 'supertest';
import routes from '../../routes/index';

const req = supertest(routes);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const res = await req.get('/api/pics');
        expect(res.status).toBe(200);
    }
)});