import express from 'express';
import { register, login } from '../controllers/authController.js';
import { verifyToken, requireSuperAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Contoh Test Protected Route (Hanya bisa diakses kalau punya token)
router.get('/me', (req, res) => {
    res.status(200).json({ success: true, user: { role: 'superadmin', full_name: 'KyyCaa' } });
});

export default router;