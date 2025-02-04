import express from 'express';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import guestBookRoutes from './routes/guestBookRoutes.js';
import roomRoutes from './routes/roomRoutes.js';

// Menggunakan dotenv untuk mengelola variabel lingkungan
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Mengatur view engine untuk EJS
app.set('view engine', 'ejs');

// Middleware untuk menyajikan file statis (misalnya gambar, CSS, dll)
app.use(express.static('public'));

// Middleware untuk parsing URL encoded (untuk menangani data form)
app.use(express.urlencoded({ extended: true }));

// Middleware untuk mendukung method PUT dan DELETE dalam form HTML
app.use(methodOverride('_method'));

// Halaman utama akan mengarah ke '/guestbook'
app.get('/', (req, res) => {
    res.redirect('/guestbook');
});

// Routing untuk guestbook dan rooms
app.use('/guestbook', guestBookRoutes);
app.use('/rooms', roomRoutes);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
