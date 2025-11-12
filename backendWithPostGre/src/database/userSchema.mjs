import { pool } from './connection.mjs';
const userSchema ={
    name:"users",
    create: `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`,
 drop: `
    DROP TABLE IF EXISTS users
 `
};
const initializeUserTable = async () => {
    try {
        await pool.query(userSchema.create);
        console.log('User table initialized successfully');
    } catch (error) {
        console.error('Error initializing user table', error);
        throw error; // Re-throw to allow caller to handle
    }
};
export { userSchema, initializeUserTable };