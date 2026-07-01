import express from 'express';
import { getTimelines, createTimeline, deleteTimeline } from '../controllers/timelineController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// GET data bisa diakses public (Guest) tanpa token
router.get('/', getTimelines);

// POST & DELETE wajib memiliki token login (Partner/Superadmin)
router.post('/', verifyToken, createTimeline);
router.delete('/:id', verifyToken, deleteTimeline);

export default router;