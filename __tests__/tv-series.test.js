const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /tv-series should return a list of TV Series', async () => {
    const resp = await request(app).get('/tv-series');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        title: 'Barry',
        genre: ['Action', 'Comedy', 'Crime'],
        original_network: 'HBO',
        seasons: 3,
        imdb_rating: 8,
        rt_rating: '99%',
      },
      {
        id: 2,
        title: 'Obi-Wan Kenobi',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        original_network: 'Disney+',
        seasons: 1,
        imdb_rating: 7,
        rt_rating: '84%',
      },
      {
        id: 3,
        title: 'Severance',
        genre: ['Drama', 'Mystery', 'Sci-Fi'],
        original_network: 'Apple TV',
        seasons: 1,
        imdb_rating: 9,
        rt_rating: '98%',
      },
      {
        id: 4,
        title: 'South Park',
        genre: ['Animation', 'Comedy'],
        original_network: 'Comedy Central',
        seasons: 25,
        imdb_rating: 9,
        rt_rating: '80%',
      },
    ]);
  });

  it('GET /tv-series/:id should return TV Series detail', async () => {
    const resp = await request(app).get('/tv-series/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: 1,
      title: 'Barry',
      genre: ['Action', 'Comedy', 'Crime'],
      original_network: 'HBO',
      seasons: 3,
      imdb_rating: 8,
      rt_rating: '99%',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
