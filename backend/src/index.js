import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import timelineRoutes from './routes/timelineRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import letterRoutes from './routes/letterRoutes.js';
dotenv.config();

const app = express();

// Security & Utility Middlewares
app.use(helmet()); // Mengamankan header HTTP (Sesuai request lo di Security rules)
app.use(cors()); // Mengizinkan frontend untuk mengakses backend API
app.use(express.json()); // Mem-parsing JSON payload
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Backend for Our Little Place is running smoothly! 🚀' 
  });
});

// Nanti Route lainnya (Auth, Gallery, dll) akan masuk di sini
// ==========================================
// DAFTAR ROUTES UTAMA KITA MASUKKAN DI SINI
// ==========================================
app.use('/api/auth', authRoutes); // BARU DI TAMBAHKAN
app.use('/api/timelines', timelineRoutes); // BARU DITAMBAHKAN
app.use('/api/gallery', galleryRoutes);   // BARU DITAMBAHKAN
app.use('/api/upload', uploadRoutes); // BARU DITAMBAHKAN
app.use('/api/letters', letterRoutes);


// Global Error Handler (Harus di bagian paling bawah)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});