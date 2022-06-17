const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /pets should return a list of pets', async () => {
    const resp = await request(app).get('/pets');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        name: 'Halle',
        age: 2,
        type: 'dog',
      },
      {
        id: 2,
        name: 'Frankie',
        age: 1,
        type: 'dog',
      },
      {
        id: 3,
        name: 'Winston',
        age: 14,
        type: 'cat',
      },
      {
        id: 4,
        name: 'Otter',
        age: 0,
        type: 'cat',
      },
    ]);
  });

  it('GET /pets/:id should return pet detail', async () => {
    const resp = await request(app).get('/pets/4');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: 4,
      name: 'Otter',
      age: 0,
      type: 'cat',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
