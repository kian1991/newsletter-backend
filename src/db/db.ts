import { Client, Pool } from 'pg';

let client: null | Client = null;
let pool: null | Pool = null;

export function getClient() {
  if (client) {
    return client;
  }
  client = new Client();
  return client;
}

export function getPool() {
  if (pool) {
    return pool;
  }
  pool = new Pool();
  return pool;
}
