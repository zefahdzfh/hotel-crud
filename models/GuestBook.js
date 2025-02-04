import pool from '../database/db.js';

export default class GuestBook {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM GuestBook');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM GuestBook WHERE GuestBookID = ?', [id]);
        return rows[0];
    }

    static async update(id, data) {
        const { NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, CheckOutTime, Notes } = data;
        await pool.query(
            `UPDATE GuestBook SET NamaTamu = ?, EmailTamu = ?, PhoneTamu = ?, RoomID = ?, CheckInTime = ?, CheckOutTime = ?, Notes = ? WHERE GuestBookID = ?`,
            [NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, CheckOutTime, Notes, id]
        );
    }

    static async remove(id) {
        await pool.query('DELETE FROM GuestBook WHERE GuestBookID = ?', [id]);
    }

    static async create(data) {
        const { NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, CheckOutTime, Notes } = data;
        
        // Periksa apakah RoomID ada dalam tabel Room
        const [roomExists] = await pool.query('SELECT * FROM Room WHERE RoomID = ?', [RoomID]);

        if (roomExists.length === 0) {
            // Lempar error jika RoomID tidak ditemukan
            throw new Error('RoomID tidak valid, pastikan kamar tersedia.');
        }

        try {
            // Menyimpan data tamu ke dalam tabel GuestBook
            const [result] = await pool.query(
                `INSERT INTO GuestBook (NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, CheckOutTime, Notes) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, CheckOutTime, Notes]
            );
            // Mengembalikan ID tamu yang baru disimpan
            return result.insertId;
        } catch (error) {
            console.error('Error saving guest:', error);
            // Mengirim error jika ada masalah saat menyimpan data
            throw new Error('Gagal menyimpan data tamu.');
        }
    }
}
