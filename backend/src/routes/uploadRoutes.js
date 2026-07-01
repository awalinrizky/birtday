import express from 'express';
import { uploadImage } from '../controllers/uploadController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

// Route ini wajib pakai Token, dan menggunakan middleware multer untuk menangkap form-data 'image'
router.post('/', verifyToken, upload.single('image'), uploadImage);

export default router;