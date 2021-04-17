const app = require('../../src/app');
const request = require('supertest');

it('should send a unix-like timestamp parameter, receive a HTTP status code 200 and a valid object', async () => {
  const UNIX_TIMESTAMP = 1451001600000;

  const response = await request(app).get(`/api/v1/${UNIX_TIMESTAMP}`);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('unix', 1451001600000);
  expect(response.body).toHaveProperty('utc', 'Fri, 25 Dec 2015 00:00:00 GMT');
});

it('should send a Year-Month-Day time format parameter, receive a HTTP status code 200 and a valid object', async () => {
  const TIME = '2015-12-25';

  const response = await request(app).get(`/api/v1/${TIME}`);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('unix', 1451001600000);
  expect(response.body).toHaveProperty('utc', 'Fri, 25 Dec 2015 00:00:00 GMT');
});

it('should send an invalid time parameter, receive a HTTP status of 400, and a valid object', async () => {
  const INVALID_DATE = '112R-31-F2';

  const response = await request(app).get(`/api/v1/${INVALID_DATE}`);

  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty('unix', 'Invalid Date');
  expect(response.body).toHaveProperty('utc', 'Invalid Date');
});
