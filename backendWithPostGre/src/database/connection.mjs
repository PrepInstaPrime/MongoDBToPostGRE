import pkg from 'pg';
const { Pool } = pkg;
import { PostgreSQL_URI } from '../../config.mjs';
const pool = new Pool({
    connectionString: PostgreSQL_URI,
});
pool.on('connect', () => {
    console.log('Connected to PostgreSQL');
});
pool.on('error', (err) => {
    console.error('Error connecting to PostgreSQL', err);
});
export { pool };