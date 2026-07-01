import express from 'express';
import { getGallery, createGallery, deleteGallery } from '../controllers/galleryController.js';

const router = express.Router();

router.get('/', getGallery);
router.post('/', createGallery);
router.delete('/:id', deleteGallery);

export default router;