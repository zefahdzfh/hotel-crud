import express from 'express';
import dotenv from 'dotenv';
import guestBookRoutes from './routes/guestBookRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import methodOverride from 'method-override';

// Menggunakan dotenv untuk mengelola variabel lingkungan
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Mengatur view engine untuk EJS
app.set('view engine', 'ejs');

// Middleware untuk method override
app.use(methodOverride('_method'));

// Middleware untuk menyajikan file statis (misalnya gambar, CSS, dll)
app.use(express.static('public'));

// Middleware untuk parsing URL encoded (untuk menangani data form)
app.use(express.urlencoded({ extended: true }));

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
