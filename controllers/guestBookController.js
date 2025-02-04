import GuestBook from '../models/GuestBook.js';
import pool from '../database/db.js';  // Pastikan pool sudah di-import

const GuestBookController = {
    index: async (req, res) => {
        try {
            const guests = await GuestBook.getAll();
            res.render('guestBook/index', { guests });
        } catch (error) {
            res.status(500).send('Terjadi kesalahan pada server.');
        }
    },

    create: async (req, res) => {
        try {
            // Ambil semua kamar dari database
            const [rooms] = await pool.query('SELECT * FROM Room');
            // Kirim data kamar ke halaman create.ejs
            res.render('guestBook/create', { rooms });
        } catch (error) {
            res.status(500).send('Terjadi kesalahan mengambil data kamar.');
        }
    },

    store: async (req, res) => {
        try {
            await GuestBook.create(req.body);
            res.redirect('/guestbook');  // Setelah berhasil, redirect ke halaman guestbook
        } catch (error) {
            res.status(500).send('Gagal menyimpan data tamu.');  // Menampilkan error jika gagal
        }
    },

    edit: async (req, res) => {
        try {
            const guest = await GuestBook.getById(req.params.id);
            res.render('guestBook/edit', { guest });
        } catch (error) {
            res.status(500).send('Gagal menemukan data tamu.');
        }
    },

    update: async (req, res) => {
        try {
            const { NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, CheckOutTime, Notes } = req.body;
            await GuestBook.update(req.params.id, { NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, CheckOutTime, Notes });
            res.redirect('/guestbook');  // Redirect ke guestbook setelah update
        } catch (error) {
            res.status(500).send('Gagal memperbarui data tamu.');
        }
    },

    remove: async (req, res) => {
        try {
            await GuestBook.remove(req.params.id);
            res.redirect('/guestbook');  // Redirect setelah data dihapus
        } catch (error) {
            res.status(500).send('Gagal menghapus data tamu.');
        }
    }
};

export { GuestBookController };
