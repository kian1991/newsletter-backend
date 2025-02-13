import { Hono } from 'hono';
import { Subscriber } from '../models/subscriber';

export const subscriber = new Hono();

subscriber.get('/', async (c) => {
  const { name } = c.req.query(); // kann string sein oder nicht defined

  const subscribers = await Subscriber.findAll(name); // nimmt undefined entgegen oder string

  return c.json({
    data: subscribers,
  });
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
