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

  it('POST /pets should add a pet', async () => {
    const resp = await request(app).post('/pets').send({
      name: 'Pip',
      age: 3,
      type: 'cat',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.id).not.toBeUndefined();
    expect(resp.body.name).toEqual('Pip');
    expect(resp.body.age).toEqual(3);
    expect(resp.body.type).toEqual('cat');
  });

  it('PUT /pets/:id should update a pet', async () => {
    const resp = await request(app).put('/pets/4').send({ age: 1 });
    expect(resp.status).toEqual(200);
    expect(resp.body.age).toEqual(1);
  });

  it('DELETE /pets/:id should delete a pet', async () => {
    const resp1 = await request(app).delete('/pets/2');
    expect(resp1.status).toEqual(200);
    const resp2 = await request(app).get('/pets/2');
    expect(resp2.body).toEqual('');
  });

  afterAll(() => {
    pool.end();
  });
});
