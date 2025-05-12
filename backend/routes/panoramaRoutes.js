
import express from 'express';
import { getPanorama, getPanoramaImage, getPanoramaHotspots } from '../controllers/panoramaController.js';

const router = express.Router();

// Route pour récupérer un panorama spécifique par ID
router.get('/panoramas/:id', getPanorama);

// Route pour récupérer l’image d’un panorama
router.get('/panoramas/:id/image', getPanoramaImage);

// Route pour récupérer les hotspots associés à un panorama
router.get('/panoramas/:id/hotspots', getPanoramaHotspots);

export default router;
