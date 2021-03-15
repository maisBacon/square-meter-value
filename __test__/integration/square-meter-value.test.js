/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app/main');

describe('API', () => {
  test('get value in db and return 10', async () => {
    await request(app).post('/value').send({ value: 100 });
    const response = await request(app).get('/').send();
    expect(response.body).toStrictEqual({ value: '100' });
  });
});
