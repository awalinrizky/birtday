import express from 'express';
import { getLetters, createLetter } from '../controllers/letterController.js';

const router = express.Router();
router.get('/', getLetters);
router.post('/', createLetter);

export default router;