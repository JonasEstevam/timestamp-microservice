const app = require('../../src/app');
const request = require('supertest');

it('should return status 200 and a valid object', async () => {
  const response = await request(app).get('/api/v1/');

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('unix');
  expect(response.body).toHaveProperty('utc');
});
