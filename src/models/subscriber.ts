import { QueryConfig } from 'pg';
import { getPool } from '../db/db';
import { Subscriber as SubscriberType } from '../types';

export class Subscriber {
  static async findAll(name: string | undefined) {
    if (name) {
      const result = await getPool().query({
        name: 'all-subs', // to cache the query
        text: 'SELECT * FROM subscriber WHERE name ILIKE $1',
        values: [name],
      });
      return result.rows;
    }

    const result = await getPool().query('SELECT * FROM subscriber LIMIT 100');
    return result.rows;
  }

  static async findById(id: string) {
    const query: QueryConfig = {
      text: `SELECT * FROM subscriber WHERE id = $1`,
      values: [id],
    };

    const result = await getPool().query(query);
    return result.rows;
  }

  static async create(newSubscriber: SubscriberType) {}
}
