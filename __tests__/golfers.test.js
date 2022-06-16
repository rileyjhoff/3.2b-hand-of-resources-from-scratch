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
    expect(resp.body).toEqual({
      id: 1,
      name: 'Will Zalatoris',
      ranking: 14,
      wins: 1,
      age: 25,
    });
  });

  it('POST /golfers should add a golfer', async () => {
    const resp = await request(app).post('/golfers').send({
      name: 'Cameron Young',
      ranking: 31,
      wins: 3,
      age: 25,
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.id).not.toBeUndefined();
    expect(resp.body.name).toEqual('Cameron Young');
    expect(resp.body.ranking).toEqual(31);
    expect(resp.body.wins).toEqual(3);
    expect(resp.body.age).toEqual(25);
  });

  it('PUT /golfers/:id should update a golfer', async () => {
    const resp = await request(app)
      .put('/golfers/1')
      .send({ ranking: 1, wins: 2 });
    expect(resp.status).toEqual(200);
    expect(resp.body.ranking).toEqual(1);
    expect(resp.body.wins).toEqual(2);
  });

  it('DELETE /golfers/:id should delete a golfer', async () => {
    const resp1 = await request(app).delete('/golfers/5');
    expect(resp1.status).toEqual(200);
    const resp2 = await request(app).get('/golfers/5');
    expect(resp2.body).toEqual('');
  });

  afterAll(() => {
    pool.end();
  });
});
