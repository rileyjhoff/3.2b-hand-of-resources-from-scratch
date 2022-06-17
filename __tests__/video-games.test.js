const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /video-games should return a list of video games', async () => {
    const resp = await request(app).get('/video-games');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        title: 'FIFA 22',
        genre: ['Sports'],
        is_free: false,
        active_players: '108,168',
      },
      {
        id: 2,
        title: 'APEX Legends',
        genre: ['FPS', 'Battle Royale'],
        is_free: true,
        active_players: '360,428',
      },
      {
        id: 3,
        title: 'Lost Ark',
        genre: ['MMORPG', 'Action', 'Fantasy'],
        is_free: true,
        active_players: '885,379',
      },
      {
        id: 4,
        title: 'Dota 2',
        genre: ['Multiplayer Online Battle Arena', 'Strategy'],
        is_free: true,
        active_players: '695,841',
      },
    ]);
  });

  it('GET /video-games/:id should return video game detail', async () => {
    const resp = await request(app).get('/video-games/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: 1,
      title: 'FIFA 22',
      genre: ['Sports'],
      is_free: false,
      active_players: '108,168',
    });
  });

  it('POST /video-games should add a video game', async () => {
    const resp = await request(app)
      .post('/video-games')
      .send({
        title: 'Destiny 2',
        genre: ['Open World', 'FPS'],
        is_free: true,
        active_players: '178,829',
      });
    expect(resp.status).toEqual(200);
    expect(resp.body.id).not.toBeUndefined();
    expect(resp.body.title).toEqual('Destiny 2');
    expect(resp.body.genre).toEqual(['Open World', 'FPS']);
    expect(resp.body.is_free).toEqual(true);
    expect(resp.body.active_players).toEqual('178,829');
  });

  it('PUT /video-games/:id should update a video game', async () => {
    const resp = await request(app)
      .put('/video-games/3')
      .send({ is_free: false, active_players: '1,000,000' });
    expect(resp.status).toEqual(200);
    expect(resp.body.is_free).toEqual(false);
    expect(resp.body.active_players).toEqual('1,000,000');
  });

  it('DELETE /video-games/:id should delete a video game', async () => {
    const resp1 = await request(app).delete('/video-games/1');
    expect(resp1.status).toEqual(200);
    const resp2 = await request(app).get('/video-games/1');
    expect(resp2.body).toEqual('');
  });

  afterAll(() => {
    pool.end();
  });
});
