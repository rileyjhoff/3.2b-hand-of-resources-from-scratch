const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /golfers should return a list of golfers', async () => {
    const resp = await request(app).get('/golfers');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      { id: 1, name: 'Will Zalatoris', ranking: 14, wins: 1, age: 25 },
      { id: 2, name: 'Sam Burns', ranking: 9, wins: 5, age: 25 },
      { id: 3, name: 'Max Homa', ranking: 23, wins: 6, age: 31 },
      { id: 4, name: 'Brooks Koepka', ranking: 19, wins: 15, age: 32 },
      { id: 5, name: 'Davis Riley', ranking: 85, wins: 2, age: 25 },
    ]);
  });

  it('GET /golfers/:id should return golfer detail', async () => {
    const resp = await request(app).get('/golfers/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      { id: 1, name: 'Will Zalatoris', ranking: 14, wins: 1, age: 25 },
    ]);
  });

  afterAll(() => {
    pool.end();
  });
});
