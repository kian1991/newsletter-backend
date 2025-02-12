import { Hono } from 'hono';
import { subscriber } from './routes/subscriber';
import { serve } from '@hono/node-server';

const app = new Hono();

// connect routes
app.route('/subscriber', subscriber);

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

serve({
  fetch: app.fetch,
  port: 8080,
});

export default app;
