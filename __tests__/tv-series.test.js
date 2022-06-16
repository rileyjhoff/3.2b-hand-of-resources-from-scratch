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

  it('POST /tv-series should add a TV Series', async () => {
    const resp = await request(app)
      .post('/tv-series')
      .send({
        title: 'Halo',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        original_network: 'Paramount+',
        seasons: 1,
        imdb_rating: 7,
        rt_rating: '70%',
      });
    expect(resp.status).toEqual(200);
    expect(resp.body.id).not.toBeUndefined();
    expect(resp.body.title).toEqual('Halo');
    expect(resp.body.genre).toEqual(['Action', 'Adventure', 'Sci-Fi']);
    expect(resp.body.original_network).toEqual('Paramount+');
    expect(resp.body.seasons).toEqual(1);
    expect(resp.body.imdb_rating).toEqual(7);
    expect(resp.body.rt_rating).toEqual('70%');
  });

  it('POST /tv-series/:id should update a TV Series', async () => {
    const resp = await request(app)
      .put('/tv-series/1')
      .send({ imdb_rating: 10, rt_rating: '100%' });
    expect(resp.status).toEqual(200);
    expect(resp.body.imdb_rating).toEqual(10);
    expect(resp.body.rt_rating).toEqual('100%');
  });

  it('DELETE /tv-series/:id should delete a TV Series', async () => {
    const resp1 = await request(app).delete('/tv-series/1');
    expect(resp1.status).toEqual(200);
    const resp2 = await request(app).get('/tv-series/1');
    expect(resp2.body).toEqual('');
  });

  afterAll(() => {
    pool.end();
  });
});
