const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /teams should return a list of teams', async () => {
    const resp = await request(app).get('/teams');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        name: 'Portland Trail Blazers',
        league: 'NBA',
        sport: 'basketball',
      },
      {
        id: 2,
        name: 'Colorado Avalanche',
        league: 'NHL',
        sport: 'hockey',
      },
      {
        id: 3,
        name: 'Portland Timbers',
        league: 'MLS',
        sport: 'soccer',
      },
      {
        id: 4,
        name: 'Chelsea FC',
        league: 'EPL',
        sport: 'soccer',
      },
    ]);
  });

  it('GET /teams/:id should return team detail', async () => {
    const resp = await request(app).get('/teams/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: 1,
      name: 'Portland Trail Blazers',
      league: 'NBA',
      sport: 'basketball',
    });
  });

  it('POST /teams should add a team', async () => {
    const resp = await request(app).post('/teams').send({
      name: 'Colorado Rockies',
      league: 'MLB',
      sport: 'baseball',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.id).not.toBeUndefined();
    expect(resp.body.name).toEqual('Colorado Rockies');
    expect(resp.body.league).toEqual('MLB');
    expect(resp.body.sport).toEqual('baseball');
  });

  it('PUT /teams/:id should update a team', async () => {
    const resp = await request(app)
      .put('/teams/1')
      .send({ name: 'Denver Nuggets' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Denver Nuggets');
  });

  it('DELETE /teams/:id should delete a team', async () => {
    const resp1 = await request(app).delete('/teams/1');
    expect(resp1.status).toEqual(200);
    const resp2 = await request(app).get('/teams/1');
    expect(resp2.body).toEqual('');
  });

  afterAll(() => {
    pool.end();
  });
});
