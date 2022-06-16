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

  afterAll(() => {
    pool.end();
  });
});
