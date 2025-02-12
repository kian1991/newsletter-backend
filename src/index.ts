import { Hono } from 'hono';
import { subscriber } from './routes/subscriber';
import { ap } from '@faker-js/faker/dist/airline-D6ksJFwG';

const app = new Hono();

// connect routes
app.route('/subscriber', subscriber);

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default {
  fetch: app.fetch,
  port: 8080,
};
