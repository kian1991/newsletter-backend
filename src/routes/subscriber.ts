import { Hono } from 'hono';
import { Subscriber } from '../models/subscriber';

export const subscriber = new Hono();

subscriber.get('/', async (c) => {
  const subscribers = await Subscriber.findAll();

  return c.json(
    {
      data: subscribers,
    },
    200
  );
});
subscriber.get('/:id', async (c) => {
  const { id } = c.req.param();

  try {
    const subscribers = await Subscriber.findById(id);
    return c.json(
      {
        data: subscribers,
      },
      200
    );
  } catch (error) {}
});
