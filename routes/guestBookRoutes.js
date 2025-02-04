import express from 'express';
import { GuestBookController } from '../controllers/guestBookController.js';

const router = express.Router();

// Route untuk menampilkan semua tamu
router.get('/', GuestBookController.index);

// Route untuk menampilkan form tambah tamu
router.get('/create', GuestBookController.create);

// Route untuk menyimpan data tamu baru
router.post('/store', GuestBookController.store);

// Route untuk menampilkan form edit tamu berdasarkan ID
router.get('/edit/:id', GuestBookController.edit);

// Route untuk memperbarui data tamu berdasarkan ID
// Pastikan menggunakan PUT atau POST yang sesuai dengan kebutuhan
router.put('/update/:id', GuestBookController.update);

// Route untuk menghapus tamu berdasarkan ID
// Pastikan Anda menangani DELETE dengan benar di controller
router.delete('/delete/:id', GuestBookController.remove);

export default router;
