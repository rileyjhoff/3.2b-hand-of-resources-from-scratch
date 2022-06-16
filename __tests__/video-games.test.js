const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /video-games should return a list of Video Games', async () => {
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

  afterAll(() => {
    pool.end();
  });
});
