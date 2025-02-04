import pool from '../database/db.js';

export default class Room {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Room');
        return rows;
    }
}
