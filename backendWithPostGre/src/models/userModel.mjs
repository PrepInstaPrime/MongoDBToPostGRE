import { pool } from '../database/connection.mjs';
const userModel = {
    async createUser(data) {
        try {
            const { name, email, password } = data;
            const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`;
            const result = await pool.query(query, [name, email, password]);
            return result.rows[0];
        } catch (error) {
            console.error('Error creating user', error);
            throw error;
        }
    },
    async getUsers() {
        try {
            const query = `SELECT * FROM users`;
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error getting users', error);
            throw error;
        }
    }
}
export default userModel;